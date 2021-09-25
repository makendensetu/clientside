<template>
  <div class="h-full"><Map class="h-full" /></div>
</template>
<script>
export default {
  head() {
    return {
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://inarimc.ml/root?id=${this.$route.query.id}`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://api.inarimc.ml/images/${this.$route.query.id}.png`,
        },
      ],
    }
  },
}
</script>