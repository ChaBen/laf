<template>
  <div>
    <header-component></header-component>
    <aside-component></aside-component>

    <main class="main blog press">
      <section class="wrap">
        <article class="article" v-for="(pres, inx) in press" :key="inx">
          <h1 class="article-title">
            <a :href="pres.link" target="_blank">{{ pres.title }}</a>
          </h1>
          <!-- <p class="article-date">{{ pres.date }}</p> -->
          <div class="text">{{ pres.subtitle }}</div>
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
      press: null
    }
  },
  created() {
    this.getData();
  },
  methods: {
    ...mapActions('press', ['find']),
    async getData() {
      const param = { lang: 'ko' }
      const data = (await this.find(param)).data;
      this.press = data.reverse();
    }
  }
}
</script>