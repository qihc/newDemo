<template>
    <div>
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
            msg: "分块柱状图",
            bardata: [
                {
                    name: "邮件营销",
                    type: "bar",
                    stack: "广告",
                    data: [10, 20, 30, 25, 16, 18, 22]
                },
                {
                    name: "联盟广告",
                    type: "bar",
                    stack: "广告",
                    data: [10, 20, 30, 25, 16, 18, 22]
                },
                {
                    name: "视频广告",
                    type: "bar",
                    stack: "广告",
                    data: [0, 0, 0, 0, 0, 0, 0]
                }
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
                    text: "任务状态分布图",
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
                        data: [
                            "周一",
                            "周二",
                            "周三",
                            "周四",
                            "周五",
                            "周六",
                            "周日"
                        ]
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
