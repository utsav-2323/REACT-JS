import React, { useEffect, useState } from 'react';

function Crud() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [editIndex, setEditIndex] = useState(null);

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

    if (editIndex !== null) {
      let updatedData = [...data];
      updatedData[editIndex] = obj;
      setData(updatedData);
      localStorage.setItem("students", JSON.stringify(updatedData));
      setEditIndex(null);
    } else {
      const newData = [...data, obj];
      setData(newData);
      localStorage.setItem("students", JSON.stringify(newData));
    }

    setName("");
    setPassword("");
  };

  const handleDelete = (index) => {
    const remainingData = data.filter((e, i) => i !== index);
    setData(remainingData);
    localStorage.setItem("students", JSON.stringify(remainingData));
  };

  const handleEdit = (index) => {
    const singleData = data[index];
    setName(singleData.name);
    setPassword(singleData.password);
    setEditIndex(index);
  };

  return (
    <div>
      <div className="se-1">
        <div className="a-1">
          <h1>Login Form</h1>
        </div>
        <div className="b-1">
          <label htmlFor="">User Name</label>
          <input type="text" placeholder="User Name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="b-1">
          <label htmlFor="">Password</label>
          <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="b-1">
          <button onClick={handleSubmit}>{editIndex !== null ? "Update" : "Submit"}</button>
        </div>

        <table border={1} width="100%">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Password</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((e, i) => (
                <tr key={i}>
                  <td>{e.name}</td>
                  <td>{e.password}</td>
                  <td><button onClick={() => handleEdit(i)}>Edit</button></td>
                  <td><button onClick={() => handleDelete(i)}>Delete</button></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Data not found</td>
              </tr>
            )}
          </tbody>  
        </table>
      </div>
    </div>
  );
}

export default Crud;
