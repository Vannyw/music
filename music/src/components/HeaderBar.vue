<template>
	<header>
		<ul>
			<li v-for="item in headerlist" v-bind:class="{active:$route.path===item.path}">
				<router-link v-bind:to="item.path">{{ item.text }}</router-link>
			</li>
		</ul>
	</header>
</template>
<script>
	export default {
		name: 'header-bar',
		data: function() {
			return {
				headerlist: [{
					text: '推荐',
					path: '/'
				},{
					text: '排行',
					path: '/compositor'
				},{
					text: '歌单',
					path: '/musiclist'
				},{
					text: '我的',
					path: '/user'
				}]
			}
		}
	}
</script>
<style scoped>
	header {
		text-align: center;
		font-size: 2.3rem;
		background-color: #02c5de;
	}
	header ul{
		display: flex;
		margin-bottom: 0.6rem;
		background-color: #02c5de;
	}
	header li {
		padding: 0.7rem 0;
		color: #7be9f7;
		flex:1;
	}
	header .active {
		background-color: #02c5de;
		
	}
	header .active a {
		color: #fff
	}
	a {
		color: #7be9f7
	}
</style>
