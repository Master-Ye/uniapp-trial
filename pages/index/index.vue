<template>
	<view>
		<view class="home-container">
			<NavBar></NavBar>

			<TabBar :labelList="labelList"></TabBar>
			<ArticlesList class="list-container" :labelList="labelList"></ArticlesList>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				labelList: []
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