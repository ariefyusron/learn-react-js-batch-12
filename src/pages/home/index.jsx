import './styles.css'
import { useNavigate } from 'react-router-dom'

import { useTodoList } from '../../hooks/useTodoList'
import { useState } from 'react';

const Index = () => {
  const { list, resetList, setList } = useTodoList()
  const [selectList, setSelectList] = useState([])

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
          <button
            onClick={() => {
              navigate('/post')
            }}
          >go post</button>
          {selectList.length > 0 && (
            <button
              onClick={() => {
                setList(list.filter((item, index) => !selectList.includes(index)))
                setSelectList([])
              }}
            >delete</button>
          )}
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
                  <input
                    type='checkbox'
                    id={index}
                    checked={selectList.includes(index)}
                    onChange={(res) => {
                      if(res.target.checked) {
                        setSelectList([...selectList, index])
                      } else {
                        setSelectList(selectList.filter(res => res !== index))
                      }
                    }}
                  />
                  <div>
                    <label htmlFor={index}>{item}</label>
                  </div>
                  <button
                    onClick={() => {
                      navigate(`/edit/${index}`)
                    }}
                  >
                    edit
                  </button>
                  <button
                    onClick={() => {
                      setList(list.filter((res, idx) => idx !== index))
                      setSelectList([])
                    }}
                  >
                    delete
                  </button>
                </div>
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default Index;