import React from 'react'
import ReactDOM from 'react-dom'
import head from './images/head.JPG'
import './index.css'

const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Jamie',
  lastName: 'Thompson',
}
const date = 'May 18, 2023'

const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p> Instructor: {author.firstName} {author.lastName}</p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = 2020
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

const UserCard = () => (
  <div className='user-card'>
    <img src={head} alt='jamie image' className='user-img'/>
    <h2>{author.firstName} {author.lastName}</h2>
  </div>
)

const TechList = () => {
  const techs = ['HTML','CSS','JavaScript']
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted
}

const Main = () => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList/>
      </ul>
      <UserCard/>
    </div>
  </main>
)

const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2023</p>
    </div>
  </footer>
)

const App = () => (
  <div className='app'>
    <Header/>
    <Main/>
    <Footer/>
  </div>
)

//////////////////////////////////////////////////

const buttonStyles = {
  padding: '10px 20px',
  background: 'rgb(0,255,0)',
  border: 'none',
  borderRadius: 5,
}

const Button = () => <button style={buttonStyles}> action </button>

/////////////////////////////////////////////////////////

const hexaColour = () => {
  let str = '0123456789abcdef'
  let color = ''
  for(let i=0; i<6;i++){
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColour = () => (
  <div style={{backgroundColor: hexaColour()}}>{hexaColour()}</div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<HexaColour/>, rootElement)

