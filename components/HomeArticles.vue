<template>
  <section>
    <Container>
      <Heading
        :title="$t('articles.latest')"
        :description="$t('articles.description')"
      />

      <vs-row>
        <vs-col
          v-for="post in posts"
          :key="post.id"
          w="6"
          xs="12"
        >
          <NuxtLink :to="localePath('/articles/' + post.id)">
            <div
              class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left mb-10"
            >
              <img
                :src="post._embedded['wp:featuredmedia']['0'].source_url"
                :alt="post.title.rendered"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-contain object-center sm:mb-0 mb-4"
              />
              <div class="flex-grow sm:pl-8">
                <h2
                  v-html="post.title.rendered"
                  class="title-font font-medium text-lg text-gray-900"
                ></h2>
                <p class="text-gray-700 mb-3">
                  {{ $dateFns.format(post.date, 'eeee, d MMMM, y') }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </vs-col>
      </vs-row>

      <div class="flex justify-center mt-10 mb-5">
        <vs-button
          size="large"
          :to="localePath('/articles')"
        >
          {{ $t('articles.all') }}
        </vs-button>
      </div>
    </Container>
  </section>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
