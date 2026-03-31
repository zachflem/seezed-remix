You are building a personal website for Zach Fleming (seezed.net). 
The site is a React app that will be deployed to Cloudflare Pages via a 
GitHub repo with auto-build on push.

---

## TECH STACK

- React (Vite as the build tool)
- React Router v6 for routing
- Plain CSS or CSS Modules for styling (no Tailwind — we want full control 
  over the glitch aesthetic)
- No backend — fully static

---

## DEPLOYMENT

- GitHub repo → Cloudflare Pages (auto-deploy on push to main)
- Use the Cloudflare Pages MCP and GitHub MCP servers to:
  1. Create the GitHub repo
  2. Push the initial project
  3. Connect and configure Cloudflare Pages to auto-build from that repo
- Build command: `npm run build`
- Output directory: `dist`

---

## DESIGN SYSTEM — "Retro Glitch Terminal"

The aesthetic merges two palettes:
- **Terminal layer**: Deep black background (#0a0a0a), green (#00ff41) and 
  amber (#ffb700) for body text, labels, and structural UI elements
- **Glitch/accent layer**: Cyan (#00fff5) and magenta (#ff00c8) used for 
  interactive elements, hover states, glitch animations, and highlights

### Key visual rules:
- Scanline overlay effect on the body (CSS, subtle — don't overdo it)
- Glitch text animation on the hero name/title (CSS keyframes — offset 
  duplicate layers with clip-path)
- Neon glow on headings using text-shadow (green/amber for h2, cyan for h1)
- Box-shadow neon borders on cards and nav items on hover 
  (cyan or magenta glow)
- Monospace font for UI chrome (e.g. Fira Code or Share Tech Mono via 
  Google Fonts)
- Sans-serif for body content (e.g. Inter) so it stays readable
- All section dividers should use a terminal-style horizontal rule 
  (dashed, amber or green)
- Cursor blink animation on the hero subtitle (like a real terminal prompt)

---

## SITE STRUCTURE

### Navigation (fixed top navbar)
- Logo/name: `seezed.net` — styled with glitch effect, links to `/#home`
- Nav links: `Home`, `About`, `Hobbies`, `Tools`
- On mobile: collapse to a hamburger menu
- Active link highlighted in cyan

### Page: `/` (Homepage — single scroll)

Sections (in order, each with an `id` for anchor linking):

1. **#home — Hero**
   - Full viewport height
   - Large glitch-animated heading: `ZACH FLEMING`
   - Subtitle with blinking cursor: `Crane Operator. IoT Specialist. Tinkerer._`
   - Two CTA buttons: `[ ABOUT ME ]` and `[ MY TOOLS ]` — styled as terminal 
     buttons (border only, neon glow on hover)

2. **#about — About**
   - Brief intro: who Zach is — pull from the content below
   - Contact row: email (zach@seezed.net), phone (0424 838 113), 
     LinkedIn (https://www.linkedin.com/in/zachfleming/)
   - Current projects callout cards:
     - GoExploreAU (http://www.goexplore.net.au) — Adventure Travel Blog
     - SunraysiaSkydivers (http://www.sunraysiaskydivers.com.au) — 
       Growing skydiving in Sunraysia

3. **#hobbies — Hobbies & Interests**
   - Three hobby cards (icon + heading + short paragraph):
     - 📷 **Photography & Videography** — Canon DSLR, phone, DJI Mini 2. 
       Adventure travel content at GoExploreAU.
     - 🚵 **4WD & Mountain Biking** — Family adventures off the beaten track, 
       beaches, Murray River, and new trails on the bike.
     - 🪂 **Skydiving** — Completed AFF, tandem jumps, looking to jump solo 
       again. Involved with SunraysiaSkydivers.

4. **#work — Work History** (brief, not a full resume)
   - Timeline-style layout, terminal aesthetic (green bullets, amber dates)
   - Entries:
     - **Lando Hire** — Crane Operator (returned 2025 after ~10yr break)
     - **Crane & Rigging** — Dogman → Rigger → C0 Open Class Operator 
       (100t+)
     - **Fieldin** — Australian Service Manager, telematics hardware installs
     - **AssetAware IOT (AARadio Services)** — IoT Specialist, custom data 
       acquisition, analysis & automation
     - **Telecommunications** — Various roles across full network lifecycle: 
       DC power, transmission, switching, microwave, cellular, tower builds

### Page: `/tools`

- Heading: `// TOOLS` with glitch effect
- Subheading: `Practical tools built to solve real problems.`
- Grid of tool cards (start with 1 placeholder):
  - Each card: tool name, short description, a tag/badge (e.g. `[WEB]`, 
    `[UTILITY]`), and a `[ LAUNCH ]` button linking to the tool's route
- Placeholder card:
  - Name: `Coming Soon`
  - Description: `Tools are being loaded into the system...`
  - Badge: `[PENDING]`
  - Button: disabled/greyed

---

## CONTENT NOTES

- Keep tone slightly dry and technical — this is a personal site for someone 
  who builds things and gets stuff done, not a marketing site
- No Lorem Ipsum anywhere — use real or clearly placeholder content
- The Lumberjack Eildon camper listing from the current site can be omitted 
  (it's a for-sale listing, not permanent content)

---

## FILE STRUCTURE (suggested)

src/
  components/
    Navbar.jsx
    GlitchText.jsx
    TerminalCard.jsx
    HobbyCard.jsx
    WorkTimeline.jsx
    ToolCard.jsx
  pages/
    Home.jsx
    Tools.jsx
  styles/
    global.css        ← scanlines, CSS vars, fonts, glitch keyframes
    navbar.css
    hero.css
    cards.css
    tools.css
  App.jsx
  main.jsx

---

## DELIVERABLES

1. Full working React/Vite project with all components and pages above
2. GitHub repo created and initial code pushed
3. Cloudflare Pages project connected to the repo, building from `main`, 
   output `dist`
4. Confirm the live Cloudflare Pages URL once build is successful