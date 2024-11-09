<template>
  <Layout>

    <div class="container">
      <div class="journal-hero">
        <h1 class="hide">
          <span class="text">Sometimes&nbsp;</span>
          <span class="text">I&nbsp;</span>
          <span class="text">write&nbsp;</span>
          <span class="text">about&nbsp;</span>
          <span class="text">things&nbsp;</span>
          <span class="text">I&nbsp;</span>
          <span class="text">did.</span>
        </h1>
      </div>
    </div>

    <g-link 
      :to="item.node.path"
      v-for="item in $page.posts.edges" 
      :key="item.node.id"
      class="journal-post"
    >
      <div class="container journal">
        <h2 class="journal-title">{{ item.node.title }}</h2>
        <p class="journal-excerpt">{{ item.node.excerpt }}</p>
      </div>
    </g-link>
      
  </Layout>
</template>

<page-query>
query Journal {
	posts: allJournalPost {
    edges {
      node {
        id
        path
        title
        excerpt
      }
    }
  }
}
</page-query>

<script>
  import {gsap} from "gsap"

  export default {
    mounted() {
      const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
      tl.to('.text', {y: '0%', duration: .7, stagger: 0.15});
    },
}
</script>

<style scoped>
.container.journal {
  max-width: 720px;
}
.journal-hero {
  padding: 4rem 0;
  text-align: center;
  color: #111111;
}

.hide {
  background: #ffffff;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
}

.hide span {
  transform: translateY(110%);
  display: block;
  vertical-align: top;
}
.journal-header {
  max-width: 700px;
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin: 0;
  text-align: left;
  color: #999999;
}
.journal-post {
  display: block;
  padding: 2rem 0;
  text-decoration: none;
  transition: background 0.5s ease;
}
.journal-post > * {
  transition: transform 0.5s ease;
}
.journal-post:hover {
  background-color: var(--color-base-1);
}
.journal-post:hover > * {
  transform: translateX(4rem);
}
.journal-post h1,
.journal-post h2 {
  margin: 0;
  padding: 0;
}
.journal-title {
  font-size: 2rem;
  color: var(--color-contrast);
}
.journal-excerpt {
  color: var(--color-contrast-1);
}

@media (min-width: 560px) {
  .journal-post {
    padding: 3rem 0;
  }
}

@media (min-width: 860px) {
  .journal-post {
    padding: 5rem 0;
  }
}
</style>
