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
      createTopic("violin", "Violin", {
        description: "A practice library for Liam's violin work, with play-along recordings and technique reminders.",
        violinPracticeLibrary: {
          fullPlayAlong: [
            {
              title: "Suzuki Book 1 Full Play Along",
              url: "https://youtu.be/jQlhrSawZg4?si=0JAyloVQiZy4VA5f"
            },
            {
              title: "Suzuki Book 2 Full Play Along",
              url: "https://youtu.be/bWmXTAe1fMU?si=-L18P35zOIO65Tt1"
            },
            {
              title: "Suzuki Book 3 Full Play Along",
              url: "",
              note: "Add the Suzuki Book 3 full play-along link here when ready."
            }
          ],
          oneByOneBooks: [
            {
              title: "Suzuki Book 1",
              url: "https://youtu.be/9z9vg56vNgI?si=fXTkHJW8wohD4_ty",
              songs: createSuzukiSongs([
                "Twinkle, Twinkle, Little Star Variations",
                "Lightly Row",
                "Song of the Wind",
                "Go Tell Aunt Rhody",
                "O Come, Little Children",
                "May Song",
                "Long, Long Ago",
                "Allegro",
                "Perpetual Motion",
                "Allegretto",
                "Andantino",
                "Etude",
                "Minuet 1",
                "Minuet 2",
                "Minuet 3",
                "The Happy Farmer",
                "Gavotte"
              ], "https://youtu.be/9z9vg56vNgI?si=fXTkHJW8wohD4_ty")
            },
            {
              title: "Suzuki Book 2",
              url: "https://youtu.be/JRUQxAu3ols?si=ecgKdUt7uRb_od0s",
              songs: createSuzukiSongs([
                "Chorus from Judas Maccabaeus",
                "Musette",
                "Hunter's Chorus",
                "Long, Long Ago",
                "Waltz",
                "Bourree",
                "The Two Grenadiers",
                "Theme from Witches' Dance",
                "Gavotte from Mignon",
                "Gavotte",
                "Minuet in G"
              ], "https://youtu.be/JRUQxAu3ols?si=ecgKdUt7uRb_od0s")
            },
            {
              title: "Suzuki Book 3",
              url: "https://youtu.be/vtVJje83Z4Y?si=U4szJOwWk5Tcdlu9",
              songs: createSuzukiSongs([
                "Gavotte",
                "Minuet",
                "Gavotte in G Minor",
                "Humoresque",
                "Gavotte",
                "Gavotte in D Major",
                "Bourree"
              ], "https://youtu.be/vtVJje83Z4Y?si=U4szJOwWk5Tcdlu9")
            }
          ],
          techniqueLevels: [
            {
              level: "Level 1",
              title: "Foundation",
              techniques: [
                createViolinTechnique("Legato", "Right Hand / Bowing", "Make the bow sound smooth and connected, like one long singing line.", "Legato Bowing on the Violin | Smooth bow changes", "https://youtu.be/YU7FX4YaPNQ", "Chosen because it focuses directly on smooth bow changes and comes from the Violinspiration lesson channel."),
                createViolinTechnique("Détaché", "Right Hand / Bowing", "Use separate bow strokes while keeping the sound clear and beautiful.", "Violin Basics - DÉTACHÉ", "https://youtu.be/f7ch-wWu1P4", "Chosen because the ViolinClass basics format is clear and focused on one bow stroke at a time."),
                createViolinTechnique("Pizzicato", "Special Techniques", "Pluck the string gently with the finger while keeping the violin relaxed.", "Violin Teacher's Top Tips for PRECISE PIZZICATO for the violin", "https://youtu.be/m6hsuov13JQ", "Chosen because it is taught from a teacher's perspective and focuses on accurate, useful pizzicato technique.")
              ]
            },
            {
              level: "Level 2",
              title: "Early Intermediate",
              techniques: [
                createViolinTechnique("Staccato", "Right Hand / Bowing", "Play short notes that stop cleanly without squeezing the bow.", "Staccato Technique for the Violin: An Essential Tutorial for Violinists", "https://youtu.be/ev7Q0aAKpeE", "Chosen because it is a dedicated technique tutorial and better suited for structured practice than a performance masterclass clip."),
                createViolinTechnique("Martelé", "Right Hand / Bowing", "Start each note clearly, then release the bow so the sound can ring.", "Martelé: Beginning Exercise", "https://youtu.be/9KYu0Hu7Btk", "Chosen because Violinmasterclass presents it as a beginning exercise, which fits a practice-library approach."),
                createViolinTechnique("Trill", "Left Hand", "Tap between two notes lightly and evenly, like a tiny sparkle in the music.", "How to Play Turns, Trills, and Grace Notes on Violin", "https://youtu.be/UWpqD_2m5W4", "Chosen because it is a beginner lesson on basic ornaments, making trills easier to understand in context.")
              ]
            },
            {
              level: "Level 3",
              title: "Intermediate",
              techniques: [
                createViolinTechnique("Vibrato", "Left Hand", "Roll the finger gently to give long notes warmth and expression.", "How to Start Finger Vibrato on Violin - Step-by-Step (Part 1)", "https://youtu.be/jM93r_tRILE", "Chosen because it is a step-by-step instructional lesson focused on starting vibrato carefully, which is better for real practice than a quick entertainment-style tip."),
                createViolinTechnique("Shifting", "Left Hand", "Move the left hand to a new position while listening carefully for the landing note.", "Shifting (Beginner)", "https://youtu.be/eToN04JlivU", "Chosen because Violinmasterclass is a focused instructional channel and this lesson is specifically labeled for beginner shifting."),
                createViolinTechnique("Glissando / Portamento", "Special Techniques", "Slide between notes smoothly while listening for the beginning and ending pitches.", "Violin Lesson #56; The Portamento/Slide", "https://youtu.be/OYTQIIXDrwI", "Chosen because professorV gives a lesson-style explanation of portamento and sliding instead of a brief demonstration.")
              ]
            },
            {
              level: "Level 4",
              title: "Advanced",
              techniques: [
                createViolinTechnique("Double Stops & Chords", "Left Hand", "Play two strings together while keeping the bow balanced and the notes in tune.", "How to Play Double Stops on Violin - Beginner's Guide", "https://youtu.be/5rD3WdjDEd4", "Chosen because it is a beginner guide from a violin-lesson channel, with more teaching value than a short quick-tip clip."),
                createViolinTechnique("Harmonics", "Left Hand", "Touch the string lightly to make a clear, bell-like sound.", "Violin Harmonics - Easy Guide for Beginners", "https://youtu.be/nTfG6UnTts8", "Chosen because it is explicitly beginner-focused and explains harmonics as a learnable skill rather than a brief demonstration."),
                createViolinTechnique("Spiccato", "Right Hand / Bowing", "Let the bow bounce lightly while staying calm and controlled.", "Spiccato Beginning Exercise 1", "https://youtu.be/V_JoWS5LRBo", "Chosen because Violinmasterclass gives a beginning exercise for building the bow stroke gradually.")
              ]
            },
            {
              level: "Level 5",
              title: "Challenge",
              techniques: [
                createViolinTechnique("Ricochet / Jeté", "Right Hand / Bowing", "Let the bow make several natural bounces in one controlled motion.", "How to: Ricochet Violin Bowing Technique", "https://youtu.be/APbV2cNKCd8", "Chosen because Violin Lab is a teaching-focused channel and the video is a dedicated ricochet technique lesson.")
              ]
            }
          ]
        },
        videos: [],
        rednotePosts: [],
        pdfs: [],
        photos: [],
        links: [],
        notes: [
          "Use the Play Along section to quickly choose the right Suzuki book and practice style.",
          "Technique tutorial videos stay hidden until someone clicks Watch Tutorial."
        ]
      }),
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

function createSuzukiSongs(songTitles, bookVideoUrl) {
  return songTitles.map((title) => ({
    title,
    url: bookVideoUrl,
    // TODO: Add timestamp later, for example timestamp: "1m23s".
    timestamp: ""
  }));
}

function createViolinTechnique(title, type, description, videoTitle, url, why) {
  return {
    title,
    type,
    description,
    notes: "Notes for Sophie/Liam: add practice reminders here.",
    videos: [
      {
        title: videoTitle,
        url,
        why
      }
    ]
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
const underConstructionNoteEl = document.querySelector("#under-construction-note");
const videoListEl = document.querySelector("#video-list");
const rednoteListEl = document.querySelector("#rednote-list");
const pdfListEl = document.querySelector("#pdf-list");
const photoListEl = document.querySelector("#photo-list");
const linkListEl = document.querySelector("#link-list");
const notesListEl = document.querySelector("#notes-list");
const practiceLibrarySectionEl = document.querySelector("#practice-library-section");
const practiceLibraryListEl = document.querySelector("#practice-library-list");
const timelineSectionEl = document.querySelector("#timeline-section");
const timelineListEl = document.querySelector("#timeline-list");

let activeFamilyId = familyData[0].id;
let currentPracticeLibrary = null;
let techniqueFilters = {
  mode: "all",
  search: ""
};

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
  underConstructionNoteEl.hidden = hasTopicContent(topic);
  videoListEl.innerHTML = renderVideoCards(topic.videos);
  rednoteListEl.innerHTML = renderLinkCards(topic.rednotePosts, "A place for a favorite RedNote / Xiaohongshu post.");
  pdfListEl.innerHTML = renderLinkCards(topic.pdfs, "A place for a helpful PDF or family document.");
  photoListEl.innerHTML = renderPhotoCards(topic.photos);
  linkListEl.innerHTML = renderLinkCards(topic.links, "A place for a helpful article or website.");
  notesListEl.innerHTML = renderNotes(topic.notes);
  setResourceSectionVisibility(videoListEl, topic.videos);
  setResourceSectionVisibility(rednoteListEl, topic.rednotePosts);
  setResourceSectionVisibility(pdfListEl, topic.pdfs);
  setResourceSectionVisibility(photoListEl, topic.photos);
  setResourceSectionVisibility(linkListEl, topic.links);
  renderPracticeLibrary(topic);
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

function setResourceSectionVisibility(listEl, items) {
  const section = listEl.closest(".resource-section");
  if (!section) return;

  section.hidden = !items || items.length === 0;
}

function renderPracticeLibrary(topic) {
  if (topic.violinPracticeLibrary) {
    renderViolinPracticeLibrary(topic.violinPracticeLibrary);
    return;
  }

  if (!topic.practiceSections || topic.practiceSections.length === 0) {
    practiceLibrarySectionEl.hidden = true;
    practiceLibraryListEl.innerHTML = "";
    currentPracticeLibrary = null;
    return;
  }

  practiceLibrarySectionEl.hidden = false;
  currentPracticeLibrary = null;
  practiceLibraryListEl.innerHTML = topic.practiceSections.map(renderPracticeSection).join("");
}

function renderViolinPracticeLibrary(library) {
  currentPracticeLibrary = library;
  techniqueFilters = {
    mode: "all",
    search: ""
  };
  practiceLibrarySectionEl.hidden = false;
  practiceLibraryListEl.innerHTML = `
    <div class="violin-practice-library">
      <div class="violin-song-detail" id="violin-song-detail" hidden></div>
      <div class="violin-practice-home" id="violin-practice-home">
        ${renderFullPlayAlongSection(library.fullPlayAlong)}
        ${renderOneByOneSection(library.oneByOneBooks)}
        ${renderTechniqueLevels(library.techniqueLevels)}
      </div>
    </div>
  `;
}

function renderFullPlayAlongSection(items) {
  return `
    <article class="practice-section-card">
      <h4>Full Play Along</h4>
      <p class="practice-section-intro">Choose one full-book practice video. The video opens only after you click.</p>
      <div class="practice-card-grid">
        ${items
          .map((item, index) => {
            const disabled = !item.url;
            return `
              <article class="practice-card compact-practice-card">
                <strong>${item.title}</strong>
                <button class="practice-action-button" type="button" data-full-play-index="${index}" ${disabled ? "disabled" : ""}>
                  ${disabled ? "Link coming soon" : "Open video"}
                </button>
                ${item.note ? `<span class="placeholder-label">${item.note}</span>` : ""}
              </article>
            `;
          })
          .join("")}
      </div>
      <div class="practice-video-drawer" id="full-playalong-view" hidden></div>
    </article>
  `;
}

function renderOneByOneSection(books) {
  return `
    <article class="practice-section-card">
      <h4>One-by-One Play Along</h4>
      <p class="practice-section-intro">Pick one song to open a focused practice view.</p>
      <div class="one-by-one-books">
        ${books
          .map((book, bookIndex) => {
            return `
              <section class="song-book-card">
                <h5>${book.title}</h5>
                <div class="song-list">
                  ${book.songs
                    .map((song, songIndex) => {
                      return `
                        <button class="song-button" type="button" data-song-book-index="${bookIndex}" data-song-index="${songIndex}">
                          ${song.title}
                        </button>
                      `;
                    })
                    .join("")}
                </div>
              </section>
            `;
          })
          .join("")}
      </div>
    </article>
  `;
}

function renderTechniqueLevels(levels) {
  return `
    <article class="practice-section-card">
      <h4>Technique Library</h4>
      <p class="practice-section-intro">Choose one technique at a time. Tutorial videos stay hidden until opened.</p>
      ${renderTechniqueFilters(levels)}
      <div class="technique-level-list" id="technique-level-list">${renderFilteredTechniqueLevels(levels)}</div>
    </article>
  `;
}

function renderTechniqueFilters(levels) {
  const filterButtons = [
    { value: "all", label: "All" },
    { value: "Left Hand", label: "Left Hand" },
    { value: "Right Hand / Bowing", label: "Right Hand / Bowing" },
    { value: "Special Techniques", label: "Special Techniques" },
    ...levels.map((level) => ({ value: level.level, label: level.level }))
  ];

  return `
    <div class="technique-filter-panel">
      <label class="technique-search-label">
        Search by technique name
        <input id="technique-search" type="search" placeholder="Try vibrato, shifting, staccato..." value="${techniqueFilters.search}">
      </label>
      <div class="filter-group" aria-label="Filter techniques">
        ${filterButtons.map((button) => renderFilterButton(button.value, button.label)).join("")}
      </div>
    </div>
  `;
}

function renderFilterButton(value, label) {
  const isActive = techniqueFilters.mode === value;

  return `
    <button class="filter-button ${isActive ? "active" : ""}" type="button" data-technique-filter-value="${value}">
      ${label}
    </button>
  `;
}

function renderFilteredTechniqueLevels(levels) {
  const query = techniqueFilters.search.trim().toLowerCase();
  const filteredLevels = levels
    .map((level, levelIndex) => {
      const techniques = level.techniques
        .map((technique, techniqueIndex) => ({ technique, techniqueIndex }))
        .filter(({ technique }) => {
          const matchesMode =
            techniqueFilters.mode === "all" ||
            level.level === techniqueFilters.mode ||
            technique.type === techniqueFilters.mode;
          const matchesSearch = !query || technique.title.toLowerCase().includes(query);

          return matchesMode && matchesSearch;
        });

      return { level, levelIndex, techniques };
    })
    .filter((entry) => entry.techniques.length > 0);

  if (filteredLevels.length === 0) {
    return `
      <div class="empty-filter-message">
        No technique matches yet. Try a technique name like vibrato, shifting, staccato, or pizzicato.
      </div>
    `;
  }

  return filteredLevels
    .map(({ level, levelIndex, techniques }) => {
      return `
        <section class="technique-level-card">
          <div class="technique-level-heading">
            <span class="practice-type">${level.level}</span>
            <h5>${level.title}</h5>
          </div>
          <div class="practice-card-grid">
            ${techniques
              .map(({ technique, techniqueIndex }) => renderTechniqueButtonCard(technique, levelIndex, techniqueIndex))
              .join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function updateTechniqueFilters() {
  if (!currentPracticeLibrary) return;

  const list = document.querySelector("#technique-level-list");
  if (!list) return;

  closeAllTechniqueVideos();
  list.innerHTML = renderFilteredTechniqueLevels(currentPracticeLibrary.techniqueLevels);
  document.querySelectorAll("[data-technique-filter-value]").forEach((button) => {
    button.classList.toggle("active", techniqueFilters.mode === button.dataset.techniqueFilterValue);
  });
}

function renderTechniqueButtonCard(technique, levelIndex, techniqueIndex) {
  const level = currentPracticeLibrary.techniqueLevels[levelIndex];

  return `
    <article class="practice-card practice-technique-card">
      <strong>${technique.title}</strong>
      <div class="technique-meta">
        <span class="practice-type">${technique.type}</span>
        <span class="practice-type">${level.level}: ${level.title}</span>
      </div>
      <p class="technique-description">${technique.description}</p>
      <button class="practice-action-button" type="button" data-technique-level-index="${levelIndex}" data-technique-index="${techniqueIndex}">
        Watch Tutorial
      </button>
      <p class="technique-notes"><strong>Practice notes:</strong> ${technique.notes}</p>
      <div class="technique-inline-video" data-technique-slot="${levelIndex}-${techniqueIndex}" hidden></div>
    </article>
  `;
}

function renderOpenVideo(title, url, options = {}) {
  const embedUrl = getYouTubeEmbedUrl(url);

  return `
    <div class="open-practice-video">
      <div class="open-practice-video-header">
        <div>
          <span class="practice-type">${options.label || "Practice video"}</span>
          <strong>${title}</strong>
        </div>
        <button class="practice-close-button" type="button" ${options.closeAttribute || "data-close-practice-video"}>${options.closeText || "Close"}</button>
      </div>
      ${
        embedUrl
          ? `<div class="video-frame"><iframe src="${embedUrl}" title="${title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
          : ""
      }
      <a href="${url}" target="_blank" rel="noopener noreferrer">Open YouTube link</a>
      ${options.note ? `<p class="video-choice-note">${options.note}</p>` : ""}
    </div>
  `;
}

function renderPracticeSection(section) {
  const groups = section.groups || [{ title: "", items: section.items || [] }];

  return `
    <article class="practice-section-card">
      <h4>${section.title}</h4>
      <div class="practice-group-list">
        ${groups.map(renderPracticeGroup).join("")}
      </div>
    </article>
  `;
}

function renderPracticeGroup(group) {
  const heading = group.title ? `<h5>${group.title}</h5>` : "";
  const items = group.items || [];

  return `
    <div class="practice-group">
      ${heading}
      <div class="practice-card-grid">
        ${items.map(renderPracticeItem).join("")}
      </div>
    </div>
  `;
}

function renderPracticeItem(item) {
  if (item.url) {
    const embedUrl = getYouTubeEmbedUrl(item.url);

    return `
      <article class="practice-card practice-video-card">
        <span class="practice-type">${item.type}</span>
        <strong>${item.title}</strong>
        ${
          embedUrl
            ? `<div class="video-frame"><iframe src="${embedUrl}" title="${item.title} - ${item.type}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
            : ""
        }
        <a href="${item.url}" target="_blank" rel="noopener noreferrer">Open YouTube link</a>
      </article>
    `;
  }

  const techniqueVideos = renderTechniqueVideos(item.title, item.videos || []);

  return `
    <article class="practice-card practice-technique-card">
      <strong>${item.title}</strong>
      ${item.description ? `<p class="technique-description">${item.description}</p>` : ""}
      ${techniqueVideos}
      <p class="technique-notes"><strong>Practice notes:</strong> ${item.notes || "Add practice reminders here."}</p>
    </article>
  `;
}

function openFullPlayAlong(index) {
  if (!currentPracticeLibrary) return;

  const item = currentPracticeLibrary.fullPlayAlong[index];
  const drawer = document.querySelector("#full-playalong-view");

  if (!item || !item.url || !drawer) return;

  drawer.innerHTML = renderOpenVideo(item.title, item.url, {
    label: "Full Play Along"
  });
  drawer.hidden = false;
}

function openSongPracticeView(bookIndex, songIndex) {
  if (!currentPracticeLibrary) return;

  const book = currentPracticeLibrary.oneByOneBooks[bookIndex];
  const song = book && book.songs[songIndex];
  const detail = document.querySelector("#violin-song-detail");
  const home = document.querySelector("#violin-practice-home");

  if (!book || !song || !detail || !home) return;

  home.hidden = true;
  detail.innerHTML = `
    ${renderOpenVideo(song.title, song.url, {
      label: book.title,
      closeAttribute: "data-back-to-violin-practice",
      closeText: "Back to Violin page",
      note: "This song currently opens the book-level one-by-one play-along video. TODO: add a timestamp for this exact song later."
    })}
  `;
  detail.hidden = false;
  detail.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showViolinPracticeHome() {
  const detail = document.querySelector("#violin-song-detail");
  const home = document.querySelector("#violin-practice-home");

  if (!detail || !home) return;

  detail.hidden = true;
  detail.innerHTML = "";
  home.hidden = false;
  home.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openTechniqueTutorial(levelIndex, techniqueIndex) {
  if (!currentPracticeLibrary) return;

  const level = currentPracticeLibrary.techniqueLevels[levelIndex];
  const technique = level && level.techniques[techniqueIndex];
  const video = technique && technique.videos && technique.videos[0];

  if (!technique || !video || !video.url) return;

  closeAllTechniqueVideos();

  const slot = document.querySelector(`[data-technique-slot="${levelIndex}-${techniqueIndex}"]`);
  if (!slot) return;

  slot.innerHTML = renderOpenVideo(video.title, video.url, {
    label: technique.title,
    note: video.why ? `<strong>Why chosen:</strong> ${video.why}` : ""
  });
  slot.hidden = false;
}

function closePracticeVideo(button) {
  const panel = button.closest(".practice-video-drawer, .technique-inline-video");

  if (!panel) return;

  panel.hidden = true;
  panel.innerHTML = "";
}

function closeAllTechniqueVideos() {
  document.querySelectorAll(".technique-inline-video").forEach((panel) => {
    panel.hidden = true;
    panel.innerHTML = "";
  });
}

function renderTechniqueVideos(techniqueTitle, videos) {
  const realVideos = videos.filter((video) => video.url && video.url.trim());

  if (realVideos.length === 0) {
    return `
      <div class="technique-video-slots">
        <span class="practice-type">Future videos</span>
        <p>Paste tutorial video links here later.</p>
      </div>
    `;
  }

  return `
    <div class="technique-video-list">
      ${realVideos
        .map((video, index) => {
          const title = video.title || `${techniqueTitle} tutorial ${index + 1}`;
          const embedUrl = getYouTubeEmbedUrl(video.url);

          return `
            <article class="technique-video-card">
              <span class="practice-type">Recommended video</span>
              <strong>${title}</strong>
              ${
                embedUrl
                  ? `<div class="video-frame"><iframe src="${embedUrl}" title="${title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
                  : ""
              }
              <a href="${video.url}" target="_blank" rel="noopener noreferrer">Open YouTube link</a>
              ${video.why ? `<p class="video-choice-note"><strong>Why chosen:</strong> ${video.why}</p>` : ""}
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function hasTopicContent(topic) {
  return (
    hasLinkedItems(topic.videos) ||
    hasLinkedItems(topic.rednotePosts) ||
    hasLinkedItems(topic.pdfs) ||
    hasLinkedItems(topic.photos) ||
    hasLinkedItems(topic.links) ||
    hasRealNotes(topic.notes) ||
    Boolean(topic.violinPracticeLibrary) ||
    Boolean(topic.practiceSections && topic.practiceSections.length > 0) ||
    Boolean(topic.timeline && topic.timeline.length > 0)
  );
}

function hasLinkedItems(items) {
  return Array.isArray(items) && items.some((item) => item.url && item.url.trim());
}

function hasRealNotes(notes) {
  const starterNotes = new Set([
    "This page is ready for favorite resources, observations, and family notes.",
    "Add new thoughts here as this topic grows."
  ]);

  return Array.isArray(notes) && notes.some((note) => note && note.trim() && !starterNotes.has(note.trim()));
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

practiceLibraryListEl.addEventListener("click", (event) => {
  const filterButton = event.target.closest("[data-technique-filter-value]");
  if (filterButton) {
    techniqueFilters.mode = filterButton.dataset.techniqueFilterValue;
    updateTechniqueFilters();
    return;
  }

  const fullPlayButton = event.target.closest("[data-full-play-index]");
  if (fullPlayButton) {
    openFullPlayAlong(Number(fullPlayButton.dataset.fullPlayIndex));
    return;
  }

  const songButton = event.target.closest("[data-song-book-index][data-song-index]");
  if (songButton) {
    openSongPracticeView(Number(songButton.dataset.songBookIndex), Number(songButton.dataset.songIndex));
    return;
  }

  const techniqueButton = event.target.closest("[data-technique-level-index][data-technique-index]");
  if (techniqueButton) {
    openTechniqueTutorial(
      Number(techniqueButton.dataset.techniqueLevelIndex),
      Number(techniqueButton.dataset.techniqueIndex)
    );
    return;
  }

  const closeButton = event.target.closest("[data-close-practice-video]");
  if (closeButton) {
    closePracticeVideo(closeButton);
    return;
  }

  const backButton = event.target.closest("[data-back-to-violin-practice]");
  if (backButton) {
    showViolinPracticeHome();
  }
});

practiceLibraryListEl.addEventListener("input", (event) => {
  if (event.target.id !== "technique-search") return;

  techniqueFilters.search = event.target.value;
  updateTechniqueFilters();
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
