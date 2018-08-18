<template>
  <div>
    <header-component></header-component>
    <aside-component></aside-component>

    <main class="main" role="main">
      <section class="section bodyText">
        <div class="inner">
          <p v-html="$t('tickets.subtitle')"></p>
        </div>
      </section>
      <section class="section bodyColumns one-col">
        <div class="inner">
          <h1 v-html="$t('tickets.title')"></h1>
          <div class="columns" v-html="$t('tickets.ticket')"></div>
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