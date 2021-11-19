import Vue from 'vue';
import Router from 'vue-router';

import ProductList from '../ProductList.vue';
import FavouriteProductList from '../FavouriteProductList.vue';
import ShoppingCart from '../ShoppingCart.vue';
import NotFound from '../NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/products',
      component: ProductList,
    },
    {
      path: '/favourite',
      component: FavouriteProductList,
    },
    {
      path: '/cart',
      component: ShoppingCart,
    },
    {
      path: '*',
      component: NotFound,
    }
  ]
});