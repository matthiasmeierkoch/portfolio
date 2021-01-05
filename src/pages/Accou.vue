<template>
    <Layout>
        <div class="project">
            <div class="project__pattern"></div>

            <div class="container">
                <div class="project__header">
                    <h2 class="hide">
                        <span class="text">Accou&nbsp;</span>
                    </h2>
                    <h2 class="hide">
                        <span class="text">–&nbsp;</span>
                    </h2>
                    <h2 class="hide">
                        <span class="text">Accountverwaltung</span>
                    </h2>
                </div>

                <div class="categories">
                    <span class="category">UI Design</span>
                    <span class="category">UX Design</span>
                    <span class="category">Informationsarchitektur</span>
                </div>
                <g-image class="project__header" src="../../uploads/Accou_2.png"></g-image>
            </div>
            <div class="project__content">

                <p>
                    Im Jahr 2017 hatte eine Person im Durchschnitt 7,6 Online Accounts. 53% der Facebook User sind über
                    50 Jahre alt. Was geschieht mit diesen Accounts falls Ihr Besitzer einmal verstirbt?

                    Accou hat sich zum Ziel gemacht dieses Problem zu lösen.

                    Wie Funktioniert das?
                    Alle Account informationen werden in der Accou App eingetragen so sind alle Accounts an einem Ort
                    zusammen und in Kategorien aufgeteilt.

                    Nun können Sie aussuchen ob im Notfall ihre Accountrechte an eine Person ihres vertrauen gehen, die
                    Person ihres Vertrauen bekommt eine Anfrage in welcher Sie die damit verbundene Verantwortung
                    akzeptieren muss. Nachdem die Person die Anfrage akzeptiert hat startet Accou eine Verifikation.

                    Falls sie niemandem Ihre Accountrechte anvertrauen möchten, kann eine selbstständige Löschung nach
                    einer gewissen Inaktivität eingerichtet werden.

                    Sind diese Einstellungen gemacht können Sie sicher sein dass sich um von Ihnen hinterlassenen Daten
                    gekümmert wird.
                </p>

                <div class="project__image-small">
                <g-image class="" src="../../uploads/Account_Stats.png"></g-image>
                </div>
            </div>
        </div>
    </Layout>
</template>

<page-query>
    query ProjectPost ($path: String!) {
    post: projectPost (path: $path) {
    title
    credits
    date (format: "YYYY")
    content
    categories
    Projektart
    project_bg_color
    project_fg_color
    }
    }
</page-query>

<script>
    import sal from 'sal.js';
    import {gsap} from "gsap";

    export default {
        props: {},
        metaInfo() {
            return {
                title: this.$page.post.title,
                bodyAttrs: {
                    style: `background-color: ${this.$page.post.project_bg_color ? this.$page.post.project_bg_color : 'var(--color-base)'}; color: ${this.$page.post.project_fg_color ? this.$page.post.project_fg_color : 'var(--color-contrast)'}`,
                }
            }
        },
        mounted() {
            const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
            tl.to('.text', {y: '0%', duration: .7, stagger: 0.15});

            this.$nextTick(() => sal());
        }
    }
</script>

<style scoped>

    body {
        overflow-x: hidden;
    }

    .project {
        -webkit-animation: 1s ease 0s normal forwards fadein;
        animation: 1s ease 0s normal forwards fadein;
    }

    .project__pattern {
        width: 100vw;
        height: 70vh;
        top: 1rem;
        z-index: -10;
        position: absolute;
        background-image: url("../../uploads/Accou_Patttern.svg");
        background-repeat: no-repeat;
        background-size: cover;
    }

    .project__header {
        margin-top: 6rem;
        margin-bottom: 2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        align-content: baseline;
    }

    .hide {
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

    .project__content {
        max-width: 700px;
        margin: 0 auto;
        margin-top: 7.5rem;
        color: #F8F8F8;
    }

    .project__content p {
        font-size: 1.25rem;
        line-height: 160%;
        color: #F8F8F8;
    }

    .rect__small {
        height: 100px;
        width: 100px;
        background-color: rgba(255, 255, 255, 0.2);
    }

    .project__image-small {
        width: 50%;
        display: flex;
        margin-left: 50%;
        margin-top: 7.5rem;
    }


    @keyframes fadein {
        0% {
            opacity: 0;
        }
        66% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @-webkit-keyframes fadein {
        0% {
            opacity: 0;
        }
        66% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    h1 {
        font-size: 4.209rem;
        color: #F8F8F8;
    }

    h2 {
        font-size: 3.157rem;
        color: #F8F8F8;

    }

    h3 {
        font-size: 2.369rem;
        color: #F8F8F8;

    }

    .container {
        font-family: sofia-pro, sans-serif;
        max-width: 1200px;
        hyphens: auto;
        color: #F8F8F8;

    }

    .projectHeader {
        padding: 20vh 0 4rem 0;
    }

    iframe {
        max-width: 100%;
    }

    .project-title {
        font-size: 3.5rem;
        font-weight: 700;
        margin: 0 0 0rem 0;
        padding: 0;

    }

    .project-info {
        display: flex;
        flex-wrap: wrap;
        font-size: 1rem;
        width: 100%;

    }

    .project-info > div {
        margin-right: 1.5rem;
    }

    .project-info > div:last-of-type {
        margin: 0;
    }

    .category:after {
        content: ' '
    }

    .category:last-of-type:after {
        content: '';
    }

    .category {
        margin-right: 1.5rem;
    }


    .content >>> p {
        font-size: 1.3125rem;
        line-height: 2rem;
        font-weight: 400;
        max-width: 60ch;
        margin: auto;
        margin-bottom: 1.5rem;
    }

    .content >>> h2 {
        margin-top: 2.5rem;
        margin-bottom: 1rem;
        font-size: 2rem;
        font-weight: 700;
    }

    .content >>> h3 {
        margin: 4rem 0 0;
        font-size: 2.369rem;
        font-weight: 700;
    }

    .content >>> ul {
        font-size: 1.25rem;
        line-height: 1.75rem;
    }

    .content >>> li {
        margin-top: 1rem;
    }

    .content >>> img {
        min-width: calc(100vw - 4rem);
        margin-top: 2rem;
        margin-bottom: 3rem;
        z-index: 10;

    }

    .content >>> iframe {
        min-width: calc(100vw - 4rem);
        margin-top: 2rem;
        margin-bottom: 3rem;
        max-width: 100%;

    }

    @media (min-width: 860px) {
        .content >>> img {
            min-width: calc(100vw - 50%);
            max-width: 700px;
            margin-left: auto;
        }

        .project-info > div {
            margin-right: 4rem;
        }

        .content >>> h2 {
            margin-top: 2rem;
            margin-bottom: 1.5rem;
            font-size: 3.157rem;
            font-weight: 700;
        }
    }

    @media (min-width: 1200px) {
        .content >>> img {
            min-width: calc(1200px - 0rem);
            margin-left: -16rem;
        }

        .content >>> h2 {
            margin-top: 2rem;
            margin-bottom: 1.5rem;
            font-size: 3.157rem;
            font-weight: 700;
        }

        .project-title {
            font-size: 5rem;
        }
    }

    @media (min-width: 860px) {
        .content >>> iframe {
            min-width: calc(100vw - 12rem);
            margin-left: -9rem;
            max-width: 100%;
        }
    }

    @media (min-width: 1200px) {
        .content >>> iframe {
            min-width: calc(1200px - 12rem);
            margin-left: -9rem;
            max-width: 100%;
        }
    }

</style>

