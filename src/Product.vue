<template>
    <div class="product">
        <div class="image-container">
            <img :src="product.image" alt="">
            <p class="product-name">{{ product.dish }}</p>
            <div
                :class="['product-bookmark', { 'selected': product.isFavourite }]"
                @click="toggleFavourite(product)"
            ></div>
            <p class="product-price">{{ product.price }} ₽</p>
            <p v-if="product.quantity" class="product-quantity">{{ product.quantity }}</p>
        </div>

        <div class="button-container">
            <button @click="addProductToCart(product)">В корзину</button>
            <button v-if="product.quantity"
                    @click="removeProductFromCart(product)">
                Убрать
            </button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'product',
    props: ['product'],
    methods: {
        ...mapActions('cart', [
            'addProductToCart',
            'removeProductFromCart'
        ]),
        ...mapActions('products', [
            'toggleFavourite',
        ])
    }
}
</script>

<style scoped>
img {
    width: 100%;
}

.product {
    width: 100%;
    padding: 10px;
}

@media screen and (min-width: 630px) {
    .product {
        width: 50%;
    }
}

@media screen and (min-width: 940px) {
    .product {
        width: 25%;
    }
}

.image-container {
    position: relative;
    color: white;
}

.product-name {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    padding: 10px;
}

.product-bookmark {
    width: 0;
    height: 45px;
    background-color: transparent;
    position: absolute;
    top: -5px;
    right: 10px;
    border: solid 15px #ea7317;
    border-bottom: solid 15px transparent;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    transition: all 0.2s;
    cursor: pointer;
}

.product-bookmark.selected {
    border-color: #73bfb8;
    border-bottom-color: transparent;
}

.product-bookmark:hover {
    height: 65px;
}

.product-bookmark:active {
    border-color: #fec601;
    border-bottom-color: transparent;
}

.product-quantity {
    position: absolute;
    bottom: 6px;
    left: 0;
    background: rgb(0, 0, 0, 0.5);
    padding: 10px;
}

.product-price {
    position: absolute;
    right: 0;
    bottom: 6px;
    background: rgb(0, 0, 0, 0.5);
    padding: 10px;
}

.button-container {
    display: flex;
    justify-content: space-between;
}
</style>