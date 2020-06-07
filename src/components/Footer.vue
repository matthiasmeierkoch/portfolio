<template>
    <footer class="footer">
        <div class="item1">
            <span v-html="settings.footer"></span>
        </div>

        <div class="item2">
            <weekday/>
        </div>
    </footer>
</template>

<script>
    import weekday from "./weekday";

    export default {
        data() {
            return {
                settings: require("../../data/theme.json")
            }
        },
        components: {
            weekday
        }
    }
</script>

<style scoped>
    .footer {
        display: flex;
        justify-content: space-between;
        font-size: 1rem;
        padding: 3rem 1rem;
        max-width: 1200px;
        margin: auto;
    }

    .item1 {
        width: 100%;
        margin: auto;
    }

    .item2{
        width:100%;
        text-align: right;
        margin: auto;
    }

    @media (min-width: 860px) {
        .footer {
            padding: 6 6rem;
        }
    }

</style>
