<script>
export default {
  props: {
      linkImagePizza:String,
      title:String,
      h3:String,
      price:Number
  }
}
</script>
<template>
  <div class="pizza">
    <img :src="linkImagePizza" alt="Pizza Image" />
    <h2>{{ title }}</h2>
    <h3>{{ h3 }}</h3>
    <button>Корзина</button>
    <a>{{ price }} ₽</a>
  </div>
</template>
<style>
 body{
   background:#229821;
 }
 .pizza{
   width: 400px;
   height: 640px;
   background: aliceblue;
   border-radius:10px;
 }
 .pizza button{
   border-radius:10px;
   border: none;
   color: aliceblue;
   width: 153px;
   height: 48px;
   background: #FF991F;
   margin-top: 95px;
   margin-left: 25px;
 }
 h2{
   font-family: "overdoze sans";
   color: #333333;
   font-size: 40px;
   margin-left: 25px;
 }
 h3{
   color: #333333;
   font-size: 16px;
   margin-left: 25px;
 }
 a{
   margin-top: 95px;
   font-family: Roboto;
   color: #333333;
   font-size: 24px;
   margin-left: 19%;
 }
</style>