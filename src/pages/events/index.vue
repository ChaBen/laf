<template>
  <div>
    <header-component></header-component>
    <aside-component></aside-component>

    <main class="main blog events">
      <aside>
        <ul class="tags">
          <li v-for="(tag, key) in $t('events.tags')" :key="key">
            <router-link to="/events" class="ui-link">{{tag.title}}</router-link>
          </li>
        </ul>
      </aside>
      <section class="wrap">
        <article class="event-article article" v-for="(tag, key) in $t('events.tags')" :key="key">
          <h1 class="article-title" style="font-size:35px;">
            <router-link to="/events/www" class="ui-link">{{tag.subtitle}}</router-link>
          </h1>

          <div class="view-more">
            <p>{{tag.title}}</p>
            <p><router-link to="/events/www">view more</router-link></p>
          </div>
          
          <div class="event-image">
            <figure><img :src="tag.src" alt=""></figure>
          </div>

          <div class="text">
            <div class="excerpt" v-if="actived">
              <p v-html="tag.excerpt"></p>
              <a href="javascript:void(0)" @click="actived = !actived" class="article-more">read more</a>
            </div>
            <div class="full" v-html="tag.text" v-else></div>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>

<script>
import HeaderComponent from '@/pages/components/common/header';
import AsideComponent from '@/pages/components/common/aside';
export default {
  components: { HeaderComponent, AsideComponent },
  data() {
    return {
      actived: true
    }
  }
}
</script>