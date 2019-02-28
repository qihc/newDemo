<template>
  <div>
      <selectMenu></selectMenu>
      <div id="myChart" :style="{width: '100%', height: '400px'}" ref="myChart"></div>
      <maskTable v-if="maskTableOnoff"></maskTable>
  </div>
</template>
<script>
export default {
    name: "hello",
    data() {
        return {
            maskTableOnoff:false,
            msg: "需求事项-部门级",
            bardata: [
                {
                    name: "未提出需求",
                    type: "bar",
                    stack: "广告",
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            fontSize:16
                        }
                    },
                    data: [5, 5, 10]
                },
                {
                    name: "已提出需求",
                    type: "bar",
                    stack: "广告",
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            fontSize:16
                        }
                    },
                    data: [21, 11, 20]
                },
                {
                    name: "已立项",
                    type: "bar",
                    stack: "广告",
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            fontSize:16
                        }
                    },
                    data: [20, 20, 10]
                },
                {
                    name: "未提出需求",
                    type: "bar",
                    stack: "广告",
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            fontSize:16
                        }
                    },
                    data: [5, 5, 10]
                },
            ]
        };
    },
    mounted() {
        this.drawChart();
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
                    text: "需求事项-部门级",
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
                        data: ['公司部','个人部','机构部']
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
