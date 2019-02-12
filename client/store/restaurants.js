export const state = () => {
  list: []
}

export const mutations = {
  addRestaurant(state, restaurant) {
    state.list.push(restaurant)
  },
  emptyRestaurantsList(state) {
    state.list = []
  }
}

export const getters = {
  restaurantsList: state => state.list
}
