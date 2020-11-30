<template>
  <section>
    <Container>
      <Heading
        :title="$t('news.latest')"
        :description="$t('news.description')"
      />

      <vs-row>
        <vs-col
          v-for="post in posts"
          :key="post.id"
          lg="4"
          xs="12"
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
              <vs-button
                :to="'/news/' + post.id"
                border
                block
              >
                {{ $t('links.read') }}
              </vs-button>
            </template>
          </vs-card>
        </vs-col>
      </vs-row>

      <div class="flex justify-center mt-10 mb-5">
        <vs-button
          size="large"
          :to="localePath('/news')"
        >
          {{ $t('news.all') }}
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
