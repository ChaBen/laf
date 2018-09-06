<template>
  <div>
    <header-component></header-component>
    <aside-component></aside-component>

    <main class="main blog channel">
      <aside>
        <ul class="tags">           
          <li>
            <router-link to="/channel" class="ui-link">제주라프</router-link>
          </li>
        </ul>
      </aside>
      <section class="wrap">
        <article class="article" v-for="(video, key) in videos" :key="key">
          <div class="video">
            <iframe width="100%" style="height: 27vh;" :src="video.src" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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
      videos: [{
        src: 'https://www.youtube.com/embed/uzjVAmZ8UsM'
      }, {
        src: 'https://www.youtube.com/embed/Ibbc8qMsuHc'
      }, {
        src: 'https://www.youtube.com/embed/DOH3UREzQdY'
      }, {
        src: 'https://www.youtube.com/embed/nJRODHPBs3w'
      }, {
        src: 'https://www.youtube.com/embed/WuCrQTPqUqA'
      }, {
        src: 'https://www.youtube.com/embed/LyTuRT0RkAs'
      }, {
        src: 'https://www.youtube.com/embed/9qm_dkt30Eo'
      }, {
        src: 'https://www.youtube.com/embed/7pm6uBQxMhA'
      }]
    }
  }
}
</script>