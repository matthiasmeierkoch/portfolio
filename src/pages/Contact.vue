<template>
    <Layout>
        <div class="container">
            <div class="contact-header">
                <h2 class="hide">
                    <span class="text">Als&nbsp;</span>
                </h2>
                <h2 class="hide">
                    <span class="text">Interaction&nbsp;</span>
                </h2>
                <h2 class="hide">
                    <span class="text">Designer&nbsp;</span>
                </h2>
                <h2 class="hide">
                    <span class="text">gestalte&nbsp;</span>
                </h2>
                <h2 class="hide">
                    <span class="text">ich&nbsp;</span>
                </h2>
                <h2 class="hide">
                    <span class="text">digitale&nbsp;</span>
                </h2>
                <h2 class="hide">
                    <span class="text">Produkte&nbsp;</span>
                </h2>
                <h2 class="hide">
                    <span class="text">mit&nbsp;</span>
                </h2>
                <h2 class="hide">
                    <span class="text">Menschen&nbsp;</span>
                </h2>
                <h2 class="hide">
                    <span class="text">im&nbsp;</span>
                </h2>
                <h2 class="hide">
                    <span class="text">Fokus.&nbsp;</span>
                </h2>
            </div>

            <div>
                <h2>Über mich</h2>
                <div class="flex-box">
                    <div>
                        <h3>...als Designer</h3>
                        <p>
                            Mein Name ist Matthias Koch. Ich lebe und arbeite in Zürich als User Experience und User
                            Interface Designer.
                        </p>
                        <p>
                            Nach einer Berufslehre als Fotofachmann habe ich eine Weiterbildung zum
                            Kommunikationsdesigner mit Vertiefung Interaction Design im Sommer 2020 abgeschlossen.
                            Gleichzeitig konnte ich Berufserfahrung im Agenturumfeld und auf Kundenseite erlangen.
                        </p>
                        <p>
                            In meinem Alltag beschäftige ich mich mit dem Zusammenhang von visueller Gestaltung,
                            Psychologie und Technik. Dabei setzte ich von Anfang an den Menschen in den Fokus.
                        </p>
                        <p>
                            Themen die mich besonders interessieren sind Daten Visualisierungen, Markenführung
                            (Branding) und Werbung.
                        </p>
                    </div>

                    <div>
                        <h3>...als Person</h3>
                        <p>
                            Auch in meiner Freizeit befasse ich mich intensiv mit Design, Kunst und Ästhetik.
                            Deshalb verbringe ich regnerische Sonntage am liebsten in Museen.
                        </p>
                        <p>
                            An schönen Tagen bin ich
                            am liebsten von Früh bis Spät unterwegs. Im Sommer am liebsten in der Nähe vom Wasser und
                            im Winter am liebsten in den Bergen am Skifahren.
                        </p>
                        <p>
                            Den Ausgleich zu meinem Alltag finde ich beim Sport, der schon immer eine wichtige Rolle in
                            meinem Leben spielte, oder auf Reisen.
                        </p>
                        <p>
                            Meinen Ferien verbinde ich am liebsten damit neue Kulturen zu entdecken, Surfen zu gehen und
                            diesen Tätigkeiten zu Fotografieren. Einige meiner Bilder veröffentliche ich auf <a
                                href=https://unsplash.com/@matthiasmeierkoch
                                target="_blank">Unsplash</a>.
                        </p>
                    </div>
                </div>
            </div>

            <div class="resume">
                <h3 data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000"
                    data-sal-easing="ease-out-expo">
                    <g-link href="/matthias_koch_resume.pdf" target="_blank">Résumé</g-link>
                </h3>
            </div>


            <h2 class="contact__content" data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000"
                data-sal-easing="ease-out-expo">Möchtest du dich mit mir in Kontakt setzten?</h2>
            <div class="flex-box">
                <div class="contact__links">
                    <p data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000"
                       data-sal-easing="ease-out-expo"><b>Mail:</b> hello(at)matthiasko.ch</p>
                    <p data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000"
                       data-sal-easing="ease-out-expo"><a href="https://www.linkedin.com/in/matthias-koch-3588ba119/"
                                                          target="_blank"><b>LinkedIn</b></a></p>
                    <p data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000"
                       data-sal-easing="ease-out-expo"><a href="https://github.com/matthiasmeierkoch/"
                                                          target="_blank"><b>GitHub</b></a></p>
                    <p data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000"
                       data-sal-easing="ease-out-expo"><a href="https://twitter.com/matthiasmkoch" target="_blank"><b>Twitter</b></a>
                    </p>
                    <p data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000"
                       data-sal-easing="ease-out-expo"><a href="https://instagram.com/matthiasmeierkoch"
                                                          target="_blank"><b>Instagram</b></a>
                    </p>
                </div>

                <div class="contact__img" data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000"
                     data-sal-easing="ease-out-expo">
                    <g-image src="../../uploads/matthiaskoch.jpg"></g-image>
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
            this.$nextTick(() => sal({
                threshold: 0.25,
            }));
        },
        methods() {
            const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
            tl.to('.text', {y: '0%', duration: .5, stagger: 0.15});
        },
    }

</script>

<style scoped>
    .contact-header {
        padding: 2rem 0 4rem 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
    }

    .contact-title {
        font-size: 4rem;
        margin: 0 0 4rem 0;
        padding: 0;
    }

    .sub {
        min-width: 100%;
    }

    .hide {
        background:;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        align-items: baseline;
        margin-top: 0;
        margin-bottom: 0;
    }

    .hide span {
        transform: translateY(110%);
        display: block;
        vertical-align: top;
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
        align-items: baseline;
        margin-bottom: 3rem;
        max-width: 50%;
    }

    .resume {
        margin-top: 2rem;
        padding-top: 4rem;
        padding-bottom: 4rem;
        padding-left: 3rem;
        padding-right: 5rem;
        color: ;
        font-size: 3rem;
        font-family: "Suisse Neue";
        text-align: center;
        overflow: hidden;
        background-image: url("../../uploads/Cover.png");
        background-size: cover;
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

    .button {
        color: var(--color-base);
        background: var(--color-contrast);
        outline: none;
        border: 0;
        font-size: 0.8rem;
        padding: 0.8rem 1.6rem;
        border-radius: 0.3rem;
        margin-top: 2rem;
        cursor: pointer;
        transition: opacity 0.25s ease;
        letter-spacing: 0.035em;
    }

    .button:hover {
        opacity: 0.6;
    }

    .button:focus {
        border: 1px solid var(--color-base-1);
    }

    .contact-header {
        margin: auto;
        font-size: 1.75rem;
    }

    h1 {
        margin-left: 0;
    }

    p {
        max-width: 90%;
        margin: auto;
        margin-top: 1.5rem;
        margin-left: 0;
        hyphens: auto;
    }

    .contact__img {
        max-width: 40%;
        max-height: 40%;
        display: grid;
        border-radius: 1rem;
        overflow: hidden;
        background-image: url("https://matthiasko.ch/assets/static/matthiaskoch.jpg");
        -webkit-box-shadow: 0px 0px 40px -20px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 0px 40px -20px rgba(0, 0, 0, 0.25);
        box-shadow: 0 0 40px -20px rgba(0, 0, 0, 0.25);

    }

    .container {
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

    @media (max-width: 900px) {
        .contact__img {
            margin-left: 10%;
            max-width: 80%;
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
            font-size: 2vw;
        }

        h2 {
            font-size: calc(18px + 1.5vw);
        }

        .resume {
            font-size: 2rem;
            text-align: center;
            padding-right: 2rem;
        }

    }


    @media (max-width: 520px) {
        .contact__img {
            margin-left: 10%;
            max-width: 80%;
            margin-top: 4rem;
        }

        .contact-title {
            font-size: 2.5rem;
        }

        .flex-box {
            display: block;
            align-items: baseline;

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
    }
</style>

