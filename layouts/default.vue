<template>
  <div class="font-serif text-white">
    <nuxt />
    <github-corner />
    <footer class="flex justify-center p-8 text-center">
      <div>
        <span>
          Built with 💚 By
          <a
            href="https://github.com/Flowko"
            class="text-blue-300"
            target="_blank"
            >@Flowko</a
          >
          Using
          <a href="https://nuxtjs.org/" class="text-blue-300" target="_blank"
            >Nuxtjs</a
          >

          ·
          <a
            href="https://www.chartjs.org/"
            class="text-blue-300"
            target="_blank"
            >Chart.js</a
          >
          ·
          <a
            href="https://developer.github.com/v3/"
            class="text-blue-300"
            target="_blank"
            >Giuthub API</a
          >
          and more!
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import GithubCorner from "~/components/GithubCorner.vue";
export default {
  components: { GithubCorner },
};
</script>

<style lang="scss">
html,
body {
  @apply bg-gray-900;
}
</style>
