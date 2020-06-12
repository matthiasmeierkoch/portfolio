<template>
    <div class="hero">
        <h1 data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000"
            data-sal-easing="ease-out-expo" class="hero-title" v-html="settings.hero_title">

        </h1>
        <h2 data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000"
            data-sal-easing="ease-out-expo" class="hero-subtitle" v-html="settings.hero_subtitle" />
    </div>
</template>

<script>
    import sal from 'sal.js';

export default {
  data() {
    return {
      settings: require("../../data/theme.json")
    }
  },
    mounted() {
        this.$nextTick(() => sal());
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
    margin-bottom: 2rem;
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
        font-size: 3rem;
        line-height: 4rem;
        margin-top: -2.5rem;
        width: 100%;
    }
}

@media (max-width: 520px) {
    .hero {
        max-width: 100%;
        font-size: 1.3125rem;
    }
    .hero-title{
        font-size: 1.5rem;
        line-height: 2.5rem;
        margin-top: -2.5rem;
        width: 100%;
    }
}
</style>
