<template>
  <div>
    <Heading
      :title="$t('news.latest')"
      :description="$t('news.description')"
    />

    <vs-row class="mb-6">
      <vs-col
        v-for="post in $vs.getPage(news, page, max)"
        :key="post.id"
        w="6"
        xs="12"
        class="mb-10"
      >
        <vs-card>
          <template #title>
            <h3>{{ post.title }}</h3>
          </template>
          <template #img>
            <img :src="post.featuredImage" :alt="post.title" />
          </template>
          <template #text>
            <p class="pb-4">
              {{ post.description }}
            </p>
            <p class="flex items-center pb-2">
              <img
                :src="require('~/assets/svg/IconCalendar.svg')"
                class="mr-2 w-6 h-6"
                alt="calendar"
              />
              <span>{{ $dateFns.format(post.date, 'MMMM d, y') }}</span>
            </p>
            <vs-button
              :to="'/news/' + post.id"
              block
            >
              {{ $t('links.read') }}
            </vs-button>
          </template>
        </vs-card>
      </vs-col>
    </vs-row>

    <div class="flex items-center justify-center pt-8 pb-4">
      <vs-pagination
        v-model="page"
        :length="$vs.getLength(news, max)"
        only-arrows
      />
      <code class="ml-4 rounded-lg bg-gray-200 p-2">
        {{ $t('page') }}: <strong>{{ page }}</strong>
      </code>
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData ({ $content, app }) {
      const { locale } = app.i18n
      const news = await $content(`${locale}/news`).sortBy('date', 'desc').fetch()

      return {
        news
      }
    },
    head() {
      const newsTitle = this.$i18n.t('news.latest')
      const newsDescription = this.$i18n.t('news.description')

      return {
        title: newsTitle,
        titleTemplate: `%s | uzdsmi-nf.uz`,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: newsDescription
          }
        ]
      }
    },
    layout: 'page',
    data() {
      return {
        page: 1,
        max: 10,
      }
    }
  }
</script>
