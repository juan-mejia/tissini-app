import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    customer: {},
    categories: []
  },
  mutations: {
    setData(state, data){
      state.customer = data.customer;
      state.categories = data.categories;
    },
    setCustomer(state, customer){
      state.customer = customer
    },
    setCategories(state, categories){
      state.categories = categories
    },
    removeData(state){
      state.categories = []
      state.customer = {}
    }
  },
  actions: {
    login(context, customer){
      if(localStorage.getItem('customer')){
        context.dispatch('setCustomer');
      } else {
        context.dispatch('setCustomer', customer)
      }
    },
    logout(context, data){
      context.commit('removeData');
      localStorage.removeItem('customer');
      localStorage.removeItem('categories');
    },
    setCustomer(context, customer){
      if(localStorage.getItem('customer')){
          context.commit('setCustomer', JSON.parse(localStorage.getItem('customer')));
      } else if(customer) {
        context.commit('setCustomer', customer);
        localStorage.setItem('customer', JSON.stringify(customer))
      }
    },
    setCategories(context){
      if(localStorage.getItem('categories')){
          context.commit('setCategories', JSON.parse(localStorage.getItem('categories'))); 
      } else {
        axios.get('https://v3.tissini.app/api/v3/categories')
          .then(response => {
            context.commit('setCategories', response.data);
            localStorage.setItem('categories', JSON.stringify(response.data))
          })
      }
    },
    getCustomer: state => {
      return state.customer
    },
    getCategories: state => {
      return state.categories
    }
  },
  modules: {
  }
})
