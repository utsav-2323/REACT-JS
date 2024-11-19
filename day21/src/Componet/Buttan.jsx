import React from 'react';
import data from './Deta';

function Buttan({menuItams, filterItems, setItems}) {
  return (
    <div>
        <button className='btnt' onClick={() => setItems(data)}>
        All
        </button>
        {
            menuItams.map(val => (
                <button className='btnt' onClick={() => filterItems(val)}>
                    {val}
                </button>
            ))
        }

    </div>
  )
}

export default Buttan