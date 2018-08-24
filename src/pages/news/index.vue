<template>
  <div>
    <header-component></header-component>
    <aside-component></aside-component>

    <main class="main blog news">
      <aside>
        <ul class="tags">
          <li v-for="tag in $t('news.tags')" :key="tag.id">
            <router-link :to="`/news/${tag.id}`" class="ui-link">{{tag.title}}</router-link>
          </li>
        </ul>
      </aside>

      <section class="wrap">
        <article class="article" v-for="tag in $t('news.tags')" :key="tag.id">
          <h1 class="article-title" style="font-size:35px;">
            <router-link to="/news/context" class="ui-link">{{tag.subtitle}}</router-link>
          </h1>
          <div class="view-more">
            <p>{{tag.title}}</p>
            <p><router-link to="/events/www">view more</router-link></p>
          </div>
          <figure>
            <img :src="tag.src">
          </figure>
        </article>
      </section>
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
    }
  }

</script>
