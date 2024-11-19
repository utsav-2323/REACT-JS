import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './app/Store'
import ReduxExp from './ReduxExp'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Provider store={store}>
      <ReduxExp/>
    </Provider>
  </div>
  )
}

export default App
