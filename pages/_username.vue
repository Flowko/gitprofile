<template>
  <div class="flex flex-col">
    <profile-banner :profile="profile" />
    <profile-charts :repos="repos" />
    <profile-repos :repos="repos" />
  </div>
</template>

<script>
export default {
  name: "ProfilePage",
  data() {
    return {};
  },
  head() {
    return {
      title: `GitProfile | ${this.username}`,
    };
  },
  async asyncData({ params, redirect, $axios }) {
    try {
      const username = params.username;
      const profileData = await $axios
        .$get(`/github/${username}`)
        .then((response) => {
          return response;
        });

      const profileRepos = await $axios
        .$get(`/github/${username}/repos`)
        .then((response) => {
          return response;
        });

      if (profileData && profileRepos) {
        return {
          profile: profileData,
          repos: profileRepos,
          username,
        };
      } else {
        redirect("/");
      }
    } catch (error) {
      redirect("/");
    }
  },
  mounted() {},
};
</script>

<style lang="scss">
.header {
  background: linear-gradient(
      180deg,
      rgba(26, 30, 34, 0.95),
      rgba(26, 30, 34, 0.95)
    ),
    url(https://source.unsplash.com/1600x900/?github) no-repeat;
  background-size: cover;
}
</style>
