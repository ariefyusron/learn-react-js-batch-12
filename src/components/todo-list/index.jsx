import './styles.css'
import { useState } from 'react';

const Index = () => {
  const [text, setText] = useState('')
  const [list, setList] = useState([])

  return (
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
        </div>

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
  )
};

export default Index;