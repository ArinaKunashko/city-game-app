<template>
  <div class="flex gap-8 justify-center items-center vh100">
    <div class="block rounded-lg shadow-lg bg-white max-w-xl">
      <div class="prose py-3 px-6 text-center">
        <div v-if="getLastAuthor === 'client'">
          <h4 class="text-xl font-normal">Поздравляем тебя с победой!</h4>
          <h4 class="text-xl font-normal">
            Твой противник не вспомнил нужный город!
          </h4>
          <h4 class="text-green-600 text-3xl">00:00</h4>
        </div>
        <div v-else>
          <h4 class="text-xl font-normal">К сожалению, твое время вышло!</h4>
          <h4 class="text-xl font-normal">Твой противник победил!</h4>
          <h4 class="text-red-600 text-3xl">00:00</h4>
        </div>
        <div class="p-6 flex flex-col items-center">
          <article class="prose">
            <h4 class="text-xl font-normal">
              Всего было перечислено городов: {{ getMessages.length }}
            </h4>
            <h4 class="text-xl font-normal">Очень неплохой результат!</h4>
            <h4 class="text-xl font-normal">
              Последний город, названный победителем
            </h4>
            <h4 class="text-xl font-semibold">{{ getLastCity }}</h4>
          </article>
        </div>
      </div>
      <div class="text-center">
        <button
          type="button"
          class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-normal rounded-lg text-sm px-5 py-2.5 mb-10 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-44 h-10"
        >
          <router-link to="/game"> Начать новую игру </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ResultPage",
  computed: {
    ...mapGetters(["getLastAuthor", "getMessages", "getLastCity"]),
  },
};
</script>

<style scoped>
.vh100 {
  height: 100vh;
}
</style>
