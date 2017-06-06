<template>
	<div id="playermain">
		<div class="title">
			<h1>
				<p>播放列表</p>
			</h1>
		</div>
		<ul>
			<li v-for="song in $store.state.songList">
				<span>{{song.title}}</span>
				<span>- {{song.author}}</span>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: 'player-list'
	}
</script>
<style scoped>
	#playermain {
		width: 100%;
		height: 35rem;
		background-color: white;
		overflow: scroll;
	}
	#playermain.v-enter,#playermain.v-leave {
		height: 0;
		opacity:0;
	}
	.title {
		border-bottom: 1px solid #e6e6e6;
	}
	h1 {
		width: 90%;
		margin: 0 auto;
		padding: 0.7rem 0;
	}
	h1 p {
		text-align: center;
		flex:1.8;
		font-size: 5vw;
	}
	ul {
		border-bottom: 1px solid #e6e6e6;
	}
	li {
		width: 90%;
		display: flex;
		margin: 0 auto;
		padding: 0.7rem 0;
		text-align: center;
	}
	li span:nth-child(1) {
		flex:1;
		white-space: nowrap;
		overflow: hidden;
		text-overflow:ellipsis;
		font-size: 4.5vw;
	}
	li span:nth-child(2) {
		flex:1;
		color: #4c4c4c;
		font-size: 4vw;
		align-self:center;
	}
</style>
