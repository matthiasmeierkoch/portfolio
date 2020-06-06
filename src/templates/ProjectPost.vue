<template>
    <Layout>
        <div class="project">

            <div class="container">

                <div class="project-header">
                    <h1 class="project-title" v-html="$page.post.title"/>
                    <h2 class="project-title" v-html="$page.post.style"/>
                    <div class="project-info">

                        <div class="categories-container">
                            <div class="categories">
                                <span class="label">Kategorien</span>
                                <span
                                        class="category"
                                        v-for="(category, index) in $page.post.categories"
                                        :key="index"
                                        v-text="category"
                                />
                            </div>
                        </div>

                        <div class="year-container">
                            <span class="label">Jahr</span>
                            <div v-html="$page.post.date"/>
                        </div>

                        <div class="credits-container">
                            <span class="label">Credits</span>
                            <div v-html="$page.post.credits"/>
                        </div>

                        <div class="Projektart-container">
                            <span class="label">Projektart</span>
                            <div v-html="$page.post.Projektart"/>
                        </div>
                    </div>
                </div>


                <div v-html="$page.post.content" class="content"/>

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
    export default {
        metaInfo() {
            return {
                title: this.$page.post.title,
                bodyAttrs: {
                    style: `background-color: ${this.$page.post.project_bg_color ? this.$page.post.project_bg_color : 'var(--color-base)'}; color: ${this.$page.post.project_fg_color ? this.$page.post.project_fg_color : 'var(--color-contrast)'}`
                }
            }
        }
    }
</script>

<style scoped>

    h1 {
        font-size: 4.209rem;
    }

    h2 {
        font-size: 3.157rem;
    }

    h3 {
        font-size: 2.369rem;
    }

    .container {
        font-family: sofia-pro, sans-serif;
        max-width: 900px;
    }

    .project-header {
        padding: 20vh 0 4rem 0;
    }

    .credits-container {
    }

    .project-title {
        font-size: 5rem;
        font-weight: 700;
        margin: 0 0 4rem 0;
        padding: 0;

    }

    .project-info {
        display: flex;
        flex-wrap: wrap;
        font-size: 1rem;

    }

    .project-info > div {
        margin-right: 4rem;
    }

    .project-info > div:last-of-type {
        margin: 0;
    }

    .category:after {
        content: ', '
    }

    .category:last-of-type:after {
        content: '';
    }

    .content >>> p {
        font-size: 1.3125rem;
        line-height:2rem;
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

    }

    .content >>> iframe {
        min-width: calc(100vw - 4rem);
        margin-top: 2rem;
        margin-bottom: 3rem;

    }

    @media (min-width: 860px) {
        .content >>> img {
            min-width: calc(100vw - 12rem);
            max-width: 700px;
            margin-left: auto;
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
            min-width: calc(1200px - 12rem);
            margin-left: -9rem;
        }

        .content >>> h2 {
            margin-top: 2rem;
            margin-bottom: 1.5rem;
            font-size: 3.157rem;
            font-weight: 700;
        }
    }

    @media (min-width: 860px) {
        .content >>> iframe {
            min-width: calc(100vw - 12rem);
            margin-left: -9rem;
        }
    }

    @media (min-width: 1200px) {
        .content >>> iframe {
            min-width: calc(1200px - 12rem);
            margin-left: -9rem;
        }
    }
</style>

