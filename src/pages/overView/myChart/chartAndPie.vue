<template>
  <div>
   <Row >
      <Col span="12">
        <chart7 v-on:childByValue="childByValue"></chart7>
      </Col>
      <Col span="12">
        <chart9 v-on:childByValue="childByValue"></chart9>
      </Col>
    </Row>
    <maskTable v-if="maskTableOnoff"></maskTable>
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
      }
    },
    components: {
       chart7,chart9
    }
};
</script>
