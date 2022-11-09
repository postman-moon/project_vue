// 当前这个模块，API 进行统一管理
import requests from "./request";
import mockAjax from "./mockAjax";

// 三级联动接口
// 发请求：axios 发请求返回结果是 Promise 对象
export const reqCategoryList = () =>
  requests({
    url: "/product/getBaseCategoryList",
    method: "get",
  });

// 获取 Banner （Home首页轮播图接口）
export const reqGetBannerList = () =>
  mockAjax({
    url: "/banner",
    method: "get",
  });

// 获取 Floor
export const reqGetFloorList = () =>
  mockAjax({
    url: "/floor",
    method: "get",
  });

// 搜索商品
export const reqGetSearchList = (params) =>
  requests({
    url: "/list",
    method: "post",
    data: params,
  });

// 获取产品详情信息的接口 URL： /api/item/{ skuId } 请求方式： get
export const reqGoodsInfo = (skuId) =>
  requests({
    url: `/item/${skuId}`,
    method: "get",
  });

// 将产品添加到购物车中（获取更新某一个产品的个数）
export const reqAddOrUpdateShopCart = (skuId, skuNum) =>
  requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: "post",
  });

// 获取购物车列表数据接口
// URL: /api/cart/cartList    method: get
export const reqCartList = () =>
  requests({
    url: "/cart/cartList",
    method: "get",
  });

// 删除购物车产品的接口
// URL: /api/cart/deleteCart/{skuId}    method: Delete
export const reqDeleteCartById = (skuId) =>
  requests({
    url: `/cart/deleteCart/${skuId}`,
    method: "delete",
  });

// 指定购物项的选中状态 /api/cart/checkCart/{skuID}/{isChecked}
export const reqCheckCartItem = (skuId, isChecked) =>
  requests({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: "get",
  });

// 获取验证码
// URL: /api/user/passport/sendCode/{phone}       method: get
export const reqGetCode = (phone) =>
  requests({
    url: `/user/passport/sendCode/${phone}`,
    method: "get",
  });

// 注册
// URL: /api/user/passport/register             method: post
export const reqUserRegister = (postParams) =>
  requests({
    url: "/user/passport/register ",
    data: postParams,
    method: "post",
  });

// 登录
// URL: /api/user/passport/login      method: post
export const reqUserLogin = (postParams) =>
  requests({
    url: "/user/passport/login",
    data: postParams,
    method: "post",
  });

// 获取用户信息【需要带着用户的token向服务器要用户信息】
// URL： /api/user/passport/auth/getUserInfo    method: get
export const reqUserInfo = () =>
  requests({
    url: "/user/passport/auth/getUserInfo",
    method: "get",
  });

// 退出登录
// URL：/api/user/passport/logout        method: get
export const reqLogout = () =>
  requests({
    url: "/user/passport/logout",
    method: "get",
  });

// 获取用户地址信息
// URL：/api/user/userAddress/auth/findUserAddressList      method: get
export const reqAddressInfo = () =>
  requests({
    url: "/user/userAddress/auth/findUserAddressList",
    method: "get",
  });

// 获取商品清单
// URL: /api/order/auth/trade     method: get
export const reqOrderInfo = () =>
  requests({
    url: "/order/auth/trade",
    method: "get",
  });
