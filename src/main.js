import Vue from 'vue'
import ElementUI from 'element-ui' //新添加
import 'element-ui/lib/theme-chalk/index.css' //新添加，要放在import App from './App';之前
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import store from './vuex/store'
import promise from 'promise-polyfill';
!window.Promise && (window.Promise = promise);
import 'babel-polyfill'
import Lodash from 'lodash'
Vue.prototype._ = Lodash

import axios from 'axios'
Vue.prototype.$axios = axios
Vue.use(ElementUI) //新添加
Vue.use(iView)
Vue.config.productionTip = false

import goAgile from './components/goAgile/index.js'
Vue.use(goAgile);

import selectMenu from './components/selectMenu'
Vue.use(selectMenu);

import maskTable from './components/maskTable'
Vue.use(maskTable);

import '@/assets/css/normalize.css'
import '@/assets/css/reset.css'
import '@/assets/css/common.css'
// import '@/assets/css/myTheme.css'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

// import HighCharts from 'highcharts'
// Vue.use(HighCharts)

/* 通用开始 */
Vue.filter('FALSEINFO', value => { // 交易明细
    if (!value) {
        return "没有数据"
    } else {
        return value;
    }
})
Date.prototype.Format = function(fmt) { // author: meizz
    var o = {
        "M+": this.getMonth() + 1, // 月份
        "d+": this.getDate(), // 日
        "h+": this.getHours(), // 小时
        "m+": this.getMinutes(), // 分
        "s+": this.getSeconds(), // 秒
        "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
        "S": this.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

Vue.prototype.setCookie = function(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + "; ";
}

Vue.prototype.getCookie = function(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);;
    }
    return "";
}


/* 通用结束 */

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})