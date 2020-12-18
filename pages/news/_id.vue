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
    <div
      class="prose prose-sm lg:prose-lg xl:prose=xl nuxt-content max-w-none mt-10"
    >
      <h1 v-html="post.title.rendered"></h1>
      <div v-html="post.content.rendered"></div>
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData ({ $axios, params, app }) {
      const { id } = params
      const { locale } = app.i18n
      const post = await $axios.$get(`https://admin.uzdsmi-nf.uz//wp-json/wp/v2/posts/${id}`)

      return {
        post
      }
    },
    head() {
      const { title, excerpt } = this.post

      return {
        title: title.rendered,
        titleTemplate: `%s | uzdsmi-nf.uz`,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: excerpt.rendered
          }
        ]
      }
    },
    layout: 'page'
  }
</script>
