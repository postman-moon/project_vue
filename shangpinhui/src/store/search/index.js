// search 模块的小仓库

import { reqGetSearchList } from '@/api/index';

const state = {
  searchList: {}
};
const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList;
  }
};
const actions = {
  // 获取搜索商品
  async getSearchList({commit}, params) {
    let result = await reqGetSearchList(params);
    if (result.code === 200) {
      commit('GETSEARCHLIST', result.data);
    }
  }
};

// 计算属性
// 项目当中 getters 主要的作用是：简化仓库中的数据（简化数据而生）
// 可以把我们将来在组件当中需要用的数据简化一下【将来组件在获取数据的时候就方便了】
const getters = {
  goodsList(state) {
    return state.searchList.goodsList || [];
  },
  attrsList(state) {
    return state.searchList.attrsList || [];
  },
  trademarkList(state) {
    return state.searchList.trademarkList || [];
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};