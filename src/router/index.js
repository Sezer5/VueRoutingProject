import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import StudentsView from '../views/StudentsView.vue'
import StudentDetail from '../views/StudentDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/students',
    name: 'students',
    component: StudentsView
  },
  {
    path: '/students/:id',
    name: 'StudentsDetail',
    component: StudentDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
