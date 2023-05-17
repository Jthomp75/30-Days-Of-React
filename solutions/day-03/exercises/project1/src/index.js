import React from 'react'
import ReactDOM from 'react-dom'
import reactLogo from '../images/icon8-react-100.png'


const jsxElement = <h1>This is a JSX element</h1>

const title = "Front End Applications"
const ex1Header = (
  <header>
    <div className='header-wrapper'>
      <h2>{title}</h2>
    </div>
  </header>
)

const react_Logo = (
  <div>{reactLogo}</div>
)

const ex1main = (
  <main>
    <div className='main-wrapper'>
      {reactLogo}
    </div>
  </main>
)

const exercise1 = (
  <div>
    {ex1Header}
    {ex1main}
  </div>
)

const exercise2 = (
  <div></div>
)

const exercise3 =(
  <div></div>
)

const rootElement = document.getElementById('root')



ReactDOM.render(exercise1, rootElement)