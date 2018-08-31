<template>
  <div class="wrapper">
    <transition name="fade">
      <img class="icon" :src="src" v-on:load="onLoaded" v-show="loaded">&nbsp;
    </transition>
  </div>
</template>

<script>
export default {
  props: ['src'],
  data() {
    return {
      loaded: false
    }
  },
  methods: {
    onLoaded() {
      this.loaded = true;
    }
  }
}
</script>

<style>
.fade-enter-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter {
  opacity: 0;
}
</style>
