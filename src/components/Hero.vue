<template>
    <div class="hero">
        <h1 class="hero-title" v-html="settings.hero_title" />
        <h2 class="hero-subtitle" v-html="settings.hero_subtitle" />
    </div>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json")
    }
  }
}
</script>

<style>
.hero {
    text-align: left;
    max-width: 1200px;
    max-width: 70%;
    padding: 4rem 0 4rem 0;
    line-height: 3.6rem;
}

.hero-title {
    font-size: 3rem;
    font-weight: 600;
    padding: 0;
    margin: 0 0 2rem 0;
}
.hero-title p,
.hero-subtitle p {
    margin: 0;
    padding: 0;
}
.hero-subtitle {
    font-size: 1.15em;
    font-weight: 400;
    line-height: 1.68;
    padding: 0;
    margin: 0;
    opacity: 0.6;
}

@media (max-width: 920px) {
    .hero {
        max-width: 100%;
    }
}
</style>
