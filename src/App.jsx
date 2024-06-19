import './App.css'
import { useState } from 'react'

import Header from './components/header'
import Body from './components/body'

const App = () => {
  const [number, setNumber] = useState(1)

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
          console.log('before', number)
          setNumber(2)
          console.log('after', number)
        }}
      >
        change number
      </button>
      <div>{number}</div>
    </div>
  )
}

export default App;