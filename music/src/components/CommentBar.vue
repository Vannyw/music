<template>
	<div id="commend" class="clearfix">
		<div class="clearfix">
			<strong>每日推荐</strong>
			<router-link :to="'/movepage'" class="move">更多..</router-link>
		</div>
		<div class="commend-list">
			<img v-bind:src="commendlist[2*n - 1].albumpic_small" v-for="n in parseInt(commendlist.length / 2)">
			<ul>
				<li v-for="item in commendlist">
					<a href="javascript:void(0)" v-on:click.once="addSong(item)">
						<span>{{ item.songname }}</span>
						<span>{{ item.singername }}</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'commend-bar',
		data: function() {
			return {
				commendlist: [],
			}
		},
		methods: {
			getcommendlist: function() {
				this.$http.get("../static/json/commentbar.json").then(function(response) {
					this.commendlist = response.body.showapi_res_body.pagebean.songlist.splice(5,3);
					console.log(this.commendlist[0].songname)
				})
			},
			addSong: function(item) {
				this.$store.commit("addSong",item);
				this.$store.state.json1 = "../static/json/commentbar.json";
			}
		},
		mounted: function() {
			this.getcommendlist();
		}
	}
</script>
<style scoped>
	#commend {
		margin: 3.5rem 3% 12rem;
	}
	#commend strong {
		font-size: 2rem;
	}
	#commend .move {
		font-size: 2rem;
		float: right;
	}
	#commend .commend-list {
		display: flex;
	}
	#commend .commend-list img {
		flex:1;
		width: 100%;
	}
	#commend .commend-list ul {
		flex:2;
		margin-left: 5%;
		display: flex;
		flex-direction:column;
		justify-content:space-around;

	}
	.commend-list ul a {
		display: flex;
		flex:1;

	}
	.commend-list ul a span {
		flex:1;
		font-size: 1.7rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow:ellipsis;
	}
	.commend-list ul a span:nth-child(2) {
		color: rgba(0,0,0,0.5);
	}
</style>
