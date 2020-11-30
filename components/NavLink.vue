<template>
  <NuxtLink
    :to="to"
    class="block px-4 py-2 mt-2 font-semibold bg-transparent rounded-lg md:mt-0 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
  >
    <slot></slot>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '/',
    },
  },
}
</script>
