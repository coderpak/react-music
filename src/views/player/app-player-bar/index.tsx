import React, { memo, useState, useRef, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { AppPlayerBarWrapper, BarControl, BarOperator, BarPlayerInfo } from './style'
import { Link } from 'react-router-dom'
import { message, Slider } from 'antd'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/hooks/redux'
import { changeImgSize, formatTime } from '@/utils/format'
import { getSongUrl } from '@/utils/handle-player'
import { changeLyricIndexAction } from '../store'

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { currentSong, lyric, lyricIndex } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      lyric: state.player.lyric,
      lyricIndex: state.player.lyricIndex
    }),
    shallowEqualApp
  )

  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false) //播放状态
  const [progress, setProgress] = useState(0) //进度
  const [duration, setDuration] = useState(0) //音乐总时长
  const [currentTime, setCurrentTime] = useState(0) // 当前播放时间
  const [isSliding, setIsSliding] = useState(false) // 拖拽状态

  useEffect(() => {
    audioRef.current!.src = getSongUrl(currentSong.id)
    // audioRef
    //   .current!.play()
    //   .then(() => {
    //     setIsPlaying(true)
    //     console.log('播放成功')
    //   })
    //   .catch(() => {
    //     console.log('播放失败')
    //   })

    setDuration(currentSong.dt)
  }, [currentSong])

  // 事件处理
  function handlePlayBtnClick() {
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch(() => {
          console.log('播放失败')
          setIsPlaying(false)
        })
    setIsPlaying(!isPlaying)
  }

  // 点击进度条
  function handleSliderClick(value: number) {
    // 1. 获取点击位置的时间
    const currentTime = (value / 100) * duration

    // 2.设置当前播放时间
    audioRef.current!.currentTime = currentTime / 1000

    setCurrentTime(currentTime)
    setProgress(value)
    setIsSliding(false)
  }

  // 拖拽进度条
  function handleSliderChange(value: number) {
    const currentTime = (value / 100) * duration
    setCurrentTime(currentTime)
    setProgress(value)
    setIsSliding(true)
  }

  // 歌曲播放ing
  function handleTimeUpdata() {
    // 当前时间
    const currentTime = audioRef.current!.currentTime * 1000

    // 设置进度条
    if (!isSliding) {
      // 当前播放时间
      setProgress((currentTime / duration) * 100)
      setCurrentTime(currentTime)
    }

    // 匹配歌词
    let index = lyric.length - 1
    for (let i = 0; i < lyric.length; i++) {
      const lyricItem = lyric[i]
      if (currentTime < lyricItem.time) {
        index = i - 1
        break
      }
    }

    if (index === lyricIndex || index === -1) return
    dispatch(changeLyricIndexAction(index))
    message.open({
      content: lyric[index].text,
      key: 'lyric',
      duration: 0
    })
  }
  return (
    <AppPlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl isPlaying={isPlaying}>
          <button className="btn sprite_playbar prev"></button>
          <button className="btn sprite_playbar play" onClick={handlePlayBtnClick}></button>
          <button className="btn sprite_playbar next"></button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/">
            <img src={changeImgSize(currentSong?.al?.picUrl, 50)} alt="" className="avatar" />
          </Link>
          <div className="info">
            <div className="song">
              <div className="song-name">{currentSong?.al?.name}</div>
              <div className="singer-name">{currentSong?.ar?.[0]?.name}</div>
            </div>
            <div className="progress">
              <Slider
                tooltip={{ formatter: null }}
                value={progress}
                step={0.5}
                onAfterChange={handleSliderClick}
                onChange={handleSliderChange}
              ></Slider>
              <div className="timer">
                <span className="start">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="end">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdata}></audio>
    </AppPlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)
