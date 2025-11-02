import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import StudentsView from '../views/StudentsView.vue'
import StudentDetail from '../views/StudentDetail.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/students',
    name: 'students',
    component: StudentsView
  },
  {
    path: '/students/:id',
    name: 'StudentDetail',
    component: StudentDetail,
    props:true
  },
  {
    path: '/studentsList',
    redirect: '/students',
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
