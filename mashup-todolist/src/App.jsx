import { createGlobalStyle } from 'styled-components'
import TodoTemplate from './components/TodoTemplates'
import TodoHead from './components/TodoHeadBlock'
import TodoList from './components/TodoList'
import TodoCreate from './components/TodoCreate'

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`

function App() {

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  )
}

export default App;
