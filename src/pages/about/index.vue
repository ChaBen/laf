<template>
  <div>
    <header-component></header-component>
    <aside-component></aside-component>

    <main class="main about" role="main">
      <article>
        <div class="aboutLafS" v-if="actived">
          <p v-html="$t('about.lafs')"></p>
          <a href="#none" @click="actived = !actived">{{$t('about.down')}}</a>
        </div>
        
        <div class="aboutLaf" v-else>
          <section class="section bodyText" v-html="$t('about.laf')"></section>
          <a href="#none" @click="actived = !actived">{{$t('about.up')}}</a>
        </div>
      </article>

      <section class="sliders">
        <div class="sliders">
          <div class="slider">
            <div class="slide" v-for="(slide, key) in about.sliders" :key="key">
              <img-load v-if="key === 0" :src="slide.src" @loaded="imgLoad"></img-load>
              <img v-else :src="slide.src">
            </div>
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
import ImgLoad from '@/pages/components/tag/img-load';

export default {
  components: { HeaderComponent, AsideComponent, FooterComponent, ImgLoad },
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
  methods: {
    imgLoad() {
      $('.slider').slick({
        dots: true,
        adaptiveHeight: true
      });
    }
  },
  mounted() {
  }
}
</script>