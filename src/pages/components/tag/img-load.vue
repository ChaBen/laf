<template>
  <div class="wrapper">
    <transition name="fade">
      <img :src="src" v-on:load="onLoaded">
    </transition>
  </div>
</template>

<script>
export default {
  props: ['src'],
  methods: {
    onLoaded() {
      this.$emit('loaded');
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
