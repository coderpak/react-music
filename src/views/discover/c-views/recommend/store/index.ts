import { staticBannerImgs } from '@/assets/data/local_data'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getRecommendBanners } from '../service'

interface IInitalState {
  banner: any[]
}

const initialState: IInitalState = {
  banner: []
}

export const fetchRecommendAction = createAsyncThunk('recommend', async (_, { dispatch }) => {
  // try {
  //   const res = await getRecommendBanners()
  //   console.log(res.banners)
  //   dispatch(changeBannerAction(res.banners))
  // } catch (error) {
  //   console.log('fetchRecommendAction error')
  // }
  // 避免开发时接口冲突，使用静态数据
  dispatch(changeBannerAction(staticBannerImgs))
})

const recommendSlice = createSlice({
  name: 'recommed',
  initialState,
  reducers: {
    changeBannerAction(state, action) {
      state.banner = action.payload
    }
  }
})

export const { changeBannerAction } = recommendSlice.actions
export default recommendSlice.reducer
