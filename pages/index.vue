<template>
  <main>
    <HomeSlider />
    <HomeNews :posts="wpNews" />
    <HomeAnnouncements :posts="announcements" />
    <HomeArticles :posts="articles" />
    <HomeConferences :posts="conferences" />
    <HomeServices />
    <HomePresident />
    <HomeResources />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, $axios, app }) {
    const { locale } = app.i18n

    const announcements = await $content(`${locale}/announcements`)
      .limit(3)
      .sortBy('date', 'desc')
      .fetch()
    /*const news = await $content(`${locale}/news`)
      .limit(3)
      .sortBy('date', 'desc')
      .fetch()*/
    const articles = await $content(`${locale}/articles`)
      .limit(2)
      .sortBy('date', 'desc')
      .fetch()
    const conferences = await $content(`${locale}/conferences`)
      .limit(3)
      .sortBy('date', 'desc')
      .fetch()

    const wpNews = await $axios.$get(`https://admin.uzdsmi-nf.uz/wp-json/wp/v2/posts?categories=2&_embed&per_page=3`)

    return {
      announcements,
      // news,
      articles,
      conferences,
      wpNews
    }
  },
}
</script>

<style lang="postcss" scoped>
  main section {
    @apply mb-20;
  }
</style>
