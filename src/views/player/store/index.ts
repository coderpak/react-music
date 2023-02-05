import { IRootState } from '@/hooks/redux'
import { ILyric, parseLyric } from '@/utils/handle-player'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '../service'

interface IInitialState {
  currentSong: any
  lyric: ILyric[]
  lyricIndex: number
  playSongList: any[]
  playSongIndex: number
  playMode: number
}

const initialState: IInitialState = {
  currentSong: {},
  lyric: [],
  lyricIndex: -1,
  playSongList: [
    {
      name: '给你一瓶魔法药水',
      id: 1959667345,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 12676697,
          name: '告五人',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 19,
      crbt: null,
      cf: '',
      al: {
        id: 147207482,
        name: '玫瑰凭证',
        picUrl: 'https://p2.music.126.net/fISwJ705Y1c81EqWxKjNqg==/109951167603798520.jpg',
        tns: [],
        pic_str: '109951167603798520',
        pic: 109951167603798530
      },
      dt: 258787,
      h: {
        br: 320000,
        fid: 0,
        size: 10353645,
        vd: -72483,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6212205,
        vd: -69907,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4141485,
        vd: -68252,
        sr: 48000
      },
      sq: {
        br: 1083302,
        fid: 0,
        size: 35043209,
        vd: -72472,
        sr: 48000
      },
      hr: {
        br: 1852770,
        fid: 0,
        size: 59934318,
        vd: -72472,
        sr: 48000
      },
      a: null,
      cd: '01',
      no: 3,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 536879104,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 19,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 14553401,
      mst: 9,
      cp: 7001,
      rtype: 0,
      rurl: null,
      publishTime: 0
    },
    {
      name: '起风了',
      id: 1330348068,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 12085562,
          name: '买辣椒也用券',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 42,
      crbt: null,
      cf: '',
      al: {
        id: 74715426,
        name: '起风了',
        picUrl: 'https://p1.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg',
        tns: [],
        pic_str: '109951163699673355',
        pic: 109951163699673360
      },
      dt: 325868,
      h: {
        br: 320000,
        fid: 0,
        size: 13037236,
        vd: -77525,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 7822359,
        vd: -74987,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 5214920,
        vd: -73504,
        sr: 44100
      },
      sq: {
        br: 985873,
        fid: 0,
        size: 40158105,
        vd: -77524,
        sr: 44100
      },
      hr: {
        br: 2832349,
        fid: 0,
        size: 115371553,
        vd: -77475,
        sr: 88200
      },
      a: null,
      cd: '1',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 536879104,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 42,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 10782615,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 1415923,
      publishTime: 0
    }
  ],
  playSongIndex: -1,
  playMode: 0 // 0:顺序播放 1:随机播放 2:单曲循环
}

interface IThunkState {
  state: IRootState
}

// 获得歌曲
export const fetchSongDetailThunk = createAsyncThunk<void, number, IThunkState>(
  'player/fetchSongDetailThunk',
  (id: number, { dispatch, getState }) => {
    const playSongList = getState().player.playSongList

    // 先在歌曲列表里查找是否已存在歌曲
    const index = playSongList.findIndex((item) => item.id === id)
    if (index === -1) {
      //没有找到则发送请求 获取歌曲详情
      getSongDetail(id).then((res) => {
        if (!res.songs.length) return

        // 添加进播放列表
        const newPlaySongList = [...playSongList]
        newPlaySongList.push(res.songs[0])
        // 更新播放列表
        dispatch(changePlaySongListAction(newPlaySongList))
        dispatch(changePlaySongIndexAction(newPlaySongList.length - 1))
        dispatch(changeCurrentSongAction(res.songs[0]))
      })
    } else {
      // 找到则播放歌曲
      dispatch(changePlaySongIndexAction(index))
      dispatch(changeCurrentSongAction(playSongList[index]))
    }

    // 获取歌曲歌词
    getSongLyric(id).then((res) => {
      const lyricString = res.lrc.lyric
      const lyric = parseLyric(lyricString)
      dispatch(changeSongLyricAction(lyric))
    })
  }
)

// 切换歌曲
export const changeSongThunk = createAsyncThunk<void, boolean, IThunkState>(
  'player/changeSongDetailThunk',
  (isNext, { dispatch, getState }) => {
    // 获得数据
    const player = getState().player
    const playSongList = player.playSongList
    const playSongIndex = player.playSongIndex
    const playMode = player.playMode

    let newIndex = playSongIndex
    if (playMode == 1) {
      // 随机播放
      newIndex = Math.floor(Math.random() * playSongList.length)
    } else {
      // 顺序播放
      newIndex = isNext ? newIndex + 1 : newIndex - 1
      if (newIndex < 0) newIndex = playSongList.length - 1
      if (newIndex === playSongList.length) newIndex = 0
    }

    // 切换歌曲
    dispatch(changeCurrentSongAction(playSongList[newIndex]))
    dispatch(changePlaySongIndexAction(newIndex))

    // 获取歌曲歌词
    getSongLyric(playSongList[newIndex].id).then((res) => {
      const lyricString = res.lrc.lyric
      const lyric = parseLyric(lyricString)
      dispatch(changeSongLyricAction(lyric))
    })
  }
)

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, action) {
      state.currentSong = action.payload
    },
    changeSongLyricAction(state, action) {
      state.lyric = action.payload
    },
    changeLyricIndexAction(state, action) {
      state.lyricIndex = action.payload
    },
    changePlaySongListAction(state, action) {
      state.playSongList = action.payload
    },
    changePlaySongIndexAction(state, action) {
      state.playSongIndex = action.payload
    },
    changePlayMode(state, action) {
      state.playMode = action.payload
    }
  }
})

export const {
  changeCurrentSongAction,
  changeSongLyricAction,
  changeLyricIndexAction,
  changePlaySongListAction,
  changePlaySongIndexAction,
  changePlayMode
} = playerSlice.actions
export default playerSlice.reducer
