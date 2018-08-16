<template>
  <div>
    <header-component></header-component>
    <body-component></body-component>
  </div>
</template>

<script>
import HeaderComponent from '@/pages/components/common/header';
import BodyComponent from './body';
export default {
  components: { HeaderComponent, BodyComponent }
}
</script>
