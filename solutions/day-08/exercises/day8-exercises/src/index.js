import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import head from './images/head.JPG'

class Header extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const{
      welcome,
      title,
      subtitle,
      author:{firstName,lastName},
      date,
    } = this.props.data
    return(
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{firstName} {lastName}</p>
        <small>{date}</small>
      </div>
    </header>
  )
  }
  
}

class TechList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const {techs} = this.props
    const techsFormatted = techs.map((tech)=><li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

const UserCard = ({user:{firstName,lastName,image}}) =>{
  
  return(
    <div className='user-card'>
      <img src={image} alt='image'/>
      <h2>
        {firstName}
        {lastName}
      </h2>
    </div>
  )

}

const Button = ({text,onClick,style})=>(
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


class Main extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const{
      techs,
      user,
      greetPeople,
      handleTime,
      changeBackground,
    } = this.props
    return(
    <main>
      <div className='main-wrapper'>
        <p>Prerequisites to getting started react.js:</p>
        <ul>
          <TechList techs={techs}/>
        </ul>
        <UserCard user={user}/>
        <Button text='Greet People' style={buttonStyles} onClick={greetPeople}/>
        <Button text='Show Time' style={buttonStyles} onClick={handleTime}/>
        <Button text='Change Background' style={buttonStyles} onClick={changeBackground}/>
      </div>
    </main>
  )
  }
  
}

class Footer extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
     return(
    <footer>
      <div className='footer-wrapper'>
        <div className='footer-spacer'></div>
        <p>Copyright 2023</p>
      </div>
    </footer>
  )
  }
 
}

class App extends React.Component{
  state={
    styles:{
      backgroundColor:'white',
    color:'black',
    }
  }
  greetPeople =()=>{
      alert('Welcome to 30 days of react')
    }
    showDate = (time) => {
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
  
      const month = months[time.getMonth()].slice(0, 3)
      const year = time.getFullYear()
      const date = time.getDate()
      return ` ${month} ${date}, ${year}`
    }
    handleTime=()=>{
      alert(this.showDate(new Date()))
    }
    changeBackground=()=>{
      let dark = {
        backgroundColor:'black',
        color:'white'
      }
      let light ={
        backgroundColor:'white',
        color:'black'
      }
      let mode = this.state.styles.backgroundColor === light.backgroundColor ? dark : light
      console.log(mode)
      this.setState({styles:mode})
    }
  render(){
    const data = {
      welcome: 'Welcome to 30 Days of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author : {
        firstName: 'Jamie',
        lastName: 'Thompson',
      },
      date: 'May 25, 2023'
    }
    const techs=['HTML','CSS','JS']
    const user = {...data.author,image:head}
    
    return(
      <div className='app' style={this.state.styles}>
        <Header data={data}/>
        <Main 
        techs={techs} 
        user={user}
        handleTime={this.handleTime}
        greetPeople={this.greetPeople}
        changeBackground={this.changeBackground}
        />
        <Footer/>
      </div>
    )
  }
}

//////////////////////////////////////////////////////////////////////////////////////////

class Countries extends React.Component{
  const 
}

class Main2 extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <main>
        <div className='main2'>
          <div className='country-container'>
            <div className='image-container'>
              <h3></h3>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

class App2 extends React.Component{

  render(){
    const data = {
      welcome: 'Welcome to 30 Days of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author : {
        firstName: 'Jamie',
        lastName: 'Thompson',
      },
      date: 'May 25, 2023'
    }
    return(
      <div className='app2'>
        <Header data={data}/>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App2/>,rootElement)

