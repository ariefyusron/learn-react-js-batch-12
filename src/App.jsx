import './App.css'
import { useState, useEffect } from 'react'

import Header from './components/header'
import Body from './components/body'

const App = () => {
  const [number, setNumber] = useState(1)
  const [text, setText] = useState('halo')

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

      {console.log('render')}

      {/* Body */}
      <Body />
      <button
        onClick={() => {
          console.log('onclick')
          setNumber(number + 1)
          setText('apa kabar')
        }}
      >
        change number
      </button>
      <div>{number}</div>
      <div>{text}</div>
    </div>
  )
}

export default App;