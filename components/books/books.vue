<template>
	<view class="business-warp">
		<view class="title">
			<text class="title_tip">{{ title }}</text>
			<view class="right-more" v-if="more" @click="triggerMore">
				<text class="title_more">更多</text>
				<u-icon name="arrow-right" size="22" color="#ccc"></u-icon>
			</view>
		</view>
		<u-divider half-width="100%" border-color="#6d6d6d" :use-slot="false" margin-top="8"></u-divider>
		<view class="session">
			<view class="dd" v-for="(item, index) in items" :key="index">
				<view class="banner">
					<u-image mode="aspectFit" width="100%" height="110px" :src="item.image" :fade="true" duration="450"></u-image>
					<view class="free"><u-icon name="mianfei" custom-prefix="custom-icon" size="68" color="red"></u-icon></view>
				</view>

				<text class="video_title">{{ item.title }}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'books',
	data() {
		return {
			title: '图书上新',
			more: true,
			items: [
				{
					image: 'https://www.javazx.com/data/attachment/forum/201505/16/160828z136bqm3c6u8l8cb.jpg',
					title: '网易-涨薪计划12周数据分析实战营',
					time: '2022年8月4日'
				},
				{
					image: 'https://www.javazx.com/data/attachment/forum/201608/01/151038glvxoh4x34390vhu.png',
					title: '多端全栈项目实战，大型商业级代驾业务全流程落地|价值1299元|更新完结',
					time: '2022年8月4日'
				},
				{
					image: 'https://www.javazx.com/data/attachment/forum/201505/16/160828z136bqm3c6u8l8cb.jpg',
					title: '网易-涨薪计划12周数据分析实战营',
					time: '2022年8月4日'
				},
				{
					image: 'https://www.javazx.com/data/attachment/forum/201505/16/160828z136bqm3c6u8l8cb.jpg',
					title: '网易-涨薪计划12周数据分析实战营',
					time: '2022年8月4日'
				}
			]
		};
	},
	methods: {
		triggerMore() {
			uni.navigateTo({
				url: '/pages/book/book'
			});
		}
	}
};
</script>

<style scoped lang="scss">
.business-warp {
	margin: 20rpx 12rpx;
	height: 400px;
	.title {
		height: 24px;
		display: flex;
		line-height: 22px;
		justify-content: space-between;
		.title_tip {
			font-size: 22px;
			color: #000;
		}
		.title_more {
			font-size: 14px;
			color: #ccc;
		}
	}

	.banner {
		height: 120px;
		width: 30vw;
		position: relative;
		margin: 0 auto;
		.free {
			position: absolute;
			top: 4px;
			left: 8px;
		}
	}

	.session {
		background-image: radial-gradient(
			circle at 50% 24.22%,
			#ffffff 0,
			#ffffff 12.5%,
			#ffffff 25%,
			#ffffff 37.5%,
			#ffffff 50%,
			#ffffff 62.5%,
			#ffffff 75%,
			#ffffff 87.5%,
			#ffffff 100%
		);
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-between;
		.dd {
			background-color: #ffffff;
			filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.2));
			width: 46vw;
			margin: 8px 0px;
		}
		.video_title {
			color: #000;
			font-size: 14px;
			color: #303133;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden;
		}
	}
}
</style>
