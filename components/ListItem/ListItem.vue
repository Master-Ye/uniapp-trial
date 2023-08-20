<template>
	<view class="list-scroll-container">
		<scroll-view scroll-y="true" class="list-container">
			<view>
				<ListCard v-for="(item) in articleList" :item="item" key="item.id"
				></ListCard>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			articleList: {
				type: Array,
			
			},
		},
		name:"ListItem",
		data() {
			return {
				
		}
	}}
</script>

<style lang="scss">
.list-scroll-container{
	height:100%;
	.list-container{
		overflow:hidden;
		height:100%;
		box-sizing:border-box;
	}
}
</style>