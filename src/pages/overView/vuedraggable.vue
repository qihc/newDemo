<template>
  <div class="pageContent">
        <draggable v-model="tags" :move="getdata" @update="datadragEnd">
                <transition-group>
                    <div v-for="element in tags" :key="element.id" class="dragPart">
                        {{element.name}}
                    </div>
                </transition-group>
        </draggable>

  </div>
</template>

<script>

import draggable from 'vuedraggable';
import Sortable  from 'sortablejs'
export default {
    data() {
        return {
            tags:[
                {
                    id:"1",
                    name:"看板1"
                },
                {
                    id:"2",
                    name:"看板2"
                },
                {
                    id:"3",
                    name:"看板3"
                },
                {
                    id:"4",
                    name:"看板4"
                },
            ]
        }
    },
    mounted() {
       
       
    },
    methods: {
      getdata (evt) {
        console.log(evt.draggedContext.element.id)
      },
      datadragEnd (evt) {
        console.log('拖动前的索引 :' + evt.oldIndex)
        console.log('拖动后的索引 :' + evt.newIndex)
       
      }
     
    },

    computed: {},
    components: {
       draggable,
       Sortable

    }
};
</script>
<style  scoped>
.dragPart{width: 100px;height: 100px;margin: 10px;  text-align: center;line-height: 100px; cursor: pointer; border: 1px solid #d8d8d8; border-radius: 4px}
</style>
