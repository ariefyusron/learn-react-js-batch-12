import useTodoListStore from '../stores/useTodoListStore'

export const useTodoList = () => {
  const text = useTodoListStore((state) => state.text)
  const setText = useTodoListStore((state) => state.setText)
  const list = useTodoListStore((state) => state.list)
  const setList = useTodoListStore((state) => state.setList)

  const resetList = () => {
    setList([])
  }


  return {
    text, setText, list, setList, resetList
  }
}