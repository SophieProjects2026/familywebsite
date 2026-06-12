const homeImages = {
  // Replace this file with your own main family photo:
  hero: "images/home-hero.jpg",

  // Replace these files with your own card photos:
  liam: "images/liam-card.jpg",
  sophie: "images/sophie-card.jpg",
  k: "images/k-card.jpg",
  familyLibrary: "images/family-library-card.jpg",

  // Replace these files with your own wide section header photos:
  liamHeader: "images/liam-header.jpg",
  sophieHeader: "images/sophie-header.jpg",
  kHeader: "images/k-header.jpg",
  familyLibraryHeader: "images/family-library-header.jpg",

  // This soft garden image appears if a topic photo is missing or still being prepared.
  defaultTopic: "images/topic-default.jpg"
};

const familyData = [
  {
    id: "liam",
    tabName: "Liam's Learning Garden",
    image: homeImages.liam,
    headerImage: homeImages.liamHeader,
    intro: "A bright learning garden for practice, curiosity, creativity, and favorite discoveries.",
    topics: [
      createTopic("violin", "Violin"),
      createTopic("science", "Science"),
      createTopic("coding-technology", "Coding & Technology"),
      createTopic("writing-grammar", "Writing & Grammar"),
      createTopic("golf", "Golf"),
      createTopic("tennis", "Tennis"),
      createTopic("math", "Math"),
      createTopic("chinese", "Chinese"),
      createTopic("meditation", "Meditation"),
      createTopic("audio-books", "Audio Books")
    ]
  },
  {
    id: "sophie",
    tabName: "Sophie's Garden",
    image: homeImages.sophie,
    headerImage: homeImages.sophieHeader,
    intro: "A gentle garden for care, beauty, nature, making, inspiration, and reflection.",
    topics: [
      createTopic("fitness", "Fitness"),
      createTopic("gardening", "Gardening"),
      createTopic("farming", "Farming"),
      createTopic("photography", "Photography"),
      createTopic("women-who-inspire-me", "Women Who Inspire Me"),
      createTopic("lifestyle-aesthetics", "Lifestyle & Aesthetics"),
      createTopic("philosophical-reflections", "Philosophical Reflections")
    ]
  },
  {
    id: "k",
    tabName: "K's Knowledge Center",
    image: homeImages.k,
    headerImage: homeImages.kHeader,
    intro: "A steady knowledge center for planning, research, financial learning, and wisdom.",
    privacyNote: "This section is for learning resources, articles, and long-term planning ideas only. We do not store private financial documents, account numbers, login information, or portfolio balances here.",
    topics: [
      createTopic("news", "News"),
      createTopic("retirement", "Retirement"),
      createTopic("investing", "Investing"),
      createTopic("financial-planning", "Financial Planning"),
      createTopic("favorite-articles", "Favorite Articles"),
      createTopic("family-financial-dashboard", "Family Financial Dashboard")
    ]
  },
  {
    id: "family-library",
    tabName: "Family Library",
    image: homeImages.familyLibrary,
    headerImage: homeImages.familyLibraryHeader,
    intro: "A shared family library for memories, photos, recipes, traditions, goals, and stories.",
    topics: [
      createTopic("books-we-love", "Books We Love"),
      createTopic("family-photos", "Family Photos"),
      createTopic("travel-memories", "Travel Memories"),
      createTopic("quotes", "Quotes"),
      createTopic("family-traditions", "Family Traditions"),
      createTopic("favorite-recipes", "Favorite Recipes"),
      createTopic("annual-goals", "Annual Goals"),
      createTopic("family-story-timeline", "Our Family Story Timeline", {
        description: "A living timeline of meaningful family milestones, memories, and turning points.",
        timeline: [
          { year: "2013", text: "Sophie and K married" },
          { year: "2017", text: "Liam was born" },
          { year: "2022", text: "Liam started violin" },
          { year: "2026", text: "Sophie was promoted to Full Professor" },
          { year: "2026", text: "The D and L Family Website was launched" }
        ],
        notes: [
          "Add future milestones here as the family story keeps growing."
        ]
      })
    ]
  }
];

// CONTENT_MANAGER_DATA_START
const managedContent = {
  "topics": {}
};
// CONTENT_MANAGER_DATA_END

function createTopic(id, title, customData = {}) {
  return {
    id,
    title,
    description: `Plant a short description for ${title} here.`,
    lastUpdated: "",

    // Add an image for this topic card and topic page banner.
    // The default path is based on the topic id.
    // Example:
    // image: "images/topics/violin.jpg"
    image: `images/topics/${id}.jpg`,

    // Add YouTube links here later.
    // You can paste normal YouTube watch links, share links, or embed links.
    // Example:
    // videos: [{ title: "Favorite lesson", url: "https://www.youtube.com/watch?v=..." }]
    videos: [
      { title: "Video space", url: "" },
      { title: "Video space", url: "" }
    ],

    // Add RedNote / Xiaohongshu post links here later.
    // Example:
    // rednotePosts: [{ title: "Helpful RedNote post", url: "https://www.xiaohongshu.com/..." }]
    rednotePosts: [
      { title: "RedNote post space", url: "" }
    ],

    // Add PDF files or PDF links here later.
    // Example:
    // pdfs: [{ title: "Practice notes PDF", url: "files/practice-notes.pdf" }]
    pdfs: [
      { title: "PDF space", url: "" }
    ],

    // Add photo gallery images here later.
    // Example:
    // photos: [
    //   { title: "Garden photo", url: "images/topics/gardening.jpg", caption: "Spring planting" },
    //   { title: "Family walk", url: "images/topics/travel-memories.jpg", caption: "A favorite afternoon" }
    // ]
    photos: [
      { title: "Photo space", url: "", caption: "" }
    ],

    // Add helpful external links here later.
    // Example:
    // links: [{ title: "Helpful article", url: "https://example.com" }]
    links: [
      { title: "Helpful link space", url: "" }
    ],

    // Add personal notes here later.
    notes: [
      "This page is ready for favorite resources, observations, and family notes.",
      "Add new thoughts here as this topic grows."
    ],

    // Add timeline entries only for timeline-style topics.
    // Example:
    // timeline: [{ year: "2030", text: "A new family milestone" }]
    timeline: [],

    ...customData
  };
}

applyManagedContent(familyData, managedContent);

function applyManagedContent(families, content) {
  if (!content || !content.topics) return;

  families.forEach((family) => {
    family.topics.forEach((topic) => {
      const savedTopic = content.topics[topic.id];

      if (!savedTopic) return;

      mergeManagedList(topic, savedTopic, "videos");
      mergeManagedList(topic, savedTopic, "rednotePosts");
      mergeManagedList(topic, savedTopic, "photos");
      mergeManagedList(topic, savedTopic, "notes");

      if (savedTopic.lastUpdated) {
        topic.lastUpdated = savedTopic.lastUpdated;
      }
    });
  });
}

function mergeManagedList(topic, savedTopic, key) {
  if (Array.isArray(savedTopic[key]) && savedTopic[key].length > 0) {
    topic[key] = savedTopic[key];
  }
}

const tabsEl = document.querySelector("#family-tabs");
const homeHeroPhotoEl = document.querySelector("#home-hero-photo");
const sectionBannerPhotoEl = document.querySelector("#section-banner-photo");
const sectionBannerTitleEl = document.querySelector("#section-banner-title");
const sectionBannerIntroEl = document.querySelector("#section-banner-intro");
const sectionBannerNoteEl = document.querySelector("#section-banner-note");
const topicGridEl = document.querySelector("#topic-grid");
const detailEl = document.querySelector("#topic-detail");
const backButtonEl = document.querySelector("#back-button");
const detailOwnerEl = document.querySelector("#detail-owner");
const topicDetailHeroEl = document.querySelector("#topic-detail-hero");
const detailTitleEl = document.querySelector("#detail-title");
const detailUpdatedEl = document.querySelector("#detail-updated");
const detailDescriptionEl = document.querySelector("#detail-description");
const videoListEl = document.querySelector("#video-list");
const rednoteListEl = document.querySelector("#rednote-list");
const pdfListEl = document.querySelector("#pdf-list");
const photoListEl = document.querySelector("#photo-list");
const linkListEl = document.querySelector("#link-list");
const notesListEl = document.querySelector("#notes-list");
const timelineSectionEl = document.querySelector("#timeline-section");
const timelineListEl = document.querySelector("#timeline-list");

let activeFamilyId = familyData[0].id;

function renderTabs() {
  tabsEl.innerHTML = familyData
    .map((family) => {
      const isActive = family.id === activeFamilyId;

      return `
        <button
          class="tab-button ${isActive ? "active" : ""}"
          style="background-image: ${backgroundWithImages("linear-gradient(180deg, rgba(47, 38, 28, 0.12), rgba(47, 38, 28, 0.68))", family.image, homeImages.defaultTopic)}"
          type="button"
          role="tab"
          aria-selected="${isActive}"
          data-family-id="${family.id}"
        >
          <strong>${family.tabName}</strong>
          <small>${family.intro}</small>
        </button>
      `;
    })
    .join("");
}

function renderTopics() {
  const family = getActiveFamily();

  sectionBannerPhotoEl.style.backgroundImage = backgroundWithImages(
    "linear-gradient(180deg, rgba(47, 38, 28, 0.04), rgba(47, 38, 28, 0.38))",
    family.headerImage,
    family.image,
    homeImages.defaultTopic
  );
  sectionBannerTitleEl.textContent = family.tabName;
  sectionBannerIntroEl.textContent = family.intro;
  sectionBannerNoteEl.textContent = family.privacyNote || "";
  sectionBannerNoteEl.hidden = !family.privacyNote;

  topicGridEl.classList.remove("is-fading");
  void topicGridEl.offsetWidth;
  topicGridEl.classList.add("is-fading");

  topicGridEl.innerHTML = family.topics
    .map((topic) => {
      return `
        <button class="topic-card" type="button" data-topic-id="${topic.id}">
          <span class="topic-thumb" style="background-image: ${backgroundWithImages("linear-gradient(135deg, rgba(109, 138, 95, 0.2), rgba(229, 184, 95, 0.16))", topic.image, homeImages.defaultTopic)}"></span>
          <span class="topic-copy">
            <h3>${topic.title}</h3>
            <p>${topic.description}</p>
          </span>
        </button>
      `;
    })
    .join("");
}

function openTopic(topicId) {
  const family = getActiveFamily();
  const topic = family.topics.find((item) => item.id === topicId);

  if (!topic) return;

  detailOwnerEl.textContent = family.tabName;
  topicDetailHeroEl.style.backgroundImage = backgroundWithImages(
    "linear-gradient(180deg, rgba(47, 38, 28, 0.04), rgba(47, 38, 28, 0.42))",
    topic.image,
    homeImages.defaultTopic
  );
  detailTitleEl.textContent = topic.title;
  detailUpdatedEl.textContent = `Last updated ${getLastUpdatedText(topic.lastUpdated)}`;
  detailDescriptionEl.textContent = topic.description;
  videoListEl.innerHTML = renderVideoCards(topic.videos);
  rednoteListEl.innerHTML = renderLinkCards(topic.rednotePosts, "A place for a favorite RedNote / Xiaohongshu post.");
  pdfListEl.innerHTML = renderLinkCards(topic.pdfs, "A place for a helpful PDF or family document.");
  photoListEl.innerHTML = renderPhotoCards(topic.photos);
  linkListEl.innerHTML = renderLinkCards(topic.links, "A place for a helpful article or website.");
  notesListEl.innerHTML = renderNotes(topic.notes);
  renderTimeline(topic.timeline);

  detailEl.hidden = false;
  detailEl.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderVideoCards(videos) {
  return videos
    .map((video, index) => {
      const title = video.title || `Video ${index + 1}`;
      const embedUrl = getYouTubeEmbedUrl(video.url);

      if (embedUrl) {
        return `
          <article class="placeholder-card video-card">
            <div class="video-frame">
              <iframe
                src="${embedUrl}"
                title="${title}"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <strong>${title}</strong>
          </article>
        `;
      }

      return `
        <article class="placeholder-card">
          <strong>${title}</strong>
          <span class="placeholder-label">A place for a favorite YouTube video.</span>
        </article>
      `;
    })
    .join("");
}

function renderLinkCards(items, emptyText) {
  return items
    .map((item, index) => {
      const title = item.title || `Link ${index + 1}`;

      if (item.url) {
        return `
          <article class="placeholder-card">
            <strong>${title}</strong>
            <a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.url}</a>
          </article>
        `;
      }

      return `
        <article class="placeholder-card">
          <strong>${title}</strong>
          <span class="placeholder-label">${emptyText}</span>
        </article>
      `;
    })
    .join("");
}

function renderPhotoCards(photos) {
  return photos
    .map((photo, index) => {
      const title = photo.title || `Photo ${index + 1}`;

      if (photo.url) {
        return `
          <article class="gallery-card photo-card">
            <img src="${photo.url}" alt="${title}">
            <div>
              <strong>${title}</strong>
              <span class="placeholder-label">${photo.caption || "Family photo"}</span>
            </div>
          </article>
        `;
      }

      return `
        <article class="placeholder-card">
          <strong>${title}</strong>
          <span class="placeholder-label">A place for a photo gallery image.</span>
        </article>
      `;
    })
    .join("");
}

function renderNotes(notes) {
  return `
    <ul class="notes-list">
      ${notes.map((note) => `<li>${note}</li>`).join("")}
    </ul>
  `;
}

function renderTimeline(timeline) {
  if (!timeline || timeline.length === 0) {
    timelineSectionEl.hidden = true;
    timelineListEl.innerHTML = "";
    return;
  }

  timelineSectionEl.hidden = false;
  timelineListEl.innerHTML = timeline
    .map((entry) => {
      return `
        <article class="timeline-item">
          <time>${entry.year}</time>
          <p>${entry.text}</p>
        </article>
      `;
    })
    .join("");
}

function getYouTubeEmbedUrl(url) {
  if (!url) return "";

  if (url.includes("youtube.com/embed/")) {
    return url;
  }

  const watchMatch = url.match(/[?&]v=([^&]+)/);
  if (watchMatch) {
    return `https://www.youtube.com/embed/${watchMatch[1]}`;
  }

  const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
  if (shortMatch) {
    return `https://www.youtube.com/embed/${shortMatch[1]}`;
  }

  return "";
}

function getLastUpdatedText(topicDate) {
  const dateValue = topicDate || document.lastModified;
  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return topicDate;
  }

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function getActiveFamily() {
  return familyData.find((family) => family.id === activeFamilyId) || familyData[0];
}

function getImageCandidates(...paths) {
  const candidates = [];

  paths.filter(Boolean).forEach((path) => {
    candidates.push(path);

    const fileName = path.split("/").pop();
    if (fileName && fileName !== path) {
      candidates.push(fileName);
    }
  });

  return [...new Set(candidates)];
}

function imageLayers(...paths) {
  return getImageCandidates(...paths)
    .map((path) => `url('${path}')`)
    .join(", ");
}

function backgroundWithImages(gradient, ...paths) {
  return `${gradient}, ${imageLayers(...paths)}`;
}

tabsEl.addEventListener("click", (event) => {
  const tabButton = event.target.closest("[data-family-id]");

  if (!tabButton) return;

  activeFamilyId = tabButton.dataset.familyId;
  detailEl.hidden = true;
  renderTabs();
  renderTopics();
});

topicGridEl.addEventListener("click", (event) => {
  const topicCard = event.target.closest("[data-topic-id]");

  if (!topicCard) return;

  openTopic(topicCard.dataset.topicId);
});

backButtonEl.addEventListener("click", () => {
  detailEl.hidden = true;
  document.querySelector(".family-panel").scrollIntoView({ behavior: "smooth", block: "start" });
});

renderTabs();
renderTopics();
homeHeroPhotoEl.style.backgroundImage = backgroundWithImages(
  "linear-gradient(180deg, rgba(38, 31, 22, 0.08) 0%, rgba(38, 31, 22, 0.2) 42%, rgba(38, 31, 22, 0.72) 100%)",
  homeImages.hero,
  homeImages.defaultTopic
);
