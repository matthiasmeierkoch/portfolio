<template>
        <div class="weekday">
            <p class="">Happy {{ weekday }} </p>
        </div>
</template>

<script>
    const dayName = ['Sunday ☀', 'Monday 👨‍💻', 'Tuesday 👩‍💻', 'Wednesday 🤘', 'Thursday 🥳', 'Friday 🚀', 'Saturday 🎉'];
    let day = new Date().getDay();
    let weekdayName = dayName[day];

    export default {
        data() {
            return {weekday: weekdayName}
        }
    }
</script>


<style>
    .weekday {
        text-align: right;
    }
</style>