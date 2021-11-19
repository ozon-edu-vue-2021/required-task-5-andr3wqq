<template>
  <div id="app">
      <h1>Корзина</h1>
      <hr>
      <ShoppingCart/>
      <hr>
      <h2>Список продуктов</h2>
      <ProductList/>
      <hr>
      <h2>Список избранных продуктов</h2>
      <FavouriteProductList/>
  </div>
</template>

<script>
import ProductList from './ProductList.vue'
import FavouriteProductList from './FavouriteProductList.vue'
import ShoppingCart from './ShoppingCart.vue'

export default {
  name: "App",
  components: {
      ProductList,
      FavouriteProductList,
      ShoppingCart
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

* {
  box-sizing: border-box;
}
</style>
