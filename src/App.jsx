import './App.css'
import { useState, useEffect } from 'react'

import Header from './components/header'
import Body from './components/body'

const App = () => {
  const [number, setNumber] = useState(1)
  const [text, setText] = useState('halo')

  const listData = ['ini nomer 1', 'ini nomer 2', 'halo', 'ini nomer 4']

  useEffect(() => {
    console.log('useEffect')
  },[])

  return (
    <div className='wrap'>
      {/* Header */}
      <Header
        title="ini judul 1"
        desc="ini deskripsi 1"
      />

      {/* Body */}
      <Body />
      <button
        onClick={() => {
          setNumber(number + 1)
          setText('apa kabar')
        }}
      >
        change number
      </button>
      <div>{number}</div>
      {number > 5 ? <div>stop</div> : <div>{number}</div>}
      <div>{text}</div>
      <div>---------------</div>

      {listData.map((item, index) => (
        <div key={index}>
          {item}
        </div>
      ))}
    </div>
  )
}

export default App;