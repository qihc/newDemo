<template>
  <div class="curPosition">
    <Icon type="navicon-round"></Icon>

    <span>选择部门</span>
    <Select v-model="curBM" style="width:140px">
      <Option v-for="item in BMList" :value="item.id" :key="item.id">{{ item.name }}</Option>
    </Select>

    <span>选择时间</span>
     <Select v-model="curTime" style="width:140px">
      <Option v-for="item in timeList" :value="item.id" :key="item.id">{{ item.name }}</Option>
    </Select>
     <Button type="primary" icon="ios-search" class="serchBtn">查询</Button>
  </div>
</template>

<script>

export default {
    data() {
        return {
            BMList: [
                {
                    id: "1",
                    name: "总体"
                },
                {
                    id: "2",
                    name: "部门级"
                },
                {
                    id: "3",
                    name: "事业群"
                },
                
            ],
            curBM: "",
            timeList: [
                {
                    id: "1",
                    name: "2017"
                },
                {
                    id: "2",
                    name: "2018"
                },
                {
                    id: "3",
                    name: "2019"
                },
                
            ],
            curTime: ""
        };
    },
    methods: {
        

    },
    created(){
     
    },
    mounted() {
      
    }
};
</script>
