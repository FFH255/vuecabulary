import { DetailsPage } from "@/pages/details"
import { DictionaryPage } from "@/pages/dictionary"
import { HomePage } from "@/pages/home"
import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import "./style.css"
import App from "./ui/App.vue"
import { AuthorsPage } from "@/pages/authors"

const router = createRouter({
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/dictionary",
      component: DictionaryPage,
    },
    {
      path: "/idiom/:part/:id/:title",
      props: true,
      component: DetailsPage,
    },
    {
      path: "/authors",
      component: AuthorsPage,
    },
  ],
  history: createWebHistory(),
})

const app = createApp(App)
app.use(router)
app.mount("#app")
