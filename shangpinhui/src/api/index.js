// 当前这个模块，API 进行统一管理
import requests from "./request";
import mockAjax from './mockAjax';

// 三级联动接口
// 发请求：axios 发请求返回结果是 Promise 对象
export const reqCategoryList = () => requests({
  url: '/product/getBaseCategoryList',
  method: 'get',
});

// 获取 Banner （Home首页轮播图接口）
export const reqGetBannerList = () => mockAjax({
  url: '/banner',
  method: 'get'
});