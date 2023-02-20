<template>
  <div class="flex justify-center items-center vh100">
    <div class="block rounded-2xl shadow-lg bg-white max-w-xl">
      <div class="prose py-3 px-6 border-b-2 border-gray-100 text-center">
        <h4 class="font-normal">Игра в города на время</h4>
      </div>
      <div class="p-6 flex flex-col items-center">
        <article class="prose">
          <p>Цель: назвать как можно больше реальных городов.</p>
          <ul prose-ul>
            <li class="prose-li">Запрещается повторение городов</li>
            <li class="prose-li">
              Названий городов на твердый "ъ" или мягкий "ь" знак нет. Из-за
              этого мы пропускаем эту букву и игрок должен назвать город на
              букву, стоящую перед ъ или ь знаком.
            </li>
            <li class="prose-li">
              Каждому игроку дается 2 минуты на размышления, если спустя это
              время игрок не вводит слово, он считается проигравшим.
            </li>
          </ul>
        </article>
        <button
          type="button"
          class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-32"
        >
          <router-link to="/game"> Начать игру </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomePage",
};
</script>

<style scoped>
.vh100 {
  height: 100vh;
}
</style>
