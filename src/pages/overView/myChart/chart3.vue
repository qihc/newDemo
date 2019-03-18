<template>
  <div>
      <!-- <selectMenu></selectMenu> -->
      <div id="myChart" :style="{width: '100%', height: '400px'}" ref="myChart"></div>
       <!-- <maskTable v-if="maskTableOnoff"></maskTable> -->
  </div>
</template>
<script>
export default {
    name: "hello",
    data() {
        return {
            maskTableOnoff:true,
            msg: "需求计划提出情况",
            bardata: [
                {
                    name: "年初需求事项计划数",
                    type: "bar",
                    stack: "广告",
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            fontSize:16
                        }
                    },
                    data: [6, 10, 13, 6]
                },
                {
                    name: "新增需求事项数",
                    type: "bar",
                    stack: "广告",
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            fontSize:16
                        }
                    },
                    data: [15, 21, 22, 34]
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
                    text: "需求计划提出情况",
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
                        data:['公司部','个人部','机构部','房金部']
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
                // this.maskTableOnoff=true;
                this.$emit('childByValue', this.maskTableOnoff)
            });
        }
    }
};
</script>

<style>
    /*#myChart{padding: 10px; border: 1px solid #d8d8d8;}*/
</style>