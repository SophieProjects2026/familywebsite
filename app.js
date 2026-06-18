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
              url: "https://youtu.be/1Uq4wMes8R0?si=6zPKnmvnmfBpg2vV"
            }
          ],
          oneByOneBooks: [
            {
              title: "Suzuki Book 1",
              url: "https://youtu.be/9z9vg56vNgI?si=fXTkHJW8wohD4_ty",
              songs: createSuzukiSongs([
                { title: "Twinkle, Twinkle Little Star with Variations", url: "https://youtu.be/9z9vg56vNgI?si=SB8NdDB9dkdB2PoY" },
                { title: "Lightly Row", url: "https://youtu.be/pqM-Y7kQ0ac?si=2cGE5zu2Rqfbmr6Q" },
                { title: "Song of the Wind", url: "https://youtu.be/C_LppvsWpcA?si=OxhqR3CZ7IjZCqTz" },
                { title: "Go Tell Aunt Rhody", url: "https://youtu.be/f5HW9tV5KYo?si=bX6m1u_3kBeUDT6l" },
                { title: "Oh Come Little Children", url: "https://youtu.be/TUgF0aWsGfo?si=jqKFRZHoQwIVZVmH" },
                { title: "May Song", url: "https://youtu.be/52AsFJ-vGPs?si=ascHQ7lFOeFyxQLD" },
                { title: "Long, Long Ago", url: "https://youtu.be/lRK1yB_zb7Y?si=rIZo5nnqaDfRLOl8" },
                { title: "Allegro", url: "https://youtu.be/bNAt_rn9IXE?si=IRqnkm3tvwH6BzV5" },
                { title: "Perpetual Motion", url: "https://youtu.be/qTNc8xC_52k?si=Hh5b5yn7-Kb6x3Al" },
                { title: "Allegretto", url: "https://youtu.be/7tuhIsMvXx8?si=ZNS_VNt6l2Gm9hQ0" },
                { title: "Andantino", url: "https://youtu.be/HMJiQg2eFhE?si=VhpHfmLuz7XOzsBn" },
                { title: "Etude", url: "https://youtu.be/ypp60VfFQJM?si=pe99S749sgoKHhwP" },
                { title: "Minuet 1", url: "https://youtu.be/PO69MCdCzU0?si=zSYzODRTeq9MXaCM" },
                { title: "Minuet 2", url: "https://youtu.be/R5FXMK7pK4s?si=OeT0pExTGQOC1jMd" },
                { title: "Minuet 3", url: "https://youtu.be/NjhKb2HUGFM?si=IjN7lKp606IGSnaW" },
                { title: "Happy Farmer", url: "https://youtu.be/YuVluAaGmBM?si=DWgHHIE-7bPNY63N" },
                { title: "Gossec Gavotte", url: "https://youtu.be/zEtxQo0VVDY?si=--Z_jDJBqsK4eqMu" }
              ], "https://youtu.be/9z9vg56vNgI?si=fXTkHJW8wohD4_ty")
            },
            {
              title: "Suzuki Book 2",
              url: "https://youtu.be/JRUQxAu3ols?si=ecgKdUt7uRb_od0s",
              songs: createSuzukiSongs([
                { title: "Chorus from Judas Maccabaeus", url: "https://youtu.be/JRUQxAu3ols?si=2KqWJCRcw3033Hbb" },
                { title: "Musette", url: "https://youtu.be/RE9h9KVctsQ?si=ICv0i0ofZejzxAJf" },
                { title: "Hunters' Chorus", url: "https://youtu.be/GVX7Uf78XAE?si=PvBz280TNFK8AxKl" },
                { title: "Long, Long Ago with Variation", url: "https://youtu.be/IfZnQXy0LFA?si=9BmWiFAC_mWMugQ-" },
                { title: "Waltz", url: "https://youtu.be/fB46mNJmw2A?si=w_lYK2UIJAHELII1" },
                { title: "Handel Bourree", url: "https://youtu.be/6z_mXmxtTKA?si=bpNlIMwz708dpHwA" },
                { title: "The Two Grenadiers", url: "https://youtu.be/tHTj3819-WY?si=fK2S3l66zZ4yBcWo" },
                { title: "Witches' Dance", url: "https://youtu.be/1M6FRoac4uU?si=cGpg_tGBd3_bpjrW" },
                { title: "Gavotte from Mignon", url: "https://youtu.be/xM43Uj3M908?si=5ECi2uSzbeq9LBf3" },
                { title: "Gavotte by Lully", url: "https://youtu.be/A3lE21Ik_m8?si=FEpbHdZCkJVlBeYl" },
                { title: "Beethoven Minuet in G", url: "https://youtu.be/RCRhqoAvU8M?si=420IjllBolTn9BgX" },
                { title: "Boccherini Minuet", url: "https://youtu.be/peUydZhuXuM?si=NBRP9hoMjSknDpab" }
              ], "https://youtu.be/JRUQxAu3ols?si=ecgKdUt7uRb_od0s")
            },
            {
              title: "Suzuki Book 3",
              url: "https://youtu.be/vtVJje83Z4Y?si=U4szJOwWk5Tcdlu9",
              songs: createSuzukiSongs([
                { title: "Martini Gavotte", url: "https://youtu.be/vtVJje83Z4Y?si=69ELPo2fPF1rAfXk" },
                { title: "Minuet by Bach", url: "https://youtu.be/RaP-IzM5pl0?si=GKDdjpcxWdk_VvsA" },
                { title: "Gavotte in G Minor", url: "https://youtu.be/JHlggqZTXZk?si=dro7hH8_JbZUZgA1" },
                { title: "Humoresque", url: "https://youtu.be/gqfpDo-sSs8?si=e8hp7ZwuUN34MFt8" },
                { title: "Gavotte by Becker", url: "https://youtu.be/jxS4RkS8lCA?si=B7dXoAq5oYzbJw8h" },
                { title: "Gavotte I and II by Bach", url: "https://youtu.be/UdJ7r__BhjY?si=3rxQIWEmA44R2nKS" },
                { title: "Bourree I and II by Bach", url: "https://youtu.be/pFq8oKcGv6o?si=5_11d6W5JNwzWkth" }
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
      createTopic("market-signal-dashboard", "Market Signal Dashboard", {
        description: "A family reference page for reading long-term market conditions with calm, educational signals.",
        marketSignalDashboard: true,
        videos: [],
        rednotePosts: [],
        pdfs: [],
        photos: [],
        links: [],
        notes: []
      }),
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
  return songTitles.map((song) => {
    const songData = typeof song === "string" ? { title: song } : song;

    return {
      title: songData.title,
      url: songData.url || bookVideoUrl,
      timestamp: songData.timestamp || "",
      todo: songData.todo || "TODO: add the exact song timestamp from the source video chapters."
    };
  });
}

function createViolinTechnique(title, type, description, videoTitle, url, why, keyPoints = []) {
  return {
    title,
    type,
    description,
    keyPoints: keyPoints.length > 0 ? keyPoints : getTechniqueKeyPoints(title),
    videos: [
      {
        title: videoTitle,
        url,
        why
      }
    ]
  };
}

function getTechniqueKeyPoints(title) {
  const pointsByTechnique = {
    "Legato": ["Smooth bow changes", "Even bow speed", "Connected sound"],
    "DÃ©tachÃ©": ["Separate strokes", "Straight bow path", "Consistent tone"],
    "Pizzicato": ["Pluck with good tone", "Keep the left hand stable", "Stay relaxed between plucks"],
    "Staccato": ["Clear stops", "Relaxed bow hand", "Controlled motion"],
    "MartelÃ©": ["Prepared bow bite", "Quick release", "Relax after each note"],
    "Trill": ["Light finger taps", "Even rhythm", "Keep the hand loose"],
    "Vibrato": ["Relaxed wrist or arm", "Steady pulse", "Do not squeeze the neck"],
    "Shifting": ["Use a guide finger", "Keep the left hand light", "Listen for the arrival pitch"],
    "Glissando / Portamento": ["Smooth slide", "Controlled speed", "Accurate landing note"],
    "Double Stops & Chords": ["Balanced fingers", "Clean intonation", "Relaxed hand"],
    "Harmonics": ["Very light finger touch", "Clear contact point", "Steady bow speed"],
    "Spiccato": ["Natural bow bounce", "Relaxed wrist", "Start slowly"],
    "Ricochet / JetÃ©": ["Let the bow rebound naturally", "Keep the wrist flexible", "Control the number of bounces"]
  };

  return pointsByTechnique[title] || ["Relaxed setup", "Clear sound", "Slow careful practice"];
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
const marketDashboardSectionEl = document.querySelector("#market-dashboard-section");
const marketDashboardContentEl = document.querySelector("#market-dashboard-content");
const practiceLibrarySectionEl = document.querySelector("#practice-library-section");
const practiceLibraryListEl = document.querySelector("#practice-library-list");
const timelineSectionEl = document.querySelector("#timeline-section");
const timelineListEl = document.querySelector("#timeline-list");

let activeFamilyId = familyData[0].id;
let activeTopicId = "";
let currentPracticeLibrary = null;
let activeOneByOneBookIndex = null;
let techniqueFilters = {
  mode: "all",
  search: ""
};
let liveMarketSignals = null;
let latestMarketAlerts = null;
let dashboardMarketAlerts = null;

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

  activeTopicId = topicId;
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
  setResourceSectionVisibility(notesListEl, topic.notes);
  renderMarketSignalDashboard(topic);
  renderPracticeLibrary(topic);
  renderTimeline(topic.timeline);

  detailEl.hidden = false;
  detailEl.scrollIntoView({ behavior: "smooth", block: "start" });
}

const marketSignalIndicators = [
  {
    name: "VIX",
    currentStatus: "Manual update",
    meaning: "Market fear and expected volatility.",
    why: "High fear often creates opportunities. Low fear can signal complacency.",
    green: "VIX > 30",
    yellow: "VIX 20-30",
    red: "VIX < 15",
    notes: "Editable by K/Sophie.",
    source: "CBOE"
  },
  {
    name: "Fear & Greed Index",
    currentStatus: "Manual update",
    meaning: "Measures overall investor sentiment.",
    why: "Extreme fear can create opportunities. Extreme greed can increase risk.",
    green: "Extreme Fear",
    yellow: "Neutral",
    red: "Extreme Greed",
    notes: "Editable by K/Sophie.",
    source: "CNN Fear & Greed"
  },
  {
    name: "Buffett Indicator",
    currentStatus: "Manual update",
    meaning: "Total stock market value relative to GDP.",
    why: "Helps identify broad market overvaluation.",
    green: "Below historical average",
    yellow: "Moderately above average",
    red: "Significantly above historical average",
    notes: "Editable by K/Sophie.",
    source: "Federal Reserve / GDP data"
  },
  {
    name: "Shiller CAPE Ratio",
    currentStatus: "Manual update",
    meaning: "Inflation-adjusted valuation measure.",
    why: "Long-term valuation indicator.",
    green: "Historically cheap",
    yellow: "Fairly valued",
    red: "Historically expensive",
    notes: "Editable by K/Sophie.",
    source: "Robert Shiller Data"
  },
  {
    name: "S&P 500 Forward P/E",
    currentStatus: "Manual update",
    meaning: "Market valuation based on expected earnings.",
    why: "Shows whether stocks are expensive relative to earnings.",
    green: "Below long-term average",
    yellow: "Near average",
    red: "Well above average",
    notes: "Editable by K/Sophie.",
    source: "FactSet"
  },
  {
    name: "Yield Curve",
    currentStatus: "Manual update",
    meaning: "Difference between long-term and short-term Treasury yields.",
    why: "Recession warning indicator.",
    green: "Normal positive slope",
    yellow: "Flat",
    red: "Inverted",
    notes: "Editable by K/Sophie.",
    source: "U.S. Treasury"
  },
  {
    name: "10-Year Treasury Yield",
    currentStatus: "Manual update",
    meaning: "Benchmark interest rate.",
    why: "Affects stock valuations and bond attractiveness.",
    green: "Supportive for valuations",
    yellow: "Neutral",
    red: "Rapidly rising / restrictive",
    notes: "Editable by K/Sophie.",
    source: "U.S. Treasury"
  },
  {
    name: "Credit Spreads",
    currentStatus: "Manual update",
    meaning: "Difference between corporate and Treasury yields.",
    why: "Measures stress in financial markets.",
    green: "Narrow spreads",
    yellow: "Moderately widening",
    red: "Sharp widening",
    notes: "Editable by K/Sophie.",
    source: "FRED"
  },
  {
    name: "Unemployment Rate Trend",
    currentStatus: "Manual update",
    meaning: "Labor market strength.",
    why: "Early recession indicator.",
    green: "Stable",
    yellow: "Slight increase",
    red: "Rapid increase",
    notes: "Editable by K/Sophie.",
    source: "BLS"
  },
  {
    name: "ISM Manufacturing PMI",
    currentStatus: "Manual update",
    meaning: "Economic activity indicator.",
    why: "Helps identify economic expansion or contraction.",
    green: "Above 50",
    yellow: "Near 50",
    red: "Below 50",
    notes: "Editable by K/Sophie.",
    source: "ISM"
  },
  {
    name: "Market Breadth",
    currentStatus: "Manual update",
    meaning: "How many stocks participate in market gains.",
    why: "Healthy rallies require broad participation.",
    green: "Broad participation",
    yellow: "Mixed participation",
    red: "Narrow participation",
    notes: "Editable by K/Sophie.",
    source: "NYSE / S&P Breadth Data"
  },
  {
    name: "Cash Allocation Signal",
    currentStatus: "Manual update",
    meaning: "Internal family guideline.",
    why: "Helps manage dry powder during opportunities.",
    green: "Multiple indicators attractive",
    yellow: "Mixed signals",
    red: "Most indicators expensive",
    notes: "Editable by K/Sophie.",
    source: "Family note placeholder"
  }
];

const marketAlertThresholdRules = {
  vix: {
    green: "VIX above 30 = fear / possible opportunity",
    yellow: "VIX 20-30 = elevated volatility",
    red: "VIX below 15 = complacency"
  },
  "fear-greed-index": {
    green: "Extreme Fear",
    yellow: "Neutral",
    red: "Extreme Greed"
  },
  "buffett-indicator": {
    green: "Below historical average",
    yellow: "Moderately above average",
    red: "Significantly above historical average"
  },
  "shiller-cape": {
    green: "Historically cheap",
    yellow: "Fair / elevated",
    red: "Historically expensive"
  },
  "sp500-pe": {
    green: "Below long-term average",
    yellow: "Near or moderately above average",
    red: "Well above average"
  },
  "yield-curve": {
    green: "Normal positive curve",
    yellow: "Flat curve",
    red: "Inverted curve"
  },
  "ten-year-treasury-yield": {
    green: "Stable or falling",
    yellow: "Elevated",
    red: "Rapidly rising / restrictive"
  },
  "credit-spreads": {
    green: "Normal",
    yellow: "Widening",
    red: "Sharply widening"
  },
  "market-breadth": {
    green: "Broad participation",
    yellow: "Mixed participation",
    red: "Narrow participation"
  }
};

const actionSignalStates = {
  strongBuy: {
    state: "Strong Buy Zone",
    status: "Green",
    meaning: "Market fear/stress is high and valuations are more attractive.",
    message: "Review staged buying plan."
  },
  accumulate: {
    state: "Buy / Accumulate Zone",
    status: "Green",
    meaning: "Some opportunity signals are positive.",
    message: "Consider gradual deployment."
  },
  hold: {
    state: "Hold / Normal Zone",
    status: "Yellow",
    meaning: "Mixed or normal market conditions.",
    message: "Stay with regular plan."
  },
  caution: {
    state: "Caution / Reduce Risk Zone",
    status: "Red",
    meaning: "Valuations are stretched and fear is low.",
    message: "Review risk exposure."
  },
  defensive: {
    state: "Defensive / Raise Cash Zone",
    status: "Red",
    meaning: "Multiple overheating or inflation/stress signals are red.",
    message: "Consider defensive positioning."
  }
};

const actionSignalLayers = {
  valuation: ["buffett-indicator", "shiller-cape", "sp500-pe", "market-breadth", "equity-risk-premium"],
  stress: [
    "vix",
    "fear-greed-index",
    "naaim-exposure",
    "put-call-ratio",
    "yield-curve",
    "credit-spreads",
    "gold-oil-ratio",
    "gold-silver-ratio",
    "commodity-inflation-radar",
    "dxy"
  ]
};

function renderMarketSignalDashboard(topic) {
  if (!topic.marketSignalDashboard) {
    marketDashboardSectionEl.hidden = true;
    marketDashboardContentEl.innerHTML = "";
    return;
  }

  const alertIndicators = getDashboardAlertIndicators();
  const alertSummary = getDashboardAlertSummary(alertIndicators);
  const indicators = alertIndicators.length ? alertIndicators : getMarketSignalIndicators();
  const generatedAt = alertSummary.lastUpdated || (
    liveMarketSignals && liveMarketSignals.generatedAt
      ? formatMarketDate(liveMarketSignals.generatedAt)
      : "Sample values"
  );
  const dashboardDisclaimer = liveMarketSignals?.educationalDisclaimer
    || "This dashboard is for education and family discussion only. It does not provide automatic buy or sell instructions.";

  marketDashboardSectionEl.hidden = false;
  marketDashboardContentEl.innerHTML = `
    <div class="market-dashboard">
      ${renderCurrentMarketAlerts(alertSummary)}
      ${renderActionSignal(getActionSignal(alertIndicators, alertSummary))}
      ${renderSignalGroupDashboard(indicators)}
      <div class="market-summary-panel" aria-label="Compact market signal dashboard">
        <div class="market-summary-copy">
          <p class="eyebrow">Compact signal board</p>
          <h4>Latest market signal dashboard</h4>
          <p>Latest dashboard update: ${generatedAt}. Signals are for education and family discussion only, not automatic financial advice.</p>
        </div>
        <div class="market-table-wrap">
          <table class="market-signal-table">
            <thead>
              <tr>
                <th scope="col">Indicator</th>
                <th scope="col">Latest Value</th>
                <th scope="col">Status</th>
                <th scope="col">Data</th>
                <th scope="col">Date Updated</th>
                <th scope="col">Green</th>
                <th scope="col">Yellow</th>
                <th scope="col">Red</th>
              </tr>
            </thead>
            <tbody>
              ${indicators.map(renderMarketSignalRow).join("")}
            </tbody>
          </table>
        </div>
      </div>
      <div class="market-indicator-library" aria-label="Detailed indicator library">
        ${indicators.map(renderMarketIndicatorCard).join("")}
      </div>
      <aside class="market-disclaimer">
        <strong>Important disclaimer</strong>
        <p>${dashboardDisclaimer}</p>
      </aside>
    </div>
  `;
}

function renderMarketSignalRow(indicator) {
  return `
    <tr>
      <th scope="row">${indicator.name}</th>
      <td>${renderMarketValue(indicator)}</td>
      <td>${renderStatusPill(indicator.status || indicator.currentStatus)}</td>
      <td>${renderDataStatus(indicator)}</td>
      <td>${indicator.lastUpdated || indicator.dateUpdated || "Manual"}</td>
      <td><span class="signal-pill signal-green">${getThreshold(indicator, "green")}</span></td>
      <td><span class="signal-pill signal-yellow">${getThreshold(indicator, "yellow")}</span></td>
      <td><span class="signal-pill signal-red">${getThreshold(indicator, "red")}</span></td>
    </tr>
  `;
}

function renderMarketIndicatorCard(indicator, index) {
  const updated = indicator.lastUpdated || indicator.dateUpdated || "Manual update";
  const alertMessage = indicator.message || indicator.currentStatus || "Sample alert status";
  const whyItMatters = indicator.explanation || indicator.whyWeWatchIt || indicator.why;

  return `
    <details class="market-indicator-card" ${index < 2 ? "open" : ""}>
      <summary>
        <span>
          <strong>${indicator.name}</strong>
          <small>${renderMarketValue(indicator)} - ${updated}</small>
        </span>
        ${renderStatusPill(indicator.status || indicator.currentStatus)}
      </summary>
      <div class="indicator-detail-grid">
        ${renderIndicatorField("Latest Value", renderMarketValue(indicator))}
        ${renderIndicatorField("Data Status", indicator.fetchStatus || (indicator.isManual ? "manual" : "sample"))}
        ${renderIndicatorField("Alert Message", alertMessage)}
        ${renderIndicatorField("Why It Matters", whyItMatters)}
        ${renderIndicatorField("Green Signal", getThreshold(indicator, "green"), "signal-green")}
        ${renderIndicatorField("Yellow Signal", getThreshold(indicator, "yellow"), "signal-yellow")}
        ${renderIndicatorField("Red Signal", getThreshold(indicator, "red"), "signal-red")}
        ${renderIndicatorNotes(indicator.notes)}
        ${renderSourceField(indicator)}
      </div>
    </details>
  `;
}

function renderIndicatorField(label, value, signalClass = "") {
  return `
    <div class="indicator-field ${signalClass}">
      <span>${label}</span>
      <p>${value}</p>
    </div>
  `;
}

function renderIndicatorNotes(value) {
  return `
    <label class="indicator-field indicator-notes">
      <span>Notes</span>
      <textarea rows="3">${value}</textarea>
    </label>
  `;
}

function getDashboardAlertIndicators() {
  if (liveMarketSignals && Array.isArray(liveMarketSignals.indicators)) {
    return liveMarketSignals.indicators.map((indicator) => ({
      ...indicator,
      value: indicator.currentValue || indicator.latestValue,
      latestValue: indicator.currentValue || indicator.latestValue,
      lastUpdated: indicator.lastUpdated || indicator.dateUpdated,
      sourceName: indicator.source || indicator.sourceName,
      sourceLink: indicator.sourceUrl || indicator.sourceLink,
      message: indicator.alertMessage || indicator.message,
      explanation: indicator.whyWeWatchIt || indicator.explanation
    }));
  }

  if (!dashboardMarketAlerts || !Array.isArray(dashboardMarketAlerts.alerts)) return [];

  return dashboardMarketAlerts.alerts.map((alert) => ({
    ...alert,
    latestValue: alert.value,
    thresholds: marketAlertThresholdRules[alert.id] || {},
    sourceName: alert.source,
    sourceLink: ""
  }));
}

function getDashboardAlertSummary(alerts) {
  const counts = alerts.reduce(
    (summary, alert) => {
      const status = (alert.status || "Yellow").toLowerCase();

      if (status === "green") summary.green += 1;
      else if (status === "red") summary.red += 1;
      else if (status === "yellow") summary.yellow += 1;

      return summary;
    },
    { green: 0, yellow: 0, red: 0 }
  );
  const overall = counts.red > 0 ? "Red" : counts.yellow > 0 ? "Yellow" : "Green";
  const lastUpdated = getLatestAlertDate(alerts) || dashboardMarketAlerts?.generatedAt || "";
  const summaryMessage = getAlertSummaryMessage(overall, counts);

  return {
    overall,
    lastUpdated,
    message: summaryMessage,
    counts
  };
}

function getLatestAlertDate(alerts) {
  const dates = alerts
    .map((alert) => alert.lastUpdated)
    .filter(Boolean)
    .sort();

  return dates.length ? dates[dates.length - 1] : "";
}

function getAlertSummaryMessage(overall, counts) {
  if (overall === "Red") {
    return `${counts.red} red indicator${counts.red === 1 ? "" : "s"} need extra caution in today's family discussion.`;
  }

  if (overall === "Yellow") {
    return "Most signals are mixed or neutral, so this is a watch-and-learn environment.";
  }

  return "All sample indicators are green, suggesting a more favorable discussion backdrop.";
}

function renderCurrentMarketAlerts(summary) {
  return `
    <section class="current-market-alerts ${getStatusClass(summary.overall)}" aria-label="Current Market Alerts">
      <div class="current-alert-heading">
        <div>
          <p class="eyebrow">Current Market Alerts</p>
          <h4>${summary.overall} alert level</h4>
        </div>
        ${renderStatusPill(summary.overall)}
      </div>
      <p>${summary.message}</p>
      <dl class="alert-count-grid">
        <div>
          <dt>Last updated</dt>
          <dd>${summary.lastUpdated || "Sample values"}</dd>
        </div>
        <div>
          <dt>Green</dt>
          <dd>${summary.counts.green}</dd>
        </div>
        <div>
          <dt>Yellow</dt>
          <dd>${summary.counts.yellow}</dd>
        </div>
        <div>
          <dt>Red</dt>
          <dd>${summary.counts.red}</dd>
        </div>
      </dl>
    </section>
  `;
}

function getActionSignal(alerts, alertSummary) {
  if (liveMarketSignals && liveMarketSignals.actionSignal) {
    return normalizeActionSignal(liveMarketSignals.actionSignal, alerts, alertSummary);
  }

  if (dashboardMarketAlerts && dashboardMarketAlerts.actionSignal) {
    return normalizeActionSignal(dashboardMarketAlerts.actionSignal, alerts, alertSummary);
  }

  const valuationAlerts = alerts.filter((alert) => actionSignalLayers.valuation.includes(alert.id));
  const stressAlerts = alerts.filter((alert) => actionSignalLayers.stress.includes(alert.id));
  const valuationRed = countStatus(valuationAlerts, "Red");
  const valuationGreen = countStatus(valuationAlerts, "Green");
  const stressRed = countStatus(stressAlerts, "Red");
  const stressGreen = countStatus(stressAlerts, "Green");
  const complacencyRed = alerts.some((alert) => ["vix", "fear-greed-index"].includes(alert.id) && alert.status === "Red");
  let definition = actionSignalStates.hold;

  if (stressRed >= 3) {
    definition = actionSignalStates.defensive;
  } else if (valuationRed >= 2 && complacencyRed) {
    definition = actionSignalStates.caution;
  } else if (valuationGreen >= 2 && stressGreen >= 3) {
    definition = actionSignalStates.strongBuy;
  } else if (stressGreen >= 2 && valuationRed === 0) {
    definition = actionSignalStates.accumulate;
  }

  return normalizeActionSignal(
    {
      ...definition,
      confidence: getActionConfidence(alerts),
      supportingIndicators: getActionIndicatorNames(alerts, "Green"),
      warningIndicators: getActionIndicatorNames(alerts, "Red"),
      lastUpdated: alertSummary.lastUpdated,
      notes: "Editable by K/Sophie."
    },
    alerts,
    alertSummary
  );
}

function normalizeActionSignal(signal, alerts, alertSummary) {
  return {
    state: signal.state || actionSignalStates.hold.state,
    status: signal.status || "Yellow",
    confidence: signal.confidence || getActionConfidence(alerts),
    message: signal.message || actionSignalStates.hold.message,
    meaning: signal.meaning || actionSignalStates.hold.meaning,
    supportingIndicators: signal.supportingIndicators || getActionIndicatorNames(alerts, "Green"),
    warningIndicators: signal.warningIndicators || getActionIndicatorNames(alerts, "Red"),
    lastUpdated: signal.lastUpdated || alertSummary.lastUpdated || "Sample values",
    notes: signal.notes || "Editable by K/Sophie."
  };
}

function renderActionSignal(signal) {
  return `
    <section class="action-signal-panel ${getStatusClass(signal.status)}" aria-label="Action Signal">
      <div class="action-signal-heading">
        <div>
          <p class="eyebrow">Action Signal</p>
          <h4>${signal.state}</h4>
        </div>
        ${renderStatusPill(signal.status)}
      </div>
      <p class="action-signal-message">${signal.message}</p>
      <div class="action-signal-grid">
        <div>
          <span>Meaning</span>
          <p>${signal.meaning}</p>
        </div>
        <div>
          <span>Confidence</span>
          <p>${signal.confidence}</p>
        </div>
        <div>
          <span>Last Updated</span>
          <p>${signal.lastUpdated}</p>
        </div>
      </div>
      <div class="action-signal-lists">
        ${renderActionSignalList("Supporting Indicators", signal.supportingIndicators)}
        ${renderActionSignalList("Warning Indicators", signal.warningIndicators)}
      </div>
      <label class="indicator-field indicator-notes action-signal-notes">
        <span>Notes for K/Sophie</span>
        <textarea rows="3">${signal.notes}</textarea>
      </label>
      <p class="action-signal-disclaimer">This dashboard supports family investment discussion. It does not replace personal judgment or professional financial advice.</p>
    </section>
  `;
}

function renderActionSignalList(title, items) {
  const listItems = items && items.length ? items : ["No sample indicators in this group yet."];

  return `
    <div class="action-signal-list">
      <span>${title}</span>
      <ul>
        ${listItems.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </div>
  `;
}

function renderSignalGroupDashboard(indicators) {
  const valuation = indicators.filter((indicator) => indicator.group === "valuation");
  const radar = indicators.filter((indicator) => indicator.group === "opportunityRadar");

  return `
    <div class="signal-group-dashboard" aria-label="Phase 1 signal groups">
      ${renderSignalGroupPanel("Valuation Dashboard", valuation, "Phase 1 keeps valuation indicators manual until reliable sources are approved.")}
      ${renderSignalGroupPanel("Sophie Opportunity Radar", radar, "Live Phase 1 stress, rates, currency, and commodity-ratio indicators.")}
    </div>
  `;
}

function renderSignalGroupPanel(title, indicators, emptyText) {
  return `
    <section class="signal-group-panel">
      <div class="signal-group-heading">
        <h4>${title}</h4>
        <span>${indicators.length} signals</span>
      </div>
      ${
        indicators.length
          ? `<div class="signal-chip-list">${indicators.map(renderSignalChip).join("")}</div>`
          : `<p>${emptyText}</p>`
      }
    </section>
  `;
}

function renderSignalChip(indicator) {
  return `
    <article class="signal-chip ${getStatusClass(indicator.status)}">
      <strong>${indicator.name}</strong>
      <span>${renderMarketValue(indicator)}</span>
      ${renderStatusPill(indicator.status || "Manual")}
    </article>
  `;
}

function countStatus(alerts, status) {
  return alerts.filter((alert) => alert.status === status).length;
}

function getActionIndicatorNames(alerts, status) {
  return alerts
    .filter((alert) => alert.status === status)
    .map((alert) => `${alert.name}: ${alert.message}`);
}

function getActionConfidence(alerts) {
  const activeLayerCount = new Set(alerts.map((alert) => {
    if (actionSignalLayers.valuation.includes(alert.id)) return "valuation";
    if (actionSignalLayers.stress.includes(alert.id)) return "stress";
    return "other";
  })).size;

  if (alerts.length >= 12 && activeLayerCount >= 2) return "High";
  if (alerts.length >= 8 && activeLayerCount >= 2) return "Medium";
  return "Low";
}

function getMarketSignalIndicators() {
  if (liveMarketSignals && Array.isArray(liveMarketSignals.indicators) && liveMarketSignals.indicators.length > 0) {
    return liveMarketSignals.indicators;
  }

  return marketSignalIndicators.map((indicator) => ({
    ...indicator,
    latestValue: indicator.currentStatus,
    dateUpdated: "Manual",
    status: "Manual",
    whatItMeans: indicator.meaning,
    whyWeWatchIt: indicator.why,
    thresholds: {
      green: indicator.green,
      yellow: indicator.yellow,
      red: indicator.red
    },
    sourceName: indicator.source,
    sourceLink: ""
  }));
}

function getLatestMarketAlerts() {
  if (latestMarketAlerts && Array.isArray(latestMarketAlerts.alerts)) {
    return latestMarketAlerts.alerts;
  }

  return [];
}

function renderMarketAlerts(alerts) {
  if (!alerts.length) {
    return `
      <aside class="market-alert-panel market-alert-panel-quiet">
        <strong>No active threshold alerts</strong>
        <p>The latest signal file did not report any green opportunity or red caution alerts.</p>
      </aside>
    `;
  }

  return `
    <aside class="market-alert-panel">
      <strong>Latest alert summary</strong>
      <div class="market-alert-list">
        ${alerts
          .map(
            (alert) => `
              <article class="market-alert-card ${getStatusClass(alert.status)}">
                <span>${alert.status}</span>
                <h5>${alert.indicator}</h5>
                <p>${alert.summary}</p>
                <small>${alert.dateUpdated || "Latest update"} · ${alert.reminder}</small>
              </article>
            `
          )
          .join("")}
      </div>
    </aside>
  `;
}

function renderMarketValue(indicator) {
  const value = indicator.latestValue || indicator.currentStatus || "Manual update";
  if (value === "Data unavailable" || value === "Manual update needed" || value === "Phase 1 manual") {
    return value;
  }

  const label = indicator.valueLabel ? ` ${indicator.valueLabel}` : "";
  return `${value}${label}`;
}

function renderStatusPill(status = "Manual") {
  return `<span class="status-pill ${getStatusClass(status)}">${status}</span>`;
}

function renderDataStatus(indicator) {
  const status = indicator.fetchStatus || (indicator.isManual ? "manual" : "sample");
  const label = status === "live" ? "Live" : status === "error" ? "Data unavailable" : "Manual";
  const className = status === "live" ? "status-green" : status === "error" ? "status-red" : "status-manual";

  return `<span class="status-pill ${className}">${label}</span>`;
}

function getThreshold(indicator, key) {
  return (indicator.thresholds && indicator.thresholds[key]) || indicator[key] || "Manual threshold";
}

function renderSourceField(indicator) {
  const sourceName = indicator.sourceName || indicator.source || "Source placeholder";
  const sourceLink = indicator.sourceLink || "";

  return `
    <div class="indicator-field">
      <span>Source Link Placeholder</span>
      <p>
        ${
          sourceLink
            ? `<a href="${sourceLink}" target="_blank" rel="noopener noreferrer">${sourceName}</a>`
            : sourceName
        }
      </p>
    </div>
  `;
}

function getStatusClass(status = "") {
  const normalized = status.toLowerCase();

  if (normalized === "green") return "status-green";
  if (normalized === "yellow") return "status-yellow";
  if (normalized === "red") return "status-red";
  return "status-manual";
}

function formatMarketDate(value) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return value;

  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

async function loadMarketSignalData() {
  const [signals, dashboardAlerts] = await Promise.all([
    fetchJson("data/market-signals.json"),
    fetchJson("data/market-alerts.json")
  ]);

  liveMarketSignals = signals;
  latestMarketAlerts = null;
  dashboardMarketAlerts = dashboardAlerts;

  const activeTopic = getActiveFamily().topics.find((topic) => topic.id === activeTopicId);
  if (activeTopic && activeTopic.marketSignalDashboard && !detailEl.hidden) {
    renderMarketSignalDashboard(activeTopic);
  }
}

async function fetchJson(url) {
  try {
    const response = await fetch(url, { cache: "no-store" });

    if (!response.ok) return null;

    return response.json();
  } catch {
    return null;
  }
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
  activeOneByOneBookIndex = null;
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
      <p class="practice-section-intro">Choose a Suzuki book, then pick one song to open a focused practice view.</p>
      ${renderOneByOneBooks(books)}
    </article>
  `;
}

function renderOneByOneBooks(books) {
  return `
    <div class="one-by-one-books" id="one-by-one-books">
      ${books
        .map((book, bookIndex) => {
          const isOpen = activeOneByOneBookIndex === bookIndex;
          return `
            <section class="song-book-card ${isOpen ? "active" : ""}" data-one-by-one-book-card="${bookIndex}">
              <button
                class="song-book-toggle"
                type="button"
                data-one-by-one-book-toggle="${bookIndex}"
                aria-expanded="${isOpen ? "true" : "false"}"
                aria-controls="song-list-${bookIndex}"
              >
                <span>${book.title}</span>
                <small>${book.songs.length} songs</small>
              </button>
              ${
                isOpen
                  ? `<div class="song-list" id="song-list-${bookIndex}">
                      ${book.songs
                        .map((song, songIndex) => {
                          return `
                            <button class="song-button" type="button" data-song-book-index="${bookIndex}" data-song-index="${songIndex}">
                              ${song.title}
                            </button>
                          `;
                        })
                        .join("")}
                    </div>`
                  : ""
              }
            </section>
          `;
        })
        .join("")}
    </div>
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

function setActiveOneByOneBook(bookIndex) {
  if (!currentPracticeLibrary) return;

  activeOneByOneBookIndex = bookIndex;
  updateOneByOneBooks();
}

function toggleActiveOneByOneBook(bookIndex) {
  if (!currentPracticeLibrary) return;

  activeOneByOneBookIndex = activeOneByOneBookIndex === bookIndex ? null : bookIndex;
  updateOneByOneBooks();
}

function updateOneByOneBooks() {
  const list = document.querySelector("#one-by-one-books");
  if (!list || !currentPracticeLibrary) return;

  list.outerHTML = renderOneByOneBooks(currentPracticeLibrary.oneByOneBooks);
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
      ${renderTechniqueKeyPoints(technique.keyPoints)}
      <button class="practice-action-button" type="button" data-technique-level-index="${levelIndex}" data-technique-index="${techniqueIndex}">
        Watch Tutorial
      </button>
      <div class="technique-inline-video" data-technique-slot="${levelIndex}-${techniqueIndex}" hidden></div>
    </article>
  `;
}

function renderTechniqueKeyPoints(keyPoints = []) {
  if (!keyPoints.length) return "";

  return `
    <div class="technique-key-points">
      <span class="practice-type">Watch for</span>
      <ul>
        ${keyPoints.map((point) => `<li>${point}</li>`).join("")}
      </ul>
    </div>
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
      ${item.notes ? `<p class="technique-notes">${item.notes}</p>` : ""}
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
      note: getSongPracticeNote(book, song)
    })}
  `;
  detail.hidden = false;
  detail.scrollIntoView({ behavior: "smooth", block: "start" });
}

function getSongPracticeNote(book, song) {
  if (song.timestamp) return `Starts at ${song.timestamp}.`;
  if (song.url && song.url !== book.url) return "";

  return `Connected to ${book.title} one-by-one video for now. ${song.todo}`;
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
    Boolean(topic.marketSignalDashboard) ||
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

  const startSeconds = getYouTubeStartSeconds(url);
  const startQuery = startSeconds ? `?start=${startSeconds}` : "";
  const watchMatch = url.match(/[?&]v=([^&]+)/);
  if (watchMatch) {
    return `https://www.youtube.com/embed/${watchMatch[1]}${startQuery}`;
  }

  const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
  if (shortMatch) {
    return `https://www.youtube.com/embed/${shortMatch[1]}${startQuery}`;
  }

  return "";
}

function getYouTubeStartSeconds(url) {
  const timeMatch = url.match(/[?&](?:t|start)=([^&]+)/);
  if (!timeMatch) return 0;

  const timeValue = decodeURIComponent(timeMatch[1]);
  if (/^\d+$/.test(timeValue)) return Number(timeValue);

  const hours = timeValue.match(/(\d+)h/);
  const minutes = timeValue.match(/(\d+)m/);
  const seconds = timeValue.match(/(\d+)s/);

  return (
    (hours ? Number(hours[1]) * 3600 : 0) +
    (minutes ? Number(minutes[1]) * 60 : 0) +
    (seconds ? Number(seconds[1]) : 0)
  );
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
  activeTopicId = "";
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

  const bookToggle = event.target.closest("[data-one-by-one-book-toggle]");
  if (bookToggle) {
    toggleActiveOneByOneBook(Number(bookToggle.dataset.oneByOneBookToggle));
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

practiceLibraryListEl.addEventListener("mouseover", (event) => {
  const bookCard = event.target.closest("[data-one-by-one-book-card]");
  if (!bookCard || !practiceLibraryListEl.contains(bookCard)) return;

  const bookIndex = Number(bookCard.dataset.oneByOneBookCard);
  if (activeOneByOneBookIndex === bookIndex) return;

  setActiveOneByOneBook(bookIndex);
});

practiceLibraryListEl.addEventListener("input", (event) => {
  if (event.target.id !== "technique-search") return;

  techniqueFilters.search = event.target.value;
  updateTechniqueFilters();
});

backButtonEl.addEventListener("click", () => {
  activeTopicId = "";
  detailEl.hidden = true;
  document.querySelector(".family-panel").scrollIntoView({ behavior: "smooth", block: "start" });
});

renderTabs();
renderTopics();
loadMarketSignalData();
homeHeroPhotoEl.style.backgroundImage = backgroundWithImages(
  "linear-gradient(180deg, rgba(38, 31, 22, 0.08) 0%, rgba(38, 31, 22, 0.2) 42%, rgba(38, 31, 22, 0.72) 100%)",
  homeImages.hero,
  homeImages.defaultTopic
);
