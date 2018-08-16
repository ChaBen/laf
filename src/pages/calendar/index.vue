<template>
  <div>
    <header-component></header-component>
    <aside-component></aside-component>

    <main class="main blog calendar" role="main">
      <section class="wrap">
        <div class="calendar-form-holder" data-module-init="calendar">

          <form class="calendar-form">
            <div class="ui-select">
              <div id="years-button" class="ui-btn ui-icon-carat-d ui-btn-icon-right ui-corner-all ui-shadow">
                <span>YYYY</span>
                <select id="years">
                  <option>2018</option>
                </select>
              </div>
            </div>
          </form>

          <form class="calendar-form">
            <div class="ui-select">
              <div id="months-button" class="ui-btn ui-icon-carat-d ui-btn-icon-right ui-corner-all ui-shadow">
                <span>MM</span>
                <select id="months">
                  <option selected>07</option>
                </select>
              </div>
            </div>
          </form>

          <form class="calendar-form">
            <div class="ui-select">
              <div id="days-button" class="ui-btn ui-icon-carat-d ui-btn-icon-right ui-corner-all ui-shadow">
                <span>DD</span>
                <select id="days">
                  <option selected>27</option>
                </select>
              </div>
            </div>
          </form>
        </div>

        <article class="article" data-month="07" data-day="27" data-year="2018">
          <h1 class="article-title">Friday&nbsp;07.27.18</h1>
          <p class="article-date"></p>
          <section class="event">
            <div class="event-header">
              LAF 그랜드 오픈
              <br> 제주 LAF
              <br>
              <br>
            </div>
            <div class="event-body">
            </div>
          </section>
          <section class="event">
            <div class="event-header">
              제주 라프 그랜드 오픈
              <br> 제주시 조천읍 선교로 115-1
              <br> 9am–12pm
              <br>
            </div>
            <div class="event-body">
              <p>제주 라프가 7월 27일 그랜드 오픈합니다.</p>
            </div>
          </section>
        </article>
      </section>
    </main>
  </div>
</template>

<script>
import HeaderComponent from '@/pages/components/common/header';
import AsideComponent from '@/pages/components/common/aside';
export default {
  components: { HeaderComponent, AsideComponent }
}
</script>