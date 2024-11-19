import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';

function Api() {
  const [record, setRecord] = useState([]);
  const [title, setTitle] = useState('');
  const [view, setView] = useState('');
  const [selectedId, setSelectedId] = useState(null); // For updating a record

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      let response = await axios.get("http://localhost:5000/posts");
      setRecord(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAdd = async () => {
    try {
    
      let id = record.length + 1
      
      let addData = await axios.post("http://localhost:5000/posts", { id: id.toString() , title, view });
      setRecord([...record, addData.data]);
      setTitle('');
      setView('');
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      let data = await axios.delete(`http://localhost:5000/posts/${id}`);
      console.log(data);
      
      setRecord(record.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleUpdate = async () => {
    if (selectedId !== null) {
      try {
        let updatedData = await axios.put(`http://localhost:5000/posts/${selectedId}`, { title, view });
        setRecord(record.map(item => item.id === selectedId ? updatedData.data : item));
        setSelectedId(null); // Reset selection after update
        setTitle('');
        setView('');
      } catch (error) {
        console.error("Error updating data:", error);
      }
    }
  };

  const handleEdit = (item) => {
    setSelectedId(item.id); // Set ID for the item to be updated
    setTitle(item.title);
    setView(item.view);
  };

  return (
    <div>
      <div className="tital">
      <h1>Json-Server</h1>
      </div>
      
      <div className="add">
        <div className="box">
          <input
          className='i1'
            type="text"
            placeholder='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
          className='i1'
            type="text"
            placeholder='view'
            value={view}
            onChange={(e) => setView(e.target.value)}
          />
          <button className='i2' onClick={selectedId ? handleUpdate : handleAdd}>
            {selectedId ? 'Update' : 'Add'}
          </button>
        </div>
      </div>
      <div className="row a">
        <div className='b'>
          <div className="c">
            {record.length > 0 ? (
              record.map((e, i) => {
                return (
                    <div className='b1' key={i}>
                      <div className="m-a1">
                      <p className='bb1'>id= {e.id}</p>
                      <p className='bb1'>title= {e.title}</p>
                      <p className='bb1'>view= {e.view}</p>
                      </div>

                      <div className="m-a2">
                      <button id='dlt' onClick={() => handleDelete(e.id)}>delete</button>
                    <button id='end' onClick={() => handleEdit(e)}>Edit</button>
                      </div>
                    
                    
                  </div>
                  
                );
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Api;
