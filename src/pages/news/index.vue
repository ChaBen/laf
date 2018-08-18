<template>
  <div>
    <header-component></header-component>
    <aside-component></aside-component>
    <main class="main blog news">
      <aside>
        <ul class="tags">
          <li>
            <router-link to="/news" class="ui-link">콘테스트</router-link>
          </li>
        </ul>
      </aside>

      <section class="wrap">
        <article class="article">
          <h1 class="article-title" style="font-size:35px;">
            <router-link to="/news/context" class="ui-link">2018 LAF 디자인 공모전 LIGHT:ART:FESTA CONTENTS CANVAS</router-link>
          </h1>
          <p class="article-date" style="font-size:27px;">06.25.18</p>
          <figure>
            <img src="@/assets/images/news/jejulaf-tag-event-1.png" alt="">
          </figure>
          <div class="text">
            <p>
              <br>
              <a href="/news/context" class="article-more">read more</a>
            </p>
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
    components: {
      HeaderComponent,
      AsideComponent
    }
  }

</script>
