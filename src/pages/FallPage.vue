<template>
    <div class="flex justify-center items-center vh100 ">
        <div class="block rounded-lg shadow-lg bg-slate-300 max-w-xl">
            <div class="prose m-10 py-3 px-6 text-center">
                <h4 class="text-xl font-normal">К сожалению, твое время вышло!</h4>
                <h4 class="text-xl font-normal">Твой противник победил!</h4>
                <h4 class="text-red-600 text-3xl"> 00:00</h4>

                <div class="p-6 flex flex-col items-center gap-5">
                    <article class="prose">
                        <h4 class="text-xl font-normal">
                            Всего было перечисленно городов: count
                        </h4>
                        <h4 class="text-xl font-normal">Очень неплохой результат!</h4>
                        <h4 class="text-xl font-normal">Последний город, названный победителем</h4>
                        <h4 class="text-xl font-semibold">Москва</h4>
                    </article>
                </div>
          
            <div class="text-center">
            <button type="button" class="focus:outline-none text-white bg-purple-700 
                                     hover:bg-purple-800 focus:ring-4 
                                      focus:ring-purple-300 font-normal rounded-lg text-sm px-5 py-2.5 mb-10
                                       dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-44 h-10">
                <router-link to='/game'> Начать новую игру </router-link>
            </button>
        </div>
        </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'FallPage'
}
</script>

<style scoped>
.vh100 {
    height: 100vh;
    margin: 40px;
}

</style>