<template>
    <header class="header" :class="{sticky: $route.path === '/' || $route.path.includes('/projects/')}">
        <div class="container">
            <div class="left hide">
                <g-link :to="{ name: 'home' }" class="home-link"><span class="text">Matthias Koch</span></g-link>
            </div>
            <nav class="nav right hide">
                <g-link class="nav__link" to="/" exact><span class="text">Work</span></g-link>
<!--
                 <g-link class="nav__link" to="/journal" exact><span class="text">Blog</span></g-link>
                <g-link class="nav__link" to="https://lab.matthiasko.ch" exact><span class="text">Lab</span></g-link>
-->
                <g-link class="nav__link" to="/contact"><span class="text">Credo</span></g-link>
            </nav>
        </div>
    </header>
</template>

<script>

    import {gsap} from "gsap"
    import sal from "sal.js";

    export default {
        data() {
            return {
                logo: require("../../static/logo.svg"),
                settings: require("../../data/theme.json")
            }
        },
        mounted() {
            const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
            tl.to('.text', {y: '0%', duration: .7, stagger: 0.15});
        },
    }
</script>

<style scoped>
    .header {
        position: relative;
        height: 6rem;
        z-index: 10;
        background: rgb(255,255,255);
        font-family: sofia-pro, sans-serif;
        font-weight: 400;
        font-size: 1rem;
        font-style: normal;
    }

    .header.sticky {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }

    .header > .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
    }

    .home-link {
        text-decoration: none;
    }

    .logo {
        height: 1.5rem;
    }

    .left {
        font-size: 1.25rem;
        font-weight: 600;
        color: #999999;
    }

    .right {
        display: flex;
        align-items: baseline;
    }

    .site-name {
        font-size: 0.9rem;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-decoration: none;
        text-transform: uppercase;
    }

    .hide {
        overflow: hidden;
    }

    .hide span {
        transform: translateY(110%);
        display: block;
    }

    .nav::before {

    }

    .nav > * {
        font-size: 1.25rem;
        font-weight: 600;
        text-decoration: none;
        margin-top: 4px;
        margin-right: 3rem;
        padding-bottom: 4px;
        border-bottom: 4px solid;
        border-color: transparent;
        transition: border 0.15s;
        color: #999999;
    }

    .nav > *:last-of-type {
        margin: 0;
    }

    .nav > *:hover {
    }


    .nav > .active {
        text-decoration: none;
        color: #111111;
    }

    @media (max-width: 520px) {

        .nav > * {
            font-size: 1rem;
            margin-right: 2rem;
        }

        .left {
            font-size: 1rem;
        }
    }
</style>
