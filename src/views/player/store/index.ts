import { ILyric, parseLyric } from '@/utils/handle-player'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '../service'

interface IInitialState {
  currentSong: any
  lyric: ILyric[]
  lyricIndex: number
}

const initialState: IInitialState = {
  currentSong: {},
  lyric: [],
  lyricIndex: -1
}

export const fetchSongDetailThunk = createAsyncThunk(
  'player/fetchSongDetailThunk',
  (id: number, { dispatch }) => {
    // 获取歌曲详情
    getSongDetail(id).then((res) => {
      if (!res.songs.length) return
      dispatch(changeCurrentSongAction(res.songs[0]))
    })

    // 获取歌曲歌词
    getSongLyric(id).then((res) => {
      const lyricString = res.lrc.lyric
      const lyric = parseLyric(lyricString)
      dispatch(changeSongLyricAction(lyric))
      console.log(lyric)
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
    }
  }
})

export const { changeCurrentSongAction, changeSongLyricAction, changeLyricIndexAction } =
  playerSlice.actions
export default playerSlice.reducer
