<template>
    <Layout>
        <div class="container">
            <div class="contact-header">
            
                <h2 class="hide">
                    <span class="text">Human&nbsp;</span>
                </h2>
                <h2 class="hide">
                    <span class="text">centered&nbsp;</span>
                </h2>
                <h2 class="hide">
                    <span class="text">products&nbsp;</span>
                </h2>
                <h2 class="hide">
                    <span class="text">improve&nbsp;</span>
                </h2>
                <h2 class="hide">
                    <span class="text">other&nbsp;</span>
                </h2>
                <h2 class="hide">
                    <span class="text">people's&nbsp;</span>
                </h2>
                <h2 class="hide">
                    <span class="text">lives&nbsp;</span>
                </h2>


            </div>

            <div class="flex-box profile">
                <div>
                    <g-image class="profile__image" src="../../uploads/portrait.png"></g-image>
                </div>

                    <div class="about__me">
                         <h2 class="profile__name">Matthias Koch</h2>
                         <p class="about__label">Interaction designer & Bug-Creator</p>
                        <div>
                            <a class="contact__links" href="mailto:hello@matthiasko.ch?subject=Hallo Matthias">Mail</a>
                            <a class="contact__links" href="https://www.linkedin.com/in/matthias-koch-3588ba119/" target="_blank">LinkedIn</a>
                            <a class="contact__links" href="https://github.com/matthiasmeierkoch/" target="_blank">Github</a>
                            <a class="contact__links" href="https://twitter.com/matthiasmkoch" target="_blank">Twitter</a>
                        </div>
                        <p class="about__bio">
                            I like to solve problems with creativity wether I do this in my job, hobbies or my everyday life. I’m very curios and always up to try out new things, this reflects in my list of hobbies and interests such as bouldering, running, calistehnics, swimming, cycling, skiing and surfing to name just a few.
                       <br>
                       <br>
                            In design I aim for simplicity, I’m fascinated by smart designs that do less but better for just the right customers. I’m interested in information visualizations and clever built design systems that scale. 
                        </p>
                        <br>
                        <a class="contact__links" href="/matthias_koch_resume.pdf" target="_blank">Resumé</a>
                    </div>
            </div>

            <div class="resume">
            <div class="footer__cta">
                <h2 class="hide">
                    <span class="text">Let’s&nbsp;</span>
                </h2>
                <h2 class="hide">
                    <span class="text">bring&nbsp;</span>
                </h2>
                <h2 class="hide">
                    <span class="text">your&nbsp;</span>
                </h2>
            </div>
            <div class="footer__cta">
                <h2 class="hide">
                    <span class="text">ideas&nbsp;</span>
                </h2>
                <h2 class="hide">
                    <span class="text">to&nbsp;</span>
                </h2>
                <h2 class="hide">
                    <span class="text">life&nbsp;</span>
                </h2>
            </div>
            <div class="footer__cta">
                 <div class="cta__mail">               
                    <a href="mailto:hello@matthiasko.ch?subject=Hallo Matthias" target="_blank">hello@matthiasko.ch</a>
                </div>
             </div>
            </div>
        </div>
    </Layout>
</template>

<script>
    import sal from 'sal.js';
    import {gsap} from "gsap"


    export default {
                mounted() {
            this.$nextTick(() => sal());

            const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
            tl.to('.text', {y: '0%', duration: .7, stagger: 0.15});
        }
    }

</script>

<style scoped>
    .contact-header {
        padding: 0 0 4rem 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        margin-top: 4rem;
        margin-bottom: 5rem;
    }

    .contact-title {
        font-size: 2.75rem;
        margin: 0;
        padding: 0;
    }

    .sub {
        min-width: 100%;
    }

    .hide {
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        margin-top: 0;
        margin-bottom: 0;
    }

    .hide span {
        transform: translateY(110%);
        display: block;
    }

    hr {
        border: 0.75px solid #999999;
        margin-bottom: 1.5rem;
        margin-top: 1.5rem;
    }

    .flex-box {
        display: flex;
        justify-content: space-around;
    }

    .flex-box > div {
        display: flex;
        flex-direction: column;
        align-items: space-around;
        margin-bottom: 3rem;
        max-width: 50%;
    }

    .resume {
        margin-top: 3rem;
        padding-top: 4rem;
        padding-bottom: 4rem;
        padding-left: 3rem;
        padding-right: 5rem;
        font-size: 3rem;
        text-align: center;
        color: #ffffff;
        background-image: url("../../uploads/blurr.png");
        background-size: cover;
        background-color: #073655;
        border-radius: 1rem;

    }

    .profile{
        margin-top: 0;
    }

    .profile__name{
        margin-top: 0rem;
        font-size: 3rem;
    }

    .profile__image{
        overflow: hidden;
    }

    .about__me {
        padding-left: 2rem; 
    }

    .about__label{
        margin-top: -2rem;
        margin-bottom: 4rem;
    }

    .about__bio{
        margin-top: 5rem;
    }

    .contact__links{
        margin-right: 2.25rem;
        margin-bottom: 5rem;
        font-style: italic;
    }

    .resume a {
        text-decoration-thickness: .25px;
        text-underline-offset: 8px;
    }

    .sender-info {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 2rem;
    }

    .sender-info > div {
        flex: 1;
        margin-right: 4rem;
    }

    .sender-info > div:last-of-type {
        margin: 0;
    }

    input:focus, textarea:focus {
        border-color: var(--color-contrast-1);
    }

    input, textarea {
        background: transparent;
        border: 1px solid var(--color-base-1);
        outline: none;
        border-radius: 0.3rem;
        padding: 0.8rem 1rem;
        color: inherit;
        font-size: 1rem;
        width: 100%;
    }

    textarea {
        resize: none;
        height: 140px;
    }

    .contact-header {
        font-size: 2.75rem;
    }

    h1 {
        margin-left: 0;
    }

    p {
        margin: auto;
        margin-top: 1.5rem;
        margin-left: 0;
        hyphens: auto;
    }

    .contact__content {
        width: 100%;
        margin-top: 6rem;
        margin-bottom: 3rem;
    }

    .contact__links {
        width: 100%;
        max-width: 68ch;
    }

    .footer__cta{
        padding: 2rem 0 -0.5rem 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        font-size: 2rem;
    }

    .cta__mail{
        font-size: 1.325rem;
        text-align: right;
        font-style: italic;
        align-content: flex-end;
        margin-top: 1rem;
        margin-left: 8rem
    }

    @media (max-width: 900px) {
        .contact__img {
            margin-left: 10%;
            max-width: 70%;
            margin-top: 4rem;
        }

        .container {
            max-width: 68ch;
        }

        .flex-box {
            display: block;
            align-items: baseline;

        }

        .flex-box > div {
            display: block;
            align-items: baseline;
            max-width: 100%;

        }

        .contact-header {
            margin: auto;
            font-min-size: 1rem;
            font-size: 4vw;
        }

        .resume {
            font-size: 2rem;
            text-align: center;
            padding-right: 2rem;
        }

        .about__me {
            padding-left: 0; 
        }

    }


    @media (max-width: 520px) {
        .contact__img {
            margin-left: 10%;
            max-width: 20%;
            margin-top: 4rem;
        }

        .contact-title {
            font-size: 2rem;
        }

        .flex-box {
            display: block;
            align-items: baseline;
            max-width: 100%;
            margin: 0 auto;

        }

        .flex-box > div {
            display: block;
            align-items: baseline;
        }

        h2 {
            margin-top: 0;
            font-size: 1.75rem;

        }

        .resume {
            font-size: 1.5rem;
            text-align: center;
            padding-right: 2rem;
        }

        .contact__links{
            margin-right: 1rem;
        }

        .profile__name{
        font-size: 1.75rem;
        margin-bottom: 2rem;
        }

        .cta__mail{
        font-size: 18px;
        text-align: center;
        font-style: italic;
        align-content: flex-start;
        margin-top: 1rem;
        margin-left: 0;
        }
        
        .about__me {
        padding-left: 0; 
    }

}
</style>

