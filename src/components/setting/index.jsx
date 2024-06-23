import useDetailStore from '../../stores/useDetailStore'

const Index = () => {
  const count = useDetailStore((state) => state.count)

  return (
    <div>
      <div>{count}</div>
    </div>
  )
};

export default Index;