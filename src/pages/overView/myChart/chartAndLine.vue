<template>
  <div>
    <selectMenu></selectMenu>
    <div class="wrap">
      <chart8 v-on:childByValue="childByValue"></chart8>
      <maskTable v-if="maskTableOnoff1" v-on:closeTable="closeTable1"></maskTable>
    </div>
    
    <Row style="margin-top:40px" :gutter="16">
      <Col span="12">
        <chart3 v-on:childByValue="childByValue3" class="wrap"></chart3>
      </Col>
      <Col span="12">
        <chart4 v-on:childByValue="childByValue3" class="wrap"></chart4>
      </Col>
    </Row>
    <maskTable v-if="maskTableOnoff2" v-on:closeTable="closeTable2"></maskTable>
  </div>
  
</template>
<script>
import chart8 from "./chart8";
import chart3 from "./chart3";
import chart4 from "./chart4";
export default {
    name: "hello",
    data() {
        return {
           maskTableOnoff1:false,
           maskTableOnoff2:false,
        };
    },
    mounted() {
       
    },
    methods: {
        childByValue3(childValue) {
            // alert(childValue)
            // childValue就是子组件传过来的值
            this.maskTableOnoff2 = childValue
        },
        childByValue(childValue) {
            // alert(childValue)
            // childValue就是子组件传过来的值
            this.maskTableOnoff1 = childValue
        },
        closeTable1(childValue){
            this.maskTableOnoff1 = childValue
        },
        closeTable2(childValue){
            this.maskTableOnoff2 = childValue
        }
    },
    components: {
       chart3,chart4,chart8
    }
};
</script>

<style>
  .wrap{padding: 4px; border: 1px solid #d8d8d8;}
</style>