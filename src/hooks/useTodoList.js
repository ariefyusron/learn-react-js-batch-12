import { useState } from 'react'

export const useTodoList = () => {
  const [text, setText] = useState('')
  const [list, setList] = useState([])

  const resetList = () => {
    setList([])
  }


  return {
    text, setText, list, setList, resetList
  }
}