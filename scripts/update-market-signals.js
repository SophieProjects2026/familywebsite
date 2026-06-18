const fs = require("fs");
const path = require("path");

const dataDir = path.join(__dirname, "..", "data");
const outputPath = path.join(dataDir, "market-signals.json");

fs.mkdirSync(dataDir, { recursive: true });

const payload = {
  generatedAt: new Date().toISOString(),
  phase: "Phase 1 test",
  educationalDisclaimer: "This dashboard is for family education and decision support. It does not provide automatic financial advice or account-specific recommendations.",
  actionSignal: {
    state: "Hold / Normal Zone",
    status: "Yellow",
    confidence: "Test",
    message: "Workflow test completed.",
    meaning: "Testing GitHub Actions script execution.",
    supportingIndicators: [],
    warningIndicators: [],
    lastUpdated: new Date().toISOString().slice(0, 10),
    notes: "Editable by K/Sophie."
  },
  indicators: [],
  errors: []
};

fs.writeFileSync(outputPath, JSON.stringify(payload, null, 2) + "\n");
console.log("Market signal workflow test succeeded.");
