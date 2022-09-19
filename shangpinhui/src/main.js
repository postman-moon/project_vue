import Vue from 'vue'
import App from './App.vue'

import TypeNav from '@/components/TypeNav';
import Carsoule from '@/components/Carsoule';

Vue.component(TypeNav.name, TypeNav);
Vue.component(Carsoule.name, Carsoule);

Vue.config.productionTip = false
// 引入路由
import router from "@/router";
// 引入仓库
import store from "@/store";
import "@/mock/mockServe";
import "swiper/css/swiper.css"

new Vue({
  render: h => h(App),
  // 全局事件总线$bus
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  router,
  store,
}).$mount('#app')