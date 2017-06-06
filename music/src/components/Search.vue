<template>
	<div>
		<header>
			<div>
				<a onclick="javascript:history.back(-1)" >&lt</a>
				<span>搜索</span>
			</div>
		</header>
		<div class="search-bar">
			<input type="text" placeholder="搜索歌曲、歌手..." value="" id="seek">
			<img src="../assets/image/search-btn.png" v-on:click="search()" id="button">
		</div>
		<div class="searchList">
            <ul>
                <li v-for='(value,key) in result' class="searchListstyle">
                    <span>{{ value.songname }}</span>
                    <span>{{ value.singername }}</span>
                </li>
            </ul>
        </div>
	</div>
</template>
<script>
	export default {
		name: 'search',
		data() {
            return {
                result: [],
                isLoading: false,
                paging: 1,
                pagenext: 2,
            }
        },
        methods: {
        	search: function() {
	            this.isLoading = true
	        this.$http.get(`https://route.showapi.com/213-1?keyword=${document.querySelector('#seek').value}&page=${this.paging}&showapi_appid=31967&showapi_timestamp=&showapi_sign=7c45d428c1024a5e88c3cbc78a506646`, )
	            .then(function(response) {
	                this.result = response.body.showapi_res_body.pagebean.contentlist
	                this.isLoading = false
	            })
	        },
        }
	} 
</script>
<style scoped>
	header {
		font-size: 2.3rem;
		color: #fff;
		background-color: #02c5de;
	}
	header div {
		width: 90%;
		padding: 0.7rem 0;
		margin: 0 auto;
		display: flex;
	}
	header a{
		flex:1;
		color: #fff;
		font-family: courier;
	}
	header span {
		flex:1.3;
	}
	.search-bar {
		text-align: center;
		margin-top: 2rem;
	}
	.search-bar input {
		width: 80%;
		height: 5vh;
		background-color: #cfcfcf;
		border-radius: 20px;
		border-color: #cfcfcf;
		text-indent: 1em;
		border-top: 1px;
		border-left: 1px;
	}
	.search-bar img {
		vertical-align: middle;
		cursor:pointer
	}
	.searchList {
		width: 80%;
		margin: 0 auto;
	}
	.searchList li {
		margin-top: 2vh;
		border-bottom: 1px solid #929292;
	}
	.searchList li span:nth-child(1) {
		font-size: 1.7rem;
	}
	.searchList li span:nth-child(2) {
		font-size: 1.5rem;
		display: block;
		margin-left: 2vw;
		color:cornflowerblue
	}
</style>
