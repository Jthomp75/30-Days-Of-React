import { GraphQLDirective } from 'graphql';
import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  console.log(props)
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.welcome}</h1>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>
          {props.firstName} {props.lastName}
        </p>
        <small>{props.date}</small>
      </div>
    </header>
  )
}

const App1 = ()=> {
  const welcome="Welcome to 30 Days of React"
  const   title='Getting Started React'
   const     subtitle='JavaScript Library'
    const    firstName='Jamie'
  const      lastName='Thompson'
   const     date='May 22, 2023'
  return (
    <div className='app'>
      <Header 
        welcome={welcome}
        title={title}
        subtitle ={subtitle}
        firstName={firstName}
        lastName={lastName}
        date={date}
      />
    </div>
  )
}
////////////////////////////////////////////////////////////////////
const Age = (props) => <div>The person is {props.age} years old.</div>
const Weight = (props) => (
  <p>The weight of the object on earth is {props.weight} N.</p>
)

const App2 = () => {
  let currentYear = 2023
  let birthYear = 2003
  const age = currentYear-birthYear
  const gravity = 9.81
  const mass = 70
  return (
    <div className='app2'>
      <Age age={age}/>
      <Weight weight={gravity*mass}/>
    </div>
    
  )
}
//////////////////////////////////////////////////////////////////////
const Status = (props) =>{
  let status = props.status ? 'Old enough to drive' : 'Too young for driving'
  return <p>{status}</p>
}

const App3 = () => {
  let currentYear = 2023
  let birthYear = 2003
  const age = currentYear-birthYear

  let status = age >=17

  return (
    <div className='app3'>
      <Status status={status}/>
    </div>
  )
}
////////////////////////////////////////////////////////////////////
const Skills = (props) => {

  const skillList = props.skills.map((skill) => <li key={skill}>{skill}</li>)
  return <ul>{skillList}</ul>

}

const App4 = () => (
  <div className='app4'>
    <Skills skills={['HTML','CSS','JS']}/>
  </div>
)
/////////////////////////////////////////////////////////

const showDate = (time) =>{
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  
  const month = months[time.getMonth()].slice(0,3)
  const year = time.getFullYear()
  const date = time.getDate()

  return ` ${month} ${date}, ${year}`
}

const Header2 = (props) =>{
  return (
    <header>
      <div className='header2-wrapper'>
        <h1>{props.data.welcome}</h1>
        <h2>{props.data.title}</h2>
        <h3>{props.data.subtitle}</h3>
        <p>{props.data.author.firstName} {props.data.author.lastName}</p>
        <small>{showDate(props.data.date)}</small>
      </div>
    </header>
  )
}

const App5 = () => {
  const data = {
    welcome: "Welcome to 30 days of react",
    title: "Getting started React",
    subtitle: "Javascirpt Library",
    author: {
      firstName: 'Jamie',
      lastName: 'Thompson'
    },
    date: new Date(),

  }

  return (
    <div className='app5'>
      <Header2 data={data}/>
    </div>
  )
}

////////////////////////////////////////////////

const Button = (props) => 
  <button onClick={props.onClick}>{props.text}</button>

const App6 = () => {
  const sayHi = () => {
    alert('Hi')
  }
  return (
    <div className='app6'>
      <Button text='Say Hi' onClick={sayHi}/>
      <Button text={'Show Time'} onClick={()=>alert(showDate(new Date()))}/>
    </div>
  )
}

//////////////////////////////////////////////////////////////////////////////

const Header3 = ({
  data: {
    welcome,
    title,
    subtitle,
    author: {firstName,lastName},
    date,
  },
}) => {
  return (
    <header>
      <div className='header3-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

const TechList = ({techs})=>{
  const techList = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techList
}

const UserCard = ({user: { firstName,lastName,image}})=>(
  <div className='user-card'>
    <img src={image} alt={firstName}/>
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)

const Button2 = ({text,onClick,style})=>(
  <button style={style} onClick={onClick}>{text}</button>
)

const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

const Main = ({user,techs,greetPeople,handleTime})=>(
  <main>
    <div className='main-wrapper'>
      <p>prerequiesite to get started react.js</p>
      <ul>
        <TechList techs={techs}/>
      </ul>
      <UserCard user={user}/>
      <Button2 text='Greet People' onClick={greetPeople} style={buttonStyles}/>
      <Button2 text='Show Time' onClick={handleTime} style={buttonStyles}/>
    </div>
  </main>
)

const Footer = ({copyRight}) => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright {copyRight.getFullYear()}</p>
    </div>
  </footer>
)

const App7 = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Jamie',
      lastName: 'Thompson',
    },
    date: new Date(), 
  }
  const date = new Date()
  const techs = ['HTML','CSS','JS']
  const user = {...data.author }

  const handleTime = ()=>{
    alert(showDate(new Date))
  }

  const greetPeople = () => {
    alert('Welcome')
  }
  return (
    <div className='app7'>
      <Header3 data={data}/>
      <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
        />
      <Footer copyRight={date}/>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App7/>,rootElement)
