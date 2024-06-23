import './styles.css'
import { useNavigate } from 'react-router-dom'

import { useTodoList } from '../../hooks/useTodoList'

const Index = () => {
  const { list, resetList } = useTodoList()

  const navigate = useNavigate()

  return (
    <div className='wrap'>
      <div className='container'>
        <div>
          <button
            onClick={() => {
              navigate('/create')
            }}
          >Tambah</button>
        </div>
        <div className='content'>
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