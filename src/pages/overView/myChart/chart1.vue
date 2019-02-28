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
                    name: "需求计划推进立项情况",
                    type: "bar",
                    stack: "广告",
                    data: [30, 20, 20]
                },
                {
                    name: "推进中",
                    type: "bar",
                    stack: "广告",
                    data: [20, 20, 10]
                },
                {
                    name: "未开始",
                    type: "bar",
                    stack: "广告",
                    data: [10, 20, 6]
                },
                {
                    name: "需求计划推进立项情况",
                    type: "bar",
                    stack: "广告",
                    data: [30, 20, 20]
                },
            ]
        };
    },
    mounted() {
        this.drawChart()
        
    },
    methods: {
        drawChart() {
            // 基于准备好的dom，初始化echarts实例
            // let myChart = this.$echarts.init(document.getElementById('myChart'))
            let myChart = this.$echarts.init(this.$refs.myChart);
            // 绘制图表
            let option = {
                legend: {},
                title: {
                    text: "计划事项管理视图",
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
                        data: ['1月','2月','12月']
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
        },
        handleClick(){
            this.maskTableOnoff = false;
        }
    }
};
</script>
