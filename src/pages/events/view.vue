<template>
  <div>
    <header-component></header-component>
    <aside-component></aside-component>

    <main class="main" role="main">
      <article class="article single wrap" v-for="(tag, key) in $t('events.tags')" :key="key">
        <h1 class="article-title">{{tag.subtitle}}</h1>
        <h2 class="article-date">{{tag.date}}</h2>
        <figure>
          <img :src="tag.src" alt="">
        </figure>

        <div class="text" v-html="tag.viewtext"></div>
      </article>
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