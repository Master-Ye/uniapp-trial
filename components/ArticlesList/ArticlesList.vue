<template>
	<swiper :current="activeIndex" @change="changeIndex" class="swiper-container">
		<swiper-item v-for="(item,index) in labelList" :key="index">
			<view class="swiper-item">
				<ListItem :articleList="acticleList"></ListItem>
			</view>
		</swiper-item>
		
	</swiper>
</template>

<script>
	export default{
		data(){
			return {
				acticleList:[]
			}
		},
		created(){
			this.getArticleList()
		},
		name:"ArticleList",
		props:{
			labelList:Array,
			activeIndex:Number,
			
		},
		methods:{
			changeIndex(e){
				const index= e.detail.current
				this.$emit("changeIndex",index)
				console.log(index)
			},
		 getArticleList(){
				uniCloud.callFunction({
					name: "get_arctileList",
					success: (res) => {
						console.log(res)
						this.acticleList=res.result.data
						console.log(this.acticleList)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.swiper-container{
		height: 100%;
		.swiper-item{
			height: 100%;
			overflow: hidden;
		}
	}
</style>