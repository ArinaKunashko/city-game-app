<template>
  <div class="max-w-prose mx-auto lg:text-lg">
    <div class="p-6 prose prose-slate mx-auto lg:prose-lg">
      <h3>Функциональности</h3>
      <ul>
        <li>Игра начинается при нажатии на кнопку "Начать игру";</li>
        <li>
          Далее нам, как игрокам, предоставляется возможность начать игру,
          отправив боту первый город;
        </li>
        <li>
          На инпуте установлена валидация на существование города, на
          повторяющийся город и на город, начинающийся не с правильной буквы, в
          случае непрохождения валидации игрок получает сообщение Alert;
        </li>
        <li>
          Города, заканчивающиеся на 'ъ', 'ы', 'ь' считаются заканчивающимися на
          букву, стоящую перед перечисленными;
        </li>
        <li>
          На ответ предоставляется 2 минуты, при истечении времени происходит
          переход на страничку результата;
        </li>
        <li>
          На размышления для бота установлено рандомное время, поэтому есть
          вероятность, что бот проиграет;
        </li>
        <li>
          В результате выводится количество использованных городов, отображается
          последний названный город и победитель;
        </li>
      </ul>
      <h3>Технологический стек</h3>
      <ul>
        <li>Проект написала на JavaScript + Vue3 + Vuex + Tailwind;</li>
        <li>
          Компоненты описала с использованеим hooks (mounted, beforeUnmount);
        </li>
        <li>Для создания хранилища подключила Vuex;</li>
        <li>Для маршрутизации использовала библотеку Vue Router;</li>
      </ul>
    </div>
    <div class="text-center">
      <button
        class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-normal rounded-lg text-sm px-5 py-2.5 mb-10 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-44 h-10"
      >
        <router-link to="/welcomePage"> Посмотреть игру </router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
};
</script>
