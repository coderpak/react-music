export interface ILyric {
  time: number
  text: string
}

export function getSongUrl(id: number) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}

// "[00:01.17]我遇见谁会有怎样的对白"
const lyricRegExp = /\[(\d{2}):(\d{2}).(\d{2,3})\]/
export function parseLyric(lyricString: string) {
  const lyricArr: ILyric[] = []
  const lines = lyricString.split('\n')
  for (const line of lines) {
    const res = lyricRegExp.exec(line)
    if (!res) continue

    const time1 = Number(res[1]) * 60 * 1000
    const time2 = Number(res[2]) * 1000
    const time3 = res[3].length === 2 ? Number(res[3]) * 10 : Number(res[3])
    const time = time1 + time2 + time3

    const text = line.replace(lyricRegExp, '')
    lyricArr.push({ time, text })
  }
  return lyricArr
}
