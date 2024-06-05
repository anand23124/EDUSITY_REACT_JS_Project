import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'



const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about_left">
            <img src={about_img} alt="" className='about_img'/>
            <img src={play_icon} alt="" className='play_icon' onClick={() =>{setPlayState(true)}}/>
        </div>
        <div className="about_right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nuturing Tomorrow's Leaders Today</h2> 
            <p>At University, we believe that education is the key to unlocking the potential of our
            At University, we believe that education is the key to unlocking the potential of our
            At University, we believe that education is the key to unlocking the potential of our
            At University, we believe that education is the key to unlocking the potential of our
            </p>
            <p>At University, we believe that education is the key to unlocking the potential of our
            At University, we believe that education is the key to unlocking the potential of our
            At University, we believe that education is the key to unlocking the potential of our
            At University, we believe that education is the key to unlocking the potential of our
            </p>
            
        </div>
    </div>
  )
}

export default About