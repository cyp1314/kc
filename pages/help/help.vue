<template>
	<view class="wrap content">
		<u-navbar :is-back="false" :is-fixed="true" :border-bottom="false" title="资源共享" :background="background">
		</u-navbar>
		<u-form :model="model" :rules="rules" ref="uForm">
			<u-form-item :label-position="labelPosition" label="方式" prop="type" label-width="150" required="required">
				<u-radio-group v-model="model.type" @change="radioGroupChange" :width="radioCheckWidth"
					:wrap="radioCheckWrap">
					<u-radio shape="circle" v-for="(item, index) in typeList" :key="index" :name="item.name">
						{{ item.name }}
					</u-radio>
				</u-radio-group>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="邮箱" prop="email" label-width="150" required="required">
				<u-input :border="border" placeholder="请输入联系邮箱" v-model="model.email" type="text"></u-input>
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="名称" prop="name" label-width="150" required="required">
				<u-input type="textarea" :border="border" placeholder="请填写资源教程或书籍名称" v-model="model.name" />
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="地址" prop="address" label-width="150" required="required">
				<u-input type="textarea" :border="border" placeholder="请填写资源教程或书籍网盘地址及密码" v-model="model.address" />
			</u-form-item>
			<u-form-item :label-position="labelPosition" label="附件" prop="fj" label-width="150" required="required">
				<!-- <u-upload width="160" height="160" :action="action" :file-list="fileList"></u-upload> -->
				<view class="wrap">
					<view class="pre-box" v-if="!showUploadList">
						<view class="pre-item" v-for="(item, index) in lists" :key="index">
							<image class="pre-item-image" :src="item.url" mode="aspectFill"></image>
						</view>
					</view>
					<u-upload :custom-btn="true" ref="uUpload" :show-upload-list="showUploadList" :action="action">
						<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
							<u-icon name="photo" size="60" color="#c0c4cc"></u-icon>
						</view>
					</u-upload>
				</view>
			</u-form-item>
		</u-form>
		<view class="agreement">
			<u-checkbox v-model="model.check" @change="checkboxChange"></u-checkbox>
			<view class="agreement-text">勾选代表同意互联网共享精神</view>
		</view>
		<u-button @click="submit">提交</u-button>
		<!-- <button @click="baidu">提取资料</button> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: {
					backgroundImage: 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
				},
				action: 'http://www.example.com', // 演示地址
				showUploadList: false,
				// 如果将某个ref的组件实例赋值给data中的变量，在小程序中会因为循环引用而报错
				// 这里直接获取内部的lists变量即可
				lists: [],
				model: {
					type: '',
					name: '',
					email: '',
					address: '',
					check: '',
					fj: ''
				},
				typeList: [{
						name: '求助',
						checked: true,
						disabled: false
					},
					{
						name: '分享',
						checked: true,
						disabled: false
					},
					{
						name: '众筹',
						checked: true,
						disabled: false
					}
				],
				rules: {
					type: [{
						required: true,
						message: '请选择方式！',
						trigger: 'blur'
					}],
					email: {
						required: true,
						type: 'email',
						message: '邮件格式不正确',
						trigger: ['change', 'blur']

					},
					name: [{
						required: true,
						message: '请输入姓名',
						trigger: ['blur', 'change']
					}],
					address: [{
						required: true,
						message: '请输入姓名',
						trigger: ['blur', 'change']
					}]
				},
			};
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
			this.lists = this.$refs.uUpload.lists;
		},
		methods: {
			baidu() {
				// https://pan.baidu.com/s/1rB6uJFe6OaLUPj3fXfq4-Q?pwd=mazg
				var path = 'pages/netdisk_share/share?surl=1rB6uJFe6OaLUPj3fXfq4-Q&pwd=mazg';
				wx.navigateToMiniProgram({
					appId: 'wxdcd3d073e47d1742',
					path: path,
					extraData: {
						pwd: 'mazg'
					},
					envVersion: 'release', //默认为正式版，咱们提取网盘资料，这里就正式版，如果是自己开发的两个小程序，可以选择"develop" 开发板    "trial" 体验版 "release" 正式版
					success(res) {
						// 打开成功
					}
				})
			},
			submit() {
				this.$refs.uForm.validate(valid => {
					console.log('v', valid);
					if (valid) {
						if (!this.model.check) return this.$u.toast('请勾选协议');
						console.log('验证通过');
					} else {
						console.log('验证失败');
					}
				});
			},

			// 勾选版权协议
			checkboxChange(e) {
				this.model.check = e.value;
			},
		}
	};
</script>

<style scoped lang="scss">
	.wrap {
		padding: 30rpx;
	}
	.agreement .agreement-text{
		display: inline-block;
		margin-top: 12px;
		margin-bottom: 24px;
	}

	.slot-btn {
		width: 244rpx; 
		height: 144rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgb(244, 245, 246);
		border-radius: 10rpx;
	}

	.slot-btn__hover {
		background-color: rgb(235, 236, 238);
	}

	.pre-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.pre-item {
		flex: 0 0 48.5%;
		border-radius: 10rpx;
		height: 140rpx;
		overflow: hidden;
		position: relative;
		margin-bottom: 20rpx;
	}

	.pre-item-image {
		width: 100%;
		height: 140rpx;
	}
</style>
