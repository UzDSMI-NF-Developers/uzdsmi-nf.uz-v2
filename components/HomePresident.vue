<template>
  <section>
    <Container>
      <div class="flex mb-6 text-center">
        <h2 class="md:text-3xl text-2xl font-medium text-black">
          {{ $t("president_title") }}
        </h2>
      </div>
      <div
        class="bg-gray-900 p-4 md:p-6 lg:p-8 my-6 flex items-center justify-center"
      >
        <img
          src="/president-media.png"
          alt="Official pages of the President of the Republic of Uzbekistan Shavkat Mirziyoyev on social networks"
          width="300px"
        />
      </div>
      <div class="links-grid">
        <a
          v-for="link in links"
          :key="link.name"
          :href="link.href"
          target="_blank"
          rel="nofollow noopener"
        >
          <img :src="link.iconUrl" :alt="link.name" class="w-6" />
          <span class="ml-4 flex items-start flex-col leading-none">
            <span class="title-font font-medium">{{ link.username }}</span>
          </span>
        </a>
      </div>
    </Container>
  </section>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      links: [
        {
          name: "Facebook",
          href: "https://www.facebook.com/Mirziyoyev/",
          username: "@mirziyoyev",
          iconUrl: require("~/assets/svg/IconFacebook.svg")
        },
        {
          name: "Telegram",
          href: "https://t.me/shmirziyoyev",
          username: "@shmirziyoyev",
          iconUrl: require("~/assets/svg/IconTelegram.svg")
        },
        {
          name: "Instagram",
          href: "https://www.instagram.com/mirziyoyev_sh/",
          username: "@mirziyoyev_sh",
          iconUrl: require("~/assets/svg/IconInstagram.svg")
        },
        {
          name: "Twitter",
          href: "https://twitter.com/president_uz",
          username: "@president_uz",
          iconUrl: require("~/assets/svg/IconTwitter.svg")
        },
        {
          name: "Youtube",
          href: "https://www.youtube.com/channel/UC61Jnumjuz8NXhSuLoZD2xg",
          username: "@president_uz",
          iconUrl: require("~/assets/svg/IconYoutube.svg")
        },
        {
          name: "Website",
          href: "https://president.uz/oz",
          username: "www.president.uz",
          iconUrl: require("~/assets/svg/IconWeb.svg")
        }
      ]
    };
  }
};
</script>

<style lang="postcss" scoped>
.links-grid {
  @apply grid grid-cols-1 gap-4 justify-center;

  @screen md {
    @apply grid-cols-2;
  }

  @screen lg {
    @apply grid-cols-3;
  }
}

.links-grid a {
  @apply bg-gray-200 inline-flex py-3 px-5 rounded-lg items-center transition duration-300 ease-in;

  &:hover {
    @apply bg-gray-300 shadow-xl;
  }

  &:focus {
    @apply outline-none;
  }
}
</style>
