import './styles.css'
import { useNavigate } from 'react-router-dom'

import { useTodoList } from '../../hooks/useTodoList'

const Index = () => {
  const { text, setText, list, setList, resetList } = useTodoList()

  const navigate = useNavigate()

  return (
    <div className='wrap'>
      <div className='container'>
        <div className='content'>
          <div className='wrap-input'>
            <input
              className='input-todo'
              onChange={(res) => {
                setText(res.target.value)
              }}
              value={text}
            />
            <button
              onClick={() => {
                setList([text, ...list])
                setText('')
              }}
              disabled={text === ''}
            >
              Tambah
            </button>
            <button
              onClick={() => {
                navigate('detail')
              }}
            >
              goto detail
            </button>
          </div>

          {list.length > 0 && (
            <div className='wrap-button-delete'>
              <button
                onClick={() => {
                  resetList()
                }}
              >
                Hapus Semua
              </button>
            </div>
          )}

          {list.length === 0 ? (
            <div className='empty'>
              Kosong
            </div>
          ) : list.map((item, index) => (
                <div key={index} className='wrap-item'>
                  <p>{item}</p>
                </div>
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default Index;