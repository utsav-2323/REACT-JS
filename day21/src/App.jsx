import { useState } from 'react'
import './App.css'
import Deta from './Componet/Deta';
import Crad from './Componet/Crad';
import Buttan from './Componet/Buttan';
import data from './Componet/Deta';

function App() {
  const [item, setItems] = useState(Deta);
  const menuItams =[...new Set(Deta.map((val) => val.category))]

  const filterItems = (cat) => {
    const newItmes =data.filter((newval) => newval.category === cat);
    setItems(newItmes);
  }
  return (
    <>
    <div className='main'>
      <div className="a">
        <h1>Food App</h1>
      </div>
      <div className="b">
        <Buttan
        menuItams = {menuItams}
        filterItems={filterItems}
        setItems={setItems}
        />
      </div>
      <div className="c">
      <Crad item={item}/>
      </div>

    </div>
      
    </>
  )
}

export default App
