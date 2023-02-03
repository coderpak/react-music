export function formatCount(num: number) {
  if (num > 100000) {
    return Math.floor(num / 10000) + '万'
  } else {
    return num
  }
}

export function changeImgSize(url: string, width: number, height = width) {
  return url + `?param=${width}x${height}`
}
