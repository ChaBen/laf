<template>
  <div>
    <header-component></header-component>
    <aside-component></aside-component>

    <main class="main about" role="main">
      <article>
        <div class="aboutLafS" v-if="actived">
          <p v-html="$t('about.lafs')"></p>
          <a href="#none" @click="actived = !actived">Read more…</a>
        </div>
        
        <div class="aboutLaf" v-else>
          <section class="section bodyText" v-html="$t('about.laf')"></section>
          <a href="#none" @click="actived = !actived">Hide…</a>
        </div>
      </article>

      <section class="sliders">
        <div class="sliders">
          <div class="slider">
            <div class="slide" v-for="(slide, key) in about.sliders" :key="key"><img :src="slide.src" /></div>
          </div>
        </div>
      </section>

      <section class="section faq-list" v-html="$t('about.faq')"></section>

      <section class="section bodyText" v-html="$t('about.sponsors')"></section>
    </main>

    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from '@/pages/components/common/header';
import AsideComponent from '@/pages/components/common/aside';
import FooterComponent from '@/pages/components/common/footer';

export default {
  components: { HeaderComponent, AsideComponent, FooterComponent },
  data() {
    return {
      actived: true
    }
  },
  computed: {
    about() {
      return this.$t('about');
    }
  },
  mounted() {
    setTimeout(() => {
      $('.slider').slick({
        dots: true,
        adaptiveHeight: true
      });
    }, 100);
  }
}
</script>