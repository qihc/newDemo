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
            msg: "项目维度管理视图",
            bardata: [
                {
                    name: "员工渠道",
                    type: "bar",
                    stack: "广告",
                    data: [23, 3, 2, 2]
                },
                {
                    name: "龙财富",
                    type: "bar",
                    stack: "广告",
                    data: [12, 4, 3, 3]
                },
                {
                    name: "客户信息",
                    type: "bar",
                    stack: "广告",
                    data: [19, 2, 4, 4]
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
                    text: "项目维度管理视图",
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
                        data: ['历年立项数量','正在立项数量','已立项正在实施','已验收']
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
