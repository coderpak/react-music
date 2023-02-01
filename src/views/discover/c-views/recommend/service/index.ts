import { request1 } from '@/service'

export function getRecommendBanners() {
  return request1.get({
    url: '/banner'
  })
}
