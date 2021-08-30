<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url('./assets/css/normalize.css');
:root {
  --clr-pink: #f06292;
  --clr-lightgray: rgba(0,0,0,.54);
}
html, body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.bg-img {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.bg-img img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
</style>
