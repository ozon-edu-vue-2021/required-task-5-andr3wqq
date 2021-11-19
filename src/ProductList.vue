<template>
    <div>
        <h1>Список продуктов</h1>
        <section class="products-container">
            <Product v-for="product in products"
                 :key="product.uid"
                 :product="product"
            ></Product>
            <p v-if="!products.length">Загрузка...</p>
        </section>
    </div>
</template>

<script>
import Product from './Product';
import { mapState } from 'vuex'

export default {
    components: {
        Product
    },
    computed: mapState({
        products: state => state.products.all
    })
}
</script>

<style scoped>
.products-container {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
}
</style>