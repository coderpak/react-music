import { request1 } from '@/service'

export function getSongDetail(ids: number) {
  return request1.get({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

export function getSongLyric(id: number) {
  return request1.get({
    url: '/lyric',
    params: {
      id
    }
  })
}
