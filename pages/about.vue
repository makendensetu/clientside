<template>
  <div>
    <h1 class="text-5xl text-center pt-16">このサイトについて</h1>
    <section>
      <h1 class="text-5xl font-semibold text-center py-3">制作者一覧</h1>
      <AboutPeople class="pt-12 flex justify-center" />
    </section>
    <section>
      <h1 class="text-5xl font-semibold text-center py-3">使用技術</h1>
      <ul class="text-center text-2xl font-semibold">
        <li><a href="https://nuxtjs.org/">Nuxt</a></li>
        <li><a href="https://sharp.pixelplumbing.com/">sharp</a></li>
        <li><a href="https://expressjs.com/ja/">express</a></li>
        <li><a href="https://pptr.dev/">puppeteer</a></li>
        <li><a href="https://pptr.dev/">mapbox</a></li>
      </ul>
    </section>
    <div class="flex justify-center">
      <BtnTypeA class="mt-4" />
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
}
</script>
