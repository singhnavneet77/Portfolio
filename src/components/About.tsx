import React from 'react';
import '../assets/styles/About.scss';
import { TbBrandLeetcode } from "react-icons/tb";
import { SiCodeforces } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import { SiHackerearth } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";
import { FaEarlybirds } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";

function About() {
  const resumeLink = "https://drive.google.com/file/d/1I7PlJmbcU2z_Kgu0UfBfEZJ-C_ZqvxT1/view?usp=sharing";
  return (
    <div className='container' id='about'>
      <div className='about-container'>
        <h1>About</h1>
        <div className='about-content'>
          <p>👨‍💻 Hi, I'm <strong>Navneet Kumar Singh</strong>, a Software Engineer .</p>
          <p>🎓 Currently pursuing my Bachelor of Technology in Computer Science at LIET, I'm all about building reliable, scalable software that makes a difference.</p>
          <p>🛠 From Machine Learning Engineer to software development, I've led enterprise-level projects that streamline operations and deliver real impact.</p>
          <p>🔧 I enjoy automating workflows, optimizing systems, and turning complex challenges into real results. 📈</p>
          <p>💡 I'm always curious and constantly learning.</p>
          <p>See my resume and coding profiles.</p>

          <div className='action-section'>
            <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="resume-button">
              View Resume
            </a>
            <div className='icon-container'>

              <a href="https://leetcode.com/u/singhnavneet/" target="_blank" rel="noopener noreferrer" className="icon leetcode">
              <TbBrandLeetcode size={50}/>
                <span className="tool">LeetCode</span>
              </a>

              <a href="https://codeforces.com/profile/singhnavneet" target="_blank" rel="noopener noreferrer" className="icon  codeforces">
              <SiCodeforces size={50}/>
                <span className="tool">Codeforces</span>
              </a>

              <a href="https://www.geeksforgeeks.org/user/singhnavneet/" target="_blank" rel="noopener noreferrer" className="icon gfg">
              <SiGeeksforgeeks size={50}/>
                <span className="tool">GeeksforGeeks</span>
              </a>

              <a href="https://www.codechef.com/users/singhnavneet" target="_blank" rel="noopener noreferrer" className="icon codechef">
              <SiCodechef size={50}/>
                <span className="tool">CodeChef</span>
              </a>

              <a href="https://www.naukri.com/code360/profile/singhnavneet" target="_blank" rel="noopener noreferrer" className="icon codingninja">
              <SiCodingninjas size={50}/>
                <span className="tool">CodingNinjas</span>
              </a>

              <a href="https://codolio.com/profile/singhnavneet" target="_blank" rel="noopener noreferrer" className="icon codolio">
              <FaEarlybirds size={50}/>
                <span className="tool">Codolio</span>
              </a>

              <a href="https://www.hackerrank.com/profile/NK_NAVNEET" target="_blank" rel="noopener noreferrer" className="icon hackerrank">
              <FaHackerrank size={50}/>
                <span className="tool">Hackerrank</span>
              </a>

              <a href="https://www.hackerearth.com/@singhnavneet/" target="_blank" rel="noopener noreferrer" className="icon hackerearth">
              <SiHackerearth size={50}/>
                <span className="tool">Hackerearth</span>
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;