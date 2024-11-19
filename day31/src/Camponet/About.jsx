import React from 'react'
import './About.css'

function About() {
  return (
    <div className="about">
        <div className='a-main'>
        <div className="a-tital">
            <h4>ABOUT ME</h4>
        </div>
        <div className="a-text">
            <p>My name is Utsav Bhalodiya and I am a Web Designer, and I'm very passionate and dedicated to my work. With 3 years experience as a professional Web Designer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration. Thanks a lot for your attention and your trust!</p>
        </div>
        <div className="a-bayo">
            <div className="a-by1">
                <div className="a-n-boy1">
                    <h5>Name:</h5>
                    <h5>City:</h5>
                    <h5>Phone:</h5>
                </div>
                <div className="a-n-boy2">
                    <h5>Utsav Bhalodiya</h5>
                    <h5>Dwarka , Bhanvadh</h5>
                    <h5>+91 99136-51459</h5>
                </div>
            </div>
            <div className="a-by2">
            <div className="a-n-boy3">
                    <h5>Age:</h5>
                    <h5>Job:</h5>
                    <h5>Email:</h5>
                </div>
                <div className="a-n-boy4">
                    <h5>23</h5>
                    <h5>Web Designer</h5>
                    <h5>utsacbhalodiya2323@gmail.com</h5>
                </div>
            </div>
        </div>
        <div className="a-btn">
            <button>Download CV</button>
        </div>
    </div>

    
    <div className="a-main2">
        <div className="legvej">
            <h4>KNOWLEDGE</h4>
        </div>
        <div className="leg1">
            <div className="skill1">
                <h3>PROGRAMMING SKILLS</h3>
            </div>
            {/* 1 */}
            <div className="skill2">
                <div className="skl1">
                <h6>WordPress</h6>
                </div>
                <div className="skl2">
                <h6>85%</h6>
                </div>
            </div>
            <div className="skill3">
                <div className="litti1">
                    <div className="lti-colo1"></div>
                </div>
            </div>
            {/* 2 */}
            <div className="skill4">
                <div className="skl3">
                <h6>Laravel</h6>
                </div>
                <div className="skl4">
                <h6>95%</h6>
                </div>
            </div>
            <div className="skill5">
                <div className="litti2">
                    <div className="lti-colo2"></div>
                </div>
            </div>
            {/* 3 */}
            <div className="skill6">
                <div className="skl5">
                <h6>Angular</h6>
                </div>
                <div className="skl6">
                <h6>75%</h6>
                </div>
            </div>
            <div className="skill7">
                <div className="litti3">
                    <div className="lti-colol3"></div>
                </div>
            </div>

        </div>
        <div className="leg2">
        <div className="skill8">
                <h3>PROGRAMMING SKILLS</h3>
            </div>
            {/* 1 */}
            <div className="skill9">
                <div className="l1">
                <h6>English</h6>
                </div>
                <div className="l2">
                <h6>100%</h6>
                </div>
            </div>
            <div className="skill10">
                <div className="l3">
                    <div className="l-colo1"></div>
                </div>
            </div>
            {/* 2 */}
            <div className="skill11">
                <div className="l4">
                    <h6>Arabic</h6>
                </div>
                <div className="l5">
                    <h6>90%</h6>
                </div>
            </div>
            <div className="skill12">
                <div className="l6">
                    <div className="l-colo2"></div>
                </div>
            </div>
             {/* 3 */}
             <div className="skill13">
                <div className="l7">
                <h6>Japanese</h6>
                </div>
                <div className="l8">
                <h6>80%</h6>
                </div>
            </div>
            <div className="skill14">
                <div className="l9">
                    <div className="l-colol3"></div>
                </div>
            </div>
            
        </div>
        
    </div>

    </div>
    
  )
}

export default About