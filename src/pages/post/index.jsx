import { useEffect, useState } from 'react';
import axios from 'axios';

const Index = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState([])

  const getData = async () => {
    try {
      setIsLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setData(res.data)
    } catch (err) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getData()
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