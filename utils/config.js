var isProduce = false; // 线上版本改为 true  测试环境为 false 

export default {
	isProduce: isProduce,
	base_url: isProduce ? 'https://de98-110-152-11-206.jp.ngrok.io/api/' : 'https://de98-110-152-11-206.jp.ngrok.io/api/',
}
