import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create( {record, setRecord}) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
      Aos.init({
        duration: 1000, // Set the duration of the animation in milliseconds
        once: true,     // Whether animation should happen only once - while scrolling down
      });
    }, []);

    const handleSubmit = () => {  
        setRecord([...record, { id: record.length + 1, name, email, password }]);
        navigate("/");
    };

    return (
        <div>
            <div className="row">
                <div data-aos="fade-right" className="col col-lg-6 col-md-6 col-sm-6 col-12 bo-1">
                    <img className='img-fluid' src="https://img.freepik.com/premium-photo/sign-login-website-page_406811-99942.jpg?ga=GA1.1.475990448.1726234302&semt=ais_hybrid" alt="login" />
                </div>
                <div data-aos="fade-left" className="col col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="box">
                        <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} /><br />
                        <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} /><br />
                        <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} /><br />
                        <button onClick={handleSubmit}>Submit</button>  
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create;
