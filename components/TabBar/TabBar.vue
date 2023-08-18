<template>
	<view class="tab">
		<!--滚动区域 -->
		<scroll-view scroll-x="true" class="tab-scroll">
			<view class="tab-scroll-box">
				<view class="tab-scroll-item" v-for="(item,index) in labelList" :key="index">
					{{item}}
				</view>
			</view>
		</scroll-view>
		<view class="tab-icon">
			<uni-icons type="gear" size="26" color="666"> </uni-icons>
			</view>
	</view>
</template>

<script>
	export default{
		name:"TabBar",
		props:{
			labelList:Array
		}
	}
</script>

<style>
	@import "./TabBar.scss"
</style>