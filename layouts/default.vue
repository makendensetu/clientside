<template>
  <div class="relative cut h-screen">
    <header class="fixed z-50 m-2 flex">
      <a href="https://github.com/makendensetu" class="m-1 mx-2">
        <IconsGithub class="h-8 w-8 hover:text-green-400" />
      </a>
      <button class="m-1 mx-2" @click="tweet">
        <IconsTwitter class="h-8 w-8 hover:text-blue-400" />
      </button>
      <button class="m-1 mx-2" @click="copy">
        <IconsCopy class="h-8 w-8 hover:text-red-600" />
      </button>
    </header>
    <figure class="absolute w-full h-full z-0">
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