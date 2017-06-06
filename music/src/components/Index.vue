<template>
	<div class="zong">
		<header-bar></header-bar>
		<swiper-bar></swiper-bar>
		<search-bar></search-bar>
		<div id="all">
			<router-link :to="'/allpage'">全部歌手</router-link>
			<router-link :to="'/sortpage'">歌曲分类</router-link>
		</div>
		<new-music></new-music>
		<comment-bar></comment-bar>
	</div>
	
</template>
<script>
	import HeaderBar from './HeaderBar'
	import SwiperBar from './SwiperBar'
	import SearchBar from './SearchBar'
	import NewMusic from './NewMusic'
	import CommentBar from './CommentBar'
	export default {
		name: 'index',
		components: {
			'header-bar': HeaderBar,
			'swiper-bar': SwiperBar,
			'search-bar': SearchBar,
			'new-music' : NewMusic,
			'comment-bar': CommentBar,
		}
	}
</script>
<style scoped>
	#all {
		display: flex;
		text-align: center;
		background-color: #e1e1e1;
		margin-top: 1.5rem;
	}
	#all a {
		flex:1;
		font-size: 2rem;
		margin: 0.7rem 0;
		color: #323232
	}
	#all span:first-child {
		border-right: 1px solid #cccccc
	}
	
	

</style>
  