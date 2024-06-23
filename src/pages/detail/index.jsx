import { useNavigate } from 'react-router-dom'

import Profile from '../../components/profile'
import Setting from '../../components/setting'

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

      <Profile />
      <Setting />
    </div>
  )
};

export default Index;