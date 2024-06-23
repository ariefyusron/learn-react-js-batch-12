import { create } from 'zustand'

const useDetailStore = create((set) => ({
  count: 0,
  setCount: (res) => set({ count: res})
}))

export default useDetailStore;