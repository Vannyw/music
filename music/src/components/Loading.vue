<template>
	<div class="mask" v-show="showFlag">
		<div class="loading">
		   <span></span>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	export default {
		name: 'loading',
		data: function() {
			return {
				showFlag: false
			}
		},
		created: function() {
			console.log("loading")
			Vue.http.interceptors.push((request, next) => {
				console.log("ajax success")
				this.showFlag = true;
			   next((response) => {
			   		this.showFlag = false;
			   });
			});
		}
	}
	
</script>

<style scoped>
	.mask {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
	}
	.loading{
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -75px;
        width: 150px;
        height: 4px;
        border-radius: 2px;
        background: lightgreen;
        -webkit-animation: changeBgColor 1.04s ease-in infinite alternate;
    }
    .loading span{
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: lightgreen;
        position: absolute;
        margin-top: -7px;
        margin-left:-8px;
        -webkit-animation: changePosition 1.04s ease-in infinite alternate;
    }
    @-webkit-keyframes changeBgColor{
        0%{
            background: lightgreen;
        }
        100%{
            background: lightblue;
        }
    }
    @-webkit-keyframes changePosition{
        0%{
            background: lightgreen;
        }
        100%{
            margin-left: 142px;
            background: lightblue;
        }
    }
</style>
