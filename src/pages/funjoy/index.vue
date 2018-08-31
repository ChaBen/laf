<template>
  <div>
    <header-component></header-component>
    <aside-component></aside-component>

    <main class="main funjoy">
      <section class="wrap">
        <article class="artist-article" v-for="(funjoy, key) in funjoys" :key="key">
          <div class="accordion-head">
            <h1 class="article-title" v-html="funjoy.title"></h1>
          </div>
          <div class="accordion-body">
            <div class="inner" v-html="funjoy.body"></div>
            <div class="sliders">
              <div class="slider" :class="`slider-${key}`">
                <div class="slide" v-for="(slide, key) in funjoy.sliders" :key="key"><img-load :src="slide.src"></img-load></div>
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
import ImgLoad from '@/pages/components/tag/img-load';

export default {
  components: { HeaderComponent, AsideComponent, ImgLoad },
  computed: {
    funjoys() {
      return this.$t('funjoy.data');
    }
  },
  mounted() {
    $('.accordion-head').click(function() {
      var inx = $(this).parent('.artist-article').index();
      $(this).toggleClass('active');
      if ( !$(`.slider-${inx}`).hasClass('slick-slider') ) {
        $(`.slider-${inx}`).slick({
          dots: true,
          adaptiveHeight: true
        });
      }
    });
  }
}
</script>