<template>
  <nav id="button-nav">
      <div class="container">
        <div class="navbar-actions">
            <router-link to="/categorias" class="action">
              <home-icon />
              <p>Categorias</p>
            </router-link>
            <router-link to="/catalogo" class="action">
              <badge-icon />
              <p>Catálogo</p>
            </router-link>
            <router-link to="/" class="action">
              <cart-icon />
              <p>Carrito</p>
            </router-link>
        </div>
      </div>
  </nav>
</template>

<script>
import HomeIcon from 'vue-material-design-icons/HomeOutline'
import BadgeIcon from 'vue-material-design-icons/BadgeAccountOutline'
import CartIcon from 'vue-material-design-icons/CartOutline'
export default {
  components: {
    HomeIcon,
    BadgeIcon,
    CartIcon
  }
}
</script>

<style>
#button-nav {
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    width: 100vw;
    background: #f5f5f5;
    box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.3);
}
#button-nav .container {
  max-width: 550px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 3vw;
}
#button-nav .navbar-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
}
#button-nav .navbar-actions .action {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  flex-grow: 1;
  height: 100%;
}
#button-nav .navbar-actions .action:hover {
  background-color: rgb(237,237,237);
}
#button-nav .navbar-actions .action p {
  font-size: 1rem;;
  text-decoration: none;
  color: var(--clr-lightgray);
  margin: 0;
}
#button-nav .navbar-actions .router-link-exact-active p {
  color: var(--clr-pink);
}
#button-nav .navbar-actions .action svg {
  transform: scale(1.1);
  color: var(--clr-lightgray);
  margin: 0;
}
#button-nav .navbar-actions .router-link-exact-active svg {
  color: var(--clr-pink);
}
</style>