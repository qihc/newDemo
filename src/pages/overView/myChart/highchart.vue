<template>
  <div id="container" ></div>
</template>
<script>

// import HighCharts from 'highcharts'
import Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsDrilldown from 'highcharts/modules/drilldown';
import Highcharts3D from 'highcharts/highcharts-3d';
HighchartsMore(Highcharts)
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);



export default {
    props: ['options'],
    data() {
        return {
            chart: null,
         
        };
    },
    
    watch: {
        // option () {
        //    Highcharts.Chart('container', this.option);
        // }
    },
    mounted() {
     
        this.initChart();
    },
    methods: {
      initChart() {
          console.log("this.$el>>>",this.$el);
         
          this.chart = new Highcharts.Chart(this.$el, this.options);
        }
    }
};
</Script>
