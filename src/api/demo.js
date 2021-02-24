import request from '@/utils/request'

export function getJssdk(data) {
  return request({
    url: '/api/xxxxxx',
    method: 'get',
    params: data
  })
}