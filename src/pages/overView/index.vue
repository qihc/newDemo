<template>
  <div class="pageContent">
    <!-- <Breadcrumb :style="{margin: '16px 0'}">
        <BreadcrumbItem>当前位置</BreadcrumbItem>
        <BreadcrumbItem>项目概览</BreadcrumbItem>
    </Breadcrumb> -->
    <goAgile :go="'/agile'" :text="'返回敏捷项目列表'" :Top="'10'" />
    <selectMenu></selectMenu>
    <div class="pageCon">
      <Tabs value="name1" @on-click="changTab">
        <TabPane label="项目基本情况" name="name1">
          <div class="pageCon">
            <Row>
              <Col span="12">

                <div class="demo-spin-col">
                  <!-- <Spin fix>
                    <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                    <div>Loading</div>
                  </Spin> -->
                  <cyclic :titleName="part1.title1" :data="part1.data1" :name="part1.name1"></cyclic>
                </div>




              </Col>
              <Col span="12">
              <cyclic :titleName="part1.title2" :data="part1.data2" :name="part1.name2"></cyclic>
              </Col>
            </Row>
            <Row>
              <Col span="12">
              <bar :titleName="part1.title4" :dataX="part1.data4X" :dataY="part1.data4Y" :name="part1.name4" :barColor="part1.barColor4" :xyAxisColor="part1.xyAxisColor4" :xAxisName="part1.xAxisName4" :yAxisName="part1.yAxisName4" :labelOnoff="part1.labelOnoff4" :labelColor="part1.labelColor4"></bar>
              </Col>
              <Col span="12">
              <pie :titleName="part1.title3" :data="part1.data3" :name="part1.name3"></pie>
              </Col>
            </Row>

          </div>
        </TabPane>
        <TabPane label="项目开发情况" name="name2">
          <div class="pageCon">
            <Row>
              <Col span="12">
              <lineChart :titleName="part1.title5" :dataX="part1.data5X" :dataY="part1.data5Y" :xyAxisColor="part1.xyAxisColor5" :xAxisName="part1.xAxisName5" :yAxisName="part1.yAxisName5">
              </lineChart>
              </Col>
              <Col span="12">
              <barSection></barSection>
              </Col>
            </Row>

          </div>
          <div style="margin:28px;">
            <h3 class="Title">项目开发情况汇总表</h3>
            <Table stripe height="300" :columns="tableColumns" :data="tableData"></Table>
          </div>
        </TabPane>
       <!--  <TabPane label="地图" name="name3">
            <div class="pageCon">
                <Row>
                    <Col span="24">
                        <testmap></testmap>
                    </Col>
                </Row>
            </div>
        </TabPane> -->
        <TabPane label="highChart" name="name4">
            <div class="pageCon">
                <Row>
                    <Col span="24">
                        <highChartTest :options="options"></highChartTest>
                    </Col>
                </Row>
            </div>
        </TabPane>
        <TabPane label="vuedraggable" name="name5">
            <div class="pageCon">
                <Row>
                    <Col span="24">
                        <vuedraggable></vuedraggable>
                    </Col>
                </Row>
            </div>
        </TabPane>
    
      </Tabs>
     
    </div>

  </div>
</template>

<script>

import lineChart from "./myChart/line";
import pie from "./myChart/pie";
import cyclic from "./myChart/cyclic";
import bar from "./myChart/bar";
import barSection from "./myChart/barSection";
// import testmap from "./myChart/testmap";
import highChartTest from "./myChart/highchart";
import vuedraggable from "./vuedraggable";

export default {
    data() {
        return {
            randomMovieList: [
                {
                    step:"步骤一：我是一个业务功能的步骤1",
                    MovieList:[
                        {
                            name: 'The Shawshank Redemption',
                            url: '../../assets/images/u12321.png',
                            rate: 9.6
                        },
                        {
                            name: 'Leon:The Professional',
                            url: '../../assets/images/u12321.png',
                            rate: 9.4
                        },
                        {
                            name: 'Farewell to My Concubine',
                            url: '../../assets/images/u12321.png',
                            rate: 9.5
                        },
                    ]
                },
                {
                    step:"步骤二：我是一个业务功能的步骤2",
                    MovieList:[
                        {
                            name: 'The Shawshank Redemption',
                            url: '../../assets/images/u12325.png',
                            rate: 9.6
                        },
                        {
                            name: 'Leon:The Professional',
                            url: '../../assets/images/u12325.png',
                            rate: 9.4
                        },
                       
                    ]
                }
               
            ],
           
            content1:"这里是该步骤的描述信息1",
            message:"",
            textarea: "",
            // table表单数据
            tableColumns: [
                {
                    title: "任务总数",
                    key: "taskNum"
                },
                {
                    title: "已完成任务总数",
                    key: "doneTaskNum"
                },
                {
                    title: "构建通过率",
                    key: "passRate"
                },
                {
                    title: "提交次数",
                    key: "subNum"
                },
                {
                    title: "提交代码行数",
                    key: "subCodeLine"
                },
                {
                    title: "缺陷总数",
                    key: "defectNum"
                },
                {
                    title: "已解决缺陷总数",
                    key: "doneDefectNum"
                }
            ],
            tableData: [
                {
                    taskNum: "11",
                    doneTaskNum: "123",
                    passRate: "43%",
                    subNum: "344",
                    subCodeLine: "363",
                    defectNum: "293",
                    doneDefectNum: "33"
                },
                {
                    taskNum: "11",
                    doneTaskNum: "123",
                    passRate: "43%",
                    subNum: "344",
                    subCodeLine: "363",
                    defectNum: "293",
                    doneDefectNum: "33"
                },
                {
                    taskNum: "11",
                    doneTaskNum: "123",
                    passRate: "43%",
                    subNum: "344",
                    subCodeLine: "363",
                    defectNum: "293",
                    doneDefectNum: "33"
                },
                {
                    taskNum: "11",
                    doneTaskNum: "123",
                    passRate: "43%",
                    subNum: "344",
                    subCodeLine: "363",
                    defectNum: "293",
                    doneDefectNum: "33"
                },
                {
                    taskNum: "11",
                    doneTaskNum: "123",
                    passRate: "43%",
                    subNum: "344",
                    subCodeLine: "363",
                    defectNum: "293",
                    doneDefectNum: "33"
                },
                {
                    taskNum: "11",
                    doneTaskNum: "123",
                    passRate: "43%",
                    subNum: "344",
                    subCodeLine: "363",
                    defectNum: "293",
                    doneDefectNum: "33"
                },
                {
                    taskNum: "11",
                    doneTaskNum: "123",
                    passRate: "43%",
                    subNum: "344",
                    subCodeLine: "363",
                    defectNum: "293",
                    doneDefectNum: "33"
                },
                {
                    taskNum: "11",
                    doneTaskNum: "123",
                    passRate: "43%",
                    subNum: "344",
                    subCodeLine: "363",
                    defectNum: "293",
                    doneDefectNum: "33"
                }
            ],
            formItem: {
                product: "",
                project: ""
            },
            // table表单数据
            part1: {
                title1: "人员构成图",
                data1: [
                    { value: 3, name: "总体组" },
                    { value: 10, name: "开发组" },
                    { value: 6, name: "测试组" }
                ],
                name1: "人员占比",
                title2: "用户故事完成情况",
                data2: [
                    { value: 3, name: "未开始" },
                    { value: 10, name: "开发中" },
                    { value: 10, name: "测试中" },
                    { value: 10, name: "已上线" }
                ],
                name2: "故事状态",
                title3: "任务健康状态",
                data3: [
                    { value: 30, name: "快到期" },
                    { value: 30, name: "已完成" },
                    { value: 10, name: "其他" }
                ],
                name3: "健康状态",
                title4: "迭代上线情况",
                data4X: ["5.1", "6.1", "7.1", "8.1", "9.1", "10.1"],
                data4Y: [5, 20, 36, 10, 10, 20],
                barColor4: "#66CCFF",
                xyAxisColor4: "#ffcb5b",
                xAxisName4: "时间",
                yAxisName4: "上线情况",
                name4: "迭代",
                labelOnoff4: true,
                labelColor4: "#fff",
                title5: "燃尽图",
                data5X: ["5.1", "6.1", "7.1", "8.1", "9.1", "10.1"],
                data5Y: [750, 650, 500, 300, 200, 100, 10],
                xyAxisColor5: "#ffcb5b",
                xAxisName5: "时间",
                yAxisName5: "完成情况"
            },
            options: {
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },
                yAxis: {
                    title: {
                        text: 'Temperature'
                    },
                    lineWidth: 2,
                    lineColor: '#F33',
                    id: 'temperature-axis'
                },
                series: [{
                    name: 'Temperature',
                    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                    color: '#F33'
                }]
            },
        };
    },
    mounted() {
        this.part1.data2 = [
            { value: 3, name: "未开始" },
            { value: 10, name: "开发中" },
            { value: 10, name: "测试中" }
        ];
       
    },
    methods: {
        changTab(name){
            //要求点击某一项加载才加载接口
            //alert(name)
        }
     
    },

    computed: {},
    components: {
        lineChart,
        pie,
        cyclic,
        barSection,
        bar,
        // testmap,
        highChartTest,
        vuedraggable

    }
};
</script>
<style  scoped>
.ml20{margin-left: 20px;}
.demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .demo-spin-col{

        position: relative;


    }
.editk {
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 10px;
}
.pageContent {
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid #d7dde4;
    margin-top: 10px;
}
.pageCon {
    background: #fff;
}
.pageConTitle {
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 16px;
}
.w80 {
    width: 80%;
    margin: 0 auto;
}
.showTop {
    margin-bottom: 20px;
}
h3.Title {
    margin-bottom: 15px;
}
</style>
