import Vue from 'vue'
import App from './App.vue'

import TypeNav from '@/pages/Home/TypeNav';

Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false
// 引入路由
import router from "@/router";
// 测试
import {
  reqCategoryList
} from '@/api';

reqCategoryList();

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')