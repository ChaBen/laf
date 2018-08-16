<template>
  <div>
    <header-component></header-component>
    <aside-component></aside-component>

    <main class="main" role="main">
      <section class="section bodyText">
        <div class="inner">
          <p>제주 라프 입장권은 현장 매표소와 온라인 구매처에서 구입하실 수 있습니다. 제주 라프의 방문객께서는 제주 라프에 참여하는 작가들의 작품을 촬영은 가능하나, 상업적인 목적으로 이미지를 사용, 복제, 또는 판매하는
            것은 엄격히 금지됩니다.</p>
        </div>
      </section>
      <section class="section bodyColumns one-col">
        <div class="inner">
          <h1>티켓 가격</h1>
          <div class="columns">
            <div class="col">
              <p></p>
              <p></p>
              <br> ● 주간 티켓 (하절기 적용)
              <br> └ 대 인..................................... ￦&nbsp;5,000 (도민 3,000)
              <br> └ 청소년................................... ￦&nbsp;3,000 (도민 2,000)
              <br> └ 어린이.................................... ￦&nbsp;2,000 (도민 1,000)
              <p></p>
              <p>● 야간 티켓 (정상가/하절기 적용)
                <br> └ 대 인...................................... ￦18,000
                <br> └ 청소년................................... ￦10,000
                <br> └ 어린이.................................... ￦&nbsp;8,000</p>
              <p>● 페스타 야간 할인요금 (하절기 적용)
                <br> └ 대 인..................................... ￦12,000 (도민 9,000)
                <br> └ 청소년................................... ￦&nbsp;7,000 (도민 5,000)
                <br> └ 어린이................................... ￦&nbsp;5,500 (도민 4,000)</p>
              <p>※ 단체 인원은 현장 문의
                <br> ※ 페스타 기간 2018년 7월 27일 ~ 2018년 10월 24일 까지</p>
              <p>● 짚라인권
                <br> └ 짚라인................................ ￦30,000(도민 27,000)</p>
              <p>● 족욕권
                <br> └ 족욕장+허브티.................... ￦12,000(도민 10,000)</p>
              <p>● 복합권
                <br> └ 짚라인+족욕권.................. ￦39,000(도민 33,000)</p>
              <p>※ 짚라인권, 족욕권, 복합권 등 패키지의 경우 입장 무료
                <br> ※ 군경, 장애인, 국가유공자, 경로(만65세이상)은 신분확인 후 입장 가능하오며, 중복할인은 적용되지 않습니다.(도민요금 동일적용함)</p>
              <p></p>
              <p></p>
              <p>[이용시간]</p>
              <p>● 입장권 및 리모카페(동굴카페)
                <br> &nbsp;하절기 06월16일 ~ 10월15일(오전 9시~오전 12시)
                <br> &nbsp;&nbsp; &nbsp; → 야간운영 오후 6시부터
                <br> &nbsp;동절기 10월16일 ~ 02월28일(오전 9시~오후 11시)
                <br> &nbsp;&nbsp;&nbsp; → 야간운영 오후 5시부터
                <br> &nbsp;춘절기 03월01일 ~ 06월15일(오전 9시~오후11시)
                <br> &nbsp;&nbsp; &nbsp;→ 야간운영 오후 5시 부터</p>
              <p>[티켓 구입처]</p>
              <p>&nbsp;• 현장 구매 또는 온라인 티켓 구매</p>
              <p>[구 분]</p>
              <p>&nbsp;• 성인: 만 19세 ~ 64세
                <br> &nbsp;• 청소년: 만 13세 ~ 만 18세
                <br> &nbsp;• 소인: 만 7세 ~ 만 12세
                <br> &nbsp;• 무료입장: 미취학 아동 무료 (만 6세이하)</p>
              <p>[안내 사항]</p>
              <p>&nbsp;① 단체버스투어, 택시투어 등 기사/가이드 동반 이용시
                <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;사용이 불가합니다.
                <br> &nbsp;② 타 할인쿠폰과 중복할인이 불가합니다.
                <br> &nbsp;③ 반려동물 출입을 금지합니다.
                <br> &nbsp;⑤ 사진 및 비디오 촬영 가능합니다.</p>
            </div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
          </div>
        </div>
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