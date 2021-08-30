<template>
  <section class="categories-sections">
      <div class="container">
          <Section v-for="(section,index) in sections" 
            :key="index" 
            :section=section />
      </div>
  </section>
</template>

<script>
import Section from '../Categories/Section.vue'
export default {
    components: {
        Section
    },
    props: ['sections'],
    data(){
        return {}
    }
}
</script>

<style>
.categories-sections {
    height: 500px;
    max-width: 600px;
    width: 80%;
}
</style>