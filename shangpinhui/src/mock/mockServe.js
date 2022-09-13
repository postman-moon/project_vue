// 使用 Mock
import Mock from 'mockjs';
// 把 JSON 数据格式引入进来【JSON数据格式根本没有对外暴露，但是可以引入】
// webpack 默认对外暴露：图片、JSON 数据格式
import banner from '@/mock/banner';
import floor from '@/mock/floor';

// mock数据：第一个参数请求地址，第二参数：请求数据
Mock.mock('/mock/banner', {
  code: 200,
  data: banner,
});

Mock.mock('/mock/floor', {
  code: 200,
  data: floor,
});