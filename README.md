# Jyang Santos — Portfolio

Personal portfolio for **Jyang Santos**, junior software developer.
Built with **HTML, CSS and vanilla JavaScript** — no build step, no dependencies.
Glassmorphism dark theme, fully responsive.

🌐 **Live:** https://senpai4santos.github.io/portifolio/

## Local preview
Just open `index.html` in your browser, or:
```bash
python -m http.server 5173
# then visit http://localhost:5173
```

## Project structure
```
portfolio/
├── index.html      # main page
├── styles.css      # glassmorphism theme
├── script.js       # typing effect, scroll reveal, mobile menu, form handler
└── README.md
```

## Wire up the contact form

**Already working out of the box:** if you don't configure anything, the form
opens the visitor's email client pre-filled with their message — no signup,
no monthly limits, works everywhere.

**For a more polished experience** (submissions land directly in your inbox
without opening an email client), wire up Formspree (free tier = 50 msgs/month):

1. Go to https://formspree.io and sign up (free tier is plenty).
2. Create a new form, set the recipient to `contact.jyangsantos@gmail.com`.
3. Copy the form endpoint — it looks like `https://formspree.io/f/xyzabc123`.
4. In `index.html`, find this line and replace `REPLACE_WITH_YOUR_FORMSPREE_ID` with your ID:
   ```html
   <form ... action="https://formspree.io/f/REPLACE_WITH_YOUR_FORMSPREE_ID" ...>
   ```
5. Deploy. Done — submissions land directly in your inbox.

## Deployment
- **Netlify (primary):** drag the `portfolio/` folder onto https://app.netlify.com/drop for an instant URL.
- **GitHub:** the repo at https://github.com/senpai4santos/portifolio is the source of truth. Push to `master` and Netlify re-deploys automatically (if you connect the repo to Netlify).

## Before going live (personalize)
- [ ] Replace `contact.jyangsantos@gmail.com` with your real email in `index.html`.
- [ ] Update the LinkedIn URL (`linkedin.com/in/senpai4santos`) to your real profile.
- [ ] Wire the contact form to Formspree (instructions above).
- [ ] Add real screenshots of your projects in an `assets/` folder and swap the emoji covers.

## Tech
- HTML5 semantic markup
- CSS3 (backdrop-filter, grid, flex, custom properties)
- Vanilla JS (IntersectionObserver, typing effect, fetch)
- Google Fonts: Inter + JetBrains Mono

---
Made with ☕ by Jyang Santos.
