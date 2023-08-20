<template>
	<view class="tab" >
		
		<!--滚动区域 -->
		<scroll-view scroll-x="true" class="tab-scroll" :scroll-into-view="currentIndex" :scroll-with-animation="true">
			<view class="tab-scroll-box">
				<view class="tab-scroll-item" :id="`item${index}`" @click="changeIndex(index)" v-for="(item,index) in labelList" :class="{active:index === activeIndex}" :key="index">
					{{item.name}}
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
			labelList:Array,
			activeIndex:Number
		},
		watch:{
			activeIndex(index){
				this.currentIndex=`item${index}`
			}
		},
		data(){
			return {
				currentIndex:`item0`
			}
		},
		methods:{
			changeIndex(index){
			
			this.$emit("changeIndex",index)
			}
		}
	}
</script>

<style lang="scss">
	@import "./TabBar.scss"
</style>