import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const UserCard = ({user: {firstName,lastName,image}})=>(
  <div className='user-card'>
    <img src={image} alt='image'/>
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>

)

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

class Header extends React.Component{
  constructor(props){
    super(props)
    //code
  }
  render(){
    console.log(this.props.data)
    const {
      welcome,
      title,
      subtitle,
      author: {firstName,lastName},
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
    //code
  }
  render(){
    const {techs} = this.props
    const techsFormatted = techs.map((tech)=> <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

class Main extends React.Component{
  constructor(props){
    super(props)
    //code
  }
  render(){
    return(
      <main>
        <div className='main-wrapper'>
          <p>Prerequisite to get started with React.JS</p>
          <ul>
            <TechList techs={this.props.techs}/>
          </ul>
          <UserCard user={this.props.user}/>
          <Button 
            text='Greet People'
            onClick={this.props.greetPeople}
            style={buttonStyles}
          />
          <Button
            text='Show Time'
            onClick={this.props.handleTime}
            style={buttonStyles}
          />     
        </div>
      </main>
    )
  }
}

class Footer extends React.Component{
  constructor(props){
    super(props)
    //code
  }
  render(){
    return(
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

class App extends React.Component{
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
    const month = months[time.getMonth()].slice(0,3)
    const year =  time.getFullYear()
    const date = time.getDate()
    return ` ${month} ${date} ${year}`
  }
  handerTime =()=>{
    alert(this.showDate(new Date()))
  }
  greetPeople = ()=>{
    alert('Welcome to 30 days of react')
  }
  render(){
    const data = {
      welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Jamie',
      lastName: 'Thompson',
    },
    date: 'Oct 6, 2020', 
    }
    const techs = ['HTML','CSS','JS']
    const user = { ...data.author, image: 'asabenehImage' }
    return(
      <div className='app'>
        <Header data={data}/>
        <Main techs = {techs} user={user}
        handleTime={this.handerTime}
        greetPeople={this.greetPeople}/>
        <Footer date={new Date()}/>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>,rootElement)

