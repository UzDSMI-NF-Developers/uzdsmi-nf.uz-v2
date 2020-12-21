<template>
  <div>
    <Heading
      :title="$t('announcements.latest')"
      :description="$t('announcements.description')"
    />

    <vs-row class="mb-6">
      <vs-col
        v-for="post in posts"
        :key="post.id"
        w="6"
        xs="12"
        class="mb-10"
      >
        <vs-card>
          <template #title>
            <h3>{{ post.title.rendered }}</h3>
          </template>
          <template #text>
            <p class="pb-4" v-html="post.excerpt.rendered"></p>
            <p class="flex items-center pb-2">
              <img
                :src="require('~/assets/svg/IconCalendar.svg')"
                class="mr-2 w-6 h-6"
                alt="calendar"
              />
              <span>{{ $dateFns.format(post.date, 'MMMM d, y') }}</span>
            </p>
            <vs-button
              :to="'/announcements/' + post.id"
              block
            >
              {{ $t('links.read') }}
            </vs-button>
          </template>
        </vs-card>
      </vs-col>
    </vs-row>

    <!--
    <div class="flex items-center justify-center pt-8 pb-4">
      <vs-pagination
        v-model="page"
        :length="$vs.getLength(announcements, max)"
        only-arrows
      />
      <code class="ml-4 rounded-lg bg-gray-200 p-2">
        {{ $t('page') }}: <strong>{{ page }}</strong>
      </code>
    </div>
    -->
  </div>
</template>

<script>
  export default {
    /*
    async asyncData ({ $content, app }) {
      const { locale } = app.i18n
      const announcements = await $content(`${locale}/announcements`).sortBy('date', 'desc').fetch()

      return {
        announcements
      }
    },
    */
    head() {
      const announcementsTitle = this.$i18n.t('announcements.latest')
      const announcementsDescription = this.$i18n.t('announcements.description')

      return {
        title: announcementsTitle,
        titleTemplate: `%s | uzdsmi-nf.uz`,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: announcementsDescription
          }
        ]
      }
    },
    layout: 'page',
    mounted() {
      this.getPosts()
    },
    data() {
      return {
        page: 1,
        max: 10,
        postsUrl: `https://admin.uzdsmi-nf.uz/wp-json/wp/v2/posts?categories=3&_embed`,
        posts: []
      }
    },
    methods: {
      getPosts() {
        const loading = this.$vs.loading()
        this.$axios.get(this.postsUrl).then((response) => {
          loading.close()
          this.posts = response.data
          // this.configPagination(response.headers)
        }).catch((error) => {
          loading.close()
          console.log(error)
        })
      }
    }
  }
</script>
