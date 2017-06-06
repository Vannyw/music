<template>
	<div class="search-bar">
		<router-link v-bind:to="'/search'">
			<input type="text" placeholder="搜索歌曲、歌手...">
		</router-link>
		<img src="../assets/image/search-btn.png">
	</div>
</template>
<script>
	export default {
		name: 'search-bar',
	}
</script>
<style scoped>
	.search-bar {
		text-align: center;
		margin-top: 1rem;
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
</style>
