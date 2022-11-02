import { reqGetCode, reqUserRegister } from "@/api";

const state = {
  code: '',
};
const mutations = {
  GETCODE(state, code) {
    state.code = code
  }
};
const actions = {
  // 获取验证码
  async getCode({ commit }, phone) {
    let result = await reqGetCode(phone);

    if (result.code === 200) {
      // 获取验证码的这个接口，把验证码返回，但是正常情况，后台把验证码发到用户手机上
      commit('GETCODE', result.data);
      return 'ok';
    } else {
      return Promise.reject(new Error('fail'));
    }
  },

  // 用户注册
  async userRegister({ commit }, postParams) {
    let result = await reqUserRegister(postParams);
    console.log(result);

    if (result.code === 200) {
      return 'ok';
    } else {
      return Promise.reject(new Error('fail'));
    }
  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
};