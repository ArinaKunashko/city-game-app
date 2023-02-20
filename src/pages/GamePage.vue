<template>
  <div class="flex justify-center items-center vh100">
    <div class="flex-col rounded-2xl shadow-lg bg-white max-width">
      <div class="flex flex-row prose m-4 justify-between text-black">
        <h4 v-if="getLastAuthor === 'bot'" class="text-base font-normal">
          Сейчас ваша очередь
        </h4>
        <h4 v-else class="text-base font-normal">Сейчас очередь соперника</h4>
        <count-component> </count-component>
      </div>
      <div class="bg-gray-200 h-1" style="width: 45%"></div>
      <div
        id="chat"
        :class="{ 'justify-center': getMessages.length === 0 }"
        class="flex flex-col items-center h-3/5 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
      >
        <p
          v-if="getMessages.length === 0"
          class="font-normal text-gray-400 w-max my-36 mt-2 mb-1 p-2"
        >
          Первый участник вспоминает города...
        </p>
        <ul class="w-full">
          <li
            v-for="(msg, idx) in $store.state.messages"
            :key="idx"
            :class="msg.author"
          >
            <message-text :message="msg"> </message-text>
          </li>
        </ul>
      </div>
      <p class="text-gray-400 text-center mb-0 text-sm">
        Всего перечислено городов: {{ getMessages.length }}
      </p>
      <div
        class="bg-gray-100 flex flex-row border-gray items-center border rounded h-12 mx-4 mt-7"
      >
        <input
          id="message"
          v-model="message"
          type="text"
          :disabled="getLastAuthor === 'client'"
          class="bg-gray-100 rounded-2xl border-transparent w-full text-sm h-10 flex items-center outline-none focus:outline-none border-none focus:border-none shadow-none focus:shadow-none focus:ring-0"
          :placeholder="changePlaceholder"
          @keyup.enter="sendMessage"
        />
        <div class="flex flex-row">
          <button
            id="self"
            :disabled="getLastAuthor === 'client'"
            :class="{
              'flex items-center justify-center h-8 w-8 mr-2 rounded-md bg-purple-500 hover:purple-400 text-white focus:outline-none':
                getLastAuthor === 'bot',
              'flex items-center justify-center h-8 w-8 mr-2 rounded-md bg-gray-400 hover:purple-400 text-white focus:outline-none':
                getLastAuthor === 'client',
            }"
            @click="sendMessage"
          >
            <svg
              class="w-5 h-5 transform rotate-45 -mr-1 -mt-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountComponent from "@/components/CountComponent.vue";
import MessageText from "@/components/MessageText.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "FirstCity",
  components: {
    CountComponent,
    MessageText,
  },
  data: () => ({
    message: "",
  }),
  computed: {
    ...mapGetters([
      "getLastAuthor",
      "getMessages",
      "getCity",
      "getLastLetter",
      "isValidCity",
    ]),
    changePlaceholder() {
      if (this.getMessages.length === 0) {
        return "Напишите любой город, например: Где вы живете?";
      } else if (this.getLastAuthor === "client") {
        return "Ожидаем ответа соперника...";
      }
      return `Знаете город на букву “${this.getLastLetter}”?`;
    },
  },
  mounted() {
    this.resetMessages();
  },
  methods: {
    ...mapActions(["addMessage", "resetMessages"]),
    sendMessage() {
      const message = this.message;
      if (!this.isValidCity(message)) {
        alert("Упс, такого города нет");
        this.message = "";
        return;
      }
      if (
        this.getMessages.length > 0 &&
        !message.startsWith(this.getLastLetter)
      ) {
        alert(`Нет, город должен начинаться с буквы ${this.getLastLetter}`);
        this.message = "";
        return;
      }
      if (this.getMessages.map((m) => m.text).includes(message)) {
        alert(`Город ${message} уже называли`);
        this.message = "";
        return;
      }
      this.addMessage({ text: message, author: "client" });
      this.message = "";
      setTimeout(() => {
        this.addMessage({
          text: this.getCity(this.getLastLetter),
          author: "bot",
        });
      }, Math.floor(Math.random() * 150000));
    },
  },
};
</script>

<style scoped>
.vh100 {
  height: 100vh;
}

.max-width {
  width: 576px;
  height: 464px;
}
</style>
