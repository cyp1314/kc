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
				<view style="display: flex;flex: row;margin: 8px 0;">
					<view class="banner">
						<u-image mode="aspectFit" width="100%" height="110px" :src="item.image" :fade="true" duration="450"></u-image>
						<view class="free"><u-icon name="mianfei" custom-prefix="custom-icon" size="68" color="red"></u-icon></view>
					</view>
					<view style="height: 120px;display: flex;flex-direction: column;justify-content: space-around;flex: 1;">
						<text class="text">项目名称：{{ item.title }}</text>
						<text class="text">主要开发语言：{{ item.title }}</text>
						<view class="video_detail">
							<view class="time">
								<u-icon name="clock"></u-icon>
								<text>{{ item.time }}</text>
							</view>
							<view class="clockText">
								<u-icon name="account-fill"></u-icon>
								<text>{{ item.number }}下载</text>
							</view>
						</view>
					</view>
				</view>
				<u-line color="#e4e7ed"></u-line>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'projects',
	data() {
		return {
			title: '开源项目推荐',
			more: true,
			items: [
				{
					image: 'https://www.javazx.com/data/attachment/forum/201505/16/160828z136bqm3c6u8l8cb.jpg',
					title: '网易-涨薪计划12周数据分析实战营',
					time: '2022年8月4日',
					number: 120
				},
				{
					image: 'https://www.javazx.com/data/attachment/forum/201608/01/151038glvxoh4x34390vhu.png',
					title: '多端全栈项目实战，大型商业级代驾业务全流程落地|价值1299元|更新完结更新完结更新完结更新完结',
					time: '2022年8月4日',
					number: 120
				},
				{
					image: 'https://www.javazx.com/data/attachment/forum/201505/16/160828z136bqm3c6u8l8cb.jpg',
					title: '网易-涨薪计划12周数据分析实战营',
					time: '2022年8月4日',
					number: 120
				},
				{
					image: 'https://www.javazx.com/data/attachment/forum/201505/16/160828z136bqm3c6u8l8cb.jpg',
					title: '网易-涨薪计划12周数据分析实战营',
					time: '2022年8月4日',
					number: 120
				}
			]
		};
	},
	methods: {
		triggerMore() {
			uni.navigateTo({
				url: '/pages/search/search'
			});
		}
	}
};
</script>

<style scoped lang="scss">
.business-warp {
	margin: 20rpx 12rpx;
	height: 600px;
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
		.free {
			position: absolute;
			top: 4px;
			left: 8px;
		}
	}
	.text {
		color: #606266;
		font-size: 12px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.video_detail {
		margin-top: 8px;
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		.time {
			color: #c0c4cc;
		}
		.clockText {
			color: red;
		}
	}
}
</style>
