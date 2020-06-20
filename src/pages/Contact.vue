<template>
    <Layout>
        <div class="container">
            <div class="contact-header">
                <h1 class="contact-title">Matthias Koch</h1>
                <g-image class="contact__img" src="../../uploads/matthiaskoch.jpg"></g-image>
                <p>Mein Name ist Matthias Koch, ich bin 23 Jahre alt, komme aus Zug und studiere Interaction Design an
                    der Schule für Gestaltung Zürich (SFGZ).
                </p>
                <p>
                    In meiner Freizeit beschäftige ich mich gerne mit Design, Fotografie, Kunst und treffe mich gerne
                    mit Freunden. Den Ausgleich zum Alltag finde ich im Sport oder auf dem Motorrad.
                </p>
                <div class="contact__content">
                    <h3>Möchtest du dich mit mir in kontakt setzten?</h3>
                    <p><b>Mail:</b> hello(at)matthiasko.ch</p>
                    <p><a href="https://www.linkedin.com/in/matthias-koch-3588ba119/"><b>LinkedIn</b></a></p>
                    <p><a href="https://twitter.com/matthiasmkoch"><b>Twitter</b></a></p>
                    <p><a href="https://github.com/matthiasmeierkoch/"><b>GitHub</b></a></p>
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
    export default {}
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
        font-size: 500;
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
        max-width: 65ch;
        margin: auto;
        margin-top: 3rem;
    }

    .contact__img {
        margin-left: 25%;
        max-width: 50%;
        border-radius: 100%;
    }

    .container {
        max-width: 65ch;
    }

    .contact__content {
        max-width: 65ch;
        margin: auto;
        margin-top: 4rem;
    }

    @media (max-width: 520px) {
        .contact__img {
            margin-left: 10%;
            max-width: 80%;
        }
        .contact-title{
            font-size: 2.5rem;
        }
    }
</style>

