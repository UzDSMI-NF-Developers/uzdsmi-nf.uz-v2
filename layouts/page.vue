<template>
  <div>
    <Header />
    <Container class="flex flex-wrap items-start">
      <div class="content p-4 mb-20 w-full lg:w-9/12">
        <Nuxt />
      </div>
      <div class="p-4 w-full lg:w-3/12 min-h-screen">
        <Sidebar />
      </div>
    </Container>
    <Footer />
  </div>
</template>

<style lang="postcss">
.content {
  min-height: 600px;
}
</style>
