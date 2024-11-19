import React from 'react';
import './Portfolio1.css';

function Portfolio1() {
  return (
    <>
      <div className='portfolio'>
        <div className="port-main">
          <div className="port-tital">
            <h4>CREATIV PORTFOLIO</h4>
          </div>
          <div className="port-nav">
            <li><a href="">All</a></li>
            <li><a href="">Web-Site</a></li>
            <li><a href="">Graphic Design</a></li>
          </div>
          <div className="port-img">
            <div className="p-img">
              <div className="w-img">
                <img src="https://marketifythemes.net/html/aarlo/img/portfolio/1.jpg" alt="" srcset="" />
              </div>
              <div className="w-img">
                <img src="https://marketifythemes.net/html/aarlo/img/portfolio/2.jpg" alt="" />
              </div>
            </div>
            <div className="p-img">
              <div className="w-img">
                <img src="https://marketifythemes.net/html/aarlo/img/portfolio/3.jpg" alt="" srcset="" />
              </div>
              <div className="w-img">
                <img src="https://marketifythemes.net/html/aarlo/img/portfolio/4.jpg" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default Portfolio1