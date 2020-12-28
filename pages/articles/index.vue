<template>
  <div>
    <Heading
      :title="$t('articles.latest')"
      :description="$t('articles.description')"
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
            <h3 v-html="post.title.rendered"></h3>
          </template>
          <template #img>
            <img
              :src="post._embedded['wp:featuredmedia']['0'].source_url"
              :alt="post.title.rendered"
            />
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
      <code class="ml-4 rounded-lg bg-gray-200 p-2">
        {{ $t('page') }}: <strong>{{ this.postsData.page }}</strong>
      </code>
      <pagination :pagination="pagination"
        @prev="--postsData.page; getPosts();"
        @next="postsData.page++; getPosts();">
      </pagination>
    </div>
  </div>
</template>

<script>
  export default {
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
    mounted() {
      this.getPosts()
    },
    data() {
      return {
        page: 1,
        max: 10,
        postsUrl: `https://admin.uzdsmi-nf.uz/wp-json/wp/v2/posts?categories=4&_embed`,
        posts: [],
        postsData: {
          per_page: 10,
          page: 1
        },
        pagination: {
          prevPage: '',
          nextPage: '',
          totalPages: '',
          from: '',
          to: '',
          total: ''
        }
      }
    },
    methods: {
      getPosts() {
        const loading = this.$vs.loading()
        this.$axios.get(this.postsUrl, { params: this.postsData }).then((response) => {
          loading.close()
          this.posts = response.data
          this.configPagination(response.headers)
        }).catch((error) => {
          loading.close()
          console.log(error)
        })
      },
      configPagination(headers) {
        this.pagination.total = +headers['x-wp-total'];
        this.pagination.totalPages = +headers['x-wp-totalpages'];
        this.pagination.from = this.pagination.total ? ((this.postsData.page - 1) * this.postsData.per_page) + 1 : ' ';
        this.pagination.to = (this.postsData.page * this.postsData.per_page) > this.pagination.total ? this.pagination.total : this.postsData.page * this.postsData.per_page;
        this.pagination.prevPage = this.postsData.page > 1 ? this.postsData.page : '';
        this.pagination.nextPage = this.postsData.page < this.pagination.totalPages ? this.postsData.page + 1 : '';
      }
    }
  }
</script>
