/**
 * @description 欢迎词
 */
import lsjRequest from '@/service/index'

/**
 * @description
 * @param {string} welcome_id
 * @method post
 */
export function JWHContent(welcome_id: string) {
  return lsjRequest.post({
    url: '/selectwelcome',
    params: { welcome_id }
  })
}
/**
 * @description 存用户回答
 */
/**
 * @description
 * @param {string} id
 * @param {string} issue
 * @method post
 */
export function JWHstorage(id: string, issue: string) {
  return lsjRequest.post({
    url: '/createuser',
    params: { id, issue }
  })
}
/**
 * @description 调用大模型
 */
/**
 * @description
 * @param {string} prompt
 * @method post
 */
export function JWHIntelligent(prompt: string) {
  return lsjRequest.post({
    url: '/chat',
    params: { prompt }
  })
}
