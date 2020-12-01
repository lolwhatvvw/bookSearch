import VueRouter from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import BookPage from '../pages/BookPage.vue'

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'main',
            component: MainPage,
            props: true,
        },
        {
            path: '/book',
            name: 'book',
            props: true,
            component: BookPage
        }
    ]
})
