<!--
<template>

  <div id="myChart" :style="{width: '100%', height: '400px'}" ref="myChart"></div>
</template>
<script>
export default {
    name: "hello",
    data() {
        return {
            msg: "分块柱状图",
            bardata: [
                {
                    name: "延迟",
                    type: "bar",
                    stack: "广告",
                    data: [20, 30, 20,40,0]
                },
                {
                    name: "正常",
                    type: "bar",
                    stack: "广告",
                    data: [50, 20, 60,30,30]
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
        }
    }
};
</script>
-->

<template>

  <div id="myChart" :style="{width: '100%', height: '400px'}" ref="myChart"></div>
</template>
<script>
export default {
    name: "hello",
    data() {
        return {
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
        }
    }
};
</script>
