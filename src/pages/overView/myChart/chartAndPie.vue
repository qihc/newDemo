<template>
  <div style="margin-top:20px">
   <Row :gutter="16">
      <Col span="12">
        <chart7 v-on:childByValue="childByValue" class="wrap"></chart7>
      </Col>
      <Col span="12">
        <chart9 v-on:childByValue="childByValue" class="wrap"></chart9>
      </Col>
    </Row>
    <maskTable v-if="maskTableOnoff" v-on:closeTable="closeTable1"></maskTable>
  </div>
  
</template>
<script>
import chart7 from "./chart7";
import chart9 from "./chart9";
export default {
    name: "hello",
    data() {
        return {
           maskTableOnoff:false,
        };
    },
    mounted() {
       
    },
    methods: {
      childByValue(childValue) {
        // alert(childValue)
        // childValue就是子组件传过来的值
        this.maskTableOnoff = childValue
      },
      closeTable1(childValue){
          this.maskTableOnoff = childValue
      },
    },
    components: {
       chart7,chart9
    }
};
</script>
<style>
  .wrap{padding: 4px; border: 1px solid #d8d8d8;}
</style>