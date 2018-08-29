<template>
  <div>
    <header-component></header-component>
    <aside-component></aside-component>

    <main class="main funjoy">
      <section class="wrap">
        <article class="artist-article" v-for="(funjoy, key) in funjoys" :key="key">
          <div class="accordion-head" @click="clickAccordion(key, $event)">
            <h1 class="article-title" v-html="funjoy.title"></h1>
          </div>
          <div class="accordion-body">
            <div class="inner" v-html="funjoy.body"></div>
            <div class="sliders">
              <div class="slider" :class="`slider-${key}`">
                <div class="slide" v-for="(slide, key) in funjoy.sliders" :key="key"><img :src="slide.src" /></div>
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
    funjoys() {
      return this.$t('funjoy.data');
    }
  },
  methods: {
    clickAccordion(inx, e) {
      if( e.target.parentElement.className == 'accordion-head' ) {
        e.target.parentElement.className = 'accordion-head active';
        setTimeout(() => {
          if ( !$(`.slider-${inx}`).hasClass('slick-slider') ) {
            $(`.slider-${inx}`).slick({
              dots: true,
              adaptiveHeight: true
            });
          }
        }, 100);
      } else {
        e.target.parentElement.className = 'accordion-head';
      }
    }
  }
}
</script>