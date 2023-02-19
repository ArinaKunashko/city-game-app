<template>
    <div class="font-medium text-xl">
        {{ minutes }} : {{ seconds }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: {
        deadline: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            timerCount: 120,
        }
    },
    computed: {
        ...mapGetters([
            'getLastAuthor',
        ]),
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
                    this.$router.push('/result')
                }
            },
            immediate: true
        }
    },
    mounted() {
        this.unwatch = this.$store.watch(
            (state, getters) => getters.getLastAuthor,
            () => {
                this.timerCount = 120
            },
        )
    },
    beforeUnmount() {
        this.unwatch();
    }

}
</script>