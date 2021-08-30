<template>
  <div>
      <Navbar />
      <Loading v-if="loading" />
      <div v-if="!loading" class="catalog-products">
          <div class="container">
            <div class="products-list">
                <div v-for="product in products" :key="product.id" class="product">
                    <div v-if="product.images[0]" class="product-img">
                        <img :src="baseUrl+product.images[0].url" class="product-img" alt="">
                    </div>
                    <div v-else class="product-img">
                        <img :src="notFound" class="product-img" alt="">
                    </div>
                    <p class="product-name">{{product.name}}</p>
                    <p class="product-price">${{product.price}}</p>
                    <button class="add-button"><cart-icon/>Agregar</button>
                </div>
            </div>
        </div>
      </div>
      <BottomNavbar />
  </div>
</template>

<script>
import axios from 'axios'
import Navbar from '../../components/UI/Navbar'
import BottomNavbar from '../../components/UI/BottomNavbar.vue'
import CartIcon from 'vue-material-design-icons/CartPlus.vue'
import Loading from '../../components/UI/Loading.vue'
export default {
    components: {
        Navbar,
        BottomNavbar,
        CartIcon,
        Loading
    },
    data(){
        return {
            products: [],
            baseUrl: 'https://v3.tissini.app/',
            notFound: 'https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png',
            loading: true
        }
    },
    created(){
       if(this.$store.state.categories.length <= 0){
           this.$store.dispatch('setCategories');
       }
       axios.get(`https://v3.tissini.app/api/v3/categories/${this.$route.params.id}/products`)
            .then(response => {
                this.products = response.data.products;
                this.loading = false;
            })
    }
}
</script>

<style>
.catalog-products {
    padding: 100px 0 120px 0;
    width: 100%;
}
.catalog-products .container  {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
}
.catalog-products .container .products-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    justify-content: center;
    gap: 50px 50px;
    width: 100%;
}
.catalog-products .container .products-list .product {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 300px;
    box-shadow: 1px 0px 8px rgba(0,0,0,0.2);
    border-radius: 15px;
    overflow: hidden;
    padding: 0 0 20px 0;
}
.catalog-products .container .products-list .product .product-img {
    height: auto;
    width: 100%;
}
.catalog-products .container .products-list .product .product-name {
    margin-bottom: 5px;
}
.catalog-products .container .products-list .product .product-price {
    color: var(--clr-pink);
}
.catalog-products .container .products-list .product .add-button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: none;
    outline: none;
    background-color: var(--clr-pink);
    border-radius: 50px;
    padding: 5px 20px;
    width: 130px;
    color: white;
    font-weight: bold;
    box-shadow: 1px 0px 3px rgba(0,0,0,0.3);
}
</style>