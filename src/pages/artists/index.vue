<template>
  <div>
    <header-component></header-component>
    <aside-component></aside-component>

    <main class="main blog press">
      <section class="wrap" v-if="loading">
        <article class="artist-article" v-for="(artist, key) in artists" :key="key">
          <div class="accordion-head" :class="{ active: isSelected(key) }" @click="selected(key)">
            <h1 class="article-title" v-html="artist.title"></h1>
          </div>
          <div class="accordion-body">
            <div class="inner" v-html="artist.body"></div>
            <div class="iframe">
              <iframe width="100%" height="540" :src="`https://www.youtube.com/embed/${artist.src}`" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <div class="sliders">
              <div class="slider" :class="`slider-${key}`">
                <div class="slide" v-for="(slide, key) in artist.sliders" :key="key"><img-load :src="slide.src"></img-load></div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section class="wrap" v-else>
        <article class="artist-article">...loading</article>
      </section>
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import HeaderComponent from '@/pages/components/common/header';
import AsideComponent from '@/pages/components/common/aside';
import ImgLoad from '@/pages/components/tag/img-load';

export default {
  components: { HeaderComponent, AsideComponent, ImgLoad },
  data() {
    return {
      artists: null,
      isSlide: [],
      loading: false
    }
  },
  computed: {
    lang() {
      return this.$store.getters.language
    }
  },
  created() {
    this.getData(this.lang);
  },
  methods: {
    ...mapActions('artists', ['find']),
    async getData(val) {
      const param = { query: { lang: val } };
      const data = (await this.find(param)).data;
      data.map((val, key) => {
        data[key].sliders = eval('(' + val.sliders + ')');
      });
      this.artists = data;
      
      this.$nextTick(() => {
        this.loading = true;
      });
    },
    selected(id) {
      const index = this.isSlide.findIndex(t => t == id)

      if (index >= 0) {
        this.isSlide.splice(index, 1)
      } else {
        this.isSlide.push(id)
      }
      $(`.slider-${id}`).slick({
        dots: true,
        adaptiveHeight: true
      });
    },
    isSelected(id) {
      return this.isSlide.includes(id);
    }
  },
  watch: {
    lang(val) {
      this.getData(val);
    }
  }
}
</script>