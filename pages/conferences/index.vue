<template>
  <div>
    <Heading
      :title="$t('conferences.latest')"
      :description="$t('conferences.description')"
    />

    <vs-row class="mb-6">
      <vs-col
        v-for="post in $vs.getPage(conferences, page, max)"
        :key="post.id"
        w="6"
        xs="12"
        class="mb-10"
      >
        <vs-card>
          <template #title>
            <h3>{{ post.title }}</h3>
          </template>
          <template #text>
            <vs-button
              :to="'/conferences/' + post.id"
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
        :length="$vs.getLength(conferences, max)"
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
    async asyncData({ $content, app }) {
      const conferences = await $content(`${app.i18n.locale}/conferences`).sortBy('date', 'desc').fetch()

      return {
        conferences,
      }
    },
    head() {
      const conferencesTitle = this.$i18n.t('conferences.latest')
      const conferencesDescription = this.$i18n.t('conferences.description')

      return {
        title: conferencesTitle,
        titleTemplate: `%s | uzdsmi-nf.uz`,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: conferencesDescription
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
