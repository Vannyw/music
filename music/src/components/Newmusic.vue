<template>
	<div id="new-music">
		<strong>新歌速递</strong>
		<ul>
			<li v-for="item in newlist" v-on:click.once="addSong(item)">
				<a href="javascript:void(0)">
					<img v-bind:src="item.albumpic_small">
					<p>{{ item.songname }}</p>
				</a>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: 'new-music',
		data: function() {
			return {
				newlist: []
			}
		},
		methods: {
			getNewlist: function() {
				this.$http.get("../static/json/newmusic.json").then(function(response) {

					this.newlist = response.body.showapi_res_body.pagebean.songlist.splice(3,3);
				})
			},
			addSong: function(item) {
				this.$store.commit("addSong",item);
				this.$store.state.json1 = "../static/json/newmusic.json";
			}
		},
		mounted: function() {
			this.getNewlist();
			
		}
	}
</script>
<style scoped>
	#new-music {
		margin-top: 2.5rem;
	}
	#new-music strong {
		font-size: 2rem;
		margin-left: 3%;
	}
	#new-music ul {
		display: flex;
	}
	#new-music ul li{
		flex: 1;
		white-space: nowrap;
		overflow: hidden;
		text-overflow:ellipsis;
	}
	#new-music ul li img {
		width: 100%;
	}
	#new-music ul li p {
		text-align: center;
		font-size: 1.7rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow:ellipsis;
	}
</style>
