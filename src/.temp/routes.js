export default [
  {
    path: "/projects/zuerchertierschutz/",
    component: () => import(/* webpackChunkName: "page--src--templates--project-post-vue" */ "/Users/taakomah/Desktop/portfolio/src/templates/ProjectPost.vue")
  },
  {
    path: "/projects/spital-schwyz/",
    component: () => import(/* webpackChunkName: "page--src--templates--project-post-vue" */ "/Users/taakomah/Desktop/portfolio/src/templates/ProjectPost.vue")
  },
  {
    path: "/journal/text-reveal-animation/",
    component: () => import(/* webpackChunkName: "page--src--templates--journal-post-vue" */ "/Users/taakomah/Desktop/portfolio/src/templates/JournalPost.vue")
  },
  {
    path: "/projects/liam/",
    component: () => import(/* webpackChunkName: "page--src--templates--project-post-vue" */ "/Users/taakomah/Desktop/portfolio/src/templates/ProjectPost.vue")
  },
  {
    path: "/projects/internezzo-blog/",
    component: () => import(/* webpackChunkName: "page--src--templates--project-post-vue" */ "/Users/taakomah/Desktop/portfolio/src/templates/ProjectPost.vue")
  },
  {
    path: "/journal/macos-development-environment/",
    component: () => import(/* webpackChunkName: "page--src--templates--journal-post-vue" */ "/Users/taakomah/Desktop/portfolio/src/templates/JournalPost.vue")
  },
  {
    path: "/projects/fam-be/",
    component: () => import(/* webpackChunkName: "page--src--templates--project-post-vue" */ "/Users/taakomah/Desktop/portfolio/src/templates/ProjectPost.vue")
  },
  {
    path: "/journal/gridsome-forestry-cms/",
    component: () => import(/* webpackChunkName: "page--src--templates--journal-post-vue" */ "/Users/taakomah/Desktop/portfolio/src/templates/JournalPost.vue")
  },
  {
    path: "/projects/bocado/",
    component: () => import(/* webpackChunkName: "page--src--templates--project-post-vue" */ "/Users/taakomah/Desktop/portfolio/src/templates/ProjectPost.vue")
  },
  {
    path: "/projects/accou/",
    component: () => import(/* webpackChunkName: "page--src--templates--project-post-vue" */ "/Users/taakomah/Desktop/portfolio/src/templates/ProjectPost.vue")
  },
  {
    path: "/journal/camping-stroy/",
    component: () => import(/* webpackChunkName: "page--src--templates--journal-post-vue" */ "/Users/taakomah/Desktop/portfolio/src/templates/JournalPost.vue")
  },
  {
    path: "/journal/",
    component: () => import(/* webpackChunkName: "page--src--pages--journal-vue" */ "/Users/taakomah/Desktop/portfolio/src/pages/Journal.vue")
  },
  {
    path: "/contact/",
    component: () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/taakomah/Desktop/portfolio/src/pages/Contact.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/taakomah/Desktop/portfolio/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/taakomah/Desktop/portfolio/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/taakomah/Desktop/portfolio/node_modules/gridsome/app/pages/404.vue")
  }
]

