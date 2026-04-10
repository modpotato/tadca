# Timeline

<script setup>
const timelineEvents = [
  {
    date: '1996-10-15',
    title: 'Caine Created',
    type: 'lore',
    description: 'Caine\'s core created in Lisp. C&A company active.',
    details: [
      'Lisp-based AI system',
      'Created by Kinger and Scratch',
      'C&A company specialized in AI development',
      'Source: Episode 8 terminal (caine-core.lisp [Oct 15, 1996])'
    ]
  },
  {
    date: '1996-10-15',
    title: '57x Defense System Created',
    type: 'lore',
    description: 'Scratch creates the 57x immersive AI defense system.',
    details: [
      'Built by Scratch (genius programmer)',
      'Purpose: prevent data deletion',
      'Scratch wanted immortality',
      'Later inherited by Caine',
      'Source: Episode 8 terminal ("57x immersive AI defense system")'
    ]
  },
  {
    date: '1999-10-15',
    title: 'Original Group Joins Circus',
    type: 'lore',
    description: 'Kinger, Queenie, Scratch, and other C&A employees enter the Digital Circus.',
    details: [
      'All trapped on same day: October 15',
      'Kinger and Queenie married in real world',
      'Scratch had brain tumor (influenced ideas)',
      'Wormo, Bizco, Rattie, Spike also joined',
      'Source: Episode 8 (Kinger dialogue), terminal ([Scratch].dat [Oct 15, 1999])'
    ]
  },
  {
    date: '1999-10-15',
    title: 'First Abstraction (Scratch)',
    type: 'lore',
    description: 'Scratch becomes the first character to abstract.',
    details: [
      'Caine messed with Scratch\'s mind',
      'Felt responsible for trapping everyone',
      'Caine absorbed Scratch (like AM in I Have No Mouth)',
      'Scratch\'s code is now part of Caine',
      'Source: Episode 8 (Kinger dialogue), TV Tropes character page'
    ]
  },
  {
    date: '2008-10-15',
    title: 'Ragatha Joins',
    type: 'lore',
    description: 'Ragatha enters the circus after Kinger was alone for years.',
    details: [
      'Worked in real estate',
      'Wealthy family background',
      'Emotionally abusive mother',
      'October 15th again (same date pattern)',
      'Source: Episode 8 terminal ([Ragatha].dat [Oct 15, 2008])'
    ]
  },
  {
    date: '2023-10-05',
    title: 'Website Launch',
    type: 'website',
    description: 'thewackywatch.com goes live.',
    details: [
      'First capture: October 9, 2023',
      'Wix platform',
      'Site revision 449',
      'Source: Archive.org (first capture Oct 9, 2023)'
    ]
  },
  {
    date: '2023-10-13',
    title: 'Episode 1: Pilot',
    type: 'episode',
    description: 'Pomni enters the Digital Circus.',
    details: [
      '200+ million views in first month',
      'Kaufmo abstracted before events',
      'Exit door leads to void',
      'Caine reveals "mind-bending paraphernalia"',
      'Source: YouTube upload date, Glitch Productions'
    ]
  },
  {
    date: '2024-05-03',
    title: 'Episode 2: Candy Carrier Chaos!',
    type: 'episode',
    description: 'Gummigoo learns he\'s an NPC.',
    details: [
      'Candy Canyon Kingdom adventure',
      'Gummigoo deleted by Caine',
      'Kaufmo\'s funeral held',
      'Source: Fandom Wiki (tadc.fandom.com/wiki/Candy_Carrier_Chaos!)'
    ]
  },
  {
    date: '2024-09-27',
    title: 'Episode 3: Mildenhall Manor',
    type: 'episode',
    description: 'Kinger and Pomni explore haunted house.',
    details: [
      'Kinger mentions Queenie (his abstracted wife)',
      '7 years of computer science revealed',
      '57 easter egg confirmed',
      'Zooble\'s body dysmorphia shown',
      'Source: Fandom Wiki, Episode 3 dialogue'
    ]
  },
  {
    date: '2024-11-29',
    title: 'Spudsy\'s Era Begins',
    type: 'website',
    description: 'Website becomes Spudsy\'s restaurant.',
    details: [
      '$57.57 Dobby Dog',
      'Job application always rejected',
      'Hidden exit door to Gooseworx Twitter',
      'Source: Archive.org (capture Nov 30, 2024)'
    ]
  },
  {
    date: '2024-12-13',
    title: 'Episode 4: Fast Food Masquerade',
    type: 'episode',
    description: 'Characters work at Spudsy\'s.',
    details: [
      'Gangle as manager',
      'Stupid Sauce episode',
      'Zooble on strike',
      'Gummigoo doesn\'t remember Pomni',
      'Source: Fandom Wiki (tadc.fandom.com/wiki/Fast_Food_Masquerade)'
    ]
  },
  {
    date: '2025-06-20',
    title: 'Episode 5: Untitled',
    type: 'episode',
    description: 'Character backstories revealed in bar scene.',
    details: [
      'Pomni: supermarket accountant',
      'Gangle: dropped out of graphic design',
      'Zooble: bartender/tattoo artist',
      'Ribbit\'s door shown (abstracted)',
      'Source: Episode 5 bar scene dialogue, Fandom Wiki'
    ]
  },
  {
    date: '2025-08-15',
    title: 'Episode 6: They All Get Guns',
    type: 'episode',
    description: 'Battle royale with Daisy Bell reference.',
    details: [
      'Pomni and Jax sing duet',
      'Jax\'s Ribbit trauma revealed',
      'Zooble confronts Caine',
      '2001: A Space Odyssey homage',
      'Source: Fandom Wiki (tadc.fandom.com/wiki/They_All_Get_Guns)'
    ]
  },
  {
    date: '2025-12-12',
    title: 'Episode 7: Beach Episode',
    type: 'episode',
    description: 'Abel deleted. Escape revealed as scripted.',
    details: [
      'Chinese Room segment',
      'Milk & Cigarette Casserole note',
      'Red/blue button (stay/leave)',
      'STASIS PODS WERE FABRICATION',
      'Episode 9 announced in post-credits',
      'Source: Fandom Wiki (tadc.fandom.com/wiki/Beach_Episode)'
    ]
  },
  {
    date: '2026-03-20',
    title: 'Episode 8: hjsakldfhl',
    type: 'episode',
    description: 'Caine deleted. Circus shatters.',
    details: [
      'Kinger reveals C&A backstory',
      'Scratch had brain tumor',
      'Kinger accidentally deletes Caine',
      'Zooble says "Holy shit" (no filter)',
      'Second AI sabotaged Kinger',
      'Source: Fandom Wiki (tadc.fandom.com/wiki/Hjsakldfhl), Episode 8 terminal'
    ]
  },
  {
    date: '2026-03-23',
    title: 'Research Archive Created',
    type: 'milestone',
    description: 'Complete data bundle compiled.',
    details: [
      'Website confirmed as canon',
      'Episode 8 terminal analyzed',
      'All abstracted characters catalogued',
      '10 documentation files created',
      'Source: Direct research compilation'
    ]
  },
  {
    date: '2026-06-19',
    title: 'Episode 9: Grand Finale',
    type: 'milestone',
    description: 'Series finale. What happens to the characters?',
    details: [
      'Announced in Episode 7 post-credits',
      'Double Episode 8 length (~1 hour)',
      'Will Caine return?',
      'Can they escape?',
      'Source: Episode 7/8 post-credits announcement'
    ]
  }
]
</script>

<Timeline :events="timelineEvents" />

---

## Key Dates

| Date | Event | Details |
|------|-------|---------|
| Oct 15, 1996 | Caine created, 57x defense system | [Terminal Analysis](/research/terminal) |
| Oct 15, 1999 | Original group joins, Scratch abstracts | [Abstracted Characters](/lore/abstracted) |
| Oct 15, 2008 | Ragatha joins | [Character Backstories](/lore/characters#ragatha) |
| Oct 13, 2023 | Episode 1 (Pilot) | [Episode Guide](/lore/episodes#episode-1-pilot) |
| Mar 20, 2026 | Episode 8 - Caine deleted | [Episode Guide](/lore/episodes#episode-8-hjsakldfhl) |
| Jun 19, 2026 | Episode 9 (Grand Finale) | Series finale |

## The October 15th Pattern

Every major event happens on **October 15th**. This is likely not a coincidence:

- Caine created: October 15, 1996
- Original group joins: October 15, 1999
- Ragatha joins: October 15, 2008

The show's episodes air on different dates, but the in-universe events cluster on this date.

---

## Sources

### In-Universe Dates (Oct 15)

| Event | Source |
|-------|--------|
| Caine created (1996) | Episode 8 terminal: `caine-core.lisp [Oct 15, 1996]` |
| 57x defense system (1996) | Episode 8 terminal: "57x immersive AI defense system" |
| Original group joins (1999) | Episode 8 (Kinger dialogue), terminal: `[Scratch].dat [Oct 15, 1999]` |
| Scratch abstraction (1999) | Episode 8 (Kinger mentions first abstraction) |
| Queenie abstraction | Episode 3 (Kinger mentions wife), Episode 8 (flashback) |
| Ragatha joins (2008) | Episode 8 terminal: `[Ragatha].dat [Oct 15, 2008]` |

### Episode Air Dates

| Episode | Air Date | Verified From |
|---------|----------|---------------|
| Pilot | Oct 13, 2023 | YouTube upload date, Glitch Productions |
| Candy Carrier Chaos! | May 3, 2024 | YouTube upload date |
| Mildenhall Manor | Sep 27, 2024 | YouTube upload date |
| Fast Food Masquerade | Dec 13, 2024 | YouTube upload date |
| Untitled | Jun 20, 2025 | YouTube upload date |
| They All Get Guns | Aug 15, 2025 | YouTube upload date |
| Beach Episode | Dec 12, 2025 | YouTube upload date |
| hjsakldfhl | Mar 20, 2026 | YouTube upload date |
| Grand Finale | Jun 19, 2026 | Episode 7/8 post-credits announcement |

### Website Timeline

| Date | Event | Source |
|------|-------|--------|
| Oct 9, 2023 | First archive capture | Archive.org |
| Sep 26, 2024 | First real content | Archive.org |
| Nov 29, 2024 | Spudsy's era begins | Archive.org capture |
| Mar 2026 | Current glitch state | Direct observation |

### Character Backstories

| Character | Source |
|-----------|--------|
| Pomni (supermarket accountant) | Episode 5 bar scene dialogue |
| Ragatha (wealthy family, abusive mother) | Episode 5 bar scene dialogue |
| Gangle (fast food, graphic design dropout) | Episode 5 bar scene dialogue |
| Zooble (bartender, tattoo artist) | Episode 5 bar scene dialogue |
| Kinger (C&A programmer, 7 years CS) | Episode 3 dialogue, Episode 8 confirmation |
| Scratch (brain tumor, genius programmer) | Episode 8 (Kinger dialogue) |
| Queenie (entomology) | Episode 3 (bug references), Fandom Wiki |

### Key Plot Points

| Event | Episode | Source |
|-------|---------|--------|
| Abel deleted | Episode 7 | Episode 7 plot |
| Escape was scripted | Episode 7 | Episode 7 (Caine dialogue) |
| Stasis pods fabricated | Episode 7 | Episode 7 (Caine dialogue) |
| Caine deleted | Episode 8 | Episode 8 plot |
| Second AI sabotaged Kinger | Episode 8 | Episode 8 terminal scene |

See [Sources & References](/sources) for complete list of all sources used.
