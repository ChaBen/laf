<template>
  <div>
    <header-component></header-component>
    <aside-component></aside-component>

    <main class="main" role="main">
      <article class="article single wrap">

        <h1 class="article-title">2018 LAF 디자인 공모전 LIGHT:ART:FESTA CONTENTS CANVAS </h1>

        <h2 class="article-date">06.25.18</h2>

        <figure>
          <img src="http://jejulaf.com/content/7-blog/20180625-laf-light-art-festa-contents-canvas/jejulaf-tag-event-1.png" alt="">
        </figure>

        <div class="img">
          <img src="http://www.jeju.withprojects.org/content/7-blog/20180625-laf-light-art-festa-contents-canvas/jejulaf-contents-canvas.png">
        </div>
      </article>
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
