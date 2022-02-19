import React, {Component} from 'react'
import './About.css'
import mypic from './items/proff_pic.jpg'

export class About extends Component {

  render(){
  return (
    <div className='container' id='about'>
      <div className='row'>
        <div className='col-sm-12 col-md-6'>
          <div className="image__container d-none d-lg-block">
          <img className="my_photo" src={mypic} alt="my pic" style={{height: "100%", width: "100%"}}/>
          </div>
        </div>
        <div className='col-sm-12 col-md-6'>
    <div className='heading_title'>
      <h1><span className='visible-xs-inline'>About Me</span></h1>
    </div>
    <div className="content my-3">
      <p>I am a Computer Science Engineer with keen interest in learning new Technologies and developing Serviceable Applications. I completed my B.Tech (specializing in Computer Science) from GLBITM, Greater Noida.  I have always been passionate about coding, ever since my School Years. I still continue to work with the fascination I started with.</p>
      <p>I am a Competitive Programmer with Java, Python and C++ as my main tools. I love working on projects in different domains like Machine Learning, Android App Development, Angular, React, Web Development etc.</p>
    </div>
    </div>
    </div>
    </div>
    ); }}

    export default About;