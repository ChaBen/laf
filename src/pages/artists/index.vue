<template>
  <div>
    <header-component></header-component>
    <aside-component></aside-component>
    
    <main class="main blog press">
      <section class="wrap">
        <article class="artist-article" v-for="(artist, key) in artists" :key="key">
          <div class="accordion-head">
            <button class="accordion-trigger ui-btn ui-shadow ui-corner-all">
              <h1 class="article-title" v-html="artist.title"></h1>
            </button>
          </div>
          <div class="accordion-body"></div>
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
      artists: [{
        title: '브루스 먼로<br>월트셔, 롱놀'
      }, {
        title: '톰 프루인<br>브루클린, 뉴욕'
      }, {
        title: '젠 르원<br>브루클린, 뉴욕',
      }, {
        title: '장 피고치<br>파리, 안티베스, 뉴욕, 제네바',
      }, {
        title: '제이스 크루그먼<br>브루클린, 뉴욕',
      }, {
        title: '이병찬<br>서울'
      }]
    }
  }
}
</script>
