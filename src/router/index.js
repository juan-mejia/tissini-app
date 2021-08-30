import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Categories from '../views/Categories.vue'
import Catalog from '../views/Catalog/Catalog.vue'
import Products from '../views/Catalog/Products.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/categorias',
    name: 'Categories',
    component: Categories,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/catalogo',
    name: 'Catalog',
    component: Catalog,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/catalogo/:id',
    name: 'Products',
    component: Products,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    if (store.state.customer.id || localStorage.getItem('customer')) {
      next();
    } else {
      next({ name: "Home" });
    }
  } else {
    next();
  }
})

export default router
