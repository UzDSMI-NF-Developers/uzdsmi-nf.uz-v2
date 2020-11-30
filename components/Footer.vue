<template>
  <footer class="border-t-2 border-gray-300">
    <Container
      class="px-5 py-12 flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col"
    >
      <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d966.8707287551921!2d59.579297429243034!3d42.454690788181146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dd99dd0afc7dbd%3A0x38ac8257fbb9aaff!2z0J3Rg9C60YPRgdGB0LrQuNC5INGE0LjQu9C40LDQuyDQk9C-0YHRg9C00LDRgNGB0YLQstC10L3QvdC-0LPQviDQuNC90YHRgtC40YLRg9GC0LAg0LjRgdC60YPRgdGB0YLQstCwINC4INC60YPQu9GM0YLRg9GA0Ysg0KPQt9Cx0LXQutC40YHRgtCw0L3QsA!5e1!3m2!1sru!2s!4v1602133969678!5m2!1sru!2s"
          class="border border-gray-500 p-1 rounded-lg"
        ></iframe>
      </div>
      <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
        <div class="lg:w-1/3 md:w-1/2 w-full px-4">
          <h2 class="font-medium tracking-widest mb-3 uppercase">
            {{ $t('categories') }}
          </h2>
          <ul class="list-none mb-10 space-y-3">
            <li>
              <NuxtLink :to="localePath('/')" class="text-gray-800 hover:text-black">
                {{ $t('nav.branch.title') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/')" class="text-gray-800 hover:text-black">
                {{ $t('nav.activity.title') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/')" class="text-gray-800 hover:text-black">
                {{ $t('nav.applicants.title') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/')" class="text-gray-800 hover:text-black">
                {{ $t('nav.students.title') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/')" class="text-gray-800 hover:text-black">
                {{ $t('nav.interactive_services.title') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/')" class="text-gray-800 hover:text-black">
                {{ $t('nav.normative_legal_documents.title') }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="lg:w-1/3 md:w-1/2 w-full px-4">
          <h2 class="font-medium tracking-widest mb-3 uppercase">
            {{ $t('news.latest') }}
          </h2>
          <ul class="list-none mb-10 space-y-3">
            <li>
              <NuxtLink :to="localePath('/')" class="text-gray-800 hover:text-black">
                First Link
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/')" class="text-gray-800 hover:text-black">
                Second Link
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/')" class="text-gray-800 hover:text-black">
                Third Link
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/')" class="text-gray-800 hover:text-black">
                Fourth Link
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="lg:w-1/3 md:w-1/2 w-full px-4">
          <h2 class="font-medium tracking-widest mb-3 uppercase">
            {{ $t('information') }}
          </h2>
          <ul class="list-none mb-10 space-y-3">
            <li>
              <strong class="text-md">
                {{ $t('site_title') }}
              </strong>
            </li>
            <li>
              <span>
                <strong>{{ $t('address.title') }}</strong>
                :
                <em>{{ $t('address.place') }}</em>
              </span>
            </li>
            <li>
              <span>
                <strong>{{ $t('phone') }}</strong>
                :
                <em>(998)-61-224-14-10</em>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Container>
    <div class="bg-gray-200">
      <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
        <Logo withTitle />
        <p class="text-md sm:ml-6 sm:mt-0 mt-4">© {{ new Date().getFullYear() }}</p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.href"
            target="_blank"
            rel="nofollow noopener"
            class="ml-4"
          >
            <vs-avatar
              square
              size="30"
            >
              <img :src="link.iconUrl" :alt="link.name" />
            </vs-avatar>
          </a>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      socialLinks: [
        {
          name: 'Telegram',
          href: 'https://telegram.org',
          iconUrl: require('~/assets/svg/IconTelegram.svg'),
        },
        {
          name: 'Facebook',
          href: 'https://facebook.com',
          iconUrl: require('~/assets/svg/IconFacebook.svg'),
        },
        {
          name: 'Instagram',
          href: 'https://instagram.com',
          iconUrl: require('~/assets/svg/IconInstagram.svg'),
        },
        {
          name: 'Youtube',
          href: 'https://www.youtube.com/channel/UCl9C8JUwDbp4vkyBRxjCiOA',
          iconUrl: require('~/assets/svg/IconYoutube.svg'),
        },
      ]
    }
  }
}
</script>
