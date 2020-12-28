<template>
  <main>
    <HomeSlider />
    <HomeNews :posts="wpNews" />
    <HomeAnnouncements :posts="wpAnnouncements" />
    <HomeArticles :posts="wpArticles" />
    <HomeConferences :posts="wpConferences" />
    <HomeServices />
    <HomePresident />
    <HomeResources />
  </main>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const wpNews = await $axios.$get(`https://admin.uzdsmi-nf.uz/wp-json/wp/v2/posts?categories=2&_embed&per_page=3`)
    const wpAnnouncements = await $axios.$get(`https://admin.uzdsmi-nf.uz/wp-json/wp/v2/posts?categories=3&_embed&per_page=3`)
    const wpArticles = await $axios.$get(`https://admin.uzdsmi-nf.uz/wp-json/wp/v2/posts?categories=4&_embed&per_page=4`)
    const wpConferences = await $axios.$get(`https://admin.uzdsmi-nf.uz/wp-json/wp/v2/posts?categories=5&_embed&per_page=6`)

    return {
      wpNews,
      wpAnnouncements,
      wpArticles,
      wpConferences,
    }
  },
}
</script>

<style lang="postcss" scoped>
  main section {
    @apply mb-20;
  }
</style>
