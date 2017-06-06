<template>
	<swiper :options="swiperOption">
	    <swiper-slide v-for="(slide,index) in swiperSlides">
	      <img v-bind:src="slide">
	    </swiper-slide>
	    <div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>
<script>
	export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          autoplay: 5000,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
       	  onSlideChangeEnd: swiper => {    
                this.page = swiper.realIndex+1;  
                this.index = swiper.realIndex;  
            },  
        },
        swiperSlides: [require("../assets/image/4.jpg"),require("../assets/image/5.jpg"),require("../assets/image/6.jpg"),require("../assets/image/7.jpg")]
      }
    },
    mounted() {

    }
  }
</script>
<style scoped>
  img {
    width: 100%;
    margin-top: 0.6rem;
  }
</style>