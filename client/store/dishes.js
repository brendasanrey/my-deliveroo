export const state = () => ({
  list: []
})

export const mutations = {
  addDish(state, dish) {
    state.list.push(dish)
  },
  emptyDishesList(state) {
    state.list = []
  }
}

export const getters = {
  dishesList: state => state.list
}

