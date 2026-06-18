const fs = require("fs");
const path = require("path");

// Phase 1 policy:
// Use FRED series only, with the official FRED API key from GitHub Secrets when
// available. Do not scrape fragile websites. If a source fails, show
// "Data unavailable", keep the previous value in previousValue, and log the
// error in the generated JSON and workflow output.

const rootDir = path.resolve(__dirname, "..");
const dataDir = path.join(rootDir, "data");
const marketSignalsPath = path.join(dataDir, "market-signals.json");
const generatedAt = new Date().toISOString();

const fredIndicators = [
  {
    id: "ten-year-treasury-yield",
    name: "10-Year Treasury Yield",
    group: "opportunityRadar",
    source: "FRED DGS10",
    sourceUrl: "https://fred.stlouisfed.org/series/DGS10",
    fredSeries: "DGS10",
    valueLabel: "percent",
    whyWeWatchIt: "The 10-year Treasury yield affects stock valuations, bond attractiveness, mortgage rates, and discount-rate discussions.",
    thresholds: {
      green: "Stable, falling, or below 4%",
      yellow: "Elevated but not rapidly rising",
      red: "Above 5% or up at least 1 percentage point in three months"
    },
    evaluate(value, history) {
      const prior = valueMonthsAgo(history, 3);
      if (prior && value - prior.value >= 1) return "Red";
      if (value < 4) return "Green";
      if (value <= 5) return "Yellow";
      return "Red";
    },
    message(status, value) {
      if (status === "Green") return `10-year yield is supportive or easing at ${formatValue(value)}%.`;
      if (status === "Red") return `10-year yield is restrictive or rising quickly at ${formatValue(value)}%.`;
      return `10-year yield is elevated but not in the red zone at ${formatValue(value)}%.`;
    }
  },
  {
    id: "yield-curve",
    name: "Yield Curve",
    group: "opportunityRadar",
    source: "FRED T10Y2Y",
    sourceUrl: "https://fred.stlouisfed.org/series/T10Y2Y",
    fredSeries: "T10Y2Y",
    valueLabel: "percentage points",
    whyWeWatchIt: "The 10-year minus 2-year Treasury spread is a common recession and cycle-risk indicator.",
    thresholds: {
      green: "Above 0.50 percentage points",
      yellow: "0 to 0.50 percentage points",
      red: "Below 0, inverted curve"
    },
    evaluate(value) {
      if (value > 0.5) return "Green";
      if (value >= 0) return "Yellow";
      return "Red";
    },
    message(status, value) {
      if (status === "Green") return `Yield curve is positively sloped at ${formatValue(value)} percentage points.`;
      if (status === "Red") return `Yield curve is inverted at ${formatValue(value)} percentage points.`;
      return `Yield curve is flat at ${formatValue(value)} percentage points.`;
    }
  },
  {
    id: "credit-spreads",
    name: "Credit Spreads",
    group: "opportunityRadar",
    source: "FRED BAA10Y",
    sourceUrl: "https://fred.stlouisfed.org/series/BAA10Y",
    fredSeries: "BAA10Y",
    valueLabel: "percentage points",
    whyWeWatchIt: "Credit spreads help show whether corporate bond markets are calm or signaling financial stress.",
    thresholds: {
      green: "Below 2 percentage points",
      yellow: "2 to 3 percentage points",
      red: "Above 3 percentage points"
    },
    evaluate(value) {
      if (value < 2) return "Green";
      if (value <= 3) return "Yellow";
      return "Red";
    },
    message(status, value) {
      if (status === "Green") return `Credit spreads are normal at ${formatValue(value)} percentage points.`;
      if (status === "Red") return `Credit spreads are sharply wide at ${formatValue(value)} percentage points.`;
      return `Credit spreads are moderately wide at ${formatValue(value)} percentage points.`;
    }
  },
  {
    id: "unemployment-rate",
    name: "Unemployment Rate",
    group: "opportunityRadar",
    source: "FRED UNRATE",
    sourceUrl: "https://fred.stlouisfed.org/series/UNRATE",
    fredSeries: "UNRATE",
    valueLabel: "percent",
    whyWeWatchIt: "The unemployment rate helps the family discuss labor-market strength and possible recession risk.",
    thresholds: {
      green: "Stable, up 0.2 percentage points or less over three months",
      yellow: "Up 0.2 to 0.5 percentage points over three months",
      red: "Up more than 0.5 percentage points over three months"
    },
    evaluate(value, history) {
      const prior = valueMonthsAgo(history, 3);
      if (!prior) return "Yellow";
      const change = value - prior.value;
      if (change <= 0.2) return "Green";
      if (change <= 0.5) return "Yellow";
      return "Red";
    },
    message(status, value) {
      if (status === "Green") return `Unemployment is stable at ${formatValue(value)}%.`;
      if (status === "Red") return `Unemployment is rising quickly, now at ${formatValue(value)}%.`;
      return `Unemployment is rising modestly, now at ${formatValue(value)}%.`;
    }
  },
  {
    id: "vix",
    name: "VIX",
    group: "opportunityRadar",
    source: "FRED VIXCLS / CBOE",
    sourceUrl: "https://fred.stlouisfed.org/series/VIXCLS",
    fredSeries: "VIXCLS",
    valueLabel: "index level",
    whyWeWatchIt: "VIX helps frame whether market fear is creating opportunity or whether calm conditions may signal complacency.",
    thresholds: {
      green: "Above 30, fear / possible opportunity",
      yellow: "20 to 30, elevated volatility",
      red: "Below 15, complacency"
    },
    evaluate(value) {
      if (value > 30) return "Green";
      if (value >= 20) return "Yellow";
      if (value < 15) return "Red";
      return "Yellow";
    },
    message(status, value) {
      if (status === "Green") return `VIX is high at ${formatValue(value)}, showing elevated fear.`;
      if (status === "Red") return `VIX is low at ${formatValue(value)}, suggesting possible complacency.`;
      return `VIX is moderate at ${formatValue(value)}.`;
    }
  },
  {
    id: "gold-oil-ratio",
    name: "Gold/Oil Ratio",
    group: "opportunityRadar",
    source: "FRED GOLDAMGBD228NLBM / DCOILWTICO",
    sourceUrl: "https://fred.stlouisfed.org/series/GOLDAMGBD228NLBM",
    dependsOn: ["GOLDAMGBD228NLBM", "DCOILWTICO"],
    valueLabel: "gold ounces per WTI barrel",
    whyWeWatchIt: "The gold/oil ratio can help discuss inflation, commodity stress, and relative real-asset pricing.",
    thresholds: {
      green: "Above 25",
      yellow: "15 to 25",
      red: "Below 15"
    },
    calculate(values) {
      return values.GOLDAMGBD228NLBM / values.DCOILWTICO;
    },
    evaluate(value) {
      if (value > 25) return "Green";
      if (value >= 15) return "Yellow";
      return "Red";
    },
    message(status, value) {
      if (status === "Green") return `Gold/Oil ratio is elevated at ${formatValue(value)}, suggesting oil is cheaper versus gold.`;
      if (status === "Red") return `Gold/Oil ratio is low at ${formatValue(value)}, suggesting oil is expensive versus gold.`;
      return `Gold/Oil ratio is normal at ${formatValue(value)}.`;
    }
  },
  {
    id: "gold-silver-ratio",
    name: "Gold/Silver Ratio",
    group: "opportunityRadar",
    source: "FRED GOLDAMGBD228NLBM / SLVPRUSD",
    sourceUrl: "https://fred.stlouisfed.org/series/SLVPRUSD",
    dependsOn: ["GOLDAMGBD228NLBM", "SLVPRUSD"],
    valueLabel: "gold ounces per silver ounce",
    whyWeWatchIt: "The gold/silver ratio can help discuss precious-metal sentiment and economic-cycle expectations.",
    thresholds: {
      green: "Above 85",
      yellow: "60 to 85",
      red: "Below 60"
    },
    calculate(values) {
      return values.GOLDAMGBD228NLBM / values.SLVPRUSD;
    },
    evaluate(value) {
      if (value > 85) return "Green";
      if (value >= 60) return "Yellow";
      return "Red";
    },
    message(status, value) {
      if (status === "Green") return `Gold/Silver ratio is elevated at ${formatValue(value)}, suggesting silver is cheap versus gold.`;
      if (status === "Red") return `Gold/Silver ratio is low at ${formatValue(value)}, suggesting silver is expensive versus gold.`;
      return `Gold/Silver ratio is normal at ${formatValue(value)}.`;
    }
  },
  {
    id: "dollar-index-proxy",
    name: "Dollar Index Proxy",
    group: "opportunityRadar",
    source: "FRED DTWEXBGS",
    sourceUrl: "https://fred.stlouisfed.org/series/DTWEXBGS",
    fredSeries: "DTWEXBGS",
    valueLabel: "index level",
    whyWeWatchIt: "A stronger dollar can affect commodities, international earnings, and global financial conditions.",
    thresholds: {
      green: "Stable or falling over three months",
      yellow: "Moderately rising over three months",
      red: "Rising more than 5% over three months"
    },
    evaluate(value, history) {
      const prior = valueMonthsAgo(history, 3);
      if (!prior) return "Yellow";
      const changePct = ((value - prior.value) / prior.value) * 100;
      if (changePct <= 0) return "Green";
      if (changePct <= 5) return "Yellow";
      return "Red";
    },
    message(status, value) {
      if (status === "Green") return `Dollar proxy is stable or easing at ${formatValue(value)}.`;
      if (status === "Red") return `Dollar proxy is rising sharply at ${formatValue(value)}.`;
      return `Dollar proxy is moderately firm at ${formatValue(value)}.`;
    }
  }
];

const phaseOneManualPlaceholders = [
  {
    id: "valuation-dashboard",
    name: "Valuation Dashboard",
    group: "valuation",
    status: "Manual",
    currentValue: "Phase 1 manual",
    latestValue: "Phase 1 manual",
    valueLabel: "",
    source: "Manual family review",
    sourceUrl: "",
    lastUpdated: generatedAt.slice(0, 10),
    whyWeWatchIt: "Phase 1 does not automate Buffett Indicator, Shiller CAPE, Forward P/E, or Equity Risk Premium yet.",
    alertMessage: "Valuation indicators are not automated in Phase 1.",
    isManual: true
  }
];

async function main() {
  fs.mkdirSync(dataDir, { recursive: true });

  const previous = readJson(marketSignalsPath, { indicators: [] });
  const previousById = new Map((previous.indicators || []).map((indicator) => [indicator.id, indicator]));
  const indicators = [];
  const seriesCache = new Map();
  const errors = [];

  for (const definition of fredIndicators) {
    indicators.push(await buildFredIndicator(definition, previousById.get(definition.id), seriesCache, errors));
  }

  indicators.push(...phaseOneManualPlaceholders.map((placeholder) => ({
    ...placeholder,
    notes: previousById.get(placeholder.id)?.notes || "Editable by K/Sophie."
  })));

  const actionSignal = buildActionSignal(indicators);
  const payload = {
    generatedAt,
    phase: "Phase 1",
    educationalDisclaimer: "This dashboard is for family education and decision support. It does not provide automatic financial advice or account-specific recommendations.",
    actionSignal,
    indicators,
    errors
  };

  fs.writeFileSync(marketSignalsPath, `${JSON.stringify(payload, null, 2)}\n`);
  console.log(`Updated ${indicators.length} Phase 1 market signals with ${errors.length} logged errors.`);
}

async function buildFredIndicator(definition, previous, seriesCache, errors) {
  const base = {
    id: definition.id,
    name: definition.name,
    group: definition.group,
    currentValue: null,
    latestValue: null,
    previousValue: previous?.currentValue || previous?.latestValue || null,
    valueLabel: definition.valueLabel,
    status: "Manual",
    source: definition.source,
    sourceUrl: definition.sourceUrl,
    lastUpdated: generatedAt.slice(0, 10),
    whyWeWatchIt: definition.whyWeWatchIt,
    thresholds: definition.thresholds,
    alertMessage: "Data unavailable",
    notes: previous?.notes || "Editable by K/Sophie.",
    isManual: false,
    fetchStatus: "pending"
  };

  try {
    const dependencyData = {};
    let latestDate = "";
    let history = [];

    if (definition.fredSeries) {
      history = await getSeries(definition.fredSeries, seriesCache);
      const latest = history[history.length - 1];
      dependencyData[definition.fredSeries] = latest.value;
      latestDate = latest.date;
    } else {
      for (const seriesId of definition.dependsOn) {
        const seriesHistory = await getSeries(seriesId, seriesCache);
        const latest = seriesHistory[seriesHistory.length - 1];
        dependencyData[seriesId] = latest.value;
        if (!latestDate || latest.date < latestDate) latestDate = latest.date;
      }
    }

    const value = definition.calculate ? definition.calculate(dependencyData) : dependencyData[definition.fredSeries];
    if (!Number.isFinite(value)) {
      throw new Error(`Calculated value is not finite for ${definition.id}`);
    }

    const status = definition.evaluate(value, history);
    return {
      ...base,
      currentValue: roundValue(value),
      latestValue: roundValue(value),
      status,
      lastUpdated: latestDate,
      alertMessage: definition.message(status, value),
      fetchStatus: "live"
    };
  } catch (error) {
    const loggedError = {
      id: definition.id,
      name: definition.name,
      message: error.message,
      loggedAt: generatedAt
    };
    errors.push(loggedError);
    console.error(`${definition.name}: ${error.message}`);

    return {
      ...base,
      currentValue: "Data unavailable",
      latestValue: "Data unavailable",
      previousValue: previous?.currentValue || previous?.latestValue || null,
      status: previous?.status || "Manual",
      lastUpdated: previous?.lastUpdated || previous?.dateUpdated || generatedAt.slice(0, 10),
      alertMessage: "Data unavailable",
      fetchStatus: "error",
      error: error.message
    };
  }
}

async function getSeries(seriesId, seriesCache) {
  if (!seriesCache.has(seriesId)) {
    seriesCache.set(seriesId, fetchFredSeries(seriesId));
  }

  return seriesCache.get(seriesId);
}

async function fetchFredSeries(seriesId) {
  if (process.env.FRED_API_KEY) {
    return fetchFredApiSeries(seriesId, process.env.FRED_API_KEY);
  }

  return fetchFredCsvSeries(seriesId);
}

async function fetchFredApiSeries(seriesId, apiKey) {
  const url = new URL("https://api.stlouisfed.org/fred/series/observations");
  url.searchParams.set("series_id", seriesId);
  url.searchParams.set("api_key", apiKey);
  url.searchParams.set("file_type", "json");
  url.searchParams.set("sort_order", "asc");

  const response = await fetch(url);
  if (!response.ok) throw new Error(`FRED API request failed for ${seriesId}: ${response.status}`);

  const data = await response.json();
  const points = (data.observations || [])
    .map((observation) => toPoint(observation.date, observation.value))
    .filter(Boolean);

  if (!points.length) throw new Error(`No usable FRED API values returned for ${seriesId}`);
  return points;
}

async function fetchFredCsvSeries(seriesId) {
  const url = `https://fred.stlouisfed.org/graph/fredgraph.csv?id=${encodeURIComponent(seriesId)}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`FRED CSV request failed for ${seriesId}: ${response.status}`);

  const csv = await response.text();
  const points = csv
    .trim()
    .split(/\r?\n/)
    .slice(1)
    .map((row) => {
      const [date, rawValue] = row.split(",");
      return toPoint(date, rawValue);
    })
    .filter(Boolean);

  if (!points.length) throw new Error(`No usable FRED CSV values returned for ${seriesId}`);
  return points;
}

function toPoint(date, rawValue) {
  const value = Number(rawValue);
  return Number.isFinite(value) ? { date, value } : null;
}

function valueMonthsAgo(history, months) {
  if (!history || history.length === 0) return null;

  const latest = history[history.length - 1];
  const targetDate = new Date(`${latest.date}T00:00:00Z`);
  targetDate.setUTCMonth(targetDate.getUTCMonth() - months);

  return [...history].reverse().find((point) => new Date(`${point.date}T00:00:00Z`) <= targetDate) || null;
}

function buildActionSignal(indicators) {
  const liveIndicators = indicators.filter((indicator) => indicator.fetchStatus === "live");
  const redCount = countStatus(liveIndicators, "Red");
  const greenCount = countStatus(liveIndicators, "Green");
  const warningIndicators = liveIndicators
    .filter((indicator) => indicator.status === "Red")
    .map((indicator) => `${indicator.name}: ${indicator.alertMessage}`);
  const supportingIndicators = liveIndicators
    .filter((indicator) => indicator.status === "Green")
    .map((indicator) => `${indicator.name}: ${indicator.alertMessage}`);

  let state = "Hold / Normal Zone";
  let status = "Yellow";
  let message = "Stay with regular plan.";
  let meaning = "Mixed or normal market conditions.";

  if (redCount >= 3) {
    state = "Defensive / Raise Cash Zone";
    status = "Red";
    message = "Consider defensive positioning.";
    meaning = "Multiple stress indicators are red.";
  } else if (redCount >= 1 && greenCount === 0) {
    state = "Caution / Reduce Risk Zone";
    status = "Red";
    message = "Review risk exposure.";
    meaning = "Some risk indicators are red without offsetting green signals.";
  } else if (greenCount >= 4 && redCount === 0) {
    state = "Buy / Accumulate Zone";
    status = "Green";
    message = "Consider gradual deployment.";
    meaning = "Several opportunity indicators are positive.";
  }

  return {
    state,
    status,
    confidence: liveIndicators.length >= 6 ? "Medium" : "Low",
    message,
    meaning,
    supportingIndicators,
    warningIndicators,
    lastUpdated: generatedAt.slice(0, 10),
    notes: "Editable by K/Sophie."
  };
}

function countStatus(indicators, status) {
  return indicators.filter((indicator) => indicator.status === status).length;
}

function readJson(filePath, fallback) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return fallback;
  }
}

function roundValue(value) {
  return Math.round(value * 100) / 100;
}

function formatValue(value) {
  return roundValue(value).toLocaleString("en-US", { maximumFractionDigits: 2 });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
