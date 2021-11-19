import shop from '../api/shop'

const IMAGES = [
  require('@/assets/images/6123150777.webp'),
  require('@/assets/images/6126039472.webp'),
  require('@/assets/images/6126040354.webp'),
  require('@/assets/images/6128597660.webp'),
  require('@/assets/images/6134992334.webp'),
  require('@/assets/images/6136170572.webp'),
  require('@/assets/images/6136172483.webp'),
  require('@/assets/images/6140906765.webp'),
  require('@/assets/images/6142673815.webp'),
  require('@/assets/images/6142681673.webp'),
  require('@/assets/images/6142683276.webp'),
  require('@/assets/images/6148226736.webp')
]

function getRandomImage() {
  return IMAGES[Math.floor(Math.random() * IMAGES.length)];
}

function getRandomPrice(min = 0, max = 100) {
  // price with floating point
  // const price = Math.random() < 0.5 ? ((1 - Math.random()) * (max - min) + min) : (Math.random() * (max - min) + min);
  const price = Math.random() * (max - min) + min;
  // integer price
  return price.toFixed(0);
}

// initial state
const state = () => ({
  all: [],
  favourite: [],
})

// getters
const getters = {
  favouriteProducts: (state) => {
    return state.all.filter(product => !!product.isFavourite)
  }
}

// actions
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {

      // set random image and price
      products.map(product => {
        product.quantity = 0;
        product.isFavourite = false;
        product.image = getRandomImage();
        product.price = getRandomPrice();
        return product;
      })

      commit('setProducts', products)
    })
  },

  toggleFavourite ({ commit }, product) {
    commit('toggleFavourite', { id: product.id })
  }
}

// mutations
const mutations = {
  setProducts (state, products) {
    state.all = products
  },

  incrementProductQuantity (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.quantity++
  },

  decrementProductQuantity (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.quantity--
  },

  toggleFavourite (state, { id }) {
    const product = state.all.find(product => product.id === id)
    if (product) {
      product.isFavourite = !product.isFavourite
    }
  },

  clearProductQuantityForAll (state) {
    const clearedProducts = state.all.map(product => {
      product.quantity = 0
      return product
    })
    state.all = clearedProducts
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}