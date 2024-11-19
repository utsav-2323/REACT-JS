import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './app/Store'
import ReduxExp from './ReduxExp'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='main'>
    <Provider store={store}>
      <ReduxExp/>
    </Provider>
  </div>
  )
}

export default App
