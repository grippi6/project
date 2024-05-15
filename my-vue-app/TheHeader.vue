<script setup>

</script>

<template>
 <div id="nav">
  <router-link to="/main">Параша</router-link>
  <router-link to="/about">.!.</router-link>
  <router-link to="/contacts">.!.</router-link>
</div>
</template>

<style scoped>
header{
  width: 100%;
  display: flex;
  background: #FFFFFF;
  height: 125px;
  align-items: center;
  justify-content: space-around;
}
.logo{
  font-family: "overdoze sans";
  color: #000000;
  font-size: 96px;
  user-select: none;
}
header h1{
  color: #000000;
  font-size: 18px;
  font-family: "overdoze sans";
  transition: color;
  transition-duration: 0.5s;
}

header h1:hover{
  color: #FF991F;
}
header p{
  color: #000000;
  font-family:Roboto;
  font-size: 24px;
  transition: color;
  transition-duration: 0.3s;
}
header p:hover{
  color: #FF991F;
}
header button:hover{
   background-color: green;
  color: #FF991F;
}
header button{
  font-family: Roboto;
  font-size: 16px;
  border-radius:10px;
  border: none;
  color: aliceblue;
  width: 153px;
  height: 48px;
  background: #FF991F;
  transition: color,background-color;
  transition-duration: 1s;
}
</style>