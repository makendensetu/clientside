<template>
  <nuxt-link to="/imagetrandition" class="btn text-xl md:text-3xl px-4 md:px-6 py-16 md:py-24">
    <span>使ってみる</span></nuxt-link
  >
</template>

<style scoped>
.btn {
  font-weight: 700;
  line-height: 1.5;
  position: relative;
  display: inline-block;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
  overflow: hidden;
  padding: 1.5rem 6rem;
  color: #fff;
  border-radius: 0;
  background: #1f2041;
}

.btn span {
  position: relative;
}

.btn::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 150%;
  height: 350%;
  content: '';
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
  transform: translateX(-98%) translateY(-25%) rotate(45deg);
  background: #19647e;
}

.btn:hover::before {
  -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
  transform: translateX(-9%) translateY(-25%) rotate(45deg);
}
</style>