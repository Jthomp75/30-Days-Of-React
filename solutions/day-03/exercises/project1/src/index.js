import React from 'react'
import ReactDOM from 'react-dom'
import rlogo from './images/icons8-react-100.png'
import htmllogo from './images/icons8-html-5-96.png'
import jslogo from './images/icons8-javascript-96.png'
import csslogo from './images/icons8-css-96.png'
import './index.css'
import headshot from "./images/head.JPG"
import clock from './images/clock.png'
import check from './images/check.png'

const jsxElement = <h1>This is a JSX element</h1>

const title = "Front End Applications"
const ex1Header = (
  <header>
    <div className='ex1-header-wrapper'>
      <h2>{title}</h2>
    </div>
  </header>
)

const react_Logo = (
  <div>
    <img src={rlogo} alt='react logo' className='image'/>
  </div>
)
const css_Logo = (
  <div>
    <img src={csslogo} alt='css logo'className='image'/>
  </div>
)
const html_Logo = (
  <div>
    <img src={htmllogo} alt='html logo'className='image'/>
  </div>
)
const js_Logo = (
  <div>
    <img src={jslogo} alt='js logo'className='image'/>
  </div>
)

const ex1main = (
  <main>
    <div className='ex1-main-wrapper'>
      {react_Logo}
      {html_Logo}
      {css_Logo}
      {js_Logo}
    </div>
  </main>
)

const exercise1 = (
  <div>
    {ex1Header}
    {ex1main}
  </div>
)



const ex2header = (
  <ex2header>
    <div className='ex2-header-wrapper'>
      <h1 className='ex2title'>Subscribe</h1>
    </div>
  </ex2header>
)

const ex2main= (
  <ex2main>
    <div className='ex2-main-wrapper'>
        <div className='text'>
          <p>Sign up with you email address to receive updates.</p>
        </div>
        <div className='inputs'>
          <input type='text' value="First Name" className='input'></input>
          <input type='text' value="Last Name" className='input'></input>
          <input type='text' value="Email" className='input'></input>
        </div>
        <div className='btn_container'>
          <button className='btn'>Subscribe</button>
        </div>
    </div>
  </ex2main>
)

const exercise2 = (
  <div className='ex2'>
    {ex2header}
    {ex2main}
  </div>
)

const head = (
  <div>
    <img className='ex3img_head'src={headshot} alt='headshot'/>
  </div>
)
const tick = (
  <div className='tick-container'>
    <img className='ex3img_tick' src={check} alt='tick'/>
  </div>
)
const ex3header = (
  <ex3header>
    <div className='ex3-header-wrapper'>
      {head}<div className='name-div'>
      <h2>Jamie Thompson</h2>{tick}
      </div>
      
      
      <p>Intern Software Developer</p>
    </div>
  </ex3header>
)

const skills = ['HTML','CSS','JS','React','Redux','Node','MongoDB','Python','Flask','NumPy','Pandas','Data Analyst','MYSQL','GraphQL','D3.js','Gatsby','Docker','Heroku','Git']
const skillsformatted = skills.map(skill=><div key={skill} className='skill'>{skill}</div>)
const ex3main = (
  <ex3main>
    <div className='ex3-main-wrapper'>
      <h2>Skills</h2>
      <div className='skills-container'>{skillsformatted}</div>
    </div>
  </ex3main>
)

const clock_img = (
  <div className='ex3-clock-container'>
    <img src={clock} alt='clock' className='ex3img_clock'/>
  </div>
)
const ex3footer = (
  <ex3footer>
    <div className='ex3-footer-wrapper'>
      {clock_img}
      <p>Joined on Aug 30, 2020</p>
    </div>
  </ex3footer>
)

const exercise3 =(
  <div className='ex3'>
    {ex3header}
    {ex3main}
    {ex3footer}
  </div>
)

const rootElement = document.getElementById('root')



ReactDOM.render(exercise3, rootElement)