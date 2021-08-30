<template>
  <div id="nav">
      <div class="container">
        <div class="navbar-brand">
          <p>{{storeName}}</p>
        </div>
        <div class="navbar-actions">
            <a href="tel:786-547-0213">
              <phone-icon />
            </a>
            <a @click="logout">
              <logout-icon />
            </a>
        </div>
      </div>
  </div>
</template>

<script>
import PhoneIcon from 'vue-material-design-icons/Phone'
import LogoutIcon from 'vue-material-design-icons/LogoutVariant'
export default {
  components: {
    PhoneIcon,
    LogoutIcon
  },
  methods: {
    logout(){
      this.$store.dispatch('logout');
      this.$router.push('/');
    }
  },
  computed: {
    storeName: function(){
      return this.$store.state.customer.store_name
    }
  }
}
</script>

<style>
#nav {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100vw;
  background: #f5f5f5;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.3);
  z-index: 100;
}
#nav .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 3vw;
}
#nav .navbar-brand p{
  margin: 5px;
  font-size: 1.3rem;
  color: var(--clr-pink);
}
#nav .navbar-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav a {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  height: 30px;
  width: 30px;
  padding: 5px;
  margin: 0 5px;
  border-radius: 50px;
}
#nav a:hover {
  background-color: rgb(244,224,230);
  transition: all 0.3s;
}
#nav a span {
  height: 24px;
}
#nav a svg path {
  fill: var(--clr-pink);
}
</style>