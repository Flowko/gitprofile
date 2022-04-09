<template>
  <div class="flex flex-col justify-center px-4 mt-24 text-center">
    <div>
      <fa
        class="text-blue-400 text-8xl md:text-9xl"
        :icon="['fab', 'github']"
      />
    </div>
    <h1 class="mt-20 font-serif text-xl font-normal md:text-3xl">
      Find Your Github Profile
    </h1>
    <form v-on:submit.prevent="onSubmit">
      <input
        class="w-full p-4 mt-10 text-2xl font-normal text-center text-blue-400 rounded-lg outline-none  bg-blueGray-700 focus:outline-none focus:ring focus:ring-blueGray-500 md:w-2/4"
        type="text"
        v-model="username"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      username: "",
    };
  },
  methods: {
    onSubmit() {
      this.$router.push(`/${this.username}`);
    },
  },
};
</script>
