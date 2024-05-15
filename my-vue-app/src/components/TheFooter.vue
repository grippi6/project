<script setup>
</script>
<template>
  <footer>
    <div id="nav">
    <p> <router-link class="test" to="/main">PIZZAIOLO</router-link></p>
    <h1><router-link class="nav_footer" to="/contacts">Контакты</router-link></h1>
    <h1><router-link class="nav_footer" to="/about">О нас</router-link></h1>
    <h1>+7 800 555 35 35</h1>
    <img src="../assets/img/Pizza/vk.png" alt="#">
    </div>
  </footer>
</template>
<style scoped>
footer{
  display: flex;
  background: #FFFFFF;
  height: 160px;
  align-items: center;
  justify-content: space-around;
}
.nav_footer{
  color: #198F30;
  font-size: 16px;
  font-family: Roboto;
}
.test{
  font-family: "overdoze sans";
  align-items: center;
  font-size: 96px;
  color: black;
}
#nav{
  width: 98%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#nav h1{
  white-space: nowrap;
}
p{
  font-family: "overdoze sans";
  font-size: 6em;
}
footer h1{
  color: #198F30;
  font-size: 16px;
  font-family: Roboto;
}
</style>