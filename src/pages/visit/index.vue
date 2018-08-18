<template>
  <div>
    <header-component></header-component>
    <aside-component></aside-component>

    <main>
      <section class="section bodyText" v-html="$t('visit.addr')"></section> 
      <section class="section bodyText" v-html="$t('visit.island')"></section>
    </main>
  </div>
</template>

<script>
import HeaderComponent from '@/pages/components/common/header';
import AsideComponent from '@/pages/components/common/aside';
export default {
  components: { HeaderComponent, AsideComponent },
}
</script>