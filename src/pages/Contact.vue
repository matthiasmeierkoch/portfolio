<template>
    <Layout>
        <div class="container">
            <div class="contact-header">
                <h2 class="hide">
                    <span class="text">Als&nbsp;</span>
                    <span class="text">Interaction&nbsp;</span>
                    <span class="text">Designer&nbsp;</span>
                    <span class="text">gestalte&nbsp;</span>
                    <span class="text">ich&nbsp;</span>
                </h2>
                <h2 class="hide">
                    <span class="text">digitale&nbsp;</span>
                    <span class="text">Produkte&nbsp;</span>
                    <span class="text">mit&nbsp;</span>
                    <span class="text">Menschen&nbsp;</span>
                    <span class="text">im&nbsp;</span>
                    <span class="text">Fokus.&nbsp;</span>
                </h2>
            </div>

                <h2>Über mich</h2>

                <div class="flex-box">
                    <div data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000"
                         data-sal-easing="ease-out-expo">
                        <h3>...als Designer</h3>
                        <p>
                            Mein Name ist Matthias Koch. Ich lebe und arbeite in Zürich als UX / UI Designer.
                        </p>
                        <p>
                            Nach einer Berufslehre als Fotofachmann habe ich eine Weiterbildung zum
                            Kommunikationsdesigner
                            mit
                            Vertiefung Interaction Design im Sommer 2020 abgeschlossen. Gleichzeitig konnte ich
                            Berufserfahrung
                            im Agenturumfeld und auf Kundenseite erlangen.
                        </p>
                        <p>
                            In meinem Alltag beschäftige ich mich mit dem Zusammenhang von visueller Gestaltung,
                            Psychologie
                            und Technik. Dabei setzte ich von Anfang an den Menschen in den Fokus.
                        </p>
                        <p>
                            Themen die mich besonders interessieren, jedoch in meinem jetzigen Berufsalltag etwas zu
                            kurz
                            kommen sind Daten Visualisierungen, Markenführung (Branding) und Werbung.
                        </p>
                    </div>

                    <div data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000"
                         data-sal-easing="ease-out-expo">
                        <h3>...als Person</h3>
                        <p>
                            Auch in meiner Freizeit befasse ich mich intensiv mit Design, Kunst und Ästhetik. In meiner
                            Freizeit
                            finde ich dies vor allem in Museen, beim Fotografieren und im Alltag mit Möbel, alten
                            Zweiräder
                            (mit
                            und ohne Motor), Kaffemachienen und Uhren.
                        </p>
                        <p>
                            Den Ausgleich zu meiner Arbeit und Design finde ich hauptsächlich beim Sport, der schon
                            immer eine wichtige Rolle in meinem Leben spielte. Zurzeit trainiere ich Triathlon, im
                            Fitness und mache Yoga.
                        </p>
                        <p>
                            Meine Ferien verbinde ich am liebsten damit meine Leidenschaft des Fotografieren, mit dem
                            Reisen, Surfen oder
                            dem
                            Skifahren zu kombinieren. Einige meiner Bilder veröffentliche ich auf <a
                                href=https://unsplash.com/@matthiasmeierkoch
                                target="_blank">Unsplash</a>.
                        </p>
                    </div>
                </div>
                <hr>
                <div class="resume" data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000"
                     data-sal-easing="ease-out-expo">
                    <h3>Meinen Lebenslauf finden Sie hier:
                        <g-link href="/matthias_koch_resume.pdf" target="_blank">Résumé</g-link>
                    </h3>
                </div>

                <hr>
                <h2 class="contact__content" data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000"
                    data-sal-easing="ease-out-expo">Möchtest du dich mit mir in Kontakt setzten?</h2>
                <div class="flex-box" data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000"
                     data-sal-easing="ease-out-expo">
                    <div class="contact__links">
                        <p><b>Mail:</b> hello(at)matthiasko.ch</p>
                        <p><a href="https://www.linkedin.com/in/matthias-koch-3588ba119/"
                              target="_blank"><b>LinkedIn</b></a></p>
                        <p><a href="https://github.com/matthiasmeierkoch/" target="_blank"><b>GitHub</b></a></p>
                        <p><a href="https://twitter.com/matthiasmkoch" target="_blank"><b>Twitter</b></a></p>
                        <p><a href="https://instagram.com/matthiasmeierkoch" target="_blank"><b>Instagram</b></a>
                        </p>
                    </div>

                    <div class="contact__img" data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000"
                         data-sal-easing="ease-out-expo">
                        <g-image src="../../uploads/matthiaskoch.jpg"></g-image>
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
    }

    .contact-title {
        font-size: 4rem;
        margin: 0 0 4rem 0;
        padding: 0;
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

    hr{
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
    }

    .resume{
        margin-top: 2rem;
        color: #999999;
        overflow: hidden;
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
    }

    .contact__img {
        max-width: 40%;
        max-height: 40%;
        display: grid;
        border-radius: 1rem;
        overflow: hidden;
        background-image: url("https://matthiasko.ch/assets/static/matthiaskoch.jpg");
        -webkit-box-shadow: 0px 0px 16px 0px rgba(190, 190, 190, 0.75);
        box-shadow: 0px 0px 16px 0px rgba(190, 190, 190, 0.75);
        -moz-box-shadow: 16px 16px 16px 16px rgba(190, 190, 190, 0.75);
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
        }
    }
</style>

