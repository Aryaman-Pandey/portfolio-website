import React from 'react'
import './Projects.css'
import reporterrat from './items/Untitled design.png'
import textutilsimg from './items/textutils-icon.png'
import b2wimg from './items/inp_out.png'
import clplt from './items/cpgenerator.png'
import bnhcs from './items/bnhlogo.png'
import bnhcsapp from './items/app-release.apk'
import beatmakerimg from './items/beatmaker-icon.png'
import todolistimg from './items/todolist.png'
import rockpsimg from './items/rockps.png'
import bankimg from './items/bankmanagement.png'

const Projects = () => {
  return (
      <div id='projects'>
    <div className="header__title">
      <h1>Projects</h1>
      </div>
      <div className='container my-3'>
      <div className="row row-cols-1 row-cols-md-3">
        <div className="col-md-4 my-3">
          <div className="card bg-dark" style={{width: '19rem'}}>
            <img src={reporterrat} className="card-img-top" alt="myimg"/>
            <div className="card-body"  >
              <h5 className="card-title">Reporter Rat</h5>
              <p className="card-text">ReporterRat is a Web Application that delivers you the daily news digest. It has been developed using News API and React.</p>
              <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                <a href="https://github.com/Aryaman-Pandey/reporterrat" rel="noreferrer" target="_blank" className="btn btn-primary">Have a look</a>
                </div>
            </div>
          </div>
        </div>
  <div className="col-md-4 my-3">
    <div className="card bg-dark" style={{width: '19rem'}}>
      <img src={textutilsimg} className="card-img-top" alt="myimg"/>
      <div className="card-body">
        <h5 className="card-title">TextUtils</h5>
        <p className="card-text">The main purpose of this app is to develop an Online Text Editor with Minimal Features and to provide the users with a Smooth and Seamless Experience.</p>
        <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                <a href="https://happy-wing-2085aa.netlify.app/" rel="noreferrer" target="_blank" className="btn btn-primary">Have a look</a>
                </div>
      </div>
    </div>
  </div>
  <div className="col-md-4 my-3">
    <div className="card bg-dark" style={{width: '19rem'}}>
      <img src={b2wimg} className="card-img-top" alt="myimg"/>
      <div className="card-body">
        <h5 className="card-title">Colourizer</h5>
        <p className="card-text">Colourizer is an application which converts black & white pictures into Colored Pictures. It has been developed in Python</p>
        <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                <a href="https://github.com/Aryaman-Pandey/blackwhite" rel="noreferrer" target="_blank" className="btn btn-primary">Have a look</a>
                </div>
      </div>
    </div>
  </div>
  <div className="col-md-4 my-3">
    <div className="card bg-dark" style={{width: '19rem'}}>
      <img src={clplt} className="card-img-top" alt="myimg"/>
      <div className="card-body">
        <h5 className="card-title">Color Palette Generator</h5>
        <p className="card-text">A Color Palette Generator developed in HTML, CSS and JavaScript. Makes use of Local Storage and enhances the comprehension of functions in JavaScript.</p>
        <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                <a href="https://aryaman-pandey.github.io/color-palette-generator/" rel="noreferrer" target="_blank" className="btn btn-primary">Have a look</a>
                </div>
      </div>
    </div>
  </div>

  <div className="col-md-4 my-3">
    <div className="card bg-dark" style={{width: '19rem'}}>
      <img src={bnhcs} className="card-img-top" alt="myimg"/>
      <div className="card-body">
        <h5 className="card-title">BNHCS - A School App</h5>
        <p className="card-text">This App has been developed for B.N. Heaven Convent School, Kerakat. It has been developed in Android Studio using Java, Xml and Firebase.</p>
        <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                <a href={bnhcsapp} download="BNHCS" className="btn btn-primary">Download the App</a>
                </div>
      </div>
    </div>
  </div>

  <div className="col-md-4 my-3">
    <div className="card bg-dark" style={{width: '19rem'}}>
      <img src={beatmakerimg} className="card-img-top" alt="myimg"/>
      <div className="card-body">
        <h5 className="card-title">Beatmaker</h5>
        <p className="card-text">Beatmaker is a Web Application that helps you make music using various sounds, beats, variations, tempo and amplifications.</p>
        <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                <a href="https://aryaman-pandey.github.io/beatmaker/" rel="noreferrer" target="_blank" className="btn btn-primary">Have a Look</a>
                </div>
      </div>
    </div>
  </div>

  <div className="col-md-4 my-3">
    <div className="card bg-dark" style={{width: '19rem'}}>
      <img src={todolistimg} className="card-img-top" alt="myimg"/>
      <div className="card-body">
        <h5 className="card-title">ToDo List</h5>
        <p className="card-text">ToDo List is a simple Web Application. It has been developed using HTML, CSS, JavaScript (ES6) & utilizes local storage to carry out regular operations.</p>
        <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                <a href="https://aryaman-pandey.github.io/ToDo-List/" rel="noreferrer" target="_blank" className="btn btn-primary">Have a Look</a>
                </div>
      </div>
    </div>
  </div>

  <div className="col-md-4 my-3">
    <div className="card bg-dark" style={{width: '19rem'}}>
      <img src={rockpsimg} className="card-img-top" alt="myimg"/>
      <div className="card-body">
        <h5 className="card-title">Rock Paper Scissors</h5>
        <p className="card-text">A simple Rock, Paper, Scissors online game developed using JavaScript, HTML and CSS.</p>
        <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                <a href="https://aryaman-pandey.github.io/rock-paper-scissors/" rel="noreferrer" target="_blank" className="btn btn-primary">Have a Look</a>
                </div>
      </div>
    </div>
  </div>

  <div className="col-md-4 my-3">
    <div className="card bg-dark" style={{width: '19rem'}}>
      <img src={bankimg} className="card-img-top" alt="myimg"/>
      <div className="card-body">
        <h5 className="card-title">Bank of Transylvania</h5>
        <p className="card-text">A Simple Banking Application developed using Java. It has been developed to practice and to implement the concept of OOPs and File Management in Java. It has been developed in BlueJ</p>
        <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                <a href="https://github.com/Aryaman-Pandey/Bank_of_Taransylvania" rel="noreferrer" target="_blank" className="btn btn-primary">Have a Look</a>
                </div>
      </div>
    </div>
  </div>

</div>
</div>
</div>
  
  )};

export default Projects;