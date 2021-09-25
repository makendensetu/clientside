<template>
  <div class="relative cut h-screen">
    <figure class="absolute w-full h-full z-0">
      <nuxt-img
        src="/image/inou_top.png"
        class="w-full h-full object-cover"
      ></nuxt-img>
      <figcaption class="absolute bottom-0 bg-black text-white p-1">
        背景の出典：<cite
          >古地図コレクション https://kochizu.gsi.go.jp/inouzu</cite
        >
      </figcaption>
    </figure>
    <div
      class="
        mx-auto
        max-w-screen-md max-h-64
        p-6
        pt-0
        z-10
        relative
        frop-shadow
      "
    >
      <nuxt-img src="/image/logo_noBg.webp"></nuxt-img>
      <div class="text-center pt-64">
        <BtnTypeB />
      </div>
    </div>
  </div>
</template>


