<template>
	<view class="content">
		<u-navbar :is-back="true" :is-fixed="true" :border-bottom="false" title="资源共享"></u-navbar>
		<view class="search">
			<u-search :placeholder="hot_search" v-model="keyword" bg-color="#f2f2f2" :animation="trye"
				@search="doSearch" @custom="doSearch"></u-search>
		</view>
		<view class="kws">
			<u-tag class="ks_item" :size="mini" v-for="(item, index) in kws" :key="index" :text="item" shape="circle" />
		</view>
		<view class="page-wrap u-skeleton">
			<data-list class="data-list" ref="list" @load="handleLoad" @refresh="handleRefresh">
				<view class="item-wrap" v-for="(item, index) in list" :key="index">
					<view class="avatar"></view>
					<view class="flex flex-direction">
						<view class="item"></view>
						<view class="item"></view>
						<view class="item"></view>
					</view>
				</view>
			</data-list>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				total: 0,
				kws: ['java实战', '即可时间', '谢谢谢谢', '水水水水杀杀杀', '谢谢谢谢', '帆帆帆帆', '嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻']
			};
		},
		methods: {
			// 模拟请求加载数据
			handleLoad(data, callback) {
				setTimeout(() => {
					let list = [];
					for (var i = 0; i < 3; i++) {
						list.push(i);
					}
					this.list = [...this.list, ...list];
					callback({
						list: this.list,
						total: 30
					});
				}, 1500);
			},
			// 模拟请求数据刷新
			handleRefresh(data, callback) {
				setTimeout(() => {
					this.list = [];
					for (var i = 0; i < 3; i++) {
						this.list.push(i);
					}
					callback({
						list: this.list,
						total: 30
					});
				}, 1500);
			}
		}
	};
</script>

<style scoped lang="scss">
	.search {
		margin: 0 10rpx;
	}

	.kws {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		padding: 0 12px;
	}

	.ks_item {
		margin-right: 12px;
		margin-top: 8px;
	}

	.page-wrap {
		height: 100%;
		margin-top: 12px;
		padding-left: 30rpx;
		padding-right: 30rpx;

		.test-view {
			height: 300rpx;
		}

		.navbar-content {
			width: 100%;
			display: flex;
			padding: 30rpx;
			align-items: center;
			justify-content: space-between;
		}

		.u-icon {
			margin-left: 30rpx;
		}

		.item-wrap {
			display: flex;
			margin: 10rpx;
			padding: 30rpx;
			align-items: center;
			border-radius: 16rpx;
			box-shadow: 0rpx 8rpx 16rpx rgba(0, 0, 0, 0.11);

			.avatar {
				width: 150rpx;
				height: 150rpx;
				margin-right: 30rpx;
				border-radius: 16rpx;
				background-color: #c0c0c0;
			}

			.item {
				width: 100rpx;
				height: 30rpx;
				margin-bottom: 10rpx;
				border-radius: 16rpx;
				background-color: #c8c7cc;
			}
		}
	}
</style>
