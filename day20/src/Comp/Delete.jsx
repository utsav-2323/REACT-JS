import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Delete({record, setRecord}) {
    const [num, setNum]= useState(null);
    const navigate = useNavigate();
    const handleDelete = () => {
        let data = record.filter((item) => item.id != num);
        setRecord(data);
        navigate("/")
    }
  return (
    <div>
     <div className="row">
  <div data-aos="fade-right" className="col col-lg-6 col-md-6 col-sm-6 col-12">
    <img className='img-fluid' src="https://img.freepik.com/premium-photo/sign-login-website-page_406811-99942.jpg?ga=GA1.1.475990448.1726234302&semt=ais_hybrid" alt="" />
  </div>
  <div data-aos="fade-left" className="col col-lg-6 col-md-6 col-sm-6 col-12">
    <div className="box">
<input type="text" placeholder='Enter Id' onChange={(e) => setNum(e.target.value)} /><br></br>
<button onClick={handleDelete}>Delete</button>
</div>
  </div>
</div>
    </div>
  )
}

export default Delete

