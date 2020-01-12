import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    task: 'test',
    taskList: []
  },
  getters: {
    // AddForm
    // テキストボックスに入力された値を返す
    task (state) { return state.task },
    // テキストボックスが空の場合、trueを返しAddボタンを押せない状態にする
    nullCheck (state) {
      if (state.task) {
        return false
      } else {
        return true
      }
    },
    // 格納されているToDoリストを返す
    taskList (state) { return state.taskList }
  },
  mutations: {
    // テキストボックスrの値をstateに格納
    setTask (state, payload) {
      state.task = payload.task
    },
    // Addボタンが押された際にテキストボックスの内容をstateのtaskListに格納する
    addTask (state) {
      var max = state.taskList.reduce(function (a, b) {
        return a > b.id ? a : b.id
      }, 0)
      state.taskList.push({
        id: max + 1,
        task: state.task,
        status: false
      })
    },
    removeTask (state, payload) {
      state.taskList.some(function (v, i) {
        if (v.id === payload.id) state.taskList.splice(i, 1)
      })
    }
  },
  actions: {
    doUpdate ({ commit }, task) {
      commit('setTask', { task })
    },
    doRegist ({ commit }) {
      commit('addTask')
    },
    doRemove ({ commit }, id) {
      commit('removeTask', { id })
    }
  },
  modules: {
  }
})
