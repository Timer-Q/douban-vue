import * as types from '../mutation-types'

const state = {
  time: ''
}

const getters = {
  getTime: state => state.time
}

const actions = {
  setTime ({ commit }, payload) {
    commit(types.UPDATE, payload)
  }
}

const mutations = {
  [types.UPDATE] (state, payload) {
    state.time = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
