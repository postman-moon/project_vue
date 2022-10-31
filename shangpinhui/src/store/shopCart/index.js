import { reqCartList, reqDeleteCartById } from "@/api";

const state = {
  cartList: [],
};
const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList;
  },
};
const actions = {
  // 获取购物车列表数据
  async getCartList({ commit }) {
    let result = await reqCartList();
    console.log('getCartList', result);

    if (result.code === 200) {
      commit('GETCARTLIST', result.data);
    }
  },

  // 删除购物车某一个产品
  async deleteCartListBySkuId({ commit }, skuId) {
    let result = await reqDeleteCartById(skuId);

    if (result.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'));
    }
  },

  // 删除选中的商品
  deleteAllCheckedCart({dispatch, getters}) {
    // context：小仓库，commit【提交mutations修改state】 getters【计算属性】 dispatch【派发action】 state【当前仓库数据】
		// 获取购物车中全部的产品（是一个数组）
    let promiseAll = [];
    getters.cartList.cartInfoList.forEach(item => {
      let promise = item.isChecked == 1 ? dispatch('deleteCartListBySkuId', item.skuId) : '';
      promiseAll.push(promise);
    });

    // 只要全部的 p1|p2...都成功，返回结果即为成功
		// 如果有一个失败，返回即为失败结果
    return Promise.all(promiseAll);
  }
};
const getters = {
  cartList(state) {
    return state.cartList[0] || {}
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}