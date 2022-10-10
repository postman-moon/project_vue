import { reqAddOrUpdateShopCart, reqGoodsInfo } from "@/api";
 
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
  },

  // 将产品添加到购物车中
  async addOrUpdateShopCart({commit}, {skuId, skuNum}) {
    // 加入购物车返回的解构
		// 加入购物车以后（发请求），前台将参数带给服务器
		// 服务器写入数据成功，并没有返回其他的数据，只是返回code=200，代表这次操作成功
		// 因为服务器没有返回其余数据，因此咱们不需要三连环存储数据
    let result = await reqAddOrUpdateShopCart(skuId, skuNum);
    console.log(result)
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