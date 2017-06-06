<template>
	<div id="playerbar">
		<div v-show="miniplay">
			<player-list v-show="!bol"></player-list>
			<p class="playitem" ref='playitem'>
				<span :style="{width:itemwidth+'px'}"></span>
			</p>
			<div id="player">
				<div v-for="(item,index) in $store.state.songList" v-if="$store.state.songList[index] == $store.state.songList[$store.state.songList.length-1]">
					<div class="playimg" v-on:touchstart="getbigplay()">
						<img v-bind:src="item.albumpic">
					</div>
					<div class="playname">
						<p>{{ item.title }}</p>
						<p>{{ item.author }}</p>
					</div>
					<div class="playlist" v-on:touchstart="btn()">
						<a href="javascript:void(0)">
							<p></p>
							<p></p>
							<p></p>
						</a>
					</div>
					<div class="playlistimg">
						<div v-show="play" class="psbtn" v-on:touchstart="playbtn()">
							<img src="../assets/image/playlist.png">
						</div>
						<div v-show="stop" class="psbtn" v-on:touchstart="playbtn()">
							<img src="../assets/image/playlist_1.png">
						</div>
					</div>
				</div>
			</div>
		</div>
		
		
		
		<!--play页面-->
		<div>
			<audio :src="$store.state.songList[$store.state.songList.length-1].inderlink" type="audio/mpeg" controls="controls" ref='div' autoplay @loadedmetadata="itembtn()">
			</audio>
		</div>
		
		<div class="zong" v-show="bigplay">
		
			<header>
				<span v-on:touchstart="getbigplay()">&lt</span>
				<p>{{ $store.state.songList[$store.state.songList.length-1].title }}</p>
				<div v-for="item in $store.state.songList">
					<a v-bind:href="item.down">
						<img src="../assets/image/down.png"/>
					</a>
				</div>
			</header>
			<div id="timg">
				<div>
					<img :src="$store.state.songList[$store.state.songList.length-1].albumpicbig"  />
				</div>
			</div>
			
			<div>
				<div class="new-audio">
					<div class="guage">
						<div>{{ cur }}</div>
						<div ref='guage'>
							<span :style="{left:radiusleft+'px'}"></span>
							<p class="strip" :style="{width:radiusleft+'px'}"></p>
						</div>
						<div>{{ dur }}</div>
					</div>
					<div class="btn">
						<div class="lastbtn" v-on:touchstart="lastbtn()">
							<img src="../assets/image/lastbtn.png">
						</div>
						<div v-if="play" class="psbtn" v-on:touchstart="playbtn()">
							<img src="../assets/image/playbtn.png">
						</div>
						<div v-if="stop" class="psbtn" v-on:touchstart="playbtn()">
							<img src="../assets/image/stopbtn.png">
						</div>
						<div class="nextbtn" v-on:touchstart="nextbtn()">
							<img src="../assets/image/nextbtn.png">
						</div>
					</div>
				</div>
			</div>
			
		</div>	
		
		
		
	</div>
</template>
<script>
	import PlayerList from './PlayerList'
	export default {
		name: 'player-bar',
		data:()=>{
			return {
				bol:'false',
				
				
//				play 页面
				songList:[],
				json1:"",
				index:0,
				musicurl: "",
				murl: "",
				itemwidth:0,
				radiusleft:0,
				play: true,
				stop: false,
				bigplay: false,
				miniplay: true,
				cur:"00:00",
				dur:"00:00"
			}
		},
		methods: {
			btn: function() {
				this.bol = !this.bol;
			},

			
			
//			play页面
			
			playbtn: function() {
				this.play = !this.play
				this.stop = !this.stop
				if (this.$refs.div.paused) {
					this.$refs.div.play()
				}else {
					this.$refs.div.pause()
				}
			},
			lastbtn: function() {
				this.$refs.div.currentTime -= 5 
			},
			nextbtn: function() {
				this.$refs.div.currentTime += 5
			},
			
			
			
			itembtn(){
				if(this.play === true) {
					this.$refs.div.pause()
				}
				
//				this.setintervar = 
				setInterval(()=>{
					this.itemwidth = this.$refs.playitem.offsetWidth*this.$refs.div.currentTime/this.$refs.div.duration;
					this.radiusleft = this.$refs.guage.offsetWidth*this.$refs.div.currentTime/this.$refs.div.duration;
//					播放用的时间
					if(parseInt(this.$refs.div.currentTime/60) < 10) {
						if(parseInt(this.$refs.div.currentTime%60) < 10) {
							this.cur = "0" + parseInt(this.$refs.div.currentTime/60) + ":0" + parseInt(this.$refs.div.currentTime%60)
						}else {
							this.cur = "0" + parseInt(this.$refs.div.currentTime/60) + ":" + parseInt(this.$refs.div.currentTime%60)
						}
					}else {
						if(parseInt(this.$refs.div.currentTime%60) < 10) {
							this.cur = "0" + parseInt(this.$refs.div.currentTime/60) + ":0" + parseInt(this.$refs.div.currentTime%60)
						}else {
							this.cur = "0" + parseInt(this.$refs.div.currentTime/60) + ":" + parseInt(this.$refs.div.currentTime%60)
						}
					}
//					播放剩余时间
					if((parseInt(this.$refs.div.duration/60) - parseInt(this.$refs.div.currentTime/60)) < 10) {
						if((parseInt(this.$refs.div.duration%60) - parseInt(this.$refs.div.currentTime%60)) < 10) {
							this.dur = "-0" + (parseInt(this.$refs.div.duration/60) - parseInt(this.$refs.div.currentTime/60)) + ":0" + (parseInt(this.$refs.div.duration%60) - parseInt(this.$refs.div.currentTime%60))
						}else {
							this.dur = "-0" + (parseInt(this.$refs.div.duration/60) - parseInt(this.$refs.div.currentTime/60)) + ":" + (parseInt(this.$refs.div.duration%60) - parseInt(this.$refs.div.currentTime%60))
						}
					}else {
						if((parseInt(this.$refs.div.duration%60) - parseInt(this.$refs.div.currentTime%60)) < 10) {
							this.dur = "-0" + (parseInt(this.$refs.div.duration/60) - parseInt(this.$refs.div.currentTime/60)) + ":0" + (parseInt(this.$refs.div.duration%60) - parseInt(this.$refs.div.currentTime%60))
						}else {
							this.dur = "0" + (parseInt(this.$refs.div.duration/60) - parseInt(this.$refs.div.currentTime/60)) + ":" + (parseInt(this.$refs.div.duration%60) - parseInt(this.$refs.div.currentTime%60))
						}
					}
					
					if(this.$refs.div.ended) {
						this.play = true
						this.stop = false
					}
					
//console.log(this.$refs.guage.getBoundingClientRect().width)
				},1000)
//				this.dur = parseInt(this.$refs.div.duration)
				
//				console.log(this.$refs.div.paused)
				
				
			},
			getbigplay: function() {
				this.bigplay=!this.bigplay;
				this.miniplay = !this.miniplay
			}
			
		}, 
		components: {
			'player-list':PlayerList
		},
		
		
//		play页面
			
			
//			this.guagexy = this.$refs.guage.getBoundingClientRect().left;
			// console.log(this.$refs.guage.getBoundingClientRect().left);
//			this.itemwidth =this.$refs.playitem.getBoundingClientRect().width;
//			console.log(this.itemwidth)
			
			
			
			
			
			
		


	}
</script>
<style scoped>
	@media only screen and (max-width: 863px) {
		#playerbar {
			position: fixed;
			width: 100%;
			bottom: 0;
			z-index: 1
		}
		
		.playitem {
			width: 100%;
			height: 0.5vh;
			background-color: rgba(255,255,255,0.3);
			position: relative;
		}
		.playitem span {
			background-color: #7e77df;
			height: 0.5vh;
			position: absolute;
			width: 0;
		}
		#player {
			background-color: rgba(255,255,255,0.5);
		}
		#player>div {
			width: 90%;
			margin: 0 auto;
			display: flex;
		}
		#player>div div {
			flex:1;
			align-self:center;
		}
		.playimg {
			text-align: center;
		}
		.playimg img{
			width: 15vw;
			border-radius: 50%;
		}
		.playname {
			white-space: nowrap;
			overflow: hidden;
			text-overflow:ellipsis;
			font-size: 1.6rem
		}
		.playname p:nth-child(2) {
			color: #888484;
			font-size: 1.5rem
		}
		
		.playlist p{
			width: 10vw;
			height: 1vh;
			border-radius: 1vh;
			margin: 0.4vh 0 0 12vw;
			background-color: #02c5de;
		}
		.playlistimg {
			text-align: center;
		}
		.playlistimg img {
			width: 15vw
		}
		
		
		
		
		
		/*Play 页面*/
		.zong {
			height: 100vh;
			background-image: radial-gradient(yellow 10%,pink 20%,white 80%);
		}
		header {
			width: 80%;
			display: flex;
			font-size: 2.1rem;
			padding-top: 1.5rem;
			padding-bottom: 5rem;
			margin: 0 auto;
		}
		header span {
			flex:1;
			font-family: courier;
			color:palevioletred;
			font-size: 2.3rem;
			padding: 1vh 0;
		}
		header p {
			flex:2;
			color: palevioletred;
			text-align: center;
			white-space: nowrap;
			overflow: hidden;
			text-overflow:ellipsis;
			padding: 1vh 0;
		}
		header div {
			flex:1;
			text-align: center;
			vertical-align: -webkit-baseline-middle;
		}

		#timg {
			width: 73vw;
			height: 73vw;
			background-image: url(../assets/image/timg.png) ;
			background-repeat: no-repeat;
			background-size: 100% 100%;
			margin: 0 auto;
			animation-iteration-count:infinite;
			animation-name:move;
			animation-duration:20s;
			animation-timing-function:linear;
			line-height: 73vh;
		}
		@keyframes move {
			0% {
				transform:rotate(0deg);
			}
			100% {
				transform:rotate(360deg);
			}
		}
		#timg div {
			
			text-align: center;
		}
		#timg div img {
			width: 45vw;
			border-radius: 50%;
			margin: 0 auto;
		}
		


		audio {
			display: none;
		}

		.guage {
			display: flex;
			width: 90vw;
			margin: 3rem auto;
		}
		.guage div {
			flex:1;
			text-align: center;
		}
		.guage div:nth-child(2) {
			flex:3;
			background-color: #d1ccd3;
			height: 0.5vh;
			align-self:center;
			position: relative;
		}
		.guage div:nth-child(2) span {
			position: absolute;
			left: 0;
			top: -0.8vh;
			width: 3.5vw;
			height: 2vh;
			background-color: white;
			border-radius: 2vh
		}
		.strip {
			position: absolute;
			height: 0.5vh;
			width: 0;
			background-color: lightpink;
		}

		.btn {
			display: flex;
			text-align: center;
		}
		.btn {
			display: flex
		}
		.btn > div {
			flex:1;
		}
		.lastbtn img,.nextbtn img {
			background-color: rgba(255,255,255,0.3);
			border-radius: 8vw;
			padding: 4vw
		}
		.lastbtn {
			text-align: right;
		}
		.nextbtn {
			text-align: left;
		}
		.psbtn img {
			background-color: rgba(255,255,255,0.3);
			border-radius: 20vw;
			padding: 2vw
		}
	}
	
	@media only screen and (min-width: 864px)  {
		#playerbar {
			width: 864px;
			position: fixed;
			bottom: 0;
			z-index: 1
		}
		.playitem {
			width: 100%;
			height: 0.5vh;
			background-color: rgba(255,255,255,0.5);
			position: relative;
		}
		.playitem span {
			background-color: #7e77df;
			height: 0.5vh;
			position: absolute;
			width: 0;
		}
		#player {
			background-color: rgba(255,255,255,0.95);
		}
		#player>div {
			width: 90%;
			margin: 0 auto;
			display: flex;
		}
		#player>div div {
			flex:1;
			align-self:center;
		}
		.playimg {
			text-align: center;
		}
		.playimg img{
			width: 55%;
			border-radius: 50%;
		}
		.playname {
			white-space: nowrap;
			overflow: hidden;
			text-overflow:ellipsis;
			font-size: 1.6rem;
		}
		.playname p:nth-child(2) {
			color: #888484;
			font-size: 1.5rem
		}
		.playlist p{
			width: 30%;
			height: 1vh;
			border-radius: 1vh;
			margin: 0.4vh 0 0 8vw;
			background-color: #02c5de;
		}
		.playlistimg {
			text-align: center;
		}
		.playlistimg img {
			width: 35%
		}
		.psbtn img {
			background-color: rgba(255,255,255,0.3);
			border-radius: 20vw;
			padding: 10%
		}
		.zong {
			width: 100%;
			background-image: radial-gradient(yellow 10%,pink 20%,white 80%);
		}
		header {
			width: 80%;
			display: flex;
			font-size: 2.1rem;
			padding-top: 1.5rem;
			padding-bottom: 2rem;
		}
		header span {
			flex:1;
			font-family: courier;
			text-align: center;
			color:palevioletred;
			font-size: 2.3rem;
			padding: 1vh 0;
		}
		header p {
			flex:2;
			color: palevioletred;
			text-align: center;
			white-space: nowrap;
			overflow: hidden;
			text-overflow:ellipsis;
			padding: 1vh 0;
		}
		#timg {
			width: 73%;
			height: 73%;
			background-image: url(../assets/image/timg.png) ;
			background-repeat: no-repeat;
			background-position: 50% 50%;
			background-size: 80% 90%;
			margin: 0 auto;
			animation-iteration-count:infinite;
			animation-name:move;
			animation-duration:20s;
			animation-timing-function:linear;
			
		}
		@keyframes move {
			0% {
				transform:rotate(0deg);
			}
			100% {
				transform:rotate(360deg);
			}
		}
		#timg div {
			margin: 0 auto;
			text-align: center;
			line-height: 60vh;
		}
		#timg div img {
			width: 45%;
			border-radius: 50%;
			vertical-align: middle;
		}
		audio {
			display: none;
		}
		.guage {
			display: flex;
			width: 90%;
			margin: 3rem auto;
			}
		.guage div {
			flex:1;
			text-align: center;
		}
		.guage div:nth-child(2) {
			flex:3;
			background-color: #d1ccd3;
			height: 0.5vh;
			align-self:center;
			position: relative;
		}
		.guage div:nth-child(2) span {
			position: absolute;
			left: 0;
			top: -0.8vh;
			width: 3.5vw;
			height: 2vh;
			background-color: white;
			border-radius: 2vh
		}
		.strip {
			position: absolute;
			height: 0.5vh;
			width: 0;
			background-color: lightpink;
		}

		.btn {
			display: flex;
			text-align: center;
		}
		.btn {
			display: flex
		}
		.btn > div {
			flex:1;
		}
		.lastbtn img,.nextbtn img {
			background-color: rgba(255,255,255,0.3);
			border-radius: 8vw;
			padding: 4vw
		}
		.lastbtn {
			text-align: right;
		}
		.nextbtn {
			text-align: left;
		}
	}
</style>
