<template>
  <section class="justify-center px-10 py-16 text-center md:px-20 pb-60 header">
    <div class="container px-4 mx-auto">
      <img
        class="inline-block border-8 border-blue-400 border-opacity-50 border-solid rounded-full  h-52 w-52"
        :src="profile.avatar_url"
        :alt="`${profile.login}'s avatar`"
      />
      <h1 class="mt-10 text-2xl">
        {{ profile.name }}
      </h1>
      <span
        class="relative inline-block my-6  before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-700"
      >
        <span class="relative text-white">
          <a class="text-xl" :href="profile.html_url" target="_blank"
            >@{{ profile.login }}</a
          >
        </span>
      </span>

      <div
        class="flex flex-col items-center justify-center text-lg text-blue-200  md:flex-row"
      >
        <span class="mx-4">
          <fa class="mr-3" :icon="['fas', 'map-marker-alt']" />
          {{ profile.location }}
        </span>
        <span class="mx-4">
          <fa class="mr-3" :icon="['far', 'calendar-alt']" />
          Joined {{ $moment(profile.created_at).format("MMMM DD,YYYY") }}
        </span>
      </div>
      <dl
        class="grid w-full grid-cols-1 mx-auto my-8 overflow-hidden divide-y divide-gray-400 rounded-lg shadow  md:w-1/2 bg-blueGray-600 md:grid-cols-3 md:divide-y-0 md:divide-x"
      >
        <div class="px-4 py-5 sm:p-6">
          <dt class="mb-4 text-base font-normal text-blue-200">Followers</dt>
          <dd class="flex items-baseline justify-center mt-1 text-center">
            <div class="flex items-baseline text-2xl font-semibold text-white">
              {{ profile.followers }}
            </div>
          </dd>
        </div>
        <div class="px-4 py-5 sm:p-6">
          <dt class="mb-4 text-base font-normal text-blue-200">Following</dt>
          <dd class="flex items-baseline justify-center mt-1 text-center">
            <div class="flex items-baseline text-2xl font-semibold text-white">
              {{ profile.following }}
            </div>
          </dd>
        </div>
        <div class="px-4 py-5 sm:p-6">
          <dt class="mb-4 text-base font-normal text-blue-200">Repos</dt>
          <dd class="flex items-baseline justify-center mt-1 text-center">
            <div class="flex items-baseline text-2xl font-semibold text-white">
              {{ profile.public_repos }}
            </div>
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script>
export default {
  props: ["profile"],
};
</script>

<style>
</style>
