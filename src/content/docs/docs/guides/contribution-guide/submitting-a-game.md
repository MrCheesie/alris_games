---
title: Submitting a game
description: How to submit a game to the website
---
# Submitting a game

Contributions to the website are welcome. You can do so by following the steps below (ensure you follow the [contribution guidelines](contribution-guidelines.md)):


1. Starring and forking the [alris_games](https://github.com/mrcheesie/alris_games) repository.
2. Locally cloning your fork's astro branch with `git clone -b astro --single-branch https://github.com/YOUR-USERNAME/alris_games`. Ensure you clone the astro branch
3. `cd`ing into that cloned folder.
4. Adding your game to a folder named after your game and adding that folder in the `src/pages` directory if your game is made with Astro, and `public` if it's made with another framework (vanilla JS, React, Next.js etc.).
5. Adding a `details.json` file in your game folder with the following:

   a. game name

   b. description

   c. date

   e. author

   f. framework/primary language (optional)

:::note
If you are using a framework that is not astro or vanilla, please specify in `details.json`
:::


for example:

```json
{
  "name": "No Generator",
  "author": "Alris",
  "date": "2026-03-01",
  "description": "Ever wanted to refuse without sounding offensive? Now, you can get witty and funny ways to say no using this website.",
  "framework": "Astro",
  "lang": "JavaScript"
}
```

Your game will be added to `games.html` manually by the owner of the repo.

6\. Pushing your changes to your forked repository.
7\. Creating a pull request to the original repository
8\. The pull request will generally be accepted within 2-3 days, or else closed with some feedback.
