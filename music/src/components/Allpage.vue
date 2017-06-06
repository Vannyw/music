<template>
	<div>
		<h1>
			<a onclick="javascript:history.back(-1)">&lt;</a>
			<span>全部歌手</span>
		</h1>
	</div>
</template>
<script>
	export default {
		name: 'allpage',
	}
</script>
<style scoped>
	div {
		background-color: #02c5de;
		padding: 1.3vh 0;
	}
	h1 {
		display: flex;
		width: 90%;
		margin: 0 auto;
	}
	h1 span {
		flex:2;
		font-size: 2.3rem;	
		color: #fff;	
	}
	h1 a {
		flex: 1.3;
		font-size: 6vw;	
		font-family: courier;
		color: #fff;	
	}
</style>
