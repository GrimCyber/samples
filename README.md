# Minecraft & Hytale Portfolio (GitHub Pages Ready)

Static multi-page portfolio website for showcasing environment, prop, character, and animal creations built with Codex-assisted workflows.

## Folder Structure

```text
.
├── index.html
├── portfolio.html
├── about.html
├── contact.html
├── data/
│   └── portfolio.json
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── main.js
│   │   └── portfolio.js
│   ├── images/
│   │   └── favicon.svg
│   ├── gifs/
│   ├── videos/
│   └── thumbnails/
└── README.md
```

## Deploy on GitHub Pages

1. Push this repository to the `main` branch.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` and folder `/ (root)`
4. Save and wait for deployment.
5. Your site will be available at:
   - `https://<your-username>.github.io/<repo-name>/`

## Add New Portfolio Projects

1. Drop media files into existing folders:
   - Images: `assets/images/`
   - GIF previews: `assets/gifs/`
   - Videos: `assets/videos/`
   - Thumbnails: `assets/thumbnails/`
2. Open `data/portfolio.json`.
3. Add a new object in `items` using this format:

```json
{
  "title": "Project Title",
  "description": "Short project summary.",
  "category": "environments",
  "type": "image",
  "src": "./assets/images/project-file.jpg",
  "thumbnail": "./assets/thumbnails/project-thumb.jpg",
  "tags": ["Minecraft", "Environment", "Biome"]
}
```

### Supported categories
- `environments`
- `props`
- `characters`
- `animals`

### Supported media types
- `"type": "image"`
- `"type": "video"` (set `src` to `.mp4`; thumbnail can be GIF/image)

## Update Profile Details

Edit these files for personal info:

- Name/title/intro: `index.html`
- Bio/process/tools: `about.html`
- GitHub/email/contact form: `contact.html`
- Social preview image: `assets/thumbnails/og-cover.svg` (optional, add your own image)

## Notes

- Uses only relative paths for GitHub Pages compatibility.
- No build process required.
- Works by opening `index.html` directly or through static hosting.
