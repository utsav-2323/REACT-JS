import React from 'react';

function Home({record}) {
  return (
    <div>
        {
            record.map((e,i) =>{
                return <ul key={i}>
                    <li>{e.id}</li>
                    <li>{e.name}</li>
                    <li>{e.email}</li>
                </ul>
            })
        }
    </div>
  );
}

export default Home