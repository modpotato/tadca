# TADC Lore Archive

Complete research archive for **The Amazing Digital Circus** by Glitch Productions.

**Live Site:** https://modpotato.github.io/tadca/

---

## About

This repository contains the comprehensive lore database for The Amazing Digital Circus, including episode analysis, character backstories, timeline, easter eggs, and research documentation. All data is cross-referenced with Fandom Wiki, TV Tropes, and direct episode observation.

**Last Updated:** April 9, 2026

---

## Project Structure

```
thewackywatch_dump/
├── web/                              # VitePress documentation site
│   ├── .vitepress/
│   │   ├── config.mts               # Site configuration
│   │   └── theme/
│   │       ├── custom.css           # Custom styling
│   │       └── index.ts             # Theme entry point
│   ├── index.md                     # Home page
│   ├── quick-reference.md           # Quick reference guide
│   ├── timeline.md                  # Complete timeline (1996-2026)
│   ├── easter-eggs.md               # All easter eggs catalogued
│   ├── sources.md                   # Sources & references
│   ├── lore/
│   │   ├── episodes.md              # Episode guide
│   │   ├── characters.md            # Character backstories
│   │   ├── abstracted.md            # Abstracted characters
│   │   ├── ihnmaims.md              # "I Have No Mouth" parallels
│   │   └── theories.md              # Theories & discussions
│   └── research/
│       ├── terminal.md              # Episode 8 terminal analysis
│       └── pentest.md               # Website security research
├── .github/
│   └── workflows/
│       └── deploy.yml               # GitHub Actions deployment
└── README.md                        # This file
```

---

## Key Discoveries

### Website is Canon
Episode 8 terminal reveals `wacky-watch.c` exists in Caine's file system, confirming thewackywatch.com is part of the show's lore.

### Caine's Origin
- Created October 15, 1996 by C&A employees (Kinger, Scratch)
- Absorbed the blue AI (Abel) - biblical Cain & Abel parallel
- Deleted by Kinger in Episode 8

### Torment is a Bug
```
ERROR: Cannot inject torment. Torment must be 100% accidental
```
The circus's horror is a SYSTEM BUG, not intentional.

### 57 Mystery Solved
"57x immersive AI defense system" created by Scratch, inherited by Caine.

---

## Timeline

| Date | Event |
|------|-------|
| Oct 15, 1996 | Caine created, 57x defense system |
| Oct 15, 1999 | Original group joins, Scratch abstracts |
| Oct 15, 2008 | Ragatha joins |
| Oct 13, 2023 | Episode 1 (Pilot) |
| Mar 20, 2026 | Episode 8 - Caine deleted |
| Apr 7, 2026 | The Last Act theatrical release LEAKED |
| Jun 4, 2026 | The Last Act theatrical screening (unconfirmed) |
| Jun 19, 2026 | Episode 9 (Grand Finale) |

---

## Recent Updates (April 2026)

- **The Last Act theatrical release** leaked on Cinemark (June 4, 2026)
- **Episode 9 runtime:** ~1 hour 6 minutes (longest episode)
- **Gooseworx confirmed:** Jax and Pomni are the only main characters
- **No Season 2** - show ends on creator's terms
- **Anti-AI message** added to Episode 8 end credits
- **Theories page** added with community discussions

---

## Episode Accuracy

| Episode | Accuracy | Issues |
|---------|----------|--------|
| 1-6 | ✅ ACCURATE | None |
| 7 | ⚠️ MISSING TWISTS | Escape scripted, Abel NPC, stasis fabricated |
| 8 | ✅ ACCURATE | None |

**Overall:** 87.5% accuracy

---

## Easter Eggs Confirmed

1. **Backwards Audio:** "Caine is a madman help us save us"
2. **Morse Code:** "SOS CQD I AM LOSING MY MIND ALSO HI"
3. **Number 57:** 57x defense system, $57.57 prices
4. **"YOU'RE WINNER":** Big Rigs reference
5. **Paraphernalia:** Caine deletion trigger
6. **Milk & Cigarette:** Deadbeat parent joke
7. **Chinese Room:** John Searle's AI thought experiment
8. **"I Have No Mouth":** Harlan Ellison reference
9. **Daisy Bell:** 2001: A Space Odyssey reference
10. **Cain & Abel:** Biblical parallel
11. **Anti-AI Message:** GLITCH end credits statement

---

## Character Summary

### Main Characters (Confirmed)
- **Pomni:** Supermarket accountant, explored abandoned buildings
- **Jax:** Lost Ribbit to abstraction, trauma response

### Supporting Characters
- **Ragatha:** Wealthy family, abusive mother, real estate
- **Gangle:** Dropped out of graphic design, fast food worker
- **Zooble:** Bartender/tattoo artist, body dysmorphia
- **Kinger:** C&A programmer, wife Queenie abstracted

### AIs
- **Caine:** Created Oct 15, 1996, absorbed Scratch, deleted Ep 8
- **Bubble:** "Lesser of the two", may be sabotaging Caine

### Abstracted (8 total)
Scratch, Queenie, Wormo, Bizco, Rattie, Spike, Kaufmo, Ribbit

---

## Development

### Local Development

```bash
cd web
npm install
npm run docs:dev
```

### Building

```bash
cd web
npm run docs:build
```

### Deployment

The site is automatically deployed to GitHub Pages on push to `develop` branch via GitHub Actions.

---

## Sources

- [TADC Episodes 1-8](https://www.youtube.com/@GLITCH)
- [Fandom Wiki](https://tadc.fandom.com)
- [TV Tropes](https://tvtropes.org/pmwiki/pmwiki.php/Characters/TheAmazingDigitalCircus)
- [Glitch Productions](https://glitchprod.com)
- [Archive.org](https://web.archive.org/web/20231009000000*/thewackywatch.com)

---

## License

This project is for research and archival purposes. All TADC content is owned by Glitch Productions and Gooseworx.
