<template>
  <div class="header-top">
    <ul class="flex items-center py-1 md:py-0">
      <li class="px-3">
        <NuxtLink :to="localePath('/page/278475')">
          <img src="/flag-uzb.png" alt="National flag of Uzbekistan" />
        </NuxtLink>
      </li>
      <li class="px-3">
        <NuxtLink :to="localePath('/page/900488')">
          <img src="/gerb-uzb.png" alt="National Symbolics of Uzbekistan" />
        </NuxtLink>
      </li>
      <li class="px-3">
        <NuxtLink :to="localePath('/page/340569')">
          <img src="/note.png" alt="National Anthem of Uzbekistan" />
        </NuxtLink>
      </li>
      <li class="px-3">
        <NuxtLink :to="localePath('/page/278475')">
          <img src="/flag-qq.png" alt="National flag of Karakalpakstan" />
        </NuxtLink>
      </li>
      <li class="px-3">
        <NuxtLink :to="localePath('/page/226084')">
          <img src="/gerb-uzb.png" alt="National Symbolics of Karakalpakstan" />
        </NuxtLink>
      </li>
      <li class="px-3">
        <NuxtLink :to="localePath('/page/821363')">
          <img src="/note.png" alt="National Anthem of Karakalpakstan" />
        </NuxtLink>
      </li>
    </ul>
    <div class="flex py-1 md:py-0">
      <ul class="px-3">
        <li class="text-blue-500 font-semibold text-lg hover:underline">
          <a href="tel:+998612241410">998-61-224-29-02</a>
        </li>
        <li class="text-blue-500 font-semibold text-lg hover:underline">
          <a href="tel:+998977889455">998-97-788-94-55</a>
        </li>
      </ul>
      <ul class="px-3">
        <li class="text-blue-500 font-semibold text-lg hover:underline">
          <a href="mailto:fart_info@edu.uz">fart_info@edu.uz</a>
        </li>
        <li class="text-blue-500 font-semibold text-lg hover:underline">
          <a href="mailto:fart-info@exat.uz">fart-info@exat.uz</a>
        </li>
      </ul>
    </div>
    <ul class="flex items-center py-1 md:py-0">
      <li class="px-3">
        <NuxtLink :to="switchLocalePath('en')">
          <img src="/flags/flag-of-great-britain.svg" alt="Switch to English" />
        </NuxtLink>
      </li>
      <li class="px-3">
        <NuxtLink :to="switchLocalePath('ru')">
          <img src="/flags/flag-of-russia.svg" alt="Switch to Russia" />
        </NuxtLink>
      </li>
      <li class="px-3">
        <NuxtLink :to="switchLocalePath('uz')">
          <img src="/flags/flag-of-uzbekistan.svg" alt="Switch to Uzbek" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.header-top {
  @apply py-2 flex-col flex items-center justify-between border-b-2 border-gray-200;

  @screen md {
    @apply flex-row;
  }
}

img {
  @apply w-8;
}
</style>
