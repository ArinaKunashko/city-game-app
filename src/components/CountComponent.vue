<template>
    <div class="font-medium text-xl">
        {{ formatedCountdown || 'countdown over' }}
        </div>
</template>
  
<script>
import { mapGetters } from 'vuex'
  
  export default {
    data() {
      return {
        countdown: 12,
      }
    },
    mounted() {
      const stopCountdown = setInterval(() => {
        this.countdown -= 1
        if (!this.countdown) {
            clearInterval(stopCountdown)
            this.$router.push('/result')
        }
      }, 1000)
      this.unwatch = this.$store.watch(
            (state, getters) => getters.getLastAuthor,
            () => {
                this.countdown = 12
            },
        )
    },
    computed: {
        ...mapGetters([
            'getLastAuthor',
        ]),
      formatedCountdown() {
        const mInt = Math.floor((this.countdown / 60))
        const sInt = Math.floor((this.countdown) % 60)
        const minutes = mInt < 10 ? '0' + mInt : mInt
        const seconds = sInt < 10 ? '0' + sInt : sInt
        return `${minutes}:${seconds}` 
      },
    },
    beforeUnmount() {
        this.unwatch();
    }
  }
</script>