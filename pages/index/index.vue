<template>
	<view>
		<view class="home-container">
			<NavBar></NavBar>

			<TabBar :labelList="labelList" :activeIndex="activeIndex" @changeIndex="changeIndex"></TabBar>
			<ArticlesList @changeIndex="changeIndex" class="list-container" :labelList="labelList" :activeIndex="activeIndex"></ArticlesList>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				labelList: [],
				activeIndex:0
			}
		},
		onLoad() {
			this.initLabelList()
		},
		methods: {
			initLabelList() {

				uniCloud.callFunction({
					name: "getlist",
					success: (res) => {
						console.log(res)
						this.labelList = res.result.data
					}
				})
			},
			changeIndex(index){
				this.activeIndex=index
				console.log(index)
				
				
				
				
				
				
				
			}
		}
	}
</script>

<style scoped lang="scss">
	

	page {
		display: flex;
		height: 100%;
	}

	.home-container {
		flex: 1;
		overflow: hidden;
		box-sizing: border-box;
		@include flex(flex-start, column);
		align-items: inherit;
		height: 100%;
	}

	.list-container {
		flex: 1;
		height: 100%;
		box-sizing: border-box;
	}
</style>