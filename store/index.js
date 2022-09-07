import Vue from 'vue'
import Vuex from 'vuex'
import config from '@/utils/config.js'
import {
	setToken,
	removeAll
} from '../utils/storage'
Vue.use(Vuex)


//Vuex.Store 构造器选项
const store = new Vuex.Store({
	state: {
		token: '',
		uid: '',
		nickname: '',
		avatar: ''
	},
	mutations: {
		setAuthToken(state, data) {
			state.token = data
			setToken('token', data)
		},
		setUid(state, data) {
			state.uid = data
			setToken('uid', data)
		},
		setNickname(state, data) {
			state.nickname = data
			setToken('nickname', data)
		},
		setAvatar(state, data) {
			state.avatar = data
			setToken('avatar', data)
		},
		// 退出登录
		loginOut(state, data) {
			Object.keys(initState).forEach(item => {
				state[item] = initState[item]
			})
			removeAll()
		}
	},
	actions: {
	},
	getters:{
		getToken(state) {
			return state.token
		},
		getUserInfo(state) {
			console.log('--', state.uid);
			return {
				'uid': state.uid,
				'nickname': state.nickname,
				'avatar': state.avatar
			}
		},
	},
	modules: {}
})

export default store