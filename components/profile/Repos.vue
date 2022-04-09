<template>
  <div class="relative px-4 py-10 sm:px-6 lg:pb-28 lg:px-8">
    <div class="relative justify-center mx-auto max-w-7xl">
      <div class="flex justify-center text-center">
        <select
          class="w-full max-w-xs px-2 py-4 text-center rounded-md outline-none cursor-pointer  select select-bordered bg-blueGray-700"
          name="filter"
          v-model="filter"
        >
          <option disabled="" value="null">Filter Repos By:</option>
          <option class="py-3" value="stargazers_count">Stars</option>
          <option class="py-3" value="forks">Forks</option>
          <option class="py-3" value="size">Size</option>
        </select>
      </div>
      <div
        class="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none"
      >
        <a
          v-for="(repo, index) in allRepos"
          :key="index"
          :href="repo.html_url"
          target="_blank"
          class="block mt-2"
        >
          <div
            class="flex flex-col h-full overflow-hidden rounded-lg shadow-lg"
          >
            <div
              class="flex flex-col justify-between flex-1 p-6 bg-blueGray-600"
            >
              <div class="flex-1">
                <p class="text-xl font-semibold text-white">
                  <fa class="mr-3" :icon="['fas', 'book']" />
                  {{ repo.name }}
                </p>
                <p class="mt-3 text-base text-blue-200 line-clamp-4">
                  {{ repo.description }}
                </p>
              </div>
              <div class="flex items-center justify-between mt-6">
                <div>
                  {{ repo.language }}
                  <fa class="mx-2" :icon="['fas', 'star']" />
                  {{ repo.stargazers_count }}
                  <fa class="mx-2" :icon="['fas', 'code-branch']" />
                  {{ repo.forks }}
                </div>
                <div>{{ Number(repo.size).toLocaleString() }} KB</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["repos"],
  data() {
    return {
      allRepos: this.repos,
      filter: null,
    };
  },
  watch: {
    filter(value) {
      this.filterRepos(value);
    },
  },
  methods: {
    filterRepos(value) {
      this.allRepos = this.$_.sortBy(this.repos, value).reverse();
    },
  },
};
</script>

<style>
</style>
