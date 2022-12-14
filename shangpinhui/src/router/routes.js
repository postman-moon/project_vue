// 引入路由组件
import Home from "@/views/Home";
import Search from "@/views/Search";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Detail from "@/views/Detail";
import AddCartSuccess from "@/views/AddCartSuccess";
import ShopCart from "@/views/ShopCart";
import Trade from "@/views/Trade";

export default [
  {
    path: "/home",
    component: Home,
    meta: {
      show: true,
    },
  },
  {
    name: "search",
    path: "/search/:keyword?",
    component: Search,
    meta: {
      show: true,
    },
    // 路由组件能不能传递props数据？
    // 布尔值写法：params
    // props: true,
    // 对象写法：额外的给路由组件传递一些props
    // props: { a: 1, b: 2 },
    // 函数写法：可以 params 参数、query 参数，通过 props 传递给路由组件
    props: ($route) => {
      return {
        keyword: $route.params.keyword,
        k: $route.query.k,
      };
    },
  },
  {
    path: "/login",
    component: Login,
    meta: {
      show: false,
    },
  },
  {
    path: "/register",
    component: Register,
    meta: {
      show: false,
    },
  },
  {
    path: "/detail/:skuid",
    component: Detail,
    meta: {
      show: true,
    },
  },
  {
    path: "/addcartsuccess",
    name: "addcartsuccess",
    component: AddCartSuccess,
    meta: {
      show: true,
    },
  },
  {
    path: "/shopcart",
    component: ShopCart,
    meta: {
      show: true,
    },
  },
  {
    path: "/trade",
    component: Trade,
    meta: {
      show: true,
    },
  },

  // 重定向
  {
    path: "*",
    redirect: "/home",
  },
];
