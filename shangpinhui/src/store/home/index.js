import {
  reqCategoryList,
  reqGetBannerList,
  reqGetFloorList
} from '@/api';

// state:仓库存储数据的地方
const state = {
  // state 中数据默认初始值别瞎写，服务器返回对象，服务器返回数组【根据接口返回值初始化】
  categoryList: [],
  // 轮播图数据
  bannerList: [],
  // floor 数据
  floorList: [],
};

// mutations: 修改state的唯一手段
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },

  // 轮播图
  BANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },

  // floor
  FLOORLIST(state, floorList) {
    state.floorList = floorList;
  },
};

// action: 处理action，可以书写自己的业务逻辑，也可以处理异步
const actions = {
  async categoryList({
    commit
  }) {
    let result = await reqCategoryList();
    if (result.code === 200) {
      commit('CATEGORYLIST', result.data);
    }
  },

  // 获取首页轮播图的数据
  async getBannerList({
    commit
  }) {
    let result = await reqGetBannerList();
    if (result.code === 200) {
      commit('BANNERLIST', result.data);
    }
  },

  // 获取楼层的数据
  async getFloorList({
    commit
  }) {
    let result = await reqGetFloorList();
    console.log(result);
    if (result.code === 200) {
      commit('FLOORLIST', result.data);
    }
  }
};

// getters: 理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
};