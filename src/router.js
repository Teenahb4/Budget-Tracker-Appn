import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './pages/Dashboard.vue'
import AddTransaction from './pages/AddTransaction.vue'
import History from './pages/History.vue'
import Analytics from './pages/Analytics.vue'

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/add', name: 'AddTransaction', component: AddTransaction },
  { path: '/history', name: 'History', component: History },
  { path: '/analytics', name: 'Analytics', component: Analytics }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
