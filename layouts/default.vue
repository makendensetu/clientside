<template>
  <div class="relative cut h-screen">
    <header class="fixed z-50 m-2 flex">
      <a
        href="https://github.com/makendensetu"
        class="m-1 mx-2 flex justify-center hover:text-green-400 share-btn"
      >
        <IconsGithub class="h-8 w-8 mix-blend-color-dodge" />
        <span class="font-bold text-xl ml-1 mix-blend-difference">Github</span>
      </a>
      <button
        class="m-1 mx-2 flex justify-center fill-current hover:text-blue-400"
        @click="tweet"
      >
        <IconsTwitter class="h-8 w-8" />
        <span class="font-bold text-xl ml-1">Tweet</span>
      </button>
      <button
        class="m-1 mx-2 flex justify-center hover:text-red-600 share-btn"
        @click="copy"
      >
        <IconsCopy class="h-8 w-8" />
        <span class="font-bold text-xl ml-1">Copy</span>
      </button>
    </header>
    <figure class="absolute w-full h-full -z-10">
      <nuxt-img
        src="/image/inou_top.png"
        class="w-full h-full object-cover"
      ></nuxt-img>
      <figcaption class="absolute bottom-0 bg-black text-white p-1">
        背景の出典：
        <cite>古地図コレクション https://kochizu.gsi.go.jp/inouzu</cite>
      </figcaption>
    </figure>
    <nuxt />
  </div>
</template>
<script>
export default {
  methods: {
    tweet() {
      window.open(
        `https://twitter.com/intent/tweet?url=${location.href}&text=はい！地～図を使ってみてね！！`
      )
    },
    copy() {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(location.href)
      }
    },
  },
}
</script>
<style scoped>
.-z-10 {
  z-index: -10;
}
</style>
