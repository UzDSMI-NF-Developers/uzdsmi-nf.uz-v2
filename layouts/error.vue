<template>
  <div class="container">
    <h1
      v-if="error.statusCode === 404"
      class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
    >
      {{ $t('page_not_found') }}
    </h1>
    <h1 v-else class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      {{ $t('an_error_occured') }}
    </h1>
    <nuxt-link
      class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700"
      :to="localePath('/')"
    >
      {{ $t('nav.home_page') }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'],
  layout: 'page',
}
</script>
