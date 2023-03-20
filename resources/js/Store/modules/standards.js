const state = () => ({
  items: []
})

// getters
const getters = {
  cartProducts: (state) => {
    return state.items;
  }
}

// actions
const actions = {
  addItemToStandards ({ state, commit }, standard) {
        commit('addItemToStandards', { standard })
  },
  removeItemFromStandards({ state, commit }, standardIndex) {
    commit('removeItemFromStandards', { standardIndex })
  },
  clearAllStandards({commit}) {
    commit('clearAllStandards')
  }
}

// mutations
const mutations = {
    addItemToStandards (state, { standard }) {
        state.items.push(standard)
    },
    removeItemFromStandards(state, { standardIndex}) {
      state.items.splice(standardIndex, 1)
    }, 
    clearAllStandards(state) {
      state.items = []
    }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
