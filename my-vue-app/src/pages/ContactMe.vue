<script>
import MapOne from "@/components/MapOne.vue";
import MapTwo from "@/components/MapTwo.vue";
export default {
  components:{MapOne,MapTwo}
}
</script>

<template>
  <div class="filials">
    <p>Контакты</p>
    <div class="filials_one">
      <MapOne></MapOne>
      <div class="text">
        <div class="zagolovki">Наш адресс</div>
        <div class="op_text">Комсомольский проспект,13Б ,ТРЦ<br> «Изумрудный город»,2 этаж</div>
        <div class="zagolovki">Режим работы</div>
        <div class="op_text">пн-чт<br> c 9:00 до 22:00<br> пт-вс <br>с 9:00 до 22:00</div>
      </div>
  </div>
    <div class="filials_two">
      <MapTwo></MapTwo>
      <div class="text">
        <div class="zagolovki">Наш адресс</div>
        <div class="op_text">Томск, Тверская улица, 22</div>
        <div class="zagolovki">Режим работы</div>
        <div class="op_text">пн-чт<br> c 9:00 до 22:00<br> пт-вс <br>с 9:00 до 22:00</div>
      </div>
    </div>
  </div>
</template>

<style >
MapOne{
  width: 50%;
  border: none;
  border-radius:10px;
}
.filials{
  width: 80%;
  height: 100%;
  margin-top:5%;
  margin-bottom: 5%;
}
.text{
  margin-top: 10%;
  justify-content: space-between;
}
.zagolovki{
  color:#000000;
  font-family: Roboto;
  font-size: 2.5em;
}
.op_text{
  font-size: 1.5em;
  font-family: Roboto;
  color: #5B5B5B;
}
.filials p{
  color: #FFFFFF;
  font-size: 96px;
  font-family: Roboto;
}
.filials_one{
  border: none;
  border-radius: 10px;
  display: flex;
  background: #FFFFFF;
  margin-top: 3%;
  justify-content: space-between;
}
.filials_two{
  border: none;
  border-radius: 10px;
  display: flex;
  background: #FFFFFF;
  margin-top: 3%;
  width:100%;
}
</style>