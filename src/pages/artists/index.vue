<template>
  <div>
    <header-component></header-component>
    <aside-component></aside-component>

    <main class="main blog press">
      <section class="wrap">
        <article class="artist-article" v-for="(artist, key) in artists" :key="key">
          <div class="accordion-head" @click="clickAccordion(key, $event)">
            <h1 class="article-title" v-html="artist.title"></h1>
          </div>
          <div class="accordion-body">
            <div class="inner" v-html="artist.body"></div>
            <div class="iframe" v-html="artist.iframe"></div>
            <div class="sliders">
              <div class="slider" :class="`slider-${key}`">
                <div class="slide" v-for="(slide, key) in artist.sliders" :key="key"><img :src="slide.src" /></div>
              </div>
            </div>
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
  computed: {
    artists() {
      return this.$t('artists.data');
    }
  },
  methods: {
    clickAccordion(inx, e) {
      if( e.target.parentElement.className == 'accordion-head' ) {
        e.target.parentElement.className = 'accordion-head active';
        $(`.slider-${inx}`).slick({
          dots: true,
          adaptiveHeight: true
        });
      } else {
        e.target.parentElement.className = 'accordion-head';
      }
    }
  }
}
</script>