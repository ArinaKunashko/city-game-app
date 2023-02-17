<template>
      <div class="flex justify-center items-center vh100 ">
        <div class="block rounded-2xl shadow-lg bg-slate-300 max-width ">
            <div class="flex flex-row prose m-4 justify-between text-black">
                <h4 class="text-base font-normal">Сейчас очередь соперника</h4>
                <timer-component> </timer-component>
            </div>

            <div class="bg-gray-200 h-1" style="width: 45%"></div>
            <div id="chat" class="flex flex-col my-36">
              <div
          class="w-max ml-auto break-all mt-2 mb-1 p-2 rounded-br-none bg-blue-500 rounded-2xl text-white text-left mr-5">
          Москва
        </div>
            </div>
      <div class="bg-gray-100 flex flex-row border-gray items-center border rounded h-12 mx-4 ">
                <input type="text" id="message"
                    class="bg-gray-100 border rounded-2xl border-transparent w-full focus:outline-none text-sm h-10 flex items-center"
                    placeholder="Ожидаем ответа соперника..." />

                <div class="flex flex-row">
                    <button id="self" class="flex items-center justify-center h-8 w-8 mr-2 rounded-md bg-gray-400
                        hover:purple-400 text-white focus:outline-none">
                        <svg class="w-5 h-5 transform rotate-45 -mr-1 -mt-1" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                        </svg>
                    </button>
                </div>
            </div>


    </div>
  </div>
</template>

<script>
import TimerComponent from '@/components/TimerComponent.vue';
export default {
  name: 'FirstCity',
  components: {
    TimerComponent
  }
}
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

