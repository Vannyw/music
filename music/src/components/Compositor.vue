<template>
	<div class="zong">
		<header-bar></header-bar>
		<search-bar></search-bar>
		<div id="peakedness">
			<p>巅峰榜</p>
			<ul>
				<div>
					<img v-bind:src="itmm.albumpic_small" v-for="itmm in imglist">
				</div>
				<div>
					<li v-for="item in compositorlist">
						<div>
							<a href="javascript:void(0)" v-on:click="addSong(item)">
								<span>{{ item.songname }}</span>
								<span>{{ item.singername }}</span>
							</a>
							
						</div>
					</li>
				</div>
				
			</ul>
		</div>
	</div>
</template>
<script>
	import HeaderBar from './HeaderBar'
	import SearchBar from './SearchBar'
	export default {
		name: 'compositor',
		data: function() {
			return {
				compositorlist: [],
				imglist: []
			}
		},
		components: {
			'header-bar': HeaderBar,
			'search-bar': SearchBar
		},
		methods: {
			getimglist: function() {
				this.$http.get("../static/json/compositor.json").then(function(response) {
					this.imglist = response.body.showapi_res_body.pagebean.songlist.splice(5,30)
				})
			},
			getcomponsitorlist: function() {
				this.$http.get("../static/json/compositor.json").then(function(response) {
					this.compositorlist = response.body.showapi_res_body.pagebean.songlist.splice(50,99);
				})
			},
			addSong: function(item) {
				this.$store.commit("addSong",item);
				this.$store.state.json1 = "../static/json/compositor.json";
			}
		},
		mounted: function() {
			this.getimglist()
			this.getcomponsitorlist();

			
		}
	}
</script>
<style scoped>
	.zong {
		margin-bottom: 12rem;
	}
	#peakedness {
		width: 90%;
		margin:0 auto;
		white-space: nowrap;
		overflow: hidden;
		text-overflow:ellipsis;
	}
	#peakedness p {
		margin: 2vh 0 1vh;
		font-size: 2rem;
		font-weight: bolder;
	}
	
	
	#peakedness ul {
		display: flex;
	}
	#peakedness	ul>div {
		flex: 1;
	}
	
	
	#peakedness ul li{
		flex: 1;
		display: flex;
	}
	#peakedness img {
		flex:1;
		margin-bottom: 2vh;
		width: 80%;
	}
	#peakedness div {
		/*margin-left: 3%;*/
		display: flex;
		flex:2;
		flex-direction:column;
		width: 48%
	}
	#peakedness div a {
		display: flex;
		flex:1;
		width: 100%
	}
	#peakedness div a span {
		flex:1;
		white-space: nowrap;
		overflow: hidden;
		text-overflow:ellipsis;
	}
	#peakedness div a span:nth-child(1) {
		font-size: 1.7rem;
	}
	#peakedness div a span:nth-child(2) {
		margin-left: 1rem;
		color: rgba(0,0,0,0.5);
		font-size: 1.7rem;
	}
</style>
