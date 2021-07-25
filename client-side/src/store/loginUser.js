import loginServ from '../api/loginService';

export default {
  namespaced: true,
  state: {
    // 初始数据
    data: null, // 用户信息
    isLoading: false, // 是否是登录状态
  },
  mutations: {
    // 改变数据
    setData(state, payload) { // 改变用户信息
      state.data = payload;
    },
    setIsLoading(state, payload) { // 改变登录状态
      state.isLoading = payload;
    },
  },
  actions: { // 副作用操作 异步 更改 获取外部环境信息 如 localStorage location DOM
    // 登录时 改变仓库数据 改变数据只能提交mutations
    async login({ commit }, { loginId, loginPwd }) {
      commit('setIsLoading', true);
      const resp = await loginServ.login(loginId, loginPwd);
      commit('setData', resp);
      commit('setIsLoading', false);
      return resp;
    },
    // 注销时该变仓库数据
    loginOut({ commit }) {
      commit('setData', null);
      loginServ.loginOut();
    },
    // 获取当前用户信息 改变用户信息
    async whoAmi({ commit }) {
      commit('setIsLoading', true);
      try {
        const resp = loginServ.whoAmi();
        commit('setData', resp);
      } catch {
        commit('setData', null);
      }
      commit('setIsLoading', false);
    },
  },
};
