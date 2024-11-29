
import React from "react";
import '../assets/styles/Skills.scss';
import { SiCplusplus } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython, faJava, faJs, faHtml5, faCss3, faNodeJs, faGithub, faGit } from '@fortawesome/free-brands-svg-icons';
import { faC } from "@fortawesome/free-solid-svg-icons";


function Skills() {
    return (
        <div className="container" id="skills">
            <div className="skills-container">
                <h1>Skills</h1>
                <div className="skills-grid">
                    <div className="skills">
                        
                        <h3>Programming Language</h3>
                        <div className="icon-group">
                        <div className="icon-item">
                               <FontAwesomeIcon icon={faC} size="3x" />
                                <span className="tooltip">C</span>
                            </div>
                            <div className="icon-item">
                                <SiCplusplus size={45} />
                                <span className="tooltip">C++</span>
                            </div>
                            <div className="icon-item">
                                <FontAwesomeIcon icon={faPython} size="3x" />
                                <span className="tooltip">Python</span>
                            </div>
                            <div className="icon-item">
                                <FontAwesomeIcon icon={faJava} size="3x" />
                                <span className="tooltip">Java</span>
                            </div>
                            <div className="icon-item">
                                <FontAwesomeIcon icon={faJs} size="3x" />
                                <span className="tooltip">JavaScript</span>
                            </div>
                        </div>

                        <h3>Web Development</h3>
                        <div className="icon-group">
                            <div className="icon-item">
                                <FontAwesomeIcon icon={faHtml5} size="3x" />
                                <span className="tooltip">HTML5</span>
                            </div>
                            <div className="icon-item">
                                <FontAwesomeIcon icon={faCss3} size="3x" />
                                <span className="tooltip">CSS3</span>
                            </div>
                            <div className="icon-item">
                                <FontAwesomeIcon icon={faReact} size="3x" />
                                <span className="tooltip">React</span>
                            </div>
                            <div className="icon-item">
                                <FontAwesomeIcon icon={faNodeJs} size="3x" />
                                <span className="tooltip">Node.js</span>
                            </div>
                            <div className="icon-item">
                                <RiTailwindCssFill size={45} />
                                <span className="tooltip">Tailwind CSS</span>
                            </div>
                        </div>

                        <h3>Tools</h3>
                        <div className="icon-group">
                            <div className="icon-item">
                                <VscVscode size={45} />
                                <span className="tooltip">VS Code</span>
                            </div>
                            <div className="icon-item">
                                <FontAwesomeIcon icon={faGithub} size="3x" />
                                <span className="tooltip">GitHub</span>
                            </div>
                            <div className="icon-item">
                                <FontAwesomeIcon icon={faGit} size="3x" />
                                <span className="tooltip">Git</span>
                            </div>
                            <div className="icon-item">
                                <SiPostman size={45} />
                                <span className="tooltip">Postman</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
