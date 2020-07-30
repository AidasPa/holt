<template>
  <div class="map-container">
    <div id="map" ref="map"></div>
  </div>
</template>
<script>
import mapboxgl from 'mapbox-gl';

export default {
  mounted() {
    // eslint-disable-next-line operator-linebreak
    mapboxgl.accessToken =
      'pk.eyJ1IjoiYWlkYXNwIiwiYSI6ImNqbXluems2ZTEweWoza28xOTg5aXB6YmIifQ.wXudA2k_3vuvGPe_x7-bbQ';
    // eslint-disable-next-line no-unused-vars
    const map = new mapboxgl.Map({
      container: this.$refs.map,
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
      attributionControl: true,
      customAttribution: 'Yeet',
    });
    map.on('load', () => {
      map.resize();
    });
    new mapboxgl.Marker().setLngLat([30.5, 50.5]).addTo(map);
  },
};
</script>
<style lang="scss">
#map {
  width: 100%;
  height: 600px;
  z-index: -1;
  margin-top: 75px;
}
.mapboxgl-control-container {
  display: none !important;
}
.mapboxgl-map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>
