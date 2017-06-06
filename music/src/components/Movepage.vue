<template>
	<div class="zong">
		<h1>
			<div>
				<a onclick="javascript:history.back(-1)" >&lt</a>
				<span>每日推荐</span>
			</div>
		</h1>
		<ul>
			<div class="img">
				<img v-bind:src="itmm.albumpic_small" v-for="itmm in imglist">
			</div>
			<div>
				<li v-for="item in all">
					<div class="movelist">
						<a href="javascript:void(0)"  v-on:click.once="addSong(item)">
							<span>{{ item.songname }}</span>
							<span>{{ item.singername }}</span>
						</a>
					</div>
				</li>
			</div>
		</ul>

		
		
	</div>
</template>
<script>
	export default {
		name: 'movepage',
		data:function() {
			return {
				all: [],
				toggle: false,
				imglist: []
			}
		},
		methods: {
			getall: function() {
				this.$http.get("../static/json/songlist.json").then(function(resourse) {
					this.all = resourse.body.showapi_res_body.pagebean.songlist
				})

			},
			getimglist: function() {
				this.$http.get("../static/json/songlist.json").then(function(resourse) {
					this.imglist = resourse.body.showapi_res_body.pagebean.songlist.splice(100,75)
				})
			},
			addSong: function(item) {
				this.$store.commit("addSong",item);
				this.$store.state.json1 = "../static/json/songlist.json";
			},
		},
		mounted: function() {
			this.getall()
			this.getimglist()
			
		}
	}
</script>
<style scoped>
	.zong {
		margin-bottom: 12rem;
	}
	h1 {
		font-size: 2.3rem;
		color: #fff;
		background-color: #02c5de;
		position: fixed;
		width: 100vw;
	}
	h1 div {
		width: 90%;
		padding: 0.7rem 0;
		margin: 0 auto;
		display: flex;
	}
	h1 span {
		flex:1.3;
	}
	h1 a {
		flex:0.8;
		color: #fff;
		font-family: courier;
	}
	ul {
		display: flex;
		width: 80%;
		margin: 0 auto;
		padding-top: 10vh;
	}
	ul>div:nth-child(1) {
		flex:1;
	}
	ul>div:nth-child(2) {
		flex:2;
		white-space: nowrap;
		overflow: hidden;
		text-overflow:ellipsis;
		margin-left: 2vw;
	}
	li a {
		display: flex;
	}
	li span {
		white-space: nowrap;
		overflow: hidden;
		text-overflow:ellipsis;
	}
	li span:nth-child(1) {
		font-size: 1.7rem;
		flex:2;
	}
	li span:nth-child(2) {
		font-size: 1.6rem;
		color: #929292;
		flex:1;
	}
	li:nth-of-type(4n) {
		margin-bottom: 1vh
	}
	
	
	
	
</style>