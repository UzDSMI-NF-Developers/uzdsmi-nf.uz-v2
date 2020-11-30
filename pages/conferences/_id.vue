<template>
  <div>
    <div class="text-lg sm:text-xl flex items-center">
      <img :src="require('~/assets/svg/IconCalendar.svg')" alt="calendar" class="mr-2 w-6 h-6" />
      <p>
        {{ $t('post.published_date') }}
        <span class="font-medium">
          {{ $dateFns.format(post.date, 'eeee, d MMMM, y') }}
        </span>
      </p>
    </div>
    <Content :body="post" />
  </div>
</template>

<script>
  export default {
    async asyncData ({ $content, params, app }) {
      const { id } = params
      const { locale } = app.i18n
      const post = await $content(`${locale}/conferences`, id).fetch()

      return {
        post
      }
    },
    head() {
      const { title, description } = this.post

      return {
        title: title,
        titleTemplate: `%s | uzdsmi-nf.uz`,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: description
          }
        ]
      }
    },
    layout: 'page'
  }
</script>
