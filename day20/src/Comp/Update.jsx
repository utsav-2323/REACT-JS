import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Update({record,setRecord}) {
    const [num, setNum] = useState(null);
    const [names,setNames] = useState("");
    const [password,setPassword] = useState("");
    const [emall, setEmail] =useState("");
    const navigate = useNavigate();
    const handleUpdate = () =>{
        console.log(record);
        let data = record.map((item) => {
            if(item.id == num ){
                item.id =num,
                item.name = names
            }else{
                item
            }
        })
    }
  return (
    <div>
         <div className="row">
  <div data-aos="fade-right" className="col col-lg-6 col-md-6 col-sm-6 col-12">
    <img className='img-fluid' src="https://img.freepik.com/premium-photo/sign-login-website-page_406811-99942.jpg?ga=GA1.1.475990448.1726234302&semt=ais_hybrid" alt="" />
  </div>
  <div  data-aos="fade-left" className="col col-lg-6 col-md-6 col-sm-6 col-12">
    
    <div className="box">
    <input type="number" placeholder='Enter Id' onChange={(e) =>setNum(e.target.value)} /><br></br>
<input type="text" placeholder='Enter Name' onChange={(e) =>setNames(e.target.value)} /><br></br>
<input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} /><br></br>
<input type="password" placeholder='Enter Password' onChange={(e) =>setPassword(e.target.value)} /><br></br>
<button onClick={handleUpdate}>Update</button>
    </div>
  </div>
</div>

    </div>
  )
}

export default Update
