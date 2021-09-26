<template>
  <div id="map" class="w-full h-full"></div>
</template>
<script>
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'

export default {
  async mounted() {
    const MapboxDirections = require('@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions')
    const { id } = this.$route.query
    if (!id) return this.$router.push('/')

    const apiUrl = `https://api.inarimc.ml/post?id=${id}`
    const { lon, lat } = await this.$axios.$get(apiUrl)
    mapboxgl.accessToken =
      'pk.eyJ1IjoiaW5hcmlkaXkiLCJhIjoiY2t0emF1ZXRuMDYwcDJucXJpamgycTE3bSJ9.CqEbQXJ_yiRdUa2qFYJRnw'
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/inaridiy/cku0ksqcb2z8q17n18n83sknh',
      center: [lon, lat],
      zoom: 15,
    })

    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    })
    map.addControl(geolocate, 'top-right')

    new mapboxgl.Marker()
      .setLngLat([lon, lat])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(`<img src="https://api.inarimc.ml/images/${id}.png">`)
      )
      .addTo(map)

    let flag = false
    geolocate.on('geolocate', (pos) => {
      if (!flag) {
        flag = true

        const { latitude, longitude } = pos.coords
        directions.setOrigin([longitude, latitude])
      }
    })

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
    })
    map.addControl(directions, 'bottom-left')
    map.on('load', () => {
      directions.setDestination([lon, lat])
    })
  },
}
</script>