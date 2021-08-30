<template>
  <div class="home">
      <div class="bg-img">
        <img src="/img/login-desktop.jpg" alt="">
      </div>
      <div class="container">
          <img src="/img/tissini-logo.png" alt="">
          <h3 class="home-text">Ingresa el número de teléfono de tu asesora independiente.</h3>
          <div class="group-input">
            <input class="home-input" type="number" placeholder=" " v-model="phone" @keyup.enter="login()">
            <label for="">Teléfono</label>
          </div>
          <p v-if="feedback" class="feedback">Este número no es valido o no está registrado.</p>
          <Loading v-if="loading" />
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import Loading from '../components/UI/Loading.vue'
export default {
  components: {
    Loading
  },
  name: 'Home',
  data(){
    return {
      phone: '',
      feedback: '',
      loading: false
    }
  },
  created(){
    if(this.$store.state.customer.id){
      this.$router.push('categorias');
    }
  },
  methods: {
    login(){
      this.loading = true;
      axios.post('https://v3.tissini.app/api/v3/login/client', {
        mobilephone: this.phone
      })
      .then(response => {
        if(response.status){
          this.phone = '';
          this.feedback = false;
          this.$store.dispatch('login', response.data.customer);
          if(this.$store.state.customer){
            this.$router.push('categorias');
          }
        }
        this.loading = false;
      })
      .catch(e => {
        this.feedback = true;
        console.log(e.message)
        this.loading = false;
      })
    }
  }
}
</script>
<style>
.home {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  height: 100vh;
}
.home .bg-img img {
  object-position: top;
}
.home .container {
  height: 500px;
  width: 80%;
  max-width: 500px;
}
.home .container img {
  height: auto;
  width: 90%;
  max-width: 200px;
}
.home .container .home-input {
  padding: 0;
  margin: 0;
  border: 0;
  outline: none;
  width: 90%;
  height: 2rem;
  border: 2px solid white;
  border-radius: 5px;
  background: transparent;
  color: white;
  padding-left: 10px;
  padding-top: 1rem;
  /* padding-bottom: 0.8rem; */
}
.home .group-input {
  position: relative;
}
.home .group-input label {
  position: absolute;
  left: 30px;
  bottom: 1rem;
  color: white;
  transition: all 0.3s;
}
.home .group-input input:focus ~ label {
  bottom: 1.8rem;
  font-size: 0.8rem;
  transition: all 0.3s;
}
.home .group-input input:not(:placeholder-shown) ~ label {
  bottom: 1.7rem;
  font-size: 0.8rem;
  transition: all 0.3s;
}
.home .container .home-input::placeholder {
  color: white;
}
.home .container .home-text {
  color: white;
}
.home .container .feedback {
  color: white;
}
</style>
