<template>
	<div class="song-list">
		<strong>全部歌单</strong>
		<ul>
			<li v-for="item in songlist">
				<a v-on:click.once="addSong(item)">
					<img v-bind:src="item.albumpic_small">
					<span>{{ item.songname }}</span>
				</a>	
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: 'song-list',
		data: function() {
			return {
				songlist: []
			}
		},
		methods: {
			getsonglist: function() {
				this.$http.get("../static/json/songlist.json").then(function(response) {
					this.songlist = response.body.showapi_res_body.pagebean.songlist.splice(1,299)
				})
			},
			addSong: function(item) {
				this.$store.commit("addSong",item);
				this.$store.state.json1 = "../static/json/songlist.json";
				
			}
		},
		mounted: function() {
			this.getsonglist()
			
		}
	}
</script>
<style scoped>
	.song-list {
		margin-top: 1.3rem;
		margin-bottom: 12rem;
	}
	.song-list strong {
		font-size: 2rem;
	}
	.song-list ul li{
		display: flex;
		text-align: center;
	}
	.song-list ul li a {
		flex:1;
		white-space: nowrap;
		overflow: hidden;
		text-overflow:ellipsis;
	}
	.song-list ul li a img {
		width: 100%;
		display: block;
	}
	.song-list ul li a span {
		font-size: 1.7rem;
	}
	.song-list ul {
		display: flex;
		flex-wrap:wrap;
	}
	.song-list li {
		flex: 0 1 50%;
		margin-bottom: 1vh;
	}
	.song-list li a {
		display: flex;
		flex-direction:column;
	}
	.song-list li a img {
		width: 100%
	}
	.song-list li a span {
		font-size: 1.7rem
	}
</style>
