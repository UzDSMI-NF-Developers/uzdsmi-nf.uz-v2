<template>
  <main>
    <HomeSlider />
    <HomeNews :posts="news" />
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
  async asyncData({ $content, app }) {
    const { locale } = app.i18n

    const announcements = await $content(`${locale}/announcements`)
      .limit(3)
      .sortBy('date', 'desc')
      .fetch()
    const news = await $content(`${locale}/news`)
      .limit(3)
      .sortBy('date', 'desc')
      .fetch()
    const articles = await $content(`${locale}/articles`)
      .limit(2)
      .sortBy('date', 'desc')
      .fetch()
    const conferences = await $content(`${locale}/conferences`)
      .limit(3)
      .sortBy('date', 'desc')
      .fetch()

    return {
      announcements,
      news,
      articles,
      conferences,
    }
  },
}
</script>

<style lang="postcss" scoped>
  main section {
    @apply mb-20;
  }
</style>
