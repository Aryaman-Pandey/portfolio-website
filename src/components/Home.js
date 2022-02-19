import React from 'react';
import './Home.css';
import {FaLinkedinIn, FaGithub, FaInstagram, FaTwitter, FaDownload} from "react-icons/fa";
import TypeWriter from 'typewriter-effect';
import usepro from './items/Untitled56_20220211204254_ccexpress.png';
import resume from './items/Aryaman Pandey Resume 2022.pdf';




const Home = () => {
  return (
    <div className="container" id='home'>
      <div className="row">
        <div className="col-md-6">
        <div>
            <img className="banner__img" src={usepro} alt="man" />
          </div> 
        </div>
        <div className="col-md-6" >
        <div className="header__content">
            <div className="header__section">
              <div className="ul__element">
              <ul className="header__ul">
                <li>
                  <a href="https://www.linkedin.com/in/aryamanpandey1808/" rel="noreferrer" target="_blank" ><FaLinkedinIn className="headerIcon" /></a>
                </li>
                <li>
                  <a href="https://www.github.com/Aryaman-Pandey" rel="noreferrer" target="_blank" ><FaGithub className="headerIcon" /></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/thecinematicidiot/" rel="noreferrer" target="_blank" ><FaInstagram className="headerIcon" /></a>
                </li>
                <li>
                  <a href="https://twitter.com/nobrakebicycle" rel="noreferrer" target="_blank" ><FaTwitter className="headerIcon" /></a>
                </li>
              </ul>
              </div>
              <h1>Hi, My Name is Aryaman Pandey</h1>
              <div className="typewriter_animation"><TypeWriter
               options={{ 
                autoStart: true,
                loop: true
              }} 
              onInit={(typewriter) =>
                {typewriter.typeString("Programmer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Learner")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Coder")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Developer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Creator")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Engineer")
                .pauseFor(1000)
                .deleteAll()
                .start();
              }}/>
              </div>
              <p></p>
              <div className="header__buttons">
                <a href={resume} download="Aryaman Pandey Resume" className="btn btn-smart">
                  Download Resume <FaDownload/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )};

export default Home;
