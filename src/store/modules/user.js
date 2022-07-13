import { login } from '@/api/user'
const state = {
  token: null
}
const mutations = {
  setToken (state, payload) {
    state.token = payload
  }
}
const actions = {
  // 登录接口 发送ajax
  async login (context, data) {
    try {
      const res = await login(data)
      console.log('登录', res)
      // commit在vuex中添加数据，把res.data.data传给store里面的mutations里面的setToken函数
      context.commit('setToken', res.data.data)
    } catch (err) {
      console.log(err)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

