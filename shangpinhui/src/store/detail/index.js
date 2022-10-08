import { reqGoodsInfo } from "@/api";
 
const state = {
  goodInfo: {}
};

const mutations = {
  GOODINFO(state, goodInfo) {
    state.goodInfo = goodInfo;
  }
};

const actions = {
  // 获取产品信息
  async getGoodInfo({commit}, skuId) {
    let result = await reqGoodsInfo(skuId);

    if (result.code == 200) {
      commit('GOODINFO', result.data);
    }
  }
};

const getters = {
  categoryView(state) {
    return state.goodInfo.categoryView || {};
  },

  skuInfo(state) {
    return state.goodInfo.skuInfo || {};
  },

  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || []
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};