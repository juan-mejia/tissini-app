<template>
  <div class="categories">
    <Navbar />
    <Sections :sections=sections />
    <Loading v-if="loading"/>
    <BottomNavbar />
  </div>
</template>
<script>
import axios from 'axios'
import Navbar from '../components/UI/Navbar.vue'
import BottomNavbar from '../components/UI/BottomNavbar.vue'
import Sections from '../components/Categories/Sections.vue'
import Loading from '../components/UI/Loading.vue'
export default {
  name: 'Categories',
  components: {
    Navbar,
    BottomNavbar,
    Sections,
    Loading
  },
  data(){
    return {
      sections: null,
      loading: true
    }
  },
  created(){
    this.$store.dispatch('setCategories');
  },
  mounted(){
    this.loading = false;
    axios.get('https://v3.tissini.app/api/v3/categories/sections')
      .then(response => {
        this.sections = response.data;
      })
  },
  methods: {
    
  }
}
</script>
<style>
.categories {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 180px 0;
  height: 100vh;
  width: 100vw;
  color: black;

}
</style>
