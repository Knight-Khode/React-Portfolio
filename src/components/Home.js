import React from 'react'
import Cv from './cv.docx'

function Home() {
    return (
        <div id="home">
            <div className="container2 home-content">
                <div id="home-desc">
                    <h1 className='large m1'>Hello There</h1>
                    <h2 className='medium m1'>I am Elmir</h2>
                    <h3 className='small  mb'>A Web Developer</h3>
                </div>
                <div id="image">
                    <div id="overlay">
                        <a href={Cv} download="Elmir Cv">Download CV</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
