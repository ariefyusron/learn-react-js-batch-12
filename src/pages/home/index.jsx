import './styles.css'
import { useNavigate } from 'react-router-dom'

import { useTodoList } from '../../hooks/useTodoList'
import { useState } from 'react';

const Index = () => {
  const { list, resetList, setList } = useTodoList()
  const [selectList, setSelectList] = useState([])
  const [filter, setFilter] = useState('all')

  const listFilter = list.filter(res => filter === 'all' ? true : res.status === filter)

  const navigate = useNavigate()

  const renderOption = () => (
    <>
      <option value="todo">todo</option>
      <option value="in_progress">in progess</option>
      <option value="done">done</option>
    </>
  )

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
          <select
            value={filter}
            onChange={res => {
              setFilter(res.target.value)
            }}
          >
            <option value="all">All</option>
            {renderOption()}
          </select>
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

          {listFilter.length === 0 ? (
            <div className='empty'>
              Kosong
            </div>
          ) : listFilter.map((item, index) => (
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
                    <label htmlFor={index}>{item.title}</label>
                  </div>
                  <select
                    value={item.status}
                    onChange={(res) => {
                      const result = [...list]
                      result[index] = {
                        ...result[index],
                        status: res.target.value
                      }
                      setList(result)
                    }}
                  >
                    {renderOption()}
                  </select>
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