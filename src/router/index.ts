import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/Dashboard.vue'
import UserList from '../views/UserList.vue'
import ActiveUsers from '@/views/ActiveUsers.vue'
import TotalDeposit from '@/views/TotalDeposit.vue'
import TotalWithdrawals from '@/views/TotalWithdrawals.vue'
import TotalBalance from '@/views/TotalBalance.vue'

import store from '../store'
import Laporan from '@/views/Laporan.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/deposit',
      name: 'deposit',
      component: () => import('../views/DepositView.vue')
    },
    {
      path: '/aktivitas',
      name: 'aktivitas',
      component: () => import('../views/ActivityView.vue')
      //  meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../auth/LoginPage.vue')
    },
    {
      path: '/daftar',
      name: 'daftar',
      component: () => import('../auth/RegisterPage.vue')
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/users',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/active-users',
      name: 'ActiveUsers',
      component: ActiveUsers
    },
    {
      path: '/total-deposits',
      name: 'TotalDeposit',
      component: TotalDeposit
    },
    {
      path: '/total-withdrawals',
      name: 'TotalWithdraw',
      component: TotalWithdrawals
    },
    {
      path: '/total-balance',
      name: 'Total-Balance',
      component: TotalBalance
    },
    {
      path: '/laporan',
      name: 'Laporan',
      component: Laporan
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.state.user !== null
  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router
