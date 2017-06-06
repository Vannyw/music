<template>
  <div id="app">
  	<loading></loading>
   	<!--<transition>-->
   		 <router-view></router-view>
   	<!--</transition>-->
    <player-bar></player-bar>
  </div>
</template>

<script>
import PlayerBar from '@/components/PlayerBar'
import Loading from '@/components/Loading'
export default {
  name: 'app',
  components: {
  	'player-bar': PlayerBar,
  	'loading' : Loading
  },

}
</script>

<style>
	* {
		 -webkit-tap-highlight-color: transparent
	}
	body {
		background-color: #e6e6e6
	}
	@media only screen and (min-width: 864px) {
		body {
			width: 864px;
		}
	}
/*	/*
	.child-view {
	  position: absolute;
	  width:100%;
	  transition: all 0.5s cubic-bezier(.55,0,.1,1);
	}
	.slide-left-enter, .slide-right-leave-active {
	  opacity: 1;
	  -webkit-transform: translateX(50px);
	  transform: translateX(50px);
	}
	.slide-left-leave-active, .slide-right-enter {
	  opacity: 0;
	  -webkit-transform: translateX(-50px);
	  transform: translateX(-50px);
	}*/
</style>
