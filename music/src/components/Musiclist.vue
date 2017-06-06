<template>
	<div>
		<header-bar></header-bar>
		<search-bar></search-bar>
		<musiclist-swiper></musiclist-swiper>
		<song-list></song-list>
	</div>
</template>
<script>
	import HeaderBar from './HeaderBar'
	import SearchBar from './SearchBar'
	import MusiclistSwiper from './MusiclistSwiper'
	import PlayerBar from './PlayerBar'
	import Songlist from './Songlist'
	export default {
		name: 'musiclist',
		components: {
			'header-bar': HeaderBar,
			'search-bar': SearchBar,
			'musiclist-swiper': MusiclistSwiper,
			'player-bar': PlayerBar,
			'song-list' : Songlist
		}
	}
</script>

