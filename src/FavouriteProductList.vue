<template>
    <section class="products-container">
        <Product v-for="product in products"
             :key="product.uid"
             :product="product"
        ></Product>
        <p v-if="!products.length">Вы ещё ничего не добавили в избранное.</p>
    </section>
</template>

<script>
import Product from './Product';
import { mapGetters } from 'vuex'

export default {
    components: {
        Product
    },
    computed: {
        ...mapGetters('products', {
            products: 'favouriteProducts'
        })
    },
}
</script>

<style scoped>
.products-container {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
}
</style>