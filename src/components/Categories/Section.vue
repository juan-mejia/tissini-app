<template>
  <div class="categories-section">
      <div class="container">
          <div class="section-img">
              <img :src="baseUrl+section.image" alt="">
          </div>
          <div class="section-products">
            <Carousel
                :navigationEnabled="true"
                paginationActiveColor="#f06292"
                paginationColor="#efefef"
                navigationPrevLabel="〈"
                navigationNextLabel="〉"
            >
                <Slide v-for="product in section.products" :key="product.id">
                    <div class="product" @click="goToProducts(product.category_id)">
                        <img :src="baseUrl+product.image.url" alt="" class="product-img">
                        <p class="product-name"><b>{{product.name}}</b></p>
                        <p class="product-categorie">{{product.categories.category.toUpperCase()}}</p>
                        <p class="product-price">${{product.price}}</p>
                    </div>
                </Slide>
            </Carousel>
          </div>
      </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    components: {
        Carousel,
        Slide
    },
    props: ['section'],
    mounted(){
    },
    data(){
        return {
            baseUrl: 'https://v3.tissini.app/'
        }
    },
    methods: {
        goToProducts(id) {
            this.$router.push(`/catalogo/${id}`);
        }
    }
}
</script>

<style>
.categories-section {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin: 30px 0;
}
.categories-section .container {
    width: 100%;
}
.categories-section .section-img {
    height: auto;
    width: 100%
}
.categories-section .section-img img {
    height: auto;
    width: 100%;
}
.categories-section .section-products {
    width: 100%;
}
.categories-section .section-products .product {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    text-align: left;
    height: auto;
    width: 300px;
}
.categories-section .section-products .product .product-img {
    height: auto;
    width: 100%;
}
.categories-section .section-products .product .product-name {
    margin-bottom: 0;
}
.categories-section .section-products .product .product-categorie {
    margin: 5px 0;
    color: var(--clr-lightgray)
}
.categories-section .section-products .product .product-price {
    margin-top: 3px;
    color: var(--clr-pink)
}
.categories-section .VueCarousel-navigation-next,
.categories-section .VueCarousel-navigation-prev {
    
    color: var(--clr-pink);
    font-size: 4rem;
}
.categories-section .VueCarousel-navigation-next:focus,
.categories-section .VueCarousel-navigation-prev:focus {
    outline: none;
    color: var(--clr-pink);
    font-size: 4rem;
}
</style>