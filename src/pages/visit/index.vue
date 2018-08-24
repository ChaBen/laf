<template>
  <div>
    <header-component></header-component>
    <aside-component></aside-component>

    <main>
      <section class="section bodyText" v-html="$t('visit.addr')"></section>
      <section class="section bodyText map">
        <div class="map-canvas" style="height: 50vh; min-height: 400px;"></div>
      </section>
      <section class="section bodyText" v-html="$t('visit.island')"></section>
      <section class="sliders">
        <div class="sliders">
          <div class="slider">
            <div class="slide" v-for="(slide, key) in $t('visit.sliders')" :key="key"><img :src="slide.src" /></div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import HeaderComponent from '@/pages/components/common/header';
import AsideComponent from '@/pages/components/common/aside';
import SnazzyInfoWindow from 'snazzy-info-window';

export default {
  components: { HeaderComponent, AsideComponent },
  mounted() {
    this.map();
    setTimeout(() => {
      $('.slider').slick({
        dots: true,
        adaptiveHeight: true
      });
    }, 100);
  },
  methods: {
    map() {
      if($('.map-canvas').length > 0) {
        var coords = new google.maps.LatLng(33.38797, 126.568077);
        var map = new google.maps.Map($('.map-canvas')[0], {
            zoom: 10,
            zoomControl: false,
            scaleControl: false,
            scrollwheel: false,
            disableDoubleClickZoom: true,
            center: coords,
            disableDefaultUI: true
        });

        var marker_0 = new google.maps.Marker({
            map: map,
            icon: "http://jejulaf.tmsearch.co.kr/static/images/visit/marker_small.png",
            position: new google.maps.LatLng(33.487205, 126.706749)
        });

        var ct = "<h1>제주 LAF</h1>";
            ct += "<div class='infobody'></div>";
			            ct += "<img src='http://jejulaf.tmsearch.co.kr/static/images/visit/lightartfestlonglogo.png' />";
        var info_0 = new SnazzyInfoWindow({
            marker: marker_0,
            content: ct,
            closeOnMapClick: true,
            closeWhenOthersOpen: true,
            showCloseButton: false
        });
      }
    }
  }
}
</script>