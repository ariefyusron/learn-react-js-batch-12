import { useNavigate } from 'react-router-dom'

import { useTodoList } from '../../hooks/useTodoList';

const Index = () => {
  const navigate = useNavigate()
  const { text, setText, setList, list } = useTodoList()

  return (
    <div>
      <input
        onChange={(res) => {
          setText(res.target.value)
        }}
        value={text}
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
            setList([{ title: text, status: 'todo' }, ...list])
            setText('')
            navigate(-1)
          }}
        >
          Tambah
        </button>
      </div>
    </div>
  )
};

export default Index;