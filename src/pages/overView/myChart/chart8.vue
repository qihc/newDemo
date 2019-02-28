<template>
  <div>
      <div id="myChart" :style="{width: '100%', height: '400px'}" ref="myChart"></div>
      <button @click="handleClick" v-if="maskTableOnoff">X</button>
       <maskTable v-if="maskTableOnoff"></maskTable>
  </div>
  
</template>
<script>
export default {
    name: "hello",
    data() {
        return {
            maskTableOnoff:false,
            msg: "分块柱状图",
            bardata: [
                {
                    name:'延迟',
                    type:'bar',
                    barWidth : 30,
                    stack: '广告',
                    data:[20, 30, 20, 40, 0]
                },
                {
                    name:'正常',
                    type:'bar',
                    stack: '广告',
                    data:[50, 20, 60, 30, 30]
                }
            ]
        };
    },
    mounted() {
        this.drawChart();
    },
    methods: {
        handleClick(){
            this.maskTableOnoff = false;
        },
        drawChart() {
            // 基于准备好的dom，初始化echarts实例
            // let myChart = this.$echarts.init(document.getElementById('myChart'))
            let myChart = this.$echarts.init(this.$refs.myChart);
            // 绘制图表
            let option = {
                legend: {},
                title: {
                    text: "需求事项推进情况",
                    x: "center",
                    bottom: 10,
                    textStyle: { fontSize: 14 }
                },
                legend: {
                    top: "10px"
                },
                tooltip: {
                    trigger: "axis"
                },
                label: {
                    show: false
                },
                color: [
                    "#66cbff",
                    "#ff6666",
                    "#ffcb5b",
                    "#76c043",
                    "#ea7e53",
                    "#eedd78"
                ],
                xAxis: [
                    {
                        type: "category",
                        data: ['未提出ITM业务要求','可研推进情况','立项推进情况','实施推进情况','已上线']
                    }
                ],
                yAxis: [
                    {
                        type: "value"
                    }
                ],
                series:
                    this.bardata

            };
            myChart.setOption(option);
            myChart.on('click', ()=>{
                // alert(1111)
                this.maskTableOnoff=true;
            });
        }
    }
};
</script>
