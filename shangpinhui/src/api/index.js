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