<script>
</script>

<template>
  <div class="all_aboutus">
    <p>O нас</p>
    <div class="content">
      <div class="text_plus_img">
        <h3>PIZZAIOLO - это больше, чем просто место, где можно
        вкусно<br> поесть. Это атмосфера тепла и уюта, где каждый
        гость<br> чувствует себя как дома.</h3>
        <img src="../assets/img/Pizza/atmosphere_place%201.png" alt="#" ></div>
      <div class="text_plus_img">
        <img src="../assets/img/Pizza/pizza_image_about.png" alt="#">
        <h3>Мы создали пространство, где можно<br> провести время с
        семьей и друзьями,<br> отметить важное событие или просто<br>
        насладиться вкусной пиццей в приятной <br>компании.</h3>
      </div>
      <div class="text_plus_img">
      <h3>Приходите к нам и почувствуйте себя<br> частью нашей
        большой семьи!</h3>
        <img src="../assets/img/Pizza/pizza_image_about_2.png" alt="#">
      </div>
    </div>
  </div>
</template>

<style>
.text_plus_img{
  display: flex;
  align-items: center;
  padding-top: 2%;
  display: flex;
}
.text_plus_img :last-child {
  padding-bottom: 2%;
}
.all_aboutus{
  margin-top: 3%;
  color: #FFFFFF;
  font-size: 96px;
  font-family: Roboto;
  width: 80%;
}
.content{
  border-radius: 10px;
  border: none;
  background: #FFFFFF;
  margin-bottom: 5%;
  margin-top: 3%;
  width: 100%;
}
.content h3{
  color: black;
  font-size:24px;
  margin-bottom: 5%;
  line-height:3em;
  margin-left: 3%;
}
.text_plus_img img{

}
</style>