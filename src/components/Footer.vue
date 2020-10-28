<template>
    <footer class="footer">
        <div class="container">
            <div class="item1">
                <weekday/>
            </div>

            <div class="item2">
                <span v-html="settings.footer"></span>
            </div>
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
    .container {
        display: flex;
        align-content: baseline;
        justify-content: space-between;
        padding: 0 5vw;
        margin-top: 5rem;
        margin-bottom: 3rem;
        color: #999999;
    }

    .item1 {
        width: 100%;
        margin: auto;
        align-content: space-between;
    }

    .item2 {
        width: 100%;
        text-align: right;
        margin: auto;
    }

    @media (max-width: 860px) {
        .container {
            padding: 1rem;
            margin-bottom: 1rem;
            align-content: baseline;
        }

        @media (max-width: 520px) {
            .container {
                width: 100%;
                flex-wrap: wrap;
                text-align: center;
            }

            .item2{
                text-align: center;
                margin: 1rem 0 0 0;
            }
        }
    }

</style>
