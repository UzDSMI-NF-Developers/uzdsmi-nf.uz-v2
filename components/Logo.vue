<template>
  <NuxtLink
    :to="localePath('/')"
    class="flex font-medium items-center md:justify-start justify-center"
  >
    <img src="/logo.png" alt="Uzdsmi-NF.uz Logo" width="100px" />
    <span v-if="withTitle" class="ml-3 text-xl">
      {{ $t('site_title') }}
    </span>
  </NuxtLink>
</template>

<script>
  export default {
    props: {
      withTitle: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
