<template>
  <div class="catalog">
      <Navbar />
      <div class="container"> 
        <Loading v-if="loading" />
        <CatalogList v-if="!loading" :catalog="catalog"/>
      </div>
      <BottomNavbar />
  </div>
</template>

<script>
import Navbar from '../../components/UI/Navbar'
import BottomNavbar from '../../components/UI/BottomNavbar.vue'
import CatalogList from '../../components/Catalog/CatalogList.vue'
import Loading from '../../components/UI/Loading.vue'
export default {
    components: {
        Navbar,
        BottomNavbar,
        CatalogList,
        Loading
    },
    data(){
        return {
            loading: true
        }
    },
    created(){
       if(this.$store.state.categories.length <= 0){
           this.$store.dispatch('setCategories');
       }
    },
    mounted(){
        this.loading = false;
    },
    computed: {
        catalog: function() {
            return this.$store.state.categories;
        }
    }
}
</script>

<style>
.catalog {
    padding: 100px 0 120px 0;
    width: 100%;
}
.catalog .container {
    width: 100%;
}
</style>