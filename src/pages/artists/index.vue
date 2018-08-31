<template>
  <div>
    <header-component></header-component>
    <aside-component></aside-component>

    <main class="main blog press">
      <section class="wrap">
        <article class="artist-article" v-for="(artist, key) in artists" :key="key">
          <div class="accordion-head">
            <h1 class="article-title" v-html="artist.title"></h1>
          </div>
          <div class="accordion-body">
            <div class="inner" v-html="artist.body"></div>
            <div class="iframe" v-html="artist.iframe"></div>
            <div class="sliders">
              <div class="slider" :class="`slider-${key}`">
                <div class="slide" v-for="(slide, key) in artist.sliders" :key="key"><img-load :src="slide.src"></img-load></div>
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
    artists() {
      return this.$t('artists.data');
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