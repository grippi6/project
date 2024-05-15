<script>

import {defineComponent} from "vue";
import MyPizza from "@/components/MyPizza.vue";
import SliderBlock from "@/components/SliderBlock.vue";

export default defineComponent({
  components: {MyPizza,SliderBlock},

})
</script>

<template>
  <SliderBlock></SliderBlock>
  <div class="main_pizza">
    <div class="pizza_title">Пицца</div>
    <div class="general_pizza">
      <MyPizza v-for="(itemPizza,index) in infoPizza" :key="index"
               :linkImagePizza="itemPizza.linkImagePizza"
               :title="itemPizza.title"
               :h3="itemPizza.h3"
               :price="itemPizza.price"
      ></MyPizza>

    </div>
  </div>
  <div class="main_drinks">
    <div class="pizza_title">Напитки</div>
    <div class="general_drinks">

      <MyPizza title="Evervess кола" h3="Evervess кола" price="150 ₽" image-url=""/>
      <MyPizza title="Frustyle лимон-лайм" h3="Frustyle лимон-лайм" price="115 ₽"/>
      <MyPizza title="Frustyle апельсин" h3="Frustyle лимон-лайм" price="150 ₽"/>
      <MyPizza title="Adrenaline Rush" h3="Энергетический напиток Adrenaline Rush 0,25 л" price="150 ₽"/>
      <MyPizza title="Морс" h3="Морс смородина 0,45 л" price="115 ₽"/>
      <MyPizza title="Lipton ice tea" h3="Lipton ice tea в ассортименте 0,5 л" price="120 ₽"/>
    </div>
  </div>
</template>

<style scoped>
.main_pizza{
  margin-bottom: 90px;
}
.main_drinks{
  margin-bottom: 174px;
}
.general_pizza{
  display: grid;
  gap:40px;
  margin: 0 auto;
  width: 70%;
  grid-template-columns: repeat(3,1fr);
  grid-row-gap: 120px;


}
.general_drinks{
  display: grid;
  gap:40px;
  margin: 0 auto;
  width: 70%;
  grid-template-columns: repeat(3,1fr);
  grid-row-gap: 120px;
}
.pizza_title{
  font-size: 96px;
  color: #FFFFFF;
  font-family: "overdoze sans";
  margin-left: 15%;
  user-select: none;
  margin-bottom: 2%;
}
</style>