<template>
  <div id="app">
      <div id="nav">
          <router-link class="nav-link" to="/products">Главная</router-link>
          <router-link class="nav-link" to="/favourite">Избранное</router-link>
          <router-link class="nav-link" to="/cart">Корзина</router-link>
      </div>
      <router-view />
  </div>
</template>

<script>
export default {
    name: 'App',
    created() {
        this.$store.dispatch('products/getAllProducts')
    }
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

#nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 20px;
}

.nav-link {
    margin-right: 20px;
    margin-bottom: 10px;
    color: #aaa;
    font-weight: 700;
    text-decoration: none;
}

.nav-link.router-link-active {
    padding: 2px 10px 3px;
    color: #fff;
    background-color: #2ec4b6;
    border-radius: 15px;
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
