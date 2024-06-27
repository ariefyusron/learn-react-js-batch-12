import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';

import { useTodoList } from '../../hooks/useTodoList';

const Index = () => {
  const navigate = useNavigate()
  const { id }  = useParams()

  const { text, setText, setList, list } = useTodoList()

  useEffect(() => {
    setText(list[id])
  },[])

  return (
    <div>
      <input
        value={text}
        onChange={(res) => {
          setText(res.target.value)
        }}
      />
      
      <div>
        <button
          onClick={() => {
            navigate(-1)
          }}
        >
          Batal
        </button>
        <button
          onClick={() => {
            const result = [...list]
            result[id] = {
              ...result[id],
              title: text
            }

            setList(result)
            setText('')
            navigate(-1)
          }}
        >
          Simpan
        </button>
      </div>
    </div>
  )
};

export default Index;