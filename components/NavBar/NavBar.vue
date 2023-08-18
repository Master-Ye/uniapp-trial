<template>
	<view class="nav-bar">
		<view class="nav-bar-top">
			<view :style="{height:statusHeight+'rpx'} "></view>
			<view @click="goSearch()" class="nav-bar-content" :style="{marginRight:marginRight+'rpx'}">
				<uni-icons type="search" color="#999"></uni-icons>
				<view class="nav-bar-search-txt">输入内容进行搜索</view>
			</view>
			
		</view>
		<view :style="{height:statusHeight+85+'rpx'}"></view>
	</view>
</template>

<script>
	export default {
		name: "NavBar",
		created() {
			this.getSystemInfo()
		},
		data() {

			return {
				statusHeight: 20,
				marginRight:0
			};
		},
		methods: {
			goSearch(){
				uni.navigateTo({
					url:"/pages/search/search"
				})
			},
			getSystemInfo() {
				const systemInfo = uni.getSystemInfoSync()
				systemInfo.statusBarHeight && (this.statusHeight = systemInfo.statusBarHeight * 2)
				console.log(systemInfo)
				//#ifdef MP-WEIXIN
				const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
				console.log(menuButtonInfo.top,menuButtonInfo.width)
				this.statusHeight = menuButtonInfo.top  * 2 + menuButtonInfo.width / 5
				this.marginRight= menuButtonInfo.width * 2 + menuButtonInfo.width / 2
				// #endif
			}
		}
	}
</script>

<style lang="scss">
	@import "./css/NavBar.scss"
</style>