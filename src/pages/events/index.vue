<template>
  <div>
    <header-component></header-component>
    <aside-component></aside-component>

    <main class="main blog events">
      <aside>
        <ul class="tags">
          <li>
            <router-link to="/events" class="ui-link">이벤트</router-link>
          </li>
        </ul>
      </aside>
      <section class="wrap">
        <article class="event-article article">
          <h1 class="article-title" style="font-size:35px;">
            <router-link to="/events/www" class="ui-link">제주라프 #해시태그 이벤트 (하나투어 여행박람회)</router-link>
          </h1>

          <ul class="event-tags">
            <li>이벤트 <span>/</span></li>
          </ul>
          
          <div class="event-image">
            <figure>
              <img src="../../assets/images/events/jejulaf-tag-event-2.png" alt="">
            </figure>
            <h4></h4>
          </div>

          <div class="text">
            <div class="excerpt">
              하나투어 여행박람회의 제주라프를 방문해주신 여러분들에게 전하는 감사의 이벤트 *응모방법 하나투어 여행박람회에 방문 하신 분들 중, 제주라프 부스가 보이도록 인증샷을 찍어 인스타 계정에 업로드 해주세요. #제주라프 #라이트아트페스타 필수 *이벤트 응모 기간 2018년 06월 08일 – 06월 15일 *당첨자 발표 2018년 06년 23일(토) - 추첨 후 LAF 공식인스타그램 &amp; 공식블로그 (NAVER) 발표 예정 *이벤트 선물 1등 제주 아시아나 왕복항공권 (3명) 2등 여행용 캐리어(5명) 3등 스타벅스 기프티콘 2만원 상당 (20명)<br>
              <router-link to="/events/www" class="article-more">read more</router-link>
            </div>
            <div class="full" style="display: none;">
              <p><strong>하나투어 여행박람회의 제주라프를 방문해주신<br>여러분들에게 전하는 감사의 이벤트</strong></p>
              <p>*응모방법</p>
              <p>하나투어 여행박람회에 방문 하신 분들 중, 제주라프 부스가 보이도록<br>
              인증샷을 찍어 인스타 계정에 업로드 해주세요.<br>
              <em>#제주라프 #라이트아트페스타 필수</em></p>
              <p>*이벤트 응모 기간<br>
              2018년 06월 08일 – 06월 15일</p>
              <p>*당첨자 발표<br>
              2018년 06년 23일(토) - 추첨 후 LAF 공식인스타그램 &amp; 공식블로그 (NAVER) 발표 예정</p>
              <p>*이벤트 선물<br>
              1등 제주 아시아나 왕복항공권 (3명)<br>
              2등 여행용 캐리어(5명)<br>
              3등 스타벅스 기프티콘 2만원 상당 (20명)</p>
            </div>
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
  components: { HeaderComponent, AsideComponent }
}
</script>