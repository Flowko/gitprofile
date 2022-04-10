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
          v-for="(repo, index) in paginated"
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
      <div class="flex justify-center mt-12">
        <div class="inline-flex">
          <button
            class="inline-flex items-center px-4 py-2 mr-4 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out border border-transparent rounded-md  bg-blueGray-700 hover:bg-blueGray-600 focus:outline-none focus:border-blueGray-700 focus:shadow-outline-blueGray active:bg-blueGray-700 disabled:opacity-70 disabled:hover:bg-blueGray-700 disabled:cursor-not-allowed"
            @click="prevPage"
            :disabled="page === 1"
          >
            <fa class="mr-3" :icon="['fas', 'chevron-left']" />
            Previous
          </button>
          <button
            class="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out border border-transparent rounded-md  bg-blueGray-700 hover:bg-blueGray-600 focus:outline-none focus:border-blueGray-700 focus:shadow-outline-blueGray active:bg-blueGray-700 disabled:opacity-70 disabled:hover:bg-blueGray-700 disabled:cursor-not-allowed"
            @click="nextPage"
            :disabled="page === Math.ceil(repos.length / perPage)"
          >
            Next
            <fa class="ml-3" :icon="['fas', 'chevron-right']" />
          </button>
        </div>
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
      perPage: 9,
      page: 1,
    };
  },
  computed: {
    indexStart() {
      return (this.page - 1) * this.perPage;
    },
    indexEnd() {
      return this.indexStart + this.perPage;
    },
    paginated() {
      return this.allRepos.slice(this.indexStart, this.indexEnd);
    },
  },
  watch: {
    filter(value) {
      this.filterRepos(value);
    },
  },
  methods: {
    nextPage() {
      this.page++;
    },
    prevPage() {
      this.page--;
    },
    filterRepos(value) {
      this.allRepos = this.$_.sortBy(this.repos, value).reverse();
      this.paginated = this.allRepos.slice(this.indexStart, this.indexEnd);
      this.page = 1;
    },
  },
};
</script>

<style>
</style>
