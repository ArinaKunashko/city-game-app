<template>
  <p
    :class="{
      'w-max ml-auto text-base break-all mt-2 mb-1 p-2 rounded-br-none bg-purple-500 rounded-2xl text-white text-left mr-5':
        message.author == 'client',
      'inline-block text-base first-letter:w-max ml-5 break-all mt-2 mb-1 p-2 rounded-bl-none bg-violet-50 rounded-2xl text-black text-left':
        message.author == 'bot',
    }"
  >
    <span>{{ message.text }}</span>
  </p>
</template>

<script>
export default {
  name: "MessageText",
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.$el.scrollIntoView();
  },
};
</script>
