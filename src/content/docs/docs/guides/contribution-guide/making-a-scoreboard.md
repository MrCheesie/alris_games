---
title: Making a scoreboard
description: Creating a scoreboard for your game.
---

# Making a scoreboard

This guide will show you how to make a scoreboard like the one for Floppy Bird and Bomb Eater.

## Choose your framework

- Vanill HTML and JavaScript
- Astro (recommended)
- React/Vue/Next.js (not recommended)
- Other (not recommended)

## Choose your backend database (all are free and hosted)

- [NocoDB](https://nocodb.com) (used by existing scoreboards and recommended)
- [Baserow](https://baserow.io)
- [Teable](https://teable.ai)
- [Neon Postgres](https://neon.com)
- [Airtable](https://airtable.com)
- [Grist](https://www.getgrist.com) (more spreadsheet-oriented, but works)
- [Supabase](https://supabase.com)
- Google Sheets with a custom script or something like [SheetDB](https://sheetdb.io) (heavily discouraged)
- Other

> I'm just providing options, this doesn't mean all of these are great options, and they all have slightly differing use-cases.
> If you're having trouble choosing, contact me and I can help you.

> Note that it should be reachable with an API request, so something like Excel absolutely will not work.

## Build the site

### Copy-and-paste path (recommended)

Just copy the scoreboard of Floppy bird/Bomb Eater/etc. and plug in your own NocoDB/database URL and API key. Note that your **API key will be exposed**, so it is recommended you set it to read-only and for that specific table.

### Custom

You can make your own scoreboard as well. NocoDB can also create code snippets for you to make it easier. Again, your **API keys will be exposed**, so restrict permissions, and-if possible-set an expiry and rotate them frequently.

## Updating

It is recommended to update the scoreboard manually. If it's possible, add me to collaborate on the database so I can update scores as well.