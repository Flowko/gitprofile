<template>
  <div class="flex justify-center flex-col text-center mt-24">
    <div>
      <fa class="text-blue-400 text-9xl" :icon="['fab', 'github']" />
    </div>
    <h1 class="font-serif font-normal text-3xl mt-20">
      Find Your Github Profile
    </h1>
    <form v-on:submit.prevent="onSubmit">
      <input
        class="
          mt-10
          bg-blueGray-700
          focus:outline-none focus:ring focus:ring-blueGray-500
          rounded-lg
          p-4
          outline-none
          text-center
          font-normal
          text-2xl text-blue-400
          w-4/5
          md:w-2/4
        "
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
