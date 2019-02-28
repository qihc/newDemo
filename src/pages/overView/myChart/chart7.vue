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
            msg: "分块柱状图",
            bardata: [
                {
                    name: "需求计划推进立项情况",
                    type: "bar",
                    stack: "广告",
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            fontSize:16
                        }
                    },
                    data: [30, 20, 20]
                },
                {
                    name: "推进中",
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
                    name: "未开始",
                    type: "bar",
                    stack: "广告",
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            fontSize:16
                        }
                    },
                    data: [10, 20, 6]
                },
                {
                    name: "需求计划推进立项情况",
                    type: "bar",
                    stack: "广告",
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            fontSize:16
                        }
                    },
                    data: [30, 20, 20]
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
                    text: "需求事项-条线",
                    x: "center",
                    bottom: 10,
                    textStyle: { fontSize: 14 }
                },
                legend: {
                    top: "10px"
                },
                tooltip: {
                    
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
                series:
                    {
                        type: 'pie',
                        radius : '65%',
                        center: ['50%', '50%'],
                        selectedMode: 'single',
                        data:[
                            {value:5,name: '已提出需求',},
                            {value:10, name: '未提出需求'},
                            {value:5, name: '可研'},
                            {value:3, name: '立项中'},
                            {value:7, name: '已立项'},
                            {value:4, name: '已上线'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }

                };
            myChart.setOption(option);
            myChart.on('click', ()=>{
                // alert(1111)
                // this.maskTableOnoff=true;
                this.$emit('childByValue', this.maskTableOnoff)
            });
        },
        
    }
};
</script>
