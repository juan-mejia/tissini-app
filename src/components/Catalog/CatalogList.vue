<template>
  <div class="catalog-list">
      <CatalogItem v-for="item in catalog" :key="item.id" :item="item" />
  </div>
</template>

<script>
import CatalogItem from '../Catalog/CatalogItem.vue'
export default {
    props: ['catalog'],
    components: {
        CatalogItem
    },
    mounted(){
    }
}
</script>

<style>
.catalog-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%
}
</style>