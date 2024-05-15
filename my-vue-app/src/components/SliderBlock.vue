<script >
export default {
  data() {
    return {
      index: 0,
      interval: null,
      LinkPhotoBackground:'img/Pizza/olive.png',
      LinkItems: [
        'img/Pizza/pizza-slide.png',
        'img/Pizza/peperonni_1.png',
        'img/Pizza/olive.png',
      ],
    };
  },
  computed: {
    currentImage() {
      return require(this.images[this.index]);
    }
  },
  created() {
    this.startSlider();
  },

  methods: {
    startSlider() {
      this.interval = setInterval(this.slideRight, 4000);
    },

    slideRight() {
      this.index++;
      if (this.index >= this.LinkItems.length) {
        this.index = 0;
      }
      this.LinkPhotoBackground = require('@/assets/' + this.LinkItems[this.index]);
    },
    slideLeft() {
      this.index--;
      if (this.index < 0) {
        this.index = this.LinkItems.length - 1;
      }
      this.LinkPhotoBackground = require('@/assets/' + this.LinkItems[this.index]);
    },
  },
};
</script>

<template>
<div class="container-Slider-Block" >
  <button @click="slideLeft" ref="rowLeft"><img src="../assets/img/Pizza/Background+Shadow%20(1).png" alt="rowLeft" ></button>
   <img :src='LinkPhotoBackground' alt="#">
  <button @click="slideRight" ref="rowRight"><img src="../assets/img/Pizza/Background+Shadow.png" alt="rowRight"></button>
</div>
</template>

<style scoped>

.container-Slider-Block{
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5em;
  margin-bottom: 3em;
  border-radius: 10px;
  transition: 1s ease-in-out;
}

.container-Slider-Block img {
  border-radius: 10px;
  display: flex;
  width: 90%;
}

.container-Slider-Block p {
  margin-right: 35em;
  margin-left: 35em;
}

.container-Slider-Block button {
  background: none;
  border: none;
  cursor: grabbing;
}


</style>