<template>
  <div>
    <div>
      <nuxt-img
        class="
          absolute
          top-1/4
          left-1/2
          transform
          -translate-x-1/2 -translate-y-1/2
          scale-125
        "
        src="/image/mini_ver.png"
      ></nuxt-img>
      <imagesender
        class="
          top-2/3
          left-1/2
          transform
          -translate-x-1/2 -translate-y-1/2
          bg-yellow-100
          border border-slid border-black
          rounded-lg
          max-w-screen-md max-h-84
          p-6
          z-10
          fixed
          frop-shadow
        "
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>
