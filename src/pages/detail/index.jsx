import { useNavigate } from 'react-router-dom'

const Index = () => {
  const navigate = useNavigate()

  return (
    <div>
      Detail
      <button
        onClick={() => {
          navigate(-1)
        }}
      >
        go home
      </button>
    </div>
  )
};

export default Index;