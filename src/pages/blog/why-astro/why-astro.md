The reason Alris Games is built in Astro

# Why Astro

### Alris Games is built on the [Astro](https://astro.build) framework. But it wasn't always this way. Before this, it was built in vanilla HTML and JavaScript, but we decided to migrate it to Astro. We're going to explain why we made this decision and chose Astro

## Why not Vanilla?

Vanilla HTML and JavaScript is still insanely powerful, and it is amazing and easy, and it is compatible with—well—pretty much everything. But the problem was that we wanted to open up the contributions, and it was getting really hard to wrangle all of these sites, and at this point in time, it became clear to me that I was going to have to switch frameworks.

## Why Astro?

Astro is an absolutely amazing framework. It's fast, easy, really simple to migrate to from HTML, and it is also able to integrate components like React. It also supports reusable components, so I didn't have to make my footer over and over again. I was also able to import `details.json` files straight into the `games.astro` file, so contributors can easily add their game details.

This is really helpful in backend site development, speeding up development by a lot, and organising everything so it isn't a pain. However, it is also really good for users because the sites now load much faster.

People who don't know Astro can still contribute because it still integrates perfectly with plain HTML and React, meaning there is no extra learning that any of the contributors have to do.

## Shortcomings

 Astro has a few shortcomings, one of which is that it's not compatible with everything. So, if I want to integrate something that isn't compatible with Astro, I either have to use plain HTML in public, or I have to use a React component, as I did with TLDraw.

Another shortcoming is that it's really hard to load JavaScript and CSS files from the same folder as the Astro file, and it's generally a headache to do. However, I have now mastered the technique, and it's no longer a problem for me.

On a similar topic, it is also a pain to import WebAssembly (`.wasm`) files, which I need because some of my games are made in either Love2D or Macroquad, both of which export to WebAssembly. 

## Conclusion

Despite these shortcomings, I believe switching to Astro was the right call. It made Alris Games faster for users, easier for contributors to add their games, and much more organised for me to maintain.