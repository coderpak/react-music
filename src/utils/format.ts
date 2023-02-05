export function formatCount(num: number) {
  if (num > 100000) {
    return Math.floor(num / 10000) + '万'
  } else {
    return num
  }
}

export function changeImgSize(url: string, width: number, height = width) {
  return url + `?param=${width}y${height}`
}

/**
 *
 * @param time 毫秒
 * @returns 'mm:ss'
 */
export function formatTime(time: number) {
  const secondTime = time / 1000
  // 100 -> 1:40
  // 200 -> 3:20
  const minute = Math.floor(secondTime / 60)
  const second = Math.floor(secondTime) % 60

  const formatMinute = String(minute).padStart(2, '0')
  const formantSecond = String(second).padStart(2, '0')
  return `${formatMinute}:${formantSecond}`
}
