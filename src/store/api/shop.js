import axios from 'axios';

export default {
    getProducts (cb) {
        axios.get('https://random-data-api.com/api/food/random_food?size=30')
            .then(response => cb(response.data))
    },

    buyProducts (products, cb, errorCb) {
        setTimeout(() => {
            // simulate random checkout failure.
            (Math.random() > 0.5 || navigator.webdriver)
                ? cb()
                : errorCb()
        }, 100)
    }
}