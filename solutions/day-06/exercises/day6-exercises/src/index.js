import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const numbers = 
  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]


const Header = ()=>{
  return(
    <header>
      <div className='header-wrapper'>
      <h1>30 Days Of React</h1>
      <h2>Number Generator</h2>
      </div>
    </header>
  )
}

const Numbers = ({numbers}) =>{
  const list = numbers.map((number) => <Number key={number}number={number}/>)
  return <div className='numbers-wrapper'>{list}</div>
}

const Number = ({number}) =>{
  var numberStyles = {border: '1px black solid',
    color: 'white'}
  if(number % 2===0){
    console.log('even'+number)
    numberStyles={
      border: '1px white solid',
    background: '#13FF57',
    color: 'white',
    
    }
  }
  else if(number % 2===1){
    console.log('even'+number)
    numberStyles={
      border: '1px white solid',
    background: '#FFFD20',
    color: 'white'
    }
  }
  if(isPrime(number)){
    console.log('prime: '+number)
    numberStyles={
      border: '1px white solid',
    background: '#FF2723',
    color: 'white'
    
    }
  }
  return(
    <div style={numberStyles}className='number-wrapper'>
      <div className='number'>{number}</div>
    </div>
  )
}

function isPrime(number){
  var flag = true
  if(number == 0 | number == 1){
    return false
  }
  for(let i=2; i<=number-1;i++){
    if(number%i==0){
      flag=false
      break
    }
  }
  return flag
}


const App = () => {

  return (
    <div className='app'>
      <Header/>
      <div>
      <Numbers numbers={numbers}/></div>
    </div>
    
  )
}

///////////////////////////////////////////////////////////

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

function addColours(){
  var colours = []
  for(let i=0;i<32;i++){
    colours.push(hexaColor())
  }
  return colours
}



const Colours = () =>{
  const colours = addColours()
  const colourList = colours.map((colour) => <Colour col={colour} key={colour}/>)
  console.log(colourList)
  return <div className='colours-wrapper'>{colourList}</div>
}

const Colour = ({col})=>{
  return(
    <div className='colour-wrapper' style={{backgroundColor: col}}>
      <div className='colour'>{col}</div>
      </div>
  )
    
}

const Header2 = () =>{

  return (
    <header>
      <div className='header2-wrapper'>
        <h1>30 Days of React</h1>
        <h2>Hex Colour Generator</h2>
      </div>
    </header>
  )
}


const App2 = ()=>{

  return (
    <div className='app2'>
      <Header2/>
      <Colours />
    </div>
  )
}

/////////////////////////////////////////////////////////////////////////////////

const Header3 = ()=>{
  return(
  <header>
    <div className='header3-wrapper'>
      <h1>30 Days of React</h1>
      <h2>World Population</h2>
      <p>Ten most populated countries</p>
    </div>
  </header>
  )
}

const countries = [
  ['World','7,693,165,599'],
  ['China','1,377,422,166'],
  ['India','1,295,210,000'],
  ['USA','323,947,000'],
  ['Indonesia','258,705,000'],
  ['Brazil','206,135,893'],
  ['Pakistan','194,125,062'],
  ['Nigeria','186,988,000'],
  ['Bangladesh','161,006,790'],
  ['Russia','146,599,183'],
  ['Japan','126,960,000']
]

const Country = ({country: [name,number]})=>{
  const max_width = 7693165599
  const raw_width = number.replace(/,/g,"")
  const acc_width = (raw_width/max_width)* 100
  console.log(name,acc_width)

  const styles={background: 'red',width: acc_width+"%", height: '60%'}
  return(
    <div className='country-wrapper'>
      <div className='country-name-div'><p>{name}</p></div>
      <div className='bar-container'>
        <div className='bar' style={styles}></div>
      </div>
      <div className='country-number-div'>{number}</div>
    </div>
  )
}

const Countries = ({countries}) =>{
  const countryList = countries.map((country)=><Country country={country}/>)
  console.log(countryList)
  return(
    <div className='countries-wrapper'>{countryList}</div>
  )
}

const App3 = ()=>{

  return (
    <div className='app3'>
      <Header3/>
      <Countries countries={countries}/>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App3/>,rootElement)


