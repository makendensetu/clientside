<template>
  <div>
    <!-- いなりずし -->
    <div
      class="
        max-h-screen
        relative
        bg-white
        shadow-lg
        w-60
        h-96
        mr-2
        border-2 border-gray-500
        flex
        items-center
        flex-col
        hover:bg-blue-600 hover:text-white
        float-left
      "
    >
      <div class="absolute -top-10">
        <nuxt-img
          src="/image/inarizushi.jpg"
          class="h-24 w-24 rounded-full object-cover"
        ></nuxt-img>
      </div>
      <div class="mt-16 flex items-center flex-col justify-center">
        <h1 class="font-bold text-2xl mt-4">いなりずし</h1>
        <p class="font-semibold text-xl text-gray-500">全体担当兼リーダー</p>
        <p class="text-center mt-4">このグループのリーダー。</p>
      </div>
      <div class="flex flex-row space-x-4 mt-11">
        <a href="https://twitter.com/inarizushi19"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-twitter"
            viewBox="0 0 16 16"
          >
            <path
              d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
            /></svg
        ></a>
      </div>
    </div>
    <!-- てんかす -->
    <div
      class="
        max-h-screen
        relative
        bg-white
        shadow-lg
        w-60
        h-96
        mr-2
        border-2 border-gray-500
        flex
        items-center
        flex-col
        hover:bg-blue-600 hover:text-white
        float-left
      "
    >
      <div class="absolute -top-10">
        <nuxt-img
          src="/image/tenkasu.jpg"
          class="h-24 w-24 rounded-full object-cover"
        ></nuxt-img>
      </div>
      <div class="mt-16 flex items-center flex-col justify-center">
        <h1 class="font-bold text-2xl mt-4">てんかす</h1>
        <p class="font-semibold text-xl text-gray-500">フロントエンド担当</p>
        <p class="text-center mt-4">
          高校一年生。元々CADをしたりしていたが、最近興味をもってプログラミングを始めた。
        </p>
      </div>
      <div class="flex flex-row space-x-4 mt-11">
        <a href="https://twitter.com/tenkasu117"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-twitter"
            viewBox="0 0 16 16"
          >
            <path
              d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
            /></svg
        ></a>
      </div>
    </div>
    <!-- ぴねたいる -->
    <div
      class="
        max-h-screen
        relative
        bg-white
        shadow-lg
        w-60
        h-96
        border-2 border-gray-500
        flex
        items-center
        flex-col
        hover:bg-blue-600 hover:text-white
        float-left
      "
    >
      <div class="absolute -top-10">
        <nuxt-img
          src="/image/pinetail.jpg"
          class="h-24 w-24 rounded-full object-cover"
        ></nuxt-img>
      </div>
      <div class="mt-16 flex items-center flex-col justify-center">
        <h1 class="font-bold text-2xl mt-4">ぴねたいる</h1>
        <p class="font-semibold text-xl text-gray-500">バックエンド担当</p>
        <p class="text-center mt-4">
          元気いっぱいの中学三年生。今回はバックエンドを担当。
        </p>
      </div>
      <div class="flex flex-row space-x-4 mt-11">
        <a href="https://twitter.com/pinetail"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-twitter"
            viewBox="0 0 16 16"
          >
            <path
              d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
            /></svg
        ></a>
      </div>
    </div>
  </div>
</template>
