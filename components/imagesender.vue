<template>
  <div>
    <h2 class="text-center text-3xl font-mono mx-auto relative">
      付近の建物の画像を選択してください
    </h2>
    <div class="bg-white border border-dashed border-gray-500 relative">
      <input
        ref="upfile"
        type="file"
        multiple
        class="cursor-pointer relative block opacity-0 w-4/5 h-full p-20 z-50"
        @change="onchange"
      />
      <div class="text-center p-10 absolute top-0 right-0 left-0 m-auto">
        <h4>
          画像をドロップする
          <br />または
        </h4>
        <p class="">共有リンクを生成</p>
      </div>
    </div>
    <div class="m-3 flex items-center justify-center">
      <button
        class="
          bg-white
          text-gray-800
          font-mono
          rounded
          border-b-2 border-green-500
          hover:border-green-600
          hover:bg-green-500
          hover:text-white
          shadow-md
          py-2
          px-6
          inline-flex
          items-center
        "
        @click="onclick"
      >
        <span class="mr-2">共有リンクを取得</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentcolor"
            d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onchange() {
      // アップロードファイルを用意
      const file = this.$refs.upfile.files[0]
      //   const data = new FormData()
      console.log(file)
    },
  },
}
</script>
