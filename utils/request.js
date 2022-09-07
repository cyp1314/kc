import config from "./config.js";
import store from '@/store'
import {
	getStorage
} from '../utils/storage'

export default function request(params) {
	return new Promise(function(resolve, reject) {
		if (!config.base_url) {
			reject('参数配置不全');
			return
		}
		const Token = getStorage('token')
		uni.showLoading({
			title: '加载中...',
			mask: true
		})
		const defaultParams = {
			url: config.base_url + params.url,
			header: {
				'token': Token
			},
			method: params.method || 'GET',
			data: params.data,

			success(res) {
				// token过期
				if (res.statusCode === 401) {
					store.commit('loginOut')
					uni.hideLoading()
					uni.showToast({
						title: '请重新登录！',
						icon: 'none',
						mask: true,
						duration: 2000
					})
					return reject(res.data)
				}

				uni.hideLoading()
				resolve(res.data)
			},
			fail(e) {
				let params = {
					code: config.errStatus,
					success: false
				}
				uni.hideLoading()
				reject(params)
			}
		}
		if (params.url.includes('wx/login')) {
			delete defaultParams.header
		}
		uni.request(defaultParams)
	})
};

// 上传文件
export function uploadFile(file) {
	return new Promise(function(resolve, reject) {
		let s = file.url.split("/")
		let fileName = s[s.length - 1]
		uni.showLoading({
			title: '上传中...',
			mask: true
		})
		uni.uploadFile({
			url: config.base_url + 'zwfw/api/file/server/upload',
			filePath: file.url,
			name: 'file',
			success(res) {
				resolve(JSON.parse(res.data))
			},
			fail(e) {
				uni.showToast({
					title: '接口请求超时',
					icon: "error"
				})
				reject(e)
			},
			complete() {
				uni.hideLoading()
			}
		})
	})
}
