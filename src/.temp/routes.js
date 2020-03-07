export default [
  {
    path: "/projects/sunk/",
    component: () => import(/* webpackChunkName: "page--src--templates--project-post-vue" */ "/Users/matthiaskoch/Desktop/my-project/src/templates/ProjectPost.vue")
  },
  {
    path: "/journal/use-gridsome-vuejs/",
    component: () => import(/* webpackChunkName: "page--src--templates--journal-post-vue" */ "/Users/matthiaskoch/Desktop/my-project/src/templates/JournalPost.vue")
  },
  {
    path: "/projects/ios-concept/",
    component: () => import(/* webpackChunkName: "page--src--templates--project-post-vue" */ "/Users/matthiaskoch/Desktop/my-project/src/templates/ProjectPost.vue")
  },
  {
    path: "/journal/macos-development-environment/",
    component: () => import(/* webpackChunkName: "page--src--templates--journal-post-vue" */ "/Users/matthiaskoch/Desktop/my-project/src/templates/JournalPost.vue")
  },
  {
    path: "/projects/chelsea-landmark/",
    component: () => import(/* webpackChunkName: "page--src--templates--project-post-vue" */ "/Users/matthiaskoch/Desktop/my-project/src/templates/ProjectPost.vue")
  },
  {
    path: "/journal/gridsome-forestry-cms/",
    component: () => import(/* webpackChunkName: "page--src--templates--journal-post-vue" */ "/Users/matthiaskoch/Desktop/my-project/src/templates/JournalPost.vue")
  },
  {
    path: "/journal/a-journal-entry/",
    component: () => import(/* webpackChunkName: "page--src--templates--journal-post-vue" */ "/Users/matthiaskoch/Desktop/my-project/src/templates/JournalPost.vue")
  },
  {
    path: "/projects/3d-graff/",
    component: () => import(/* webpackChunkName: "page--src--templates--project-post-vue" */ "/Users/matthiaskoch/Desktop/my-project/src/templates/ProjectPost.vue")
  },
  {
    path: "/journal/",
    component: () => import(/* webpackChunkName: "page--src--pages--journal-vue" */ "/Users/matthiaskoch/Desktop/my-project/src/pages/Journal.vue")
  },
  {
    path: "/contact/",
    component: () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/matthiaskoch/Desktop/my-project/src/pages/Contact.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/matthiaskoch/Desktop/my-project/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/matthiaskoch/Desktop/my-project/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/matthiaskoch/Desktop/my-project/node_modules/gridsome/app/pages/404.vue")
  }
]

