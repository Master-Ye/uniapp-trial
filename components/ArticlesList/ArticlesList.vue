<template>
	<swiper >
		<swiper-item v-for="(item,index) in labelList" :key="index">
			<view class="swiper-item">
				{{item.name}}
			</view>
		</swiper-item>
		
	</swiper>
</template>

<script>
	export default{
		name:"ArticleList",
		props:{
			labelList:Array
		}
	}
</script>

<style>
</style>