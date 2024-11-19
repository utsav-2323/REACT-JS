import React, { useEffect, useState } from 'react';

function Crud() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ans, setAns] = useState("");
  const [description,setDescription] = useState("");
  const [question, setQuestion] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const [data, setData] = useState([]);

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem('students')) || [];
    setData(existingData);
  }, []);

  const handleSubmit = () => {
    const obj = {
      name: name,
      email: email,
      phone: phone,
      question: question,
      ans: ans,
      description: description,

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
    setEmail("");
    setPhone("");
    setQuestion("");
    setAns("");
    setDescription("");
  };

  const handleDelete = (index) => {
    const remainingData = data.filter((e, i) => i !== index);
    setData(remainingData);
    localStorage.setItem("students", JSON.stringify(remainingData));
  };

  const handleEdit = (index) => {
    const singleData = data[index];
    setName(singleData.name);
    setEmail(singleData.email);
    setPhone(singleData.phone);
    setQuestion(singleData.question);
    setAns(singleData.ans);
    setDescription(singleData.description);
    setEditIndex(index);
  };

  return (
    <div>
      <div className="se-1">
        <div className="a-1">
          <h1>SIMPLE SAVE LATER FORM</h1>
        </div>
        <div className="b-1">
          <label htmlFor="">User Name</label>
          <input type="text" placeholder="User Name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="b-1">
          <label htmlFor="">Email Id</label>
          <input type="text" placeholder="Email id" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="b-1">
          <label htmlFor="">Phone Nubar</label>
          <input type="text" placeholder="Phone nubar" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="b-1">
        <select className='s1' value={question} onChange={(e) => setQuestion(e.target.value)} required >
                <option value="" disabled>Select Question</option>
                <option value="BCA">bca</option>
                <option value="MCA">mca</option>
                <option value="PGDCA">pgdca</option>
              </select>
        </div>
        <div className="b-1">
          <label htmlFor="">ANS</label>
          <input type="text" placeholder="ans" value={ans} onChange={(e) => setAns(e.target.value)} required />
        </div>
        <div className="b-1">
          <label htmlFor="">Description</label>
          <input type="text" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div className="b-1">
          <button onClick={handleSubmit}>{editIndex !== null ? "Update" : "Submit"}</button>
        </div>

        <table border={1} width="100%">
          <thead>
            <tr>
              <th className='i1'>User Name</th>
              <th className='i1'>Email</th>
              <th className='i1'>Phone Nuber</th>
              <th className='i1'>question</th>
              <th className='i1'>Ans</th>
              <th className='i1'>description</th>
              <th className='i1' colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((e, i) => (
                <tr key={i}>
                  <td >{e.name}</td>
                  <td >{e.email}</td>
                  <td >{e.phone}</td>
                  <td >{e.question}</td>
                  <td >{e.ans}</td>
                  <td >{e.description}</td>
                  <td ><button onClick={() => handleEdit(i)}>Edit</button></td>
                  <td ><button onClick={() => handleDelete(i)}>Delete</button></td>
                </tr>
              ))
            ) : (
              <tr >
                <td colSpan="4" className='i4'>  Data not found</td>
              </tr>
            )}
          </tbody>  
        </table>
      </div>
    </div>
  );
}

export default Crud;
