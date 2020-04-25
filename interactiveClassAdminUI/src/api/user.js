import { get, post } from '@/utils/request'
/**
 * 登录接口
 * @param data
 * @returns {*}
 */
export function doLogin(data) {
  return post('/user/login', data)
}

/**
 * 注册接口
 * @param data
 * @returns {*}
 */
export function doRegister(data) {
  return post('/user/register', data)
}

export function getUserInfo() {
  return get('/user/getUserInfo')
}

export function updateUserInfo(data) {
  return post('/user/update', data)
}

export function logout() {
  return get('/user/logout')
}

export function listPage(data) {
  return get('/user/listPage', data)
}

