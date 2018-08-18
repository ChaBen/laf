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
          <h1 class="article-title">{{$t('calendar.title')}}&nbsp;{{$t('calendar.date')}}</h1>
          <p class="article-date"></p>
          <section class="event" v-for="(calen, key) in $t('calendar.event')" :key="key">
            <div class="event-header" v-html="calen.header"></div>
            <div class="event-body" v-html="calen.body">
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