export default [
  {
    path: "/projects/zuerchertierschutz-en/",
    component: () => import(/* webpackChunkName: "page--src--templates--project-post-vue" */ "/Users/matthiaskoch/Documents/Github/portfolio/src/templates/ProjectPost.vue")
  },
  {
    path: "/projects/spital-schwyz/",
    component: () => import(/* webpackChunkName: "page--src--templates--project-post-vue" */ "/Users/matthiaskoch/Documents/Github/portfolio/src/templates/ProjectPost.vue")
  },
  {
    path: "/journal/text-reveal-animation/",
    component: () => import(/* webpackChunkName: "page--src--templates--journal-post-vue" */ "/Users/matthiaskoch/Documents/Github/portfolio/src/templates/JournalPost.vue")
  },
  {
    path: "/projects/my-cloud/",
    component: () => import(/* webpackChunkName: "page--src--templates--project-post-vue" */ "/Users/matthiaskoch/Documents/Github/portfolio/src/templates/ProjectPost.vue")
  },
  {
    path: "/projects/liam/",
    component: () => import(/* webpackChunkName: "page--src--templates--project-post-vue" */ "/Users/matthiaskoch/Documents/Github/portfolio/src/templates/ProjectPost.vue")
  },
  {
    path: "/journal/persona-workshop/",
    component: () => import(/* webpackChunkName: "page--src--templates--journal-post-vue" */ "/Users/matthiaskoch/Documents/Github/portfolio/src/templates/JournalPost.vue")
  },
  {
    path: "/projects/internezzo-blog/",
    component: () => import(/* webpackChunkName: "page--src--templates--project-post-vue" */ "/Users/matthiaskoch/Documents/Github/portfolio/src/templates/ProjectPost.vue")
  },
  {
    path: "/projects/fam-be-en/",
    component: () => import(/* webpackChunkName: "page--src--templates--project-post-vue" */ "/Users/matthiaskoch/Documents/Github/portfolio/src/templates/ProjectPost.vue")
  },
  {
    path: "/projects/accou-en/",
    component: () => import(/* webpackChunkName: "page--src--templates--project-post-vue" */ "/Users/matthiaskoch/Documents/Github/portfolio/src/templates/ProjectPost.vue")
  },
  {
    path: "/projects/bocado/",
    component: () => import(/* webpackChunkName: "page--src--templates--project-post-vue" */ "/Users/matthiaskoch/Documents/Github/portfolio/src/templates/ProjectPost.vue")
  },
  {
    path: "/journal/camping-stroy/",
    component: () => import(/* webpackChunkName: "page--src--templates--journal-post-vue" */ "/Users/matthiaskoch/Documents/Github/portfolio/src/templates/JournalPost.vue")
  },
  {
    path: "/journal/",
    component: () => import(/* webpackChunkName: "page--src--pages--journal-vue" */ "/Users/matthiaskoch/Documents/Github/portfolio/src/pages/Journal.vue")
  },
  {
    path: "/contact/",
    component: () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/matthiaskoch/Documents/Github/portfolio/src/pages/Contact.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/matthiaskoch/Documents/Github/portfolio/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/matthiaskoch/Documents/Github/portfolio/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/matthiaskoch/Documents/Github/portfolio/node_modules/gridsome/app/pages/404.vue")
  }
]

