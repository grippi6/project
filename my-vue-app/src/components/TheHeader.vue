<script setup>

</script>

<template>
<div class="all_header">
 <div id="nav">
   <p> <router-link class="test" to="/main">PIZZAIOLO</router-link></p>
    <h1><router-link class="nav" to="/contacts">Контакты</router-link></h1>
    <h1><router-link class="nav" to="/about">О нас</router-link></h1>
   <img src="../assets/img/Pizza/lk.png">
   <button>Корзина</button>
   <h4>+7 3822 990 255</h4>
  </div>
</div>
</template>
<style scoped>
.all_header{
  width: 100%;
  background: #FFFFFF;
}
.test{
  font-family: "overdoze sans";
  align-items: center;
  font-size: 96px;
  color: black;
}
.test:hover{
  color: #FF991F;
  transition: 0.9s ease-in-out;
}
#nav{
  width: 100%;
  display: flex;
  height: 126px;
  background: #FFFFFF;
  align-items: center;
  justify-content: space-between;
}
.nav{
  white-space: nowrap;
  color: #333333;
  font-size: 24px;
  font-family:Roboto;
}
.nav:hover{
  color: #FF991F;
  transition: 0.5s ease-in-out;
}
#nav p{
  text-decoration: none;
}
#nav h4{
  font-size: 24px;
  font-family: "overdoze sans";
}
#nav button{
  width: 153px;
  height: 48px;
  border-radius:10px;
  border: none;
  background: #FF991F;
  color: #FFFFFF;
  font-size: 16px;
}
</style>