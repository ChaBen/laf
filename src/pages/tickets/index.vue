<template>
  <div>
    <header-component></header-component>
    <aside-component></aside-component>

    <main class="main" role="main" v-if="tickets">
      <section class="section bodyText">
        <div class="inner">
          <p>{{ tickets.subtitle }}</p>
        </div>
      </section>
      <section class="section bodyColumns one-col">
        <div class="inner">
          <h1 v-html="tickets.title"></h1>
          <div class="columns" v-html="tickets.tickets"></div>
        </div>
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
      tickets: null
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
    ...mapActions('tickets', ['find']),
    async getData(val) {
      const param = { query: { lang: val } };
      const data = (await this.find(param)).data[0];
      this.tickets = data;
    }
  },
  watch: {
    lang(val) {
      this.getData(val);
    }
  }
}
</script>