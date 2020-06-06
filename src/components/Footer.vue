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
        padding: 6rem 6rem;
        max-width: 1200px;
        margin: auto;
    }

    .item1 {
        width: 50%;
        margin: auto;
    }

    .item2{
        width: 50%;
        text-align: right;
        margin: auto;
    }

</style>
