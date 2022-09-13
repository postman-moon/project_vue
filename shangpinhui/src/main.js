import Vue from 'vue'
import App from './App.vue'

import TypeNav from '@/components/TypeNav';

Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false
// 引入路由
import router from "@/router";
// 引入仓库
import store from "@/store";
import "@/mock/mockServe";

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')