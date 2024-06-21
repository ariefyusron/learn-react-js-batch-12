import './App.css'

import Header from './components/header'
import TodoList from './components/todo-list'

const App = () => {

  return (
    <div className='wrap'>
      {/* Header */}
      <Header
        title="Todo List"
      />
      <TodoList />
    </div>
  )
}

export default App;