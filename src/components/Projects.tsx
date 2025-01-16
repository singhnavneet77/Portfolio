import React from "react";
import '@fortawesome/free-regular-svg-icons'
import GitHubIcon from "@mui/icons-material/GitHub";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython,} from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Projects.scss';


const labelsFirst = [
    "React",
    // "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
];

const labelsSecond = [
    "Jupitor Notebook",
    "Python",
    "Pandas",
    "Sea Born",
    "ML Algo",
];

const labelsThird = [
  "React",
    // "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS"
];

function Projects() {
    return (
    <div className="container" id="projects">
        <div className="projects-container">
            <h1>Projects</h1>
            <div className="projects-grid">
                <div className="projects">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Medicine Distribution System</h3>
                    <p>Designed and implemented a web-based Medicine Distribution System that suggests personalized medicines based on patient health profiles, leveraging data analysis and modern web technologies to enhance healthcare accessibility and decision-making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                       <div className="git">
                         <a href="https://github.com/singhnavneet77" target="_blank" rel="noreferrer">
                            <GitHubIcon />
                         </a>
                        </div>
                </div>

                <div className="projects">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Diseases Prediction</h3>
                    <p>Developed a Disease Prediction System web application capable of predicting heart disease, diabetes, and breast cancer using machine learning models, providing accurate and early diagnosis support to improve healthcare outcomes.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                            
                        ))}
                    </div>
                    <div className="git">
                         <a href="https://github.com/singhnavneet77/AIML_PROJECT" target="_blank" rel="noreferrer">
                            <GitHubIcon />
                         </a>
                    </div>
                </div>

                <div className="projects">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Personal Portfolio</h3>
                    <p>Created a personal portfolio website to showcase projects, skills, and professional achievements, featuring a responsive design and good user experience to effectively highlight expertise and career journey.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    <div className="git">
                         <a href="https://github.com/singhnavneet77" target="_blank" rel="noreferrer">
                            <GitHubIcon />
                         </a>
                    </div>
                </div>

                <div className="projects">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Certificate Distribution System</h3>
                    <p>Developed a dynamic web application for certificate distribution, enabling users to generate, verify, and manage certificates efficiently, leveraging modern web technologies to ensure seamless functionality and user experience.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    <div className="git">
                         <a href="https://github.com/singhnavneet77/HexClan" target="_blank" rel="noreferrer">
                            <GitHubIcon />
                         </a>
                    </div>
                </div>
{/* 
                <div className="projects">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Personal Portfolio</h3>
                    <p>Created my personal portfolio to showcase my work.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    <div className="git">
                         <a href="https://github.com/singhnavneet77" target="_blank" rel="noreferrer">
                            <GitHubIcon />
                         </a>
                    </div>
                </div> */}

                
            </div>
        </div>
    </div>
    );
}

export default Projects;
