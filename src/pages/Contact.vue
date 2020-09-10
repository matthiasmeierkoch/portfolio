<template>
    <Layout>
        <div class="container">
            <div class="contact-header" data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000"
                 data-sal-easing="ease-out-expo">
                <h1 class="contact-title"></h1>
                <g-image class="contact__img" src="../../uploads/matthiaskoch.jpg"></g-image>
                <h2>Über mich...</h2>
                <h3>...als Designer</h3>
                <p>
                    Mein Name ist Matthias Koch. Ich lebe und arbeite in Zürich als UX / UI Designer.
                </p>
                <p>
                    Nach einer Berufslehre als Fotofachmann habe ich eine Weiterbildung zum Kommunikationsdesigner mit
                    Vertiefung Interaction Design im Sommer 2020 abgeschlossen. Gleichzeitig konnte ich Berufserfahrung
                    im Agenturumfeld und auf Kundenseite erlangen.
                </p>
                <p>
                    In meinem Alltag beschäftige ich mich mit dem Zusammenhang von visueller Gestaltung, Psychologie
                    und Technik. Dabei setzte ich von Anfang an den Menschen in den Fokus.
                </p>
                <p>
                    Themen die mich besonders interessieren, jedoch in meinem jetzigen Berufsalltag etwas zu kurz
                    kommen sind Daten Visualisierungen, Markenführung (Branding) und Werbung.
                </p>
                <h3>...als Person</h3>
                <p>
                    Auch in meiner Freizeit befasse ich mich intensiv mit Design, Kunst und Ästhetik. In meiner Freizeit
                    finde ich das vorallem in Museen, beim Fotografieren und im Alltag mit Möbel, alten Zweiräder (mit
                    und ohne Motor), Kaffemachienen und Uhren.
                </p>
                <p>
                    Meinen Ausgleich zur Arbeit und dem Design finde ich hauptsächlich beim Sport. Zurzeit trainiere ich
                    Triathlon, im Fitness und Yoga.
                </p>
                <p>
                    In den Ferien verbinde ich meine Leidenschaft des Fotografieren, mit dem Reisen, Surfen oder dem
                    Skifahren. Einige meiner Bilder veröffentliche ich auf <a href=https://unsplash.com/@matthiasmeierkoch
                                                                target="_blank">Unsplash</a>.
                </p>

                <div class="contact__content">
                    <div class="contact__links">
                        <h2>Möchtest du dich mit mir in kontakt setzten?</h2>
                        <p><b>Mail:</b> hello(at)matthiasko.ch</p>
                        <p><a href="https://www.linkedin.com/in/matthias-koch-3588ba119/"
                              target="_blank"><b>LinkedIn</b></a></p>
                        <p><a href="https://github.com/matthiasmeierkoch/" target="_blank"><b>GitHub</b></a></p>
                        <p><a href="https://twitter.com/matthiasmkoch" target="_blank"><b>Twitter</b></a></p>
                        <p><a href="https://instagram.com/matthiasmeierkoch" target="_blank"><b>Instagram</b></a></p>
                    </div>
                </div>

            </div>
            <!--            <form class="contact-form" name="contact">

                            <div class="sender-info">
                                <div>
                                    <label for="name" class="label">Your name</label>
                                    <input type="text" name="name"/>
                                </div>
                                <div>
                                    <label for="email" class="label">Your email</label>
                                    <input type="email" name="email"/>
                                </div>
                            </div>

                            <div class="message">
                                <label for="message" class="label">Message</label>
                                <textarea name="message"></textarea>
                            </div>

                            <button class="button">Submit form</button>

                        </form>-->

        </div>
    </Layout>
</template>

<script>
    import sal from 'sal.js';

    export default {
        mounted() {
            this.$nextTick(() => sal({
                threshold: 0.2,
            }));
        }
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

    .container {
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
    }

    h1 {
        margin-left: 0;
    }

    p {
        max-width: 68ch;
        margin: auto;
        margin-top: 1.5rem;
    }

    .contact__img {
        margin-left: 15%;
        max-width: 65%;
        border-radius: 1rem;
    }

    .container {
        max-width: 68ch;
    }

    .contact__content {
        max-width: 68ch;
        margin-top: 4rem;
    }

    .contact__links {

    }

    @media (max-width: 520px) {
        .contact__img {
            margin-left: 10%;
            max-width: 80%;
        }

        .contact-title {
            font-size: 2.5rem;
        }
    }
</style>

