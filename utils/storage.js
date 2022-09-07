const UserKey = 'user'

// 获取指定key
export function getStorage (key = UserKey) {
  const data = uni.getStorageSync(key)
  if (!data) return null
  try {
    return JSON.parse(data)
  } catch (e) {
    return data
  }
}

// 设置key
export function setToken (key = UserKey, value) {
  if (typeof value === 'object') value = JSON.stringify(value)
  uni.setStorageSync(key, value)
}

// 清除指定key
export function removeToken (key = UserKey) {
  uni.removeStorage(key)
}

// 清除所有
export function removeAll () {
  uni.clearStorageSync()
}
