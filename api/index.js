import request from '../utils/request.js'

// 登录
export function login(code) {
	return request({
		url: 'wx/login',
		method: 'GET',
		data: {
			code: code
		}
	})
}
// 修改用户信息
export function updateUser(nickname,avatar,sex) {
	return request({
		url: 'user/update',
		method: 'POST',
		data: {
			nickname: nickname,
			avatar: avatar,
			sex: sex
		}
	})
}
