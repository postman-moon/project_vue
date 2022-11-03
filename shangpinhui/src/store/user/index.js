import { reqGetCode, reqUserInfo, reqUserLogin, reqUserRegister } from "@/api";

const state = {
  code: '',
  token: '',
  userInfo: {},
};
const mutations = {
  GETCODE(state, code) {
    state.code = code
  },

  USERLOGIN(state, token) {
    state.token = token;
  },

  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo;
  },
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

  // 登录业务(token)
  async userLogin({ commit }, postParams) {

    let result = await reqUserLogin(postParams);
    console.log(result);
    if (result.code === 200) {
      commit('USERLOGIN', result.data.token);
      return 'ok';
    } else {
      return Promise.reject(new Error('faile'));
    }
  },

  // 获取用户信息
  async getUserInfo({ commit }) {
    let result = await reqUserInfo();
    console.log('getUserInfo', result);

    if (result.code === 200) {
      commit('GETUSERINFO', result.data);
      return 'ok';
    } else {
      return Promise.reject(new Error('faile'));
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