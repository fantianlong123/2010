import React, { useEffect, useRef, useState } from 'react'
import './styles.less'

export default function Login (props) {
  const [time, setTime] = useState(10)
  const [text, setText] = useState('抢购')

  // 倒计时
  function fn (opt) {
    if (opt !== 0) {
      setTimeout(() => {
        setTime(opt - 1)
      }, 1000)
    }
  }

  useEffect(() => {
    time && fn(time)
  }, [time])

  // 抢购
  const onClick = async () => {
    await new Promise(res => {
      setTimeout(() => {
        res('成功')
      }, 1000)
    })
    setText('已抢购')
  }

  return (
    <div className="box">
      <div className="context">
        <h3>杭州市通用5元券</h3>
        <p>杭味面馆</p>
      </div>
      <div className="button" onClick={onClick}>
        {time ? `${time}秒` : text}
      </div>
    </div>
  )
}
