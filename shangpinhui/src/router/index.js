import Vue from 'vue';
import VueRouter from 'vue-router';
// 引入 store
import store from '@/store'

Vue.use(VueRouter);

import routes from './routes';

// 先把VueRouter 原型对象的 push，先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

// 重写 push|replace
// 第一个参数：告诉原来push方法，你往哪里跳转（传递哪些参数）
// 第二个参数：成功的回调
// 第三个参数：失败的回调

// call || apply 区别：
// 相同点：都可以调用函数一次，都可以篡改函数的上下文一次
// 不同点：call 与 apply 传递参数：call 传递参数用逗号隔开，apply方法执行，传递数组
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(this, location, () => {}, () => {});
  }
};

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(this, location, () => {}, () => {});
  }
};

// 对外暴露 VueRouter 类的实例
let router = new VueRouter({
  routes,
  scrollBehavior() {
    // 始终滚动到顶部
    return { y: 0 }
  },
})

// 全局守卫：前置守卫（在路由跳转之前进行判断）
router.beforeEach(async (to, from, next) => {
  // 用户登录了，才会有 token，未登录一定不会有 token
  let token = store.state.user.token;
  let name = store.state.user.userInfo.name;

  // 用户已经登录
  if (token) {
    // 用户已经登录了还想去 login 【不能去，停留在首页】
    if (to.path=='/login') {
      next('/home');
    } else {
      // 登录了，但是去的不是 login
      if (name) {
        next();
      } else {
        try {
          await store.dispatch('getUserInfo');
          next();
        } catch (error) {
          // token 失效获取不到用户信息，重新登录
          await store.dispatch('userLogout');
          next('/login');
        }
      }
    }
  } else {
    // 未登录
    next();
  }
});

// 配置路由
export default router; 