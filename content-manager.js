const topicOptions = [
  ["violin", "Violin"],
  ["science", "Science"],
  ["coding-technology", "Coding & Technology"],
  ["writing-grammar", "Writing & Grammar"],
  ["golf", "Golf"],
  ["tennis", "Tennis"],
  ["math", "Math"],
  ["chinese", "Chinese"],
  ["meditation", "Meditation"],
  ["audio-books", "Audio Books"],
  ["fitness", "Fitness"],
  ["gardening", "Gardening"],
  ["farming", "Farming"],
  ["photography", "Photography"],
  ["women-who-inspire-me", "Women Who Inspire Me"],
  ["lifestyle-aesthetics", "Lifestyle & Aesthetics"],
  ["philosophical-reflections", "Philosophical Reflections"],
  ["news", "News"],
  ["retirement", "Retirement"],
  ["investing", "Investing"],
  ["financial-planning", "Financial Planning"],
  ["favorite-articles", "Favorite Articles"],
  ["family-financial-dashboard", "Family Financial Dashboard"],
  ["books-we-love", "Books We Love"],
  ["family-photos", "Family Photos"],
  ["travel-memories", "Travel Memories"],
  ["quotes", "Quotes"],
  ["family-traditions", "Family Traditions"],
  ["favorite-recipes", "Favorite Recipes"],
  ["annual-goals", "Annual Goals"],
  ["family-story-timeline", "Our Family Story Timeline"]
];

const contentData = {
  topics: {}
};

const topicSelect = document.querySelector("#topic-select");
const contentType = document.querySelector("#content-type");
const contentTitle = document.querySelector("#content-title");
const contentUrl = document.querySelector("#content-url");
const contentCaption = document.querySelector("#content-caption");
const contentNote = document.querySelector("#content-note");
const contentForm = document.querySelector("#content-form");
const preview = document.querySelector("#manager-preview");
const loadJsonButton = document.querySelector("#load-json");
const saveJsonButton = document.querySelector("#save-json");
const updateAppButton = document.querySelector("#update-app");

topicSelect.innerHTML = topicOptions
  .map(([id, label]) => `<option value="${id}">${label}</option>`)
  .join("");

contentType.addEventListener("change", updateFieldVisibility);
contentForm.addEventListener("submit", addContent);
loadJsonButton.addEventListener("click", loadJson);
saveJsonButton.addEventListener("click", saveJson);
updateAppButton.addEventListener("click", updateAppJs);

updateFieldVisibility();
renderPreview();

function addContent(event) {
  event.preventDefault();

  const topicId = topicSelect.value;
  const type = contentType.value;
  const topic = ensureTopic(topicId);

  if (type === "notes") {
    const note = contentNote.value.trim();
    if (!note) return;
    topic.notes.push(note);
  } else if (type === "photos") {
    const title = contentTitle.value.trim() || "Family photo";
    const url = contentUrl.value.trim();
    const caption = contentCaption.value.trim();
    if (!url) return;
    topic.photos.push({ title, url, caption });
  } else {
    const title = contentTitle.value.trim() || "Family resource";
    const url = contentUrl.value.trim();
    if (!url) return;
    topic[type].push({ title, url });
  }

  topic.lastUpdated = new Date().toISOString().slice(0, 10);
  contentForm.reset();
  updateFieldVisibility();
  renderPreview();
}

function ensureTopic(topicId) {
  if (!contentData.topics[topicId]) {
    contentData.topics[topicId] = {
      videos: [],
      rednotePosts: [],
      photos: [],
      notes: [],
      lastUpdated: ""
    };
  }

  return contentData.topics[topicId];
}

function updateFieldVisibility() {
  const type = contentType.value;
  document.querySelector(".title-field").classList.toggle("is-hidden", type === "notes");
  document.querySelector(".url-field").classList.toggle("is-hidden", type === "notes");
  document.querySelector(".caption-field").classList.toggle("is-hidden", type !== "photos");
  document.querySelector(".note-field").classList.toggle("is-hidden", type !== "notes");
}

function renderPreview() {
  const items = [];

  Object.entries(contentData.topics).forEach(([topicId, topic]) => {
    const topicName = getTopicName(topicId);
    ["videos", "rednotePosts", "photos", "notes"].forEach((key) => {
      topic[key].forEach((item) => {
        const label = typeof item === "string" ? item : item.title;
        items.push({ topicName, key, label });
      });
    });
  });

  if (items.length === 0) {
    preview.innerHTML = `<p class="placeholder-label">No saved items yet.</p>`;
    return;
  }

  preview.innerHTML = items
    .map((item) => {
      return `
        <article class="preview-item">
          <strong>${item.label}</strong>
          <small>${item.topicName} - ${getTypeLabel(item.key)}</small>
        </article>
      `;
    })
    .join("");
}

async function loadJson() {
  if (!window.showOpenFilePicker) {
    alert("This browser cannot load files directly. Try Chrome or Edge for the easiest editing experience.");
    return;
  }

  const [handle] = await window.showOpenFilePicker({
    types: [{ description: "JSON files", accept: { "application/json": [".json"] } }]
  });
  const file = await handle.getFile();
  const loaded = JSON.parse(await file.text());

  contentData.topics = loaded.topics || {};
  renderPreview();
}

async function saveJson() {
  const text = JSON.stringify(contentData, null, 2);

  if (!window.showSaveFilePicker) {
    downloadFile("family-content.json", text, "application/json");
    return;
  }

  const handle = await window.showSaveFilePicker({
    suggestedName: "family-content.json",
    types: [{ description: "JSON files", accept: { "application/json": [".json"] } }]
  });
  const writable = await handle.createWritable();
  await writable.write(text);
  await writable.close();
  alert("JSON saved.");
}

async function updateAppJs() {
  if (!window.showOpenFilePicker) {
    alert("This browser cannot update app.js directly. Try Chrome or Edge.");
    return;
  }

  const [handle] = await window.showOpenFilePicker({
    types: [{ description: "JavaScript files", accept: { "text/javascript": [".js"] } }]
  });
  const file = await handle.getFile();
  const currentText = await file.text();
  const updatedText = replaceManagedContent(currentText);
  const writable = await handle.createWritable();
  await writable.write(updatedText);
  await writable.close();
  alert("Website updated. Open index.html or refresh the family website.");
}

function replaceManagedContent(appText) {
  const start = "// CONTENT_MANAGER_DATA_START";
  const end = "// CONTENT_MANAGER_DATA_END";
  const startIndex = appText.indexOf(start);
  const endIndex = appText.indexOf(end);

  if (startIndex === -1 || endIndex === -1) {
    throw new Error("Could not find the Content Manager block in app.js.");
  }

  const before = appText.slice(0, startIndex);
  const after = appText.slice(endIndex + end.length);
  const dataBlock = `${start}\nconst managedContent = ${JSON.stringify(contentData, null, 2)};\n${end}`;

  return before + dataBlock + after;
}

function downloadFile(filename, text, type) {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function getTopicName(topicId) {
  const topic = topicOptions.find(([id]) => id === topicId);
  return topic ? topic[1] : topicId;
}

function getTypeLabel(type) {
  const labels = {
    videos: "YouTube",
    rednotePosts: "RedNote",
    photos: "Photo",
    notes: "Note"
  };

  return labels[type] || type;
}
