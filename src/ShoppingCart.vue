<template>
    <div class="cart">
        <h2>Корзина</h2>
        <p v-show="!products.length">
            <i>Пожалуйста, добавьте товары в корзину.</i>
        </p>
        <ul>
            <li v-for="product in products" :key="product.uid">
                <div>
                    {{ product.ingredient }} - {{ product.price }} ₽ x {{ product.quantity }}
                    <div class="buttons-container">
                        <button class="button button-add" @click="addProductToCart(product)">+</button>
                        <button class="button button-remove" @click="removeProductFromCart(product)">-</button>
                    </div>
                </div>
            </li>
        </ul>
        <p>Общая стоимость: {{ total.toFixed(0) }} ₽</p>
        <p><button :disabled="!products.length" @click="checkout(products)">Оформить</button></p>
        <p v-show="checkoutStatus">Статус заказа: {{ checkoutStatus }}.</p>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            checkoutStatus: state => state.cart.checkoutStatus
        }),
        ...mapGetters('cart', {
            products: 'cartProducts',
            total: 'cartTotalPrice'
        })
    },
    methods: {
        ...mapActions('cart', ['checkout', 'addProductToCart', 'removeProductFromCart']),
    }
}
</script>

<style scoped>
.buttons-container {
    display: inline-flex;
}
</style>