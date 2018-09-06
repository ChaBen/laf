<template>
  <div>
    <header-component></header-component>
    <aside-component></aside-component>
    <main class="main limolimo">
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
      <section class="section slideshow_with_text slick-initialized slick-slider">
        <div class="slick-list">
          <div class="slideshow-item slick-slide" v-for="(slide, key) in $t('limolimo.sliders')" :key="key">
            <div class="slideshow-image">
              <img-load v-if="key === 0" :src="slide.src" @loaded="imgLoad"></img-load>
              <img v-else :src="slide.src">
            </div>
            <div class="project-section-text" v-html="slide.title"></div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import HeaderComponent from '@/pages/components/common/header';
import AsideComponent from '@/pages/components/common/aside';
import ImgLoad from '@/pages/components/tag/img-load';

export default {
  components: { HeaderComponent, AsideComponent, ImgLoad },
  methods: {
    imgLoad() {
      $('.slick-list').slick({
        dots: true,
        adaptiveHeight: true
      });
    }
  }
}
</script>