<template>
	<view class="content">
		<u-navbar :is-back="true" :is-fixed="true" :border-bottom="false" title="资源共享"></u-navbar>
		<view class="wrap">
			<u-swiper :list="list"></u-swiper>
		</view>

		<view class="desc">
			<view style="margin-bottom: 8px;">
				<text class="desc_1" style="">学习说明</text>
				<text class="desc_2" style="">
					课程简短说明课程简短说明课程简短说明课程简短说明课程简短说明课程简短说明课程简短说明课程简短说明课程简短说明课程简短说明课程简短说明课程简短说明课程简短说明课程简短说明课程简短说明课程简短说明课程简短
				</text>
			</view>
		</view>

		<view>
			<u-tabs-swiper ref="uTabs" :list="nav" :current="current" @change="tabsChange" :is-scroll="false">
			</u-tabs-swiper>
		</view>
		<swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<swiper-item class="swiper-item" v-for="(item, index) in nav" :key="index">
				<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="onreachBottom">
					<view v-if="index == 0">
						<u-image width="100%" height="300rpx"
							src="https://class.imooc.com/static/module/marketpage2020/img/intro/embedded/section1.png">
						</u-image>
						<u-image width="100%" height="300rpx"
							src="https://class.imooc.com/static/module/marketpage2020/img/intro/embedded/section7_1.png">
						</u-image>
						<u-image width="100%" height="300rpx"
							src="https://class.imooc.com/static/module/marketpage2020/img/intro/embedded/section7_2.png">
						</u-image>
						<u-image width="100%" height="300rpx"
							src="https://class.imooc.com/static/module/marketpage2020/img/intro/embedded/section7_3.png">
						</u-image>
						<u-image width="100%" height="300rpx"
							src="https://class.imooc.com/static/module/marketpage2020/img/intro/embedded/section7_4.png">
						</u-image>
						<u-image width="100%" height="300rpx"
							src="https://class.imooc.com/static/module/marketpage2020/img/intro/embedded/section7_5.png">
						</u-image>
						<u-image width="100%" height="300rpx"
							src="https://class.imooc.com/static/module/marketpage2020/img/intro/embedded/section7_6.png">
						</u-image>
						<text>111111111</text>
					</view>
					<view v-if="index == 1">目录</view>
					<view v-if="index == 2">常见问题</view>
				</scroll-view>
			</swiper-item>
		</swiper>

		<view class="navigation">
			<view class="left">
				<view class="item">
					<u-icon name="server-fill" :size="40" :color="$u.color['contentColor']"></u-icon>
					<view class="text u-line-1">客服</view>
				</view>
			</view>
			<view class="right">
				<view @click="share" style="background-color: #8CD8E6;" class="cart btn u-line-1">立即分享</view>
				<view class="cart btn u-line-1">立即兑换</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onShareTimeline(res) {
			if (res.from === 'button') {
				console.log(res.target)
			}
			return {
				title: '自定义分享标题222',
				path: '/pages/test/test?id=123'
			}
		},
		data() {
			return {
				nav: [{
						name: '详情'
					},
					{
						name: '目录'
					},
					{
						name: '常见问题'
					}
				],
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				list: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				itemList: [{
						head: '赏识在于角度的转换',
						body: '只要我们正确择取一个合适的参照物乃至稍降一格去看待他人，值得赏识的东西便会扑面而来',
						open: false,
						disabled: false
					},
					{
						head: '生活中不是缺少美，而是缺少发现美的眼睛',
						body: '学会欣赏，实际是一种积极生活的态度，是生活的调味品，会在欣赏中发现生活的美',
						open: false,
						disabled: false
					},
					{
						head: '周围一些不起眼的人、事、物，或许都隐藏着不同凡响的智慧',
						body: '但是据说雕刻大卫像所用的这块大理石，曾被多位雕刻家批评得一无是处，有些人认为这块大理石采凿得不好，有些人嫌它的纹路不够美',
						open: false,
						disabled: false
					}
				]
			};
		},
		methods: {
			share() {
				this.onShareTimeline()
			},
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			// scroll-view到底部加载更多
			onreachBottom() {}
		}
	};
</script>

<style scoped lang="scss">
	.problem {
		margin: 12px 12px;
	}

	.desc {
		background-color: white;
		display: flex;
		flex-direction: column;
		margin: 8px 12px;
		justify-content: space-around;
	}

	.desc_1 {
		font-size: 14px;
		font-weight: bold;
		margin-bottom: 6px;
	}

	.desc_2 {
		font-size: 12px;
		color: #ccc;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}

	swiper {
		margin: 12px 12px;
		height: 100% !important;
		margin-bottom: 60px !important;
	}

	.navigation {
		width: 100vw;
		position: absolute;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		margin-top: 100rpx;
		border: solid 2rpx #f2f2f2;
		background-color: #ffffff;
		padding: 16rpx 0;

		.left {
			display: flex;
			font-size: 20rpx;

			.item {
				margin: 0 30rpx;

				&.car {
					text-align: center;
					position: relative;

					.car-num {
						position: absolute;
						top: -10rpx;
						right: -10rpx;
					}
				}
			}
		}

		.right {
			display: flex;
			font-size: 28rpx;
			align-items: center;

			.btn {
				line-height: 66rpx;
				padding: 0 30rpx;
				border-radius: 36rpx;
				color: #ffffff;
			}

			.cart {
				background-color: #ed3f14;
				margin-right: 30rpx;
			}

			.buy {
				background-color: #ff7900;
			}
		}
	}
</style>
