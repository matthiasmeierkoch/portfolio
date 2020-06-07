<template>
  <Layout>
    <div class="container">
      <Hero data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000"
            data-sal-easing="ease-out-expo" />
      <ProjectsGrid :projects="$page.projects.edges" />
    </div>
  </Layout>
</template>

<page-query>
query Posts {
	projects: allProjectPost {
    edges {
      node {
        id
        date (format: "YYYY")
        title
        categories
        thumbnail (quality: 90)
        path
      }
    }
  },
  journals: allJournalPost (perPage: 4) {
    edges {
      node {
        id
        path
        title
      }
    }
  }
}
</page-query>

<script>
import Hero from "@/components/Hero"
import ProjectsGrid from "@/components/ProjectsGrid"
import sal from 'sal.js';

export default {
  components: {
    Hero,
    ProjectsGrid
  },
  mounted() {
    this.$nextTick(() => sal());
  }
}
</script>
 <style>

 </style>