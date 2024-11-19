import React, { useEffect, useState } from 'react';

function Crud() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem('students')) || [];
    setData(existingData);
  }, []);

  const handleSubmit = () => {
    const obj = {
      name: name,
      password: password, 
    };

    const updatedData = [...data, obj];
    setData(updatedData);
  };

  

  return (
    <div>
      <div className="se-1">
        <div className="a-1">
          <h1  data-aos="zoom-in">Login Form</h1>
        </div>
        <div className="b-1">
          <label htmlFor="">User Name</label>
          <input type="text" placeholder="User Name" onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="b-1">
          <label htmlFor="">Password</label>
          <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="b-1">
          <button onClick={handleSubmit}>Submit</button>
        </div>

        <table border={1} width="100%">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((e, i) => (
                <tr key={i}>
                  <td>{e.name}</td>
                  <td>{e.password}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">Data not found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Crud;
