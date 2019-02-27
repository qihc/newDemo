import mymaskTable from './maskTable.vue'

const maskTable = {
    install: function(Vue) {
        Vue.component('maskTable', mymaskTable)
    }
};
export default maskTable;