import React from 'react';
import ReactDOM from 'react-dom';
import rlogo from './images/icons8-react-100.png'
import htmllogo from './images/icons8-html-5-96.png'
import jslogo from './images/icons8-javascript-96.png'
import csslogo from './images/icons8-css-96.png'
import './index.css'
import head from './images/head.JPG'
import clock from './images/clock.png'
import tick from './images/check.png'

const Ex1Header = () => (
  <header>
    <div className='ex1-header-wrapper'>
      <h1>Front End Technologies</h1>
    </div>
  </header>
)

const Ex1Main = () => (
  <main>
    <div className='ex1-main-wrapper'>
      <img src={rlogo} alt='react'/>
      <img src={htmllogo} alt='html'/>
      <img src={csslogo} alt='css'/>
      <img src={jslogo} alt='js'/>
    </div>
  </main>
)

const ExerciseOne = () => (
  <div className='ex1-wrapper'>
    <Ex1Header/>
    <Ex1Main/>
  </div>
)

////////////////////////////////////////////////////////////////

const Ex2Header = () => (
  <ex2header>
    <div className='ex2-header-wrapper'>
      <h1>Subscribe</h1>
      <p>Sign up with your email to receive news and updates</p>
    </div>
  </ex2header>
)

const Ex2Main = ()=>(
  <ex2main>
    <div className='ex2-main-wrapper'>
      <div className='inputs'>
      <input placeholder='First Name' className='input'></input>
      <input placeholder='Last Name' className='input'></input>
      <input placeholder='Email' className='input'></input>
      </div>
      <button className='btn'>Subscribe</button>
    </div>
  </ex2main>
)

const ExerciseTwo = () => (
  <div className='ex2-wrapper'>
    <Ex2Header/>
    <Ex2Main/>
  </div>
)

/////////////////////////////////////////////////////////////////////////
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const col1 = hexaColor()
const col2 = hexaColor()
const col3 = hexaColor()
const col4 = hexaColor()
const col5 = hexaColor()

const Ex3Main = () => (
  <ex3main>
    <div className='ex3-main-wrapper'>
      <div className='colour-div' style={{backgroundColor: col1}}>{col1}</div>
      <div className='colour-div' style={{backgroundColor:col2}}>{col2}</div>
      <div className='colour-div' style={{backgroundColor:col3}}>{col3}</div>
      <div className='colour-div' style={{backgroundColor:col4}}>{col4}</div>
      <div className='colour-div' style={{backgroundColor:col5}}>{col5}</div>
    </div>
  </ex3main>
)

const ExerciseThree = ()=>(
  <div className='ex3-wrapper'>
    <Ex3Main/>
  </div>
)

/////////////////////////////////////////////////////////////////////////////////////

const Ex4Header = () =>(
  <ex4header>
    <div className='ex4-header-wrapper'>
      <img src={head} className='ex4-head' alt='headshot'/>
      <div className='name'>
        <h2>Jamie Thompson</h2>
        <img src={tick} alt='tick' className='tick'/>
      </div>
      
      <p>Software Developer</p>
    </div>
  </ex4header>
)


const SkillsDivs = ()=>{
  const skills = ['HTML','CSS','JS','React','Redux','Node','MongoDB','Python','Flask','NumPy','Pandas','Data Analyst','MYSQL','GraphQL','D3.js','Gatsby','Docker','Heroku','Git']
  const skilldFormatted = skills.map((skill)=><div key={skill} className='skill'>{skill}</div>)
  return skilldFormatted
}

const Ex4Main = () => (
  <ex4main>
    <div className='ex4-main-wrapper'>
      <h2>Skills</h2>
      <div className='skills-wrapper'><SkillsDivs/></div>
      
    </div>
  </ex4main>
)

const  Ex4Footer = () =>(
  <ex4footer>
    <div className='ex4-footer-wrapper'>
      <img src={clock} alt='clock' className='clock'/>
      <p>Joined on 18 May, 2023</p>
    </div>
  </ex4footer>
)

const ExerciseFour = ()=>(
  <div className='ex4-wrapper'>
    <Ex4Header/>
    <Ex4Main/>
    <Ex4Footer/>
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<ExerciseFour/>,rootElement)

