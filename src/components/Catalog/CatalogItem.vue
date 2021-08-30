<template>
    <div class="catalog-item" @click="goToProducts(item.id)">
        <div class="container">
            <div class="item-name"><b>{{item.name}}</b></div>
            <div class="item-img">
                <img :src="baseUrl+item.image" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['item'],
    data(){
        return {
            baseUrl: 'https://v3.tissini.app/'
        }
    },
    methods: {
        goToProducts(id){
            this.$router.push(`/catalogo/${id}`);
        }
    }
}
</script>

<style>
.catalog-item{
    position: relative;
    cursor: pointer;
    margin: 20px;
    height: 300px;
    overflow: hidden;
    border-radius: 15px;
    box-shadow: 1px 0px 8px rgba(0, 0, 0, 0.3);
}
.catalog-item .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}
.catalog-item .item-name {
    color: white;
    font-size: 1.5rem;
    width: 90%;
}
.catalog-item .item-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 1;
    overflow: hidden;
}
.catalog-item .item-img::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.8;
    background-color: var(--clr-pink);
    z-index: 1;
}
.catalog-item .item-img::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 90%;
    width: 90%;
    opacity: 1;
    border: 2px solid white;
    z-index: 2;
    border-radius: 15px;
}
.catalog-item .item-img img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: 0.3s all;
    z-index: -2;
}
.catalog-item:hover img {
    transform: scale(1.2);
    transition: 0.3s all;
}
</style>