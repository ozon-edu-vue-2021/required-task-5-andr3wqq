import shop from '../api/shop'

// initial state
const state = () => ({
  items: [],
  checkoutStatus: null
})

// getters
const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(product => product.id === id)
      return {
        id: product.id,
        ingredient: product.ingredient,
        price: product.price,
        quantity
      }
    })
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}

// actions
const actions = {
  checkout ({ commit, state }, products) {
    const savedCartItems = [...state.items]
    commit('setCheckoutStatus', null)
    // empty cart
    commit('setCartItems', { items: [] })

    shop.buyProducts(
        products,
        () => {
          commit('setCheckoutStatus', 'Успешно оформлен')
          // clear product quantity
          commit('products/clearProductQuantityForAll', {}, { root: true })
        },
        () => {
          commit('setCheckoutStatus', 'Произошла ошибка')
          // rollback to the cart saved before sending the request
          commit('setCartItems', { items: savedCartItems })
        }
    )
  },

  addProductToCart ({ state, commit }, product) {
    commit('setCheckoutStatus', null)
    const cartItem = state.items.find(item => item.id === product.id)
    if (!cartItem) {
      commit('pushProductToCart', { id: product.id })
    } else {
      commit('incrementCartItemQuantity', { id: cartItem.id })
    }

    commit('products/incrementProductQuantity', { id: product.id }, { root: true })
  },

  removeProductFromCart ({ state, commit }, product) {
    commit('setCheckoutStatus', null)
    const cartItem = state.items.find(item => item.id === product.id)
    if (cartItem) {
      commit('decrementItemQuantity', { id: product.id })

      if (cartItem.quantity === 0) {
        commit('filterProductsInCart', { id: product.id })
      }
    }

    commit('products/decrementProductQuantity', { id: product.id }, { root: true })
  },
}

// mutations
const mutations = {
  pushProductToCart (state, { id }) {
    state.items.push({
      id,
      quantity: 1
    })
  },

  filterProductsInCart (state) {
    state.items = state.items.filter(item => item.quantity !== 0)
  },

  incrementCartItemQuantity (state, { id }) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  },

  decrementItemQuantity (state, { id }) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity--
  },

  setCartItems (state, { items }) {
    state.items = items
  },

  setCheckoutStatus (state, status) {
    state.checkoutStatus = status
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}