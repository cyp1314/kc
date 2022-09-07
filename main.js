import App from './App'


import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'

import uView from "uview-ui";
Vue.use(uView);

import store from './store'
Vue.prototype.$store = store


// 引入uView对小程序分享的mixin封装
let mpShare = require('uview-ui/libs/mixin/mpShare.js');
Vue.mixin(mpShare)

const app = new Vue({
	store,
    ...App
})
app.$mount()
