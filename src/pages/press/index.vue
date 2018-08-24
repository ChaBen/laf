<template>
  <div>
    <header-component></header-component>
    <aside-component></aside-component>

    <main class="main blog press">
      <section class="wrap">
        <div class="article" v-for="(pres, inx) in press" :key="inx">
          <h1 class="article-title">
            <a :href="pres.link" target="_blank">{{pres.title}}</a>
          </h1>
          <!-- <p class="article-date">{{pres.date}}</p> -->
          <div class="text">{{pres.text}}</div>
        </div>
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
      press: [{
        link: '',
        title: '해가지면 제주에 그려지는 빛의 풍경화 ‘라프’속으로',
        date: '08.08.18',
        text: '중앙일보, 2018년 8월 6일'
      }, {
        link: 'http://news.mk.co.kr/newsRead.php?year=2018&no=474085',
        title: '여름 제주도는 `미술의 바다`',
        date: '08.08.18',
        text: '매일경제, 2018년 7월 27일'
      }, {
        link: 'http://www.headlinejeju.co.kr/?mod=news&act=articleView&idxno=341157',
        title: '세계적 조명 축제 \'라프\', 27일 제주서 그랜드 오픈',
        date: '08.08.18',
        text: '헤드라인제주, 2018년 7월 26일'
      }, {
        link: 'http://www.munhwa.com/news/view.html?no=2018072501033012000001',
        title: '별 흩뿌린 듯… 2만 송이 빛이 피었다',
        date: '08.08.18',
        text: '문화일보, 2018년 7월 25일'
      }, {
        link: 'http://news.joins.com/article/22813784',
        title: '"풍경엔 마법의 힘 있다" 제주 오름에 빛 수놓은 브루스 먼로',
        date: '07.25.18',
        text: '중앙일보, 2018 7월 18일'
      }, {
        link: 'http://news.tvchosun.com/site/data/html_dir/2018/07/14/2018071490075.html',
        title: '제주 밤하늘 색을 입다…세계적 조명 대가 \'연출\'',
        date: '07.14.18',
        text: 'TV조선, 2018년 7월 14일'
      }, {
        link: 'http://imnews.imbc.com/replay/2018/nwdesk/article/4697308_22663.html?menuid=nwdesk',
        title: '"한여름밤의 꿈"…제주 \'빛\'으로 물들다',
        date: '07.14.18',
        text: 'MBC, 2018년 7월 14일'
      }, {
        link: 'http://www.sedaily.com/NewsView/1S221UM94F',
        title: '빛의 마술사 브루스 먼로 "제주에 치유와 용서 담고파"',
        date: '07.12.18',
        text: '서울경제, 2018년 7월 12일'
      }, {
        link: 'http://www.yonhapnews.co.kr/bulletin/2018/07/11/0200000000AKR20180711158800005.HTML?input=1195m',
        title: '제주 오름에 바람개비 2만개 심은 \'빛의 풍경화가\'',
        date: '07.11.18',
        text: '연합뉴스, 2018년 7월 11일'
      }]
    }
  }
}
</script>