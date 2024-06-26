import { useEffect, useState } from 'react';
import axios from 'axios';

const Index = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    setIsLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setData(res.data)
      }).catch(() => {
        setIsError(true)
      }).finally(() => {
        setIsLoading(false)
      })
  },[])

  return (
    <div>
      {isLoading ? <div>Loading...</div> : data.map((item) => (
        <div key={item.id}>
          <div style={{fontWeight: 'bold'}}>{item.title}</div>
          <div>{item.body}</div>
          <div>----------------</div>
        </div>
      ))}

      {isError && <div>Error</div>}
    </div>
  )
};

export default Index;