<template>
  <section>
    <Container>
      <Heading
        :title="$t('conferences.latest')"
        :description="$t('conferences.description')"
      />

      <div class="flex flex-wrap -mx-4 -my-8">
        <div v-for="(post, i) in posts" :key="post.id" class="xl:w-1/3 md:w-1/2 p-4">
          <NuxtLink
            :to="localePath('/conferences/' + post.id)"
            class="inline-block border border-gray-300 p-6 rounded-lg"
          >
            <div
              class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"
            >
              <span class="text-lg font-bold">{{ i + 1 }}</span>
            </div>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
              {{ post.title }}
            </h2>
            <p class="leading-relaxed text-base">
              {{ $dateFns.format(post.date, 'eeee, d MMMM, y') }}
            </p>
          </NuxtLink>
        </div>
      </div>

      <div class="flex justify-center mt-10 mb-5">
        <vs-button
          size="large"
          :to="localePath('/conferences')"
        >
          {{ $t('conferences.all') }}
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
