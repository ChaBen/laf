<template>
  <div>
    <header-component></header-component>
    <aside-component></aside-component>
    <main class="main">
      <section class="section bodyText">
        <div class="inner">
          <p>제주 LAF의 특별한 실내 컨셉 공간 ‘리모리모(Limo Limo)’ 동굴에는 ‘장 피고치(Jean Pigozzi)’의 'Limo Land'와 '이병찬' 작가의 'Urban Creature'가 전시됩니다. 전시를 관람하며 동굴 카페(Cave Cafe)의 다양한 커피 메뉴와 녹차 메뉴를 즐기실 수도 있습니다.</p>
        </div>
      </section>
      <section class="section bodyText">
        <div class="inner">
          <h2>설치 작품</h2>
          <p><em>Jean Pigozzi(장 피고치), Limo Land, 2018.</em><br>
          리모랜드(Limo Land)는 우연히 제주에 불시착한 미스터 리모(Mr. Limo)와 미스 리모(Ms.Limo)가 아름다운 제주의 풍경에 반해 정착한 뒤, 제주의 천연동굴에 서식하며 그들만의 독특한 비주얼과 문화를 녹여낸 공간입니다. 미스터 &amp; 미스 리모는 프랑스-이탈리아 출신의 포토그래퍼이자, 사업가, 아트 컬렉터인 장 피고치(Jean Pigozzi)가 2007년 설립한 패션브랜드 "리모랜드(Limo Land)"의 메인 캐릭터로 등장하였습니다. 리모랜드의 로고는 탄자니아 마콩드 (Makonde)족의 조지 릴랑가(George Lilanga 1934-2005)의 그림에서 영감을 받아 탄생하였습니다.</p>
          <p><em>이병찬, Urban Creature, 2018.</em><br>
          Urban Creature는 도시라는 생태계가 소비에 의해 작동한다는 것을 상징적으로 표현하는 작품입니다. 이병찬은 소비 생태계를 대변하는 상징적인 소재를 활용하여 도시에 서식하는 제 3의 생명체를 탄생시켰습니다. 검정비닐이라는 소재는 소비를 넘어선 낭비를 표현하며, 이에 모터를 통해 인공적으로 공기를 주입함으로써 낯선 이 생명체가 우리와 같은 도시에 살아 숨쉬고 있음을 나타내고 있습니다.</p>
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