<template>
	<view class="content">
		<u-navbar :is-back="false" :is-fixed="true" :border-bottom="false" title="资源共享" :background="background">
		</u-navbar>
		<view class="search">
			<u-search :placeholder="hot_search" v-model="keyword" bg-color="#f2f2f2" :animation="trye"
				@search="doSearch" @custom="doSearch"></u-search>
		</view>
		<view class="wrap">
			<u-swiper :height="260" :list="list" mode="dot" :effect3d="true" bg-color="#fff" :title="true"></u-swiper>
		</view>
		<view class="notice-bar">
			<u-notice-bar mode="horizontal" :is-circular="false" :list="notices"></u-notice-bar>
		</view>

		<view>
			<u-grid :col="3">
				<u-grid-item>
					<u-icon name="java" custom-prefix="custom-icon" size="68" color="red"></u-icon>
					<view class="grid-text">JAVA高级工程师</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="HTML" custom-prefix="custom-icon" size="68" color="red"></u-icon>
					<view class="grid-text">HTML5前端+全栈</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="dashuju" custom-prefix="custom-icon" size="68" color="red"></u-icon>
					<view class="grid-text">大数据工程师</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="icon1" custom-prefix="custom-icon" size="68" color="red"></u-icon>
					<view class="grid-text">UI/UE设计师</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="xitongyunwei" custom-prefix="custom-icon" size="68" color="red"></u-icon>
					<view class="grid-text">高级运维工程师</view>
				</u-grid-item>
			</u-grid>
		</view>

		<hotClass :content="hot_content"></hotClass>
		<hotClass :content="new_content"></hotClass>
		<books></books>
		<projects></projects>
	</view>
</template>

<script>
	import books from '@/components/books/books.vue';
	import projects from '@/components/projects/projects.vue';
	import hotClass from '@/components/hot-class/hot-class.vue';
	export default {
		components: {
			books,
			projects,
			hotClass
		},
		data() {
			return {
				hot_content: {
					title: '热门课程',
					more: true,
					items: [{
							title: '网易-涨薪计划12周数据分析实战营',
							time: '2022年8月4日',
							number: 250,
							type: 1
						},
						{
							title: '多端全栈项目实战，大型商业级代驾业务全流程落地|价值1299元|更新完结',
							time: '2022年8月4日',
							number: 250,
							type: 1
						},
						{
							title: '网易-涨薪计划12周数据分析实战营',
							time: '2022年8月4日',
							number: 250,
							type: 1
						},
						{
							title: '网易-涨薪计划12周数据分析实战营',
							time: '2022年8月4日',
							number: 250,
							type: 1
						}
					]
				},
				new_content: {
					cls: 'new',
					title: '最新课程',
					items: [{
							title: '多端全栈项目实战，大型商业级代驾业务全流程落地|价值1299元|更新完结',
							time: '2022年8月4日',
							number: 250,
							type: 2
						},
						{
							title: '多端全栈项目实战，大型商业级代驾业务全流程落地|价值1299元|更新完结',
							time: '2022年8月4日',
							number: 250,
							type: 2
						},
						{
							title: '多端全栈项目实战，大型商业级代驾业务全流程落地|价值1299元|更新完结',
							time: '2022年8月4日',
							number: 250,
							type: 2
						},
						{
							title: '多端全栈项目实战，大型商业级代驾业务全流程落地|价值1299元|更新完结',
							time: '2022年8月4日',
							number: 250,
							type: 2
						}
					]
				},
				background: {
					backgroundImage: 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
				},

				hot_search: '日照香炉生紫烟',
				keyword: '',
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
				notices: ['昨夜星辰昨夜风，画楼西畔桂堂东', '身无彩凤双飞翼，心有灵犀一点通'],
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			};
		},
		onLoad() {
			this.$u.mpShare.title = '给你分享一个宝藏学习Java的网站';
			uni.startPullDownRefresh();
		},
		onPullDownRefresh() {
			console.log('refresh');
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		methods: {
			doSearch() {
				console.log('doSearch');
				uni.navigateTo({
					url: '/pages/search/search'
				});
			},

			upper: function(e) {
				console.log(e);
			},
			lower: function(e) {
				console.log(e);
			},
			scroll: function(e) {
				console.log(e);
				this.old.scrollTop = e.detail.scrollTop;
			},
			goTop: function(e) {
				// 解决view层不同步的问题
				this.scrollTop = this.old.scrollTop;
				this.$nextTick(function() {
					this.scrollTop = 0;
				});
				uni.showToast({
					icon: 'none',
					title: '纵向滚动 scrollTop 值已被修改为 0'
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.search {
		margin: 10rpx 10rpx;
	}

	.wrap {
		margin: 8rpx 10rpx;
		height: 150px;
	}

	.notice-bar {
		margin: 0 10rpx;
		height: 80rpx;
		margin-top: 10px;
	}
</style>
