<template>
	<view>
		<view class="container">
			<NavBar></NavBar>
			<TabBar :labelList="labelList"></TabBar>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
labelList:[]
			}
		},
		onLoad() {
			this.initLabelList()
		},
		methods: {
			initLabelList() {
				
				uniCloud.callFunction({
					name: "getlist",
					success:(res)=> {
						console.log(res)
						this.labelList=res.result.labelList
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		@include flex;
		color: $base-color
	}
</style>