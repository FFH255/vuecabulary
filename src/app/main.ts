import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './ui/App.vue'
import { HomePage } from '@/pages/home'
import { DetailsPage } from '@/pages/details'
import './style.css'

const router = createRouter({
  routes: [{
    path: '/',
    component: HomePage
  }, {
    path: '/idiom/:part/:id',
    props: true,
    component: DetailsPage
  }],
  history: createWebHistory()
})

const app = createApp(App)
app.use(router)
app.mount('#app')