import React from 'react';
import { Container } from 'react-bootstrap';
import monirLogo from '../../images/monir2.png';
import './About.css';

const About = () => {
    return (
        <Container className='bg-light py-5'>
            <div className="row">
                <div className="col-md-4">
                    <div>
                        <img src={monirLogo} className='w-100' alt="Monir Logo" />
                    </div>
                </div>
                <div className="col-md-6 offset-md-2">
                    <h2>Md. Monirul Islam</h2>
                    <h4 className='b-btm d-inline-block mt-3'>React Frontend Developer</h4>

                    <p className='mt-2 mb-1'><strong>Email:</strong> monir.rj@gmail.com</p>
                    <p className='mb-1'><strong>Address:</strong> Rajshahi, Bangladesh</p>
                    <p className='mb-2'><strong>Phone:</strong> 01723524241</p>

                    <h4 className='b-btm d-inline-block mt-3'>My Future Goal</h4>
                    <p>
                        I am a junior web developer also I'm a fast learner and a hard-working person. Last few months I learned <strong>HTML5,CSS3,Bootstrap5,Tailwind, Javascript, React</strong>. I completed some projects with <strong>React,React-Router-Dom, React-Bootstrap and React Firebase Authentication Hooks</strong>.
                    </p>
                    <p>
                        Now my next plan is to learn database and complete more projects. Because practice is the main key in this field. and then I will make a good Resume and drop my Github link, updated my Github profile, and will keep many projects in my Github profile for a strong Github profile. Then I look for jobs or intern or remote job, when I will searching for a job or intern at that time I also learn backend web development. I hope one day I will be a full-stack web developer InshaAllah.
                    </p>

                </div>
            </div>
        </Container>
    );
};

export default About;