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
    max-width: 100%;
    padding: 4rem 0 4rem 0;
    line-height: 4.2rem;
}

.hero-title {
    font-size: 3.5rem;
    padding: 0;
    margin: 0 0 2rem 0;
    font-family: calluna, serif;
    font-weight: 400;
    font-style: normal;
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
        font-size: 1.3125rem;
    }
    .hero-title{
        font-size: 2.5rem;
        line-height: 3.25rem;
        margin-top: -2.5rem;
        width: 100%;
    }
}
</style>
