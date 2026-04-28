# GuestGraph · Reputation Intelligence by Buildd From Ideas

A live demo of GuestGraph — the third product in the Buildd From Ideas family, alongside PriceCortex and FolioLens.

> **PriceCortex** sets the price.
> **GuestGraph** earns the trust.
> **FolioLens** shows the owner the score.

## What's in this demo

- **Landing page** (`index.html`) — GuestGraph pitch + Buildd product family + Belmont as proof
- **Owner dashboard** (`pages/dashboard.html`) — live metrics, activity feed, causal findings
- **Action items** (`pages/actions.html`) — featuring the carpet room 105 deep-dive
- **Ask GuestGraph** (`pages/chatbot.html`) — natural language query with two pre-loaded answers
- **Team queue** (`pages/team.html`) — internal review approval workflow with 3-tier risk routing
- **WhatsApp** (`pages/whatsapp.html`) — GM phone + Owner phone alerts side-by-side
- **Monthly report** (`pages/report.html`) — auto-export in the Belmont partnership format

## Deploying to GitHub Pages — 5 minutes

1. **Create a GitHub repo:**
   - Go to github.com → New repository
   - Name it `guestgraph-demo` (or `guestgraph` if you have the org)
   - Make it Public (required for free GitHub Pages)
   - Don't initialize with README

2. **Upload these files:**
   - On the new empty repo page, click "uploading an existing file"
   - Drag every file/folder from inside this folder (`index.html`, `assets/`, `pages/`, `README.md`)
   - Commit changes

3. **Enable Pages:**
   - In the repo, go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main`, Folder: `/ (root)`
   - Save

4. **Wait 1–2 minutes**, then your site is live at:
   `https://YOUR_USERNAME.github.io/REPO_NAME/`

5. **Custom domain (recommended):** point `demo.guestgraph.com` (or whichever domain you secure) to GitHub Pages
   - At your DNS provider, add a CNAME: `demo` → `YOUR_USERNAME.github.io`
   - Add the custom domain in Settings → Pages

## Domain checklist — do this today

Before promoting the demo URL, secure these:

- [ ] `guestgraph.com` (best — owner-friendly)
- [ ] `guestgraph.ai` (great alternative — signals AI-native)
- [ ] `guestgraph.io` (acceptable fallback)
- [ ] `getguestgraph.com` (last resort)

Use Namecheap, Porkbun, or Google Domains. Lock the name today even if you're not building on it for 6 months.

## Trademark

Search "GuestGraph" at uspto.gov/trademark before any public launch. If clean, file the trademark when you have $250 free.

## Updating the demo

Edit any HTML/CSS file and push to GitHub. Changes go live in 1–2 minutes.

## File structure

```
guestgraph-demo/
├── index.html              # Landing page
├── README.md               # This file
├── assets/
│   ├── styles.css          # All styles, all pages
│   └── chrome.js           # Shared nav + footer
└── pages/
    ├── dashboard.html      # Owner dashboard
    ├── actions.html        # Action items (with carpet 105 detail)
    ├── chatbot.html        # Ask GuestGraph
    ├── team.html           # Team review queue
    ├── whatsapp.html       # GM + Owner WhatsApp mockups
    └── report.html         # Monthly report
```

## Tech notes

- Pure HTML/CSS/JS — no build step, no framework
- Charts via Chart.js (CDN)
- Fonts: Fraunces (display) + Inter Tight (body) + JetBrains Mono (numbers)
- All data is hardcoded for demo purposes — production version connects to live extranet data + the GuestGraph knowledge graph

— GuestGraph by Buildd From Ideas
