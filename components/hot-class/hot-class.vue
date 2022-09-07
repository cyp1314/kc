<template>
	<view class="business-warp">
		<view class="title">
			<text class="title_tip">{{ content.title }}</text>
			<view class="right-more" v-if="content.more" @click="triggerMore">
				<text class="title_more">更多</text>
				<u-icon name="arrow-right" size="22" color="#ccc"></u-icon>
			</view>
		</view>
		<u-divider half-width="100%" border-color="#6d6d6d" :use-slot="false" margin-top="8"></u-divider>
		<view class="session">
			<view class="dd" v-for="(item, index) in content.items" :key="index" @click="detail(index)">
				<view class="banner">
					<u-image src="https://leepoo.top/img/1659458973074.png" mode="widthFix" :lazy-load="true"></u-image>
					<view class="hot" style="width: 20px;height: 20px;">
						<template v-if="item.type == '1'">
							<u-icon name="zuirehotxiankuang" custom-prefix="custom-icon" size="48" color="red"></u-icon>
						</template>
						<template v-else-if="item.type == '2'">
							<u-icon name="zuixinnew3" custom-prefix="custom-icon" size="48" color="red"></u-icon>
						</template>
					</view>
				</view>
				<text class="video_title">{{ item.title }}</text>
				<view class="video_detail">
					<view class="time">
						<u-icon name="clock"></u-icon>
						<text>{{ item.time }}</text>
					</view>
					<view class="clockText">
						<u-icon name="account-fill"></u-icon>
						<text>{{ item.number }}人</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'hot-class',
	props:{
		content:Object
	},
	data() {
		return {
			
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
			height: 190px;
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
			padding: 0px 8px;
		}
		.video_detail {
			margin-top: 8px;
			padding: 0px 8px;
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
