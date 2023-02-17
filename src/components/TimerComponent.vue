<template>
    <div class="font-medium text-xl">
        {{ minutes }} : {{ seconds }}
    </div>
</template>

<script>
export default {
    props: {
        deadline: {
            type: String,
            required: true,
        },
        speed: {
            type: Number,
            default: 1000,
        },
    },
    data() {
        return {
            timerCount: 120,
        }
    },
    computed: {
        minutes() {
            let minutes = Math.floor((this.timerCount / 60))
            if (minutes < 10) {
                minutes = "0" + minutes
            }
            return minutes
        },
        seconds() {
            let secondes = Math.floor((this.timerCount) % 60)
            if (secondes < 10) {
                secondes = "0" + secondes
            }
            return secondes
        },
    },
    watch: {
        timerCount: {
            handler(value) {
                if (value > 0) {
                    setTimeout(() => {
                        this.timerCount--;
                    }, 1000);
                } else {
                    this.$router.push('/fall')
                }
            },
            immediate: true // This ensures the watcher is triggered upon creation
        }
    },

}
</script>