<template>
  <div>
    <div>
      <h3 class="sidebar-heading">{{ $t("news.latest") }}</h3>
      <ul class="pb-8 pl-2 space-y-3">
        <li>
          <NuxtLink :to="localePath('/')" class="sidebar-link"
            >First Link</NuxtLink
          >
        </li>
        <li>
          <NuxtLink :to="localePath('/')" class="sidebar-link"
            >Second Link</NuxtLink
          >
        </li>
        <li>
          <NuxtLink :to="localePath('/')" class="sidebar-link"
            >Third Link</NuxtLink
          >
        </li>
        <li>
          <NuxtLink :to="localePath('/')" class="sidebar-link"
            >Fourth Link</NuxtLink
          >
        </li>
      </ul>
    </div>
    <div>
      <h3 class="sidebar-heading">{{ $t("categories") }}</h3>
      <ul class="pb-8 pl-2 space-y-3">
        <li>
          <NuxtLink :to="localePath('/')" class="sidebar-link">
            {{ $t("nav.branch.title") }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('/')" class="sidebar-link">
            {{ $t("nav.activity.title") }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('/')" class="sidebar-link">
            {{ $t("nav.applicants.title") }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('/')" class="sidebar-link">
            {{ $t("nav.students.title") }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('/')" class="sidebar-link">
            {{ $t("nav.interactive_services.title") }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('/')" class="sidebar-link">
            {{ $t("nav.normative_legal_documents.title") }}
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div>
      <h3 class="sidebar-heading">
        {{ $t("sidebar.calendar") }}
      </h3>
      <div class="my-4">
        <v-calendar :attributes="calendarAttrs" is-expanded />
      </div>
    </div>
    <div>
      <h3 class="sidebar-heading">
        {{ $t("sidebar.national_flag") }}
      </h3>
      <ul class="pb-8 pl-2 space-y-3">
        <li>
          <NuxtLink :to="localePath('/page/278475')">
            <img
              src="/Flag_of_Uzbekistan.svg"
              alt="National flag of Uzbekistan"
              class="w-48 mx-auto"
            />
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div>
      <h3 class="sidebar-heading">
        {{ $t("sidebar.national_symbolics") }}
      </h3>
      <ul class="pb-8 pl-2 space-y-3">
        <li>
          <NuxtLink :to="localePath('/page/900488')">
            <img
              src="/Emblem_of_Uzbekistan.svg"
              alt="National symbolics of Uzbekistan"
              class="w-40 mx-auto"
            />
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div>
      <h3 class="sidebar-heading">
        {{ $t("sidebar.national_anthem") }}
      </h3>
      <ul class="pb-8 pl-2 space-y-3">
        <li>
          <NuxtLink :to="localePath('/page/340569')">
            <img
              src="/note.png"
              alt="National anthem of Uzbekistan"
              class="w-24 mx-auto"
            />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      calendarAttrs: [
        {
          key: "today",
          highlight: "teal",
          dates: new Date()
        }
      ]
    };
  }
};
</script>

<style lang="postcss" scoped>
.sidebar-heading {
  @apply uppercase font-medium pb-3;
}

.sidebar-link {
  @apply block transition-colors duration-200 ease-in;
  &:hover {
    @apply text-primary-50;
  }
}
</style>
