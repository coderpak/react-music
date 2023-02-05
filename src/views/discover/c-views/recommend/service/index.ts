import { request1 } from '@/service'

export function getRecommendBanners() {
  return request1.get({
    url: '/banner'
  })
}

export function getHotRecommendPlaylist(limit = 30) {
  return request1.get({
    url: `/personalized?limit=${limit}`
  })
}

export function getNewAlbum() {
  return request1.get({
    url: `/album/newest`
  })
}

export function getRankingDetail(id: number) {
  return request1.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

export function getArtistList(limit = 30) {
  return request1.get({
    url: '/artist/list',
    params: {
      limit
    }
  })
}
