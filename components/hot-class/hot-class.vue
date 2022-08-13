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
			<view class="dd" v-for="(item, index) in items" :key="index" @click="detail(index)">
				<view class="banner">
					<u-image src="https://leepoo.top/img/1659458973074.png" mode="widthFix" :lazy-load="true"></u-image>
					<view class="hot" style="width: 20px;height: 20px;"><u-icon name="zuirehotxiankuang" custom-prefix="custom-icon" size="48" color="red"></u-icon></view>
				</view>
				<text class="video_title">{{ item.title }}</text>
				<view class="video_detail">
					<view class="time">
						<u-icon name="clock"></u-icon>
						<text>{{ item.time }}</text>
					</view>
					<view class="clockText">
						<u-icon name="account-fill"></u-icon>
						<text>{{ item.number }}人点击</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'hot-class',
	data() {
		return {
			title: '热门课程',
			more: true,
			items: [
				{
					title: '网易-涨薪计划12周数据分析实战营',
					time: '2022年8月4日',
					number: 250
				},
				{
					title: '多端全栈项目实战，大型商业级代驾业务全流程落地|价值1299元|更新完结',
					time: '2022年8月4日',
					number: 250
				},
				{
					title: '网易-涨薪计划12周数据分析实战营',
					time: '2022年8月4日',
					number: 250
				},
				{
					title: '网易-涨薪计划12周数据分析实战营',
					time: '2022年8月4日',
					number: 250
				}
			]
		};
	},
	methods: {
		triggerMore (){
			uni.navigateTo({
				url:'/pages/search/search'
			})
		},
		detail(index){
			console.log(index);
			uni.navigateTo({
				url:'/pages/info/info'
			})
		}
	}
};
</script>

<style scoped lang="scss">
.business-warp {
	margin: 20rpx 12rpx;
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
			background-color: #fff;
			filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.2));
			height: 200px;
			width: 46vw;
			margin: 8px 0px;
			.banner {
				position: relative;
				.hot {
					position: absolute;
					top: -10px;
					right: 20px;
				}
			}
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
}
</style>
