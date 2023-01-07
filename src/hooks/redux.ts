import { useSelector, useDispatch, TypedUseSelectorHook, shallowEqual } from 'react-redux'
import store from '@/store'

type StateFnType = typeof store.getState
type IRootState = ReturnType<StateFnType>
type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
export const shallowEqualApp = shallowEqual
