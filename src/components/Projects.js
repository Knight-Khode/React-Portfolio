import React from 'react'

function Projects() {
    return (
        <div id="project">
            <div className="container2 project-content">
                <div className="box">
                    <div id="project-img"></div>
                    <div className="project-desc">
                        <p>Covid web app that provides real time covid stats across the world</p>
                        <a href='https://github.com/Knight-Khode/covid-stats'>View code</a>
                    </div>
                </div>
                <div class="box">
                    <div id="project-img2"></div>
                    <div className="project-desc">
                        <p>A 10 question quiz game that provides questions from an online api</p>
                        <a href='#'>View code</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
