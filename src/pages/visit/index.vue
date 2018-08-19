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
    </main>
  </div>
</template>

<script>
import HeaderComponent from '@/pages/components/common/header';
import AsideComponent from '@/pages/components/common/aside';

export default {
  components: { HeaderComponent, AsideComponent },
  mounted() {
    this.map();
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
            icon: "http://jejulaf.com/assets/images/marker_small.png",
            position: new google.maps.LatLng(33.487205, 126.706749)
        });
      }
    }
  }
}
</script>