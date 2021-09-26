<template>
  <div class="flex m-2 flex-wrap mx-auto max-w-3xl">
    <!-- いなりずし -->
    <div
      class="
        max-h-screen
        relative
        bg-white
        shadow-lg
        w-full
        sm:w-1/4
        mr-2
        border-2 border-gray-500
        flex
        items-center
        flex-col
        hover:bg-blue-600
        hover:text-white
        p-4
        mb-12
      "
    >
      <div class="absolute -top-10">
        <nuxt-img
          src="/image/inarizushi.jpg"
          class="h-24 w-24 rounded-full object-cover"
        ></nuxt-img>
      </div>
      <div class="mt-16 flex items-center flex-col justify-center">
        <h1 class="font-bold text-2xl mt-4">
          いなりずし
          <a href="https://twitter.com/inarizushi19">
            <IconsTwitter class="w-6 h-6 inline" />
          </a>
        </h1>
        <p class="font-semibold text-xl text-gray-500">全体担当兼リーダー</p>
        <p class="text-center mt-4">
          Web系一筋約1年半。最近AIとか3DCGとかUnityとかUE5とかやりたいことが多すぎる
        </p>
      </div>
    </div>
    <!-- てんかす -->
    <div
      class="
        max-h-screen
        relative
        bg-white
        shadow-lg
        w-full
        sm:w-1/4
        mr-2
        border-2 border-gray-500
        flex
        items-center
        flex-col
        hover:bg-blue-600
        hover:text-white
        p-4
        mb-12
      "
    >
      <div class="absolute -top-10">
        <nuxt-img
          src="/image/tenkasu.jpg"
          class="h-24 w-24 rounded-full object-cover"
        ></nuxt-img>
      </div>
      <div class="mt-16 flex items-center flex-col justify-center">
        <h1 class="font-bold text-2xl mt-4">
          てんかす
          <a href="https://twitter.com/tenkasu117">
            <IconsTwitter class="w-6 h-6 inline" />
          </a>
        </h1>
        <p class="font-semibold text-xl text-gray-500">フロントエンド担当</p>
        <p class="text-center mt-4">
          高校一年生。元々CADをしたりしていたが、最近興味をもってプログラミングを始めた。
        </p>
      </div>
    </div>
    <!-- ぴねたいる -->
    <div
      class="
        max-h-screen
        relative
        bg-white
        shadow-lg
        w-full
        sm:w-1/4
        border-2 border-gray-500
        flex
        items-center
        flex-col
        hover:bg-blue-600
        hover:text-white
        p-4
        mb-12
      "
    >
      <div class="absolute -top-10">
        <nuxt-img
          src="/image/pinetail.jpg"
          class="h-24 w-24 rounded-full object-cover"
        ></nuxt-img>
      </div>
      <div class="mt-16 flex items-center flex-col justify-center">
        <h1 class="font-bold text-2xl mt-4">
          ぴねたいる<a href="https://twitter.com/pinetail">
            <IconsTwitter class="w-6 h-6 inline" />
          </a>
        </h1>
        <p class="font-semibold text-xl text-gray-500">バックエンド担当</p>
        <p class="text-center mt-4">
          最近javascriptを頑張り始めた、数学や科学全般が好きな中学三年生です。
        </p>
      </div>
    </div>
  </div>
</template>
