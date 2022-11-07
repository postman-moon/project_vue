import { reqGetCode, reqLogout, reqUserInfo, reqUserLogin, reqUserRegister } from "@/api";
import { setToken, getToken, removeToken } from "@/utils/token";

const state = {
  code: '',
  token: getToken(),
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

  // 清除本地数据
  CALER(state) {
    // 把仓库中相关用户信息清空
    state.token = '';
    state.userInfo = {};

    // 本地存储数据清空
    removeToken();
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
      setToken(result.data.token);
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

  // 退出登录
  async userLogout({commit}) {
    // 只是向服务器发起一次请求，通知服务器清除 token
    let result = await reqLogout();

    if (result.code === 200) {
      // action 里面不能操作 state，提交 mutation 修改 state
      commit('CALER');
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