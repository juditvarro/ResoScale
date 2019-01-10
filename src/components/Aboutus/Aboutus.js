import React from 'react';
import classes from './Aboutus.css';
import Profile from './Profile/Profile';
import profileimgKP from '../../assets/KrisztaParrag.jpg'
import profileimgJV from '../../assets/JuditVarro.jpg'


const aboutUs = (props) => {
  return (<div className={classes.About}>
    <h1>Who we are</h1>
    <div style={{ display: 'flex' }}>
      <Profile
        name='Kriszta Parrag'
        title='junior software developer'
        intro='10+ experience in the mobile and web development industry as a planner, pm and team leader. Looking for junior dev opportunities where I can combine my previous project experience with my new skills  (JavaScript, Node.js, React, Python). And the reason behind my career change?  Love of technology, motivation to understand implementation deeper, and be able to contribute in every level of a project.'
        imgsrc={profileimgKP}
        tech='React, JS, Node.js, Express, Python, MySQL'
      />
      <Profile
        name='Judit dr. Varró'
        title='junior software developer'
        intro='10+ experience in the mobile and web development industry as a planner, pm and team leader. Looking for junior dev opportunities where I can combine my previous project experience with my new skills  (JavaScript, Node.js, React, Python). And the reason behind my career change?  Love of technology, motivation to understand implementation deeper, and be able to contribute in every level of a project.'
        imgsrc={profileimgJV}
        tech='React, JS, Node.js, Express, MySQL'
      />
    </div>
  </div>)
}

export default aboutUs