<template>
  <div>
    <header-component></header-component>
    <aside-component></aside-component>
    <main class="main">
      <section class="section bodyText">
        <div class="inner">
          <p v-html="$t('limolimo.subtitle')"></p>
        </div>
      </section>
      <section class="section bodyText">
        <div class="inner">
          <h2 v-html="$t('limolimo.title')"></h2>
          <p v-html="$t('limolimo.text')"></p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import HeaderComponent from '@/pages/components/common/header';
import AsideComponent from '@/pages/components/common/aside';
export default {
  components: { HeaderComponent, AsideComponent }
}
</script>