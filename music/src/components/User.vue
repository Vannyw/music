<template>
	<div>
		<header-bar></header-bar>
		<ul>
			<li v-for="(item,index) in userlist">
				<div class="li">
					<div>
						<span v-for="itemm in item.left">{{ itemm }}</span>
					</div>
					<span>&gt</span>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	import HeaderBar from './HeaderBar'
	export default {
		name: 'user',
		data: function() {
			return {
				userlist: [{
					left: ['登录帐号','登录后什么都不能做']
				},{
					left: ['我的歌单']
				},{
					left: ['我的收藏']
				},{
					left: ['设置']
				},{
					left: ['问题与建议']
				},{
					left: ['检测更新']
				},{
					left: ['关于']
				}]
			}
		},
		components: {
			'header-bar': HeaderBar
		}
	}
</script>
<style scoped>
	ul li:nth-child(2),ul li:nth-child(3) {
		background-color: #d9d9d9;
		width: 100%;
	}
	ul li:nth-child(2)>div {
		border-bottom: 1px solid #c3c3c3
	}
	ul .li {
		display: flex;
		font-size: 5vw;
		width: 90%;
		margin: 0 auto;
		padding: 1.5vh 0 1.5vh;
	}
	ul .li div,ul .li>span {
		flex:1;
		white-space: nowrap;
		overflow: hidden;
		text-overflow:ellipsis;
	}
	.li div span{
		display: block;
	}
	ul .li>span {
		text-align: right;
		font-family: courier;
		align-self:center;
	}

</style>
