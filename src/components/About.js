import React from 'react'
import Cv from './cv.docx'

function About() {
    return (
        <div id="about">
            <div className="container2 about-content">
                <div id="left"></div>
                <div id="side-info">
                    <h1>Elmir Mohammed</h1>
                    <h3>Creative Web Designer</h3>
                    <hr></hr>
                    <p>My name is Mohammed Elmir. I am a Web Developer, and I'm very passionate and dedicated to my work.</p>
                    <p>I have acquired the skills and knowledge necessary to make your project a success</p>
                    <p>I enjoy every step of the design process, from discussion and collaboration.</p>
                    <a href={Cv} download="Elmir Cv">Download CV</a>
                </div>
            </div>
        </div>
    )
}

export default About
