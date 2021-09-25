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
        class="cursor-pointer relative block opacity-0 w-4/5 h-full p-10 z-50"
        @change="onchange"
      />

      <div class="text-center p-5 absolute top-0 right-0 left-0 m-auto">
        <h4>
          画像をドロップする
          <br />または
        </h4>
        <p class="">画像を選択</p>
      </div>
    </div>
    <div v-if="file">{{ file.name }}</div>
    <div class="m-3 flex items-center justify-center">
      <button
        v-if="!uploading"
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
        @click="submit"
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
      <div v-if="uploading && !url">共有リンク取得中....</div>

      <div
        v-if="url"
        class="flex justify-center bg-white rounded-lg border-2 p-2"
      >
        <div class="text-lg text-bold p-1">
          共有リンク: <a :href="url">{{ url }}</a>
        </div>
        <button @click="copy">
          <IconsCopy class="h-8 w-8 m-1 hover:text-blue-600" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({ file: null, uploading: false, url: '' }),
  methods: {
    onchange() {
      const file = this.$refs.upfile.files[0]
      if (file) {
        this.file = file
      }
    },
    async submit() {
      if (!this.file) return
      try {
        this.uploading = true
        const data = new FormData()
        data.set('image', this.file)
        const pos = await new Promise((resolve) => {
          navigator.geolocation.getCurrentPosition(resolve)
        })
        const { latitude, longitude } = pos.coords
        data.set('lat', latitude)
        data.set('lon', longitude)

        const apiUrl = `http://localhost:4000/post`
        const res = await this.$axios.$post(apiUrl, data, {
          headers: {
            'content-type': 'multipart/form-data',
          },
        })
        this.url = `${location.origin}/root?id=${res.id}`
      } catch (e) {
        this.uploading = false
        console.error(e)
      }
    },
    copy() {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(this.url)
      }
    },
  },
}
</script>
