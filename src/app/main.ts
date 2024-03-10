import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './ui/App.vue'
import { HomePage } from '@/pages/home'
import { DetailsPage } from '@/pages/details'
import { MainLayout } from "../pages/mainLayout/index"
import "./style.css"
import { ListPage } from "@/pages/list"

const router = createRouter({
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "/list",
          component: ListPage,
        },
        {
          path: "/idiom/:part/:id/:title",
          props: true,
          component: DetailsPage,
        },
      ],
    },
  ],
  history: createWebHistory(),
})

const app = createApp(App)
app.use(router)
app.mount('#app')