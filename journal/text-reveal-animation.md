---
date: 2020-16-07
title: How I created my «text-reveal» animation in Vue.js
author: Matthias Koch
excerpt: Even though I'm not a developer I wanna try to explain how I did the text-reveal animation on portfolio.

---

![](/uploads/TextReveal.png)

First things first, I'm **not** a developer, I'm just a designer occasionally having fun with code.

With that being said, in this post I'm trying to explain how I made the «Text Reveal» animation that I use on my Website.

## Set Up

For my website I've used the static site generator [«Gridsome»](https://gridsome.org/) check out their documentation to
 learn more about how to install it.

Here's the code I used to create the animation:
 

### html
```html
        <div class="container">
            <div class="left hide">
                <g-link :to="{ name: 'home' }" class="home-link"><span class="text">Matthias Koch</span></g-link>
            </div>
            <nav class="nav right hide">
                <g-link class="nav__link" to="/" exact><span class="text">Work</span></g-link>
                 <g-link class="nav__link" to="/journal" exact><span class="text">Blog</span></g-link>
                <g-link class="nav__link" to="/contact"><span class="text">Credo</span></g-link>
            </nav>
        </div>
```
 ### css
 ```css
    .hide {
        overflow: hidden;
    }

    .hide span {
        transform: translateY(110%);
        display: block;
    }
```

### js
 ```js
   import {gsap} from "gsap"

    export default {
        data() {},
        mounted() {
            const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
            tl.to('.text', {y: '0%', duration: .7, stagger: 0.15});
        },
    }
```
 
 
 