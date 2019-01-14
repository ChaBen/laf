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
            <iframe width="100%" style="height: 27vh;" :src="`https://www.youtube.com/embed/${video.src}`" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import HeaderComponent from '@/pages/components/common/header';
import AsideComponent from '@/pages/components/common/aside';
export default {
  components: { HeaderComponent, AsideComponent },
  data() {
    return {
      videos: null
    }
  },
  created() {
    this.getData();
  },
  methods: {
    ...mapActions('channel', ['find']),
    async getData() {
      const data = (await this.find()).data;
      this.videos = data.reverse();
      console.log(data);
    }
  }
}
</script>