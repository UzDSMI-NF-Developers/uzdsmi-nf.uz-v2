<template>
  <section>
    <Container>
      <div class="flex flex-col text-center w-full mb-10">
        <h2 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-black">
          {{ $t('useful_resources') }}
        </h2>
      </div>
      <client-only>
        <swiper class="useful-resources-slider" :options="usefulResourcesSliderOptions">
          <swiper-slide
            v-for="slide in slides"
            :key="slide.id"
          >
            <a :href="slide.href" rel="nofollow noopener">
              <img :src="slide.img" :alt="slide.alt" />
            </a>
          </swiper-slide>
          <div slot="pagination" class="swiper-pagination"></div>
        </swiper>
      </client-only>
    </Container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      usefulResourcesSliderOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
          delay: 2000,
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
      slides: [
        {
          id: 0,
          href: 'https://president.uz/oz',
          img: '/useful-resources-section/link_0.png',
          alt: 'president.uz',
        },
        {
          id: 1,
          href: 'http://programms.gov.uz/uz/',
          img: '/useful-resources-section/link_1.jpg',
          alt: 'programms.gov.uz',
        },
        {
          id: 2,
          href: 'http://lex.uz/uz/',
          img: 'useful-resources-section/link_2.png',
          alt: 'lex.uz',
        },
        {
          id: 3,
          href: 'http://www.strategy.gov.uz/uz',
          img: '/useful-resources-section/link_3.png',
          alt: 'www.strategy.gov.uz',
        },
        {
          id: 4,
          href: 'https://my.gov.uz/uz',
          img: '/useful-resources-section/link_4.png',
          alt: 'my.gov.uz',
        },
      ],
    }
  },
}
</script>

<style>
.useful-resources-slider {
  height: 120px;
}
</style>
