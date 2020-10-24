<template>
    <div class="hero">
        <!--        <h1 data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000"
                    data-sal-easing="ease-out-expo" class="hero-title" v-html="settings.hero_title">
                </h1>-->
        <div class="hero-text">
            <h2 class="hide">
                <span class="text">fascinating&nbsp;</span>
            </h2>
            <h2 class="hide">
                <span class="text">user&nbsp;</span>
            </h2>
            <h2 class="hide">
                <span class="text">experiences&nbsp;</span>
            </h2>
            <h2 class="hide">
                <span class="text">through&nbsp;</span>
            </h2>
            <h2 class="hide">
                <span class="text">digital&nbsp;</span>
            </h2>
            <h2 class="hide">
                <span class="text">product&nbsp;</span>
            </h2>
            <h2 class="hide">
                <span class="text">design.</span>
            </h2>
        </div>
        <h2 data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000"
            data-sal-easing="ease-out-expo" class="hero-subtitle" v-html="settings.hero_subtitle"/>
    </div>
</template>

<script>
    import sal from 'sal.js';
    import {gsap} from "gsap"

    export default {
        data() {
            return {
                settings: require("../../data/theme.json")
            }
        },
        mounted() {
            this.$nextTick(() => sal());

            const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
            tl.to('.text', {y: '0%', duration: .7, stagger: 0.15});
        },
    }
</script>

<style>

    .hero-text{
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        align-content: baseline;

    }
    .hero {
        text-align: left;
        max-width: 100%;
        background: white;
        margin-top: 4rem;
        margin-bottom: 6rem;
        line-height: 5.75rem;
        font-size: 2.75rem;
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

    .hero-title {
        font-size: 3rem;
        padding: 0;
        margin: 0 0 2rem 0;
        font-family: "Suisse Neue", serif;
        font-weight: 400;
        font-style: normal;
        color: #111111;
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

    @media (max-width: 919px) {
        .hero {
            max-width: 100%;
            font-size: 2rem;
            line-height: 4.25rem;
        }
    }

    @media (max-width: 520px) {
        .hero {
            max-width: 100%;
            font-size: 1.5rem;
            line-height: 3rem;
            margin-top: 2.75rem;
        }
    }
</style>
