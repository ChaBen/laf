<template>
  <div>
    <header-component></header-component>
    <aside-component></aside-component>

    <main class="main" role="main">
      <article class="article single wrap">
        <router-link to="/news" class="ui-link back">←</router-link>
        <h1 class="article-title">{{tag.subtitle}}</h1>

        <h2 class="article-date">{{tag.date}}</h2>

        <div class="img">
          <img :src="tag.subsrc">
          <div class="inner" v-html="tag.body"></div>
          <div class="inner" v-html="tag.view"></div>
        </div>
      </article>
    </main>
  </div>
</template>

<script>
import HeaderComponent from '@/pages/components/common/header';
import AsideComponent from '@/pages/components/common/aside';
export default {
  components: {
    HeaderComponent,
    AsideComponent
  },
  computed: {
    tag() {
      let id =parseInt(this.$route.params.id) - 1;
      return this.$t(`news.tags.${id}`);
    }
  }
}
</script>
