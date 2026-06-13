# The D and L Family Website

A warm, responsive family knowledge garden built with only HTML, CSS, and JavaScript.

## Files

- `index.html` contains the page structure.
- `styles.css` contains the garden-like visual design and responsive layout.
- `app.js` contains all editable family sections, topics, descriptions, links, photos, notes, and timeline entries.

## How to use

Open `index.html` in a web browser.

## Password

The site has a simple password screen for casual privacy.

The current password is set in `auth-config.js`:

```js
password: "familygarden"
```

Change `"familygarden"` to your preferred family password.

The site remembers the password on each device for 30 days. To change that, edit `rememberDays` in `auth-config.js`.

This is not high-security protection. It is meant only to keep casual visitors out.

## Family Admin Guide

For simple maintenance instructions, open `FAMILY_ADMIN_GUIDE.md`.

## Content Manager

Open `content-manager.html` to add content without editing code.

You can add:

- YouTube videos
- RedNote / Xiaohongshu links
- Notes
- Photos

Simple steps:

1. Open `content-manager.html`.
2. Choose a topic.
3. Choose the content type.
4. Fill in the form and click `Add Content`.
5. Click `Save JSON` to save `family-content.json`.
6. Click `Update Website` and choose `app.js` when your browser asks.
7. Refresh `index.html`.

For the easiest experience, use Chrome or Microsoft Edge because they support direct local file saving. Other browsers may download the JSON file instead.

## How to edit content

Open `app.js` and edit the `familyData` array near the top of the file.

Each topic can include videos, RedNote / Xiaohongshu posts, PDFs, photos, external links, personal notes, and optional timeline entries.

## How to replace homepage photos

The homepage image paths are listed near the top of `app.js` in the `homeImages` section.

Replace these files in the `images` folder with your own family pictures, keeping the same filenames:

- `images/home-hero.jpg`
- `images/liam-card.jpg`
- `images/sophie-card.jpg`
- `images/k-card.jpg`
- `images/family-library-card.jpg`
- `images/liam-header.jpg`
- `images/sophie-header.jpg`
- `images/k-header.jpg`
- `images/family-library-header.jpg`
- `images/topic-default.jpg`

You can also change the paths in `app.js` if you want to use different filenames.

## How to add section headers and topic images

The section header images are set near the top of `app.js` in the `homeImages` section.

Each topic also has an `image` field. The website automatically uses this image for both the topic card and the topic page banner.

Simple topic photo steps:

1. Put topic photos inside the `images/topics` folder.
2. Rename each photo to match the topic file name.
3. Example: for Violin, save the photo as `images/topics/violin.jpg`.
4. If an image is missing, the page shows a soft default garden placeholder instead of breaking.

You can also set a custom image path on any topic like this:

```js
createTopic("violin", "Violin", {
  image: "images/topics/violin.jpg"
})
```

## Photo Guide

Use this checklist to replace topic photos one by one.

- [ ] Violin: `images/topics/violin.jpg` — blooming rose, morning flower, or graceful stem
- [ ] Science: `images/topics/science.jpg` — bee, butterfly, seed pod, or interesting plant detail
- [ ] Coding & Technology: `images/topics/coding-technology.jpg` — garden path pattern, greenhouse window, or plant grid
- [ ] Writing & Grammar: `images/topics/writing-grammar.jpg` — open notebook with flowers, pressed leaves, or quiet desk plant
- [ ] Golf: `images/topics/golf.jpg` — green lawn, dew on grass, or open garden field
- [ ] Tennis: `images/topics/tennis.jpg` — bright sunny flower bed, court-like garden lines, or yellow blooms
- [ ] Math: `images/topics/math.jpg` — spiral fern, sunflower center, leaf symmetry, or patterned petals
- [ ] Chinese: `images/topics/chinese.jpg` — plum blossoms, bamboo, peony, or peaceful garden gate
- [ ] Meditation: `images/topics/meditation.jpg` — lotus, calm pond, moss, or soft morning light
- [ ] Audio Books: `images/topics/audio-books.jpg` — reading chair near plants, quiet flowers, or cozy garden corner
- [ ] Fitness: `images/topics/fitness.jpg` — fresh green path, strong stems, or morning sunlight outdoors
- [ ] Gardening: `images/topics/gardening.jpg` — hands planting, seedlings, flower bed, or garden tools
- [ ] Farming: `images/topics/farming.jpg` — vegetable rows, harvest basket, field plants, or soil close-up
- [ ] Photography: `images/topics/photography.jpg` — flower close-up, light through leaves, or framed garden view
- [ ] Women Who Inspire Me: `images/topics/women-who-inspire-me.jpg` — strong tree, elegant flower, or blooming branch
- [ ] Lifestyle & Aesthetics: `images/topics/lifestyle-aesthetics.jpg` — arranged flowers, soft table setting, or beautiful home plant
- [ ] Philosophical Reflections: `images/topics/philosophical-reflections.jpg` — quiet path, evening garden, still water, or old tree
- [ ] News: `images/topics/news.jpg` — garden notice board, changing seasons, or fresh morning leaves
- [ ] Retirement: `images/topics/retirement.jpg` — peaceful bench, mature tree, long path, or sunset garden
- [ ] Investing: `images/topics/investing.jpg` — strong tree, roots, or long garden path
- [ ] Financial Planning: `images/topics/financial-planning.jpg` — organized garden rows, stepping stones, or carefully pruned hedge
- [ ] Favorite Articles: `images/topics/favorite-articles.jpg` — reading table, journal with leaves, or clipped flowers
- [ ] Family Financial Dashboard: `images/topics/family-financial-dashboard.jpg` — greenhouse shelves, organized seed packets, or garden map
- [ ] Books We Love: `images/topics/books-we-love.jpg` — books with flowers, reading nook, or library shelf with plants
- [ ] Family Photos: `images/topics/family-photos.jpg` — photo album, framed memories, or family picture near flowers
- [ ] Travel Memories: `images/topics/travel-memories.jpg` — path through a garden, scenic overlook, or flowers from a trip
- [ ] Quotes: `images/topics/quotes.jpg` — handwritten note, pressed flower, or simple blossom
- [ ] Family Traditions: `images/topics/family-traditions.jpg` — holiday flowers, family table, or heirloom garden plant
- [ ] Favorite Recipes: `images/topics/favorite-recipes.jpg` — herbs, vegetables, kitchen garden, or recipe card with flowers
- [ ] Annual Goals: `images/topics/annual-goals.jpg` — new seedlings, garden planner, or sunrise over a path
- [ ] Our Family Story Timeline: `images/topics/family-story-timeline.jpg` — tree rings, garden path, family album, or growing vine

## How to add a photo gallery

Each topic has a `photos` list. Add as many photos as you want:

```js
photos: [
  { title: "Garden morning", url: "images/gallery/garden-morning.jpg", caption: "A quiet spring morning" },
  { title: "Family walk", url: "images/gallery/family-walk.jpg", caption: "A favorite afternoon" }
]
```

### Add a YouTube video

```js
videos: [
  { title: "My favorite video", url: "https://www.youtube.com/watch?v=..." }
]
```

### Add a RedNote / Xiaohongshu post

```js
rednotePosts: [
  { title: "Helpful RedNote post", url: "https://www.xiaohongshu.com/..." }
]
```

### Add a PDF

```js
pdfs: [
  { title: "Practice notes", url: "files/practice-notes.pdf" }
]
```

### Add a photo

```js
photos: [
  { title: "Family garden", url: "photos/garden.jpg", caption: "Spring planting" }
]
```

### Add an external link

```js
links: [
  { title: "Helpful article", url: "https://example.com" }
]
```

### Add personal notes

```js
notes: [
  "A helpful idea to remember.",
  "Another note for this topic."
]
```

### Add timeline entries

Timeline entries are useful for topics like `Our Family Story Timeline`.

```js
timeline: [
  { year: "2030", text: "A new family milestone" }
]
```

No backend, login, or external libraries are required.

## Gallery Photo Matching Report

These photos were copied from `images/gallery/` into the website's standard image paths. The original gallery photos were not deleted or changed.

### Homepage and Main Sections

- Home hero: `home.jpg` — wide family garden view; best warm botanical opening image
- Liam's Learning Garden card: `violin 3.jpg` — Liam with violin; strongest match for learning and music
- Sophie's Garden card: `photography 1.jpg` — botanical conservatory scene; elegant garden feeling
- K's Knowledge Center card: `IMG_8551.jpg` — strong tree and open lawn; good symbol for long-term wisdom
- Family Library card: `IMG_8467.JPG` — bright flowers; warm personal library/journal mood
- Liam section header: `violin 3.jpg` — personal learning image with violin
- Sophie section header: `photography 1.jpg` — garden photography and botanical beauty
- K section header: `IMG_8559.jpg` — open lawn and trees; steady planning feeling
- Family Library section header: `IMG_8467.JPG` — colorful flowers; warm memory-keeping feeling

### Topic Images

- Violin: `violin 2.jpg` — violin close-up for the music topic
- Science: `science .JPG` — hands-on science/museum image
- Coding & Technology: `science 4.jpg` — interactive exhibit with technology feeling
- Writing & Grammar: `philosophical 5.JPG` — quote-style image that fits words and reflection
- Golf: `golf 3.jpg` — sunny green course with garden-like landscape
- Tennis: `tennis 4.jpg` — tennis court with warm evening light
- Math: `math.JPG` — math work image
- Chinese: `Chinese 1.jpg` — China travel/culture image
- Meditation: `IMG_1889.JPG` — peaceful tree and path
- Audio Books: `violin 1.jpg` — book cover image, closest match for listening/reading
- Fitness: `fitness 2.jpg` — workout space with natural light
- Gardening: `IMG_4876.jpg` — flower close-up; gentle garden feeling
- Farming: `farming 1.JPG` — vegetable rows and hands-on growing
- Photography: `photography 2.jpg` — botanical conservatory photo
- Women Who Inspire Me: `women who inspire me.jpg` — direct match by filename and theme
- Lifestyle & Aesthetics: `IMG_8467.JPG` — soft colorful flowers
- Philosophical Reflections: `philosophical 2.jpg` — reflective quote/intelligence image
- News: `home.jpg` — broad outdoor view; general family-world context
- Retirement: `retirement.jpg` — peaceful retirement/travel image
- Investing: `IMG_8551.jpg` — mature tree and landscape; roots and long-term growth
- Financial Planning: `IMG_8559.jpg` — organized open lawn; planning and direction
- Favorite Articles: `philosophical 4.jpg` — quote poster; reading and ideas
- Family Financial Dashboard: `science 1.jpg` — organized exhibit/dashboard-like display
- Books We Love: `philosophical.JPG` — book-themed image
- Family Photos: `retirement 3.jpg` — family/person photo with flowers
- Travel Memories: `travel.jpg` — direct travel memory image
- Quotes: `quotes.JPG` — direct quote image
- Family Traditions: `retirement 3.jpg` — family moment with flowers
- Favorite Recipes: `recipes 4.jpg` — vegetables and food preparation
- Annual Goals: `IMG_1889.JPG` — path and tree; forward-looking growth
- Our Family Story Timeline: `IMG_8551.jpg` — mature tree; time, roots, and family growth

HEIC note: `retirement 2.HEIC` was found, but direct HEIC conversion was not available in this environment. A JPG retirement image was already present in `images/gallery/` and was used instead.
