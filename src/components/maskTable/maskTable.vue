<template>
    <div>
        <!-- <button @click="handleClick" v-show="isShowTable">X</button> -->
        <Table :columns="columns1" :data="data1" ></Table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // isShowTable:true,
            // 战略分类    
            // 业务分类    
            // 部门名称    
            // 需求事项    
            // 需求来源    
            // 对应ITM业务要求编号 

            // 部门业务要求计划提出时间    
            // 项目/任务形式 
            // 项目/任务名称 
            // 项目推进策略  
            // 拟立项完成时间
            columns1: [
                {
                    title: '战略分类',
                    key: 'title1'
                },
                {
                    title: '业务分类',
                    key: 'title2'
                },
                {
                    title: '部门名称',
                    key: 'title3'
                },
                {
                    title: '需求事项',
                    key: 'title4'
                },
                {
                    title: '需求来源',
                    key: 'title5'
                },
                {
                    title: '对应ITM业务要求编号',
                    key: 'title6'
                },
                {
                    title: '计划提出时间',
                    key: 'title7'
                },
                {
                    title: '任务形式',
                    key: 'title8'
                },
                {
                    title: '任务名称',
                    key: 'title9'
                },
                {
                    title: '项目推进策略',
                    key: 'title10'
                },
                {
                    title: '拟立项完成时间',
                    key: 'title11'
                },
            ],
            data1: [
                {
                    title1: '战略分类1',
                    title2: '业务分类1',
                    title3: '部门名称1',
                    title4: '需求事项1',
                    title5: '需求来源1',
                    title6: '0031',
                    title7: '2016-10-03',
                    title8: '任务形式1',
                    title9: '任务名称1',
                    title10: '项目推进策略1',
                    title11: '2016-10-03'
                },
                {
                    title1: '战略分类2',
                    title2: '业务分类2',
                    title3: '部门名称2',
                    title4: '需求事项2',
                    title5: '需求来源2',
                    title6: '0032',
                    title7: '2018-1-3',
                    title8: '任务形式2',
                    title9: '任务名称2',
                    title10: '项目推进策略2',
                    title11: '2019-8-13'
                },
                {
                    title1: '战略分类3',
                    title2: '业务分类3',
                    title3: '部门名称3',
                    title4: '需求事项3',
                    title5: '需求来源3',
                    title6: '0033',
                    title7: '2018-4-10',
                    title8: '任务形式3',
                    title9: '任务名称3',
                    title10: '项目推进策略2',
                    title11: '2019-8-13'
                },
                {
                    title1: '战略分类4',
                    title2: '业务分类4',
                    title3: '部门名称4',
                    title4: '需求事项4',
                    title5: '需求来源4',
                    title6: '0034',
                    title7: '2018-4-10',
                    title8: '任务形式4',
                    title9: '任务名称4',
                    title10: '项目推进策略4',
                    title11: '2019-8-13'
                },
                
            ]
        };
    },
    
    mounted() {
       
    },
    methods: {
    //   handleClick:function(){
    //       this.isShowTable = false;
    //   },
    }
};
</script>
