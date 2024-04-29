/**
 * @description 右侧抽屉页面的请求。
 * @Author: 李雪茹
 */
import lsjRequest from '@/service/index'

/**
 * @description 查询模块内信息。
 * @param null
 * @method get
 */

export function LXRselectmodule() {
  return lsjRequest.get({
    url: '/selectmodule'
  })
}
/**
 * @description 查询一级标题
 * @param {string}id 查询的模块id
 * @method post
 */
export function LXRselecttitle(id: string) {
  return lsjRequest.post({
    url: '/selecttitle',
    data: { id }
  })
}

/**
 * @description 询问问题
 * @param {string}id 一级标题的id
 * @method post
 */
export function LXRselectissue(id: string) {
  return lsjRequest.post({
    url: '/selectissuee',
    data: { id }
  })
}
