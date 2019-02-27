<template>
	<div id="map11">
		地图如下：
		<div id="allmap"></div>
	</div>
</template>
<script>
import BMap from 'BMap'
export default {
   
    data() {
        return {
            msg: "折线图"
        };
    },
   
    mounted() {
        this.ready();
    },
    methods: {
        ready: function() {
	      var map = new BMap.Map('allmap')
	      var point = new BMap.Point(108.840053, 34.129522)
	      map.centerAndZoom(point, 14)
	      map.addControl(new BMap.MapTypeControl())
	      map.enableScrollWheelZoom(true)
	      map.enableDoubleClickZoom(true)
	      var marker = new BMap.Marker(point)
	      map.addOverlay(marker)

	      map.centerAndZoom(point, 15)
	    }

    }
};
</script>
<style>
	#allmap{width: 100%;height: 600px;}
</style>