import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getHotRecommendPlaylist,
  getNewAlbum,
  getRankingDetail,
  getRecommendBanners
} from '../service'

interface IInitalState {
  banner: any[]
  hotRecommendPlaylist: any[]
  newAlbumList: any[]
  rankingDataList: any[]
}

const initialState: IInitalState = {
  banner: [],
  hotRecommendPlaylist: [],
  newAlbumList: [],
  rankingDataList: []
}

export const fetchRecommendAction = createAsyncThunk('recommend', async (_, { dispatch }) => {
  getRecommendBanners().then((res) => {
    dispatch(changeBannerAction(res.banners))
  })
  getHotRecommendPlaylist(8).then((res) => {
    dispatch(changeHotRecommendPlaylistAction(res.result))
  })
  getNewAlbum().then((res) => {
    dispatch(changeNewAlbumListAction(res.albums))
  })
})

const rankingIds = [19723756, 3779629, 2884035]
export const fetchRankingDataAction = createAsyncThunk('rankingData', (_, { dispatch }) => {
  const promiseArr: Promise<any>[] = []
  for (const id of rankingIds) {
    promiseArr.push(getRankingDetail(id))
  }
  Promise.all(promiseArr).then((res) => {
    const rankingDataList = res.map((item) => item.playlist)
    dispatch(changeRankingDataListAction(rankingDataList))
    console.log(rankingDataList)
  })
})

const recommendSlice = createSlice({
  name: 'recommed',
  initialState,
  reducers: {
    changeBannerAction(state, action) {
      state.banner = action.payload
    },
    changeHotRecommendPlaylistAction(state, action) {
      state.hotRecommendPlaylist = action.payload
    },
    changeNewAlbumListAction(state, action) {
      state.newAlbumList = action.payload
    },
    changeRankingDataListAction(state, action) {
      state.rankingDataList = action.payload
    }
  }
})

export const {
  changeBannerAction,
  changeHotRecommendPlaylistAction,
  changeNewAlbumListAction,
  changeRankingDataListAction
} = recommendSlice.actions
export default recommendSlice.reducer
