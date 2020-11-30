<template>
  <div>
    <Content :body="post" />
  </div>
</template>

<script>
  export default {
    async asyncData ({ $content, params, app }) {
      const { id } = params
      const { locale } = app.i18n
      const post = await $content(`${locale}/page`, id).fetch()

      return {
        post
      }
    },
    layout: 'page',
  }
</script>
