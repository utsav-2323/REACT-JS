import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Camponet/Nav1';
import Home1 from './Camponet/Home1';
import About from './Camponet/About';
import Services from './Camponet/Services';
import Portfolio1 from './Camponet/Portfolio1';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="Container main-box">
      <div className="Row sec1 ">
        <Nav/>
      </div>
      <div className="Col sec2">
        <Home1/>
        <About/>
        <Services/>
        <Portfolio1/>
      </div>
    </div>
    
    </>
  )
}

export default App
