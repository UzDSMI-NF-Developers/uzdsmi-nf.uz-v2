<template>
  <section>
    <Container>
      <Heading
        :title="$t('announcements.latest')"
        :description="$t('announcements.description')"
      />

      <vs-row>
        <vs-col
          v-for="post in posts"
          :key="post.id"
          w="4"
          xs="12"
        >
          <NuxtLink :to="localePath('/announcements/' + post.id)">
            <div class="h-full flex items-start">
              <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                <span class="text-gray-700 pb-2 mb-2 border-b-2 border-blue-300">
                  {{ $dateFns.format(post.date, 'MMM') }}
                </span>
                <span class="font-medium text-xl text-gray-800 title-font">
                  {{ $dateFns.format(post.date, 'd') }}
                </span>
              </div>
              <div class="flex-grow pl-6">
                <h3 class="title-font text-xl font-medium text-gray-900 mb-3 hover:underline">
                  {{ post.title }}
                </h3>
                <p class="leading-relaxed mb-5">
                  {{ post.description }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </vs-col>
      </vs-row>

      <div class="flex justify-center mt-10 mb-5">
        <vs-button
          size="large"
          :to="localePath('/announcements')"
        >
          {{ $t('announcements.all') }}
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
