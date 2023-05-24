import React from 'react';
import ReactDOM from 'react-dom';

const Numbers = ({numbers})=>{
  const list = numbers.map((number)=><li key={number}>{number}</li>)
  return list
}

const App = ()=>{
  const numbers = [1,2,3,4,5]
  return (
    <div className='container'>
      <div>
        <h1>Numbers List</h1>
        <Numbers numbers={numbers}/>
      </div>
    </div>
  )
}

/////////////////////////////////////////////////////

const skills = [
  ['HTML', 10],
  ['CSS', 7],
  ['JavaScript', 9],
  ['React', 8],
]

// Skill Component
const Skill = ({ skill: [tech, level] }) => (
  <li>
    {tech} {level}
  </li>
)

// Skills Component
const Skills = ({ skills }) => {
  const skillsList = skills.map((skill) => <Skill skill={skill} />)
  console.log(skillsList)
  return <ul>{skillsList}</ul>
}

const App2 = () => {
  return (
    <div className='container'>
      <div>
        <h1>Skills Level</h1>
        <Skills skills={skills} />
      </div>
    </div>
  )
}

///////////////////////////////////////////////////////////////////////

const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]

const Country = ({country:{name,city}})=> {
  return(
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  )
}

const Countries = ({countries})=>{
  const countryList = countries.map((country) => <Country key={country.name}country={country}/>)
  return <div>{countryList}</div>
}

const App3 = () =>{
  return (
    <div className='app3'>
      <div>
        <h1>Countries List</h1>
        <Countries countries={countries}/>
      </div>
    </div>
  )
}



const rootElement = document.getElementById('root')
ReactDOM.render(<App3/>,rootElement)