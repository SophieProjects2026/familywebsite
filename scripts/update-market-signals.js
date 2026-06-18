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
    whyWeWatchIt: "The unemployment rate helps the family discuss labor-market strength and possible recession ri
