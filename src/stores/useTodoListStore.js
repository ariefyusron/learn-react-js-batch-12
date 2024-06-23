import { create } from 'zustand'

const useTodoListStore = create((set) => ({
  text: '',
  setText: (res) => set({ text: res }),
  list: [],
  setList: (res) => set({ list: res })
}))

export default useTodoListStore;