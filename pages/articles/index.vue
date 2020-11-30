<template>
  <div>
    <Heading
      :title="$t('articles.latest')"
      :description="$t('articles.description')"
    />

    <vs-row class="mb-6">
      <vs-col
        v-for="post in $vs.getPage(articles, page, max)"
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
            <vs-button
              :to="'/articles/' + post.id"
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
        :length="$vs.getLength(articles, max)"
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
      const articles = await $content(`${locale}/articles`).sortBy('date', 'desc').fetch()

      return {
        articles
      }
    },
    head() {
      const articlesTitle = this.$i18n.t('articles.latest')
      const articlesDescription = this.$i18n.t('articles.description')

      return {
        title: articlesTitle,
        titleTemplate: `%s | uzdsmi-nf.uz`,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: articlesDescription
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
