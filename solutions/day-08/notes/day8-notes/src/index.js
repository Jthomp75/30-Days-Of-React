import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class App extends React.Component{
  state={
    count:0,
  }

  addOne = ()=>{
    this.setState({count: this.state.count +1})
  }

  minusOne = ()=>{
    this.setState({count:this.state.count-1})
  }
  render(){
    const count = this.state.count
    return(
      <div className='app'>
        <h1>{count}</h1>
        <button onClick={this.addOne} className='btn btn-add'
        
        >
          +1
        </button>{' '}
        <button onClick={this.minusOne} className='btn btn-add'>-1</button>
      </div>
    )
  }
}

///////////////////////////////////////////////////

class App2 extends React.Component{
  state={
    image: 'https://th.bing.com/th/id/R.27f46990ac129a8e6a3903b96eea81b3?rik=QIovA84IVWtPuA&pid=ImgRaw&r=0',
  }
  changeAnimal =()=>{
    let dogURL='https://th.bing.com/th/id/R.161aba6756864b0fdaf7c7eade839559?rik=3kBr1hjn0FOfgg&pid=ImgRaw&r=0'
    let catURL = 'https://th.bing.com/th/id/R.27f46990ac129a8e6a3903b96eea81b3?rik=QIovA84IVWtPuA&pid=ImgRaw&r=0'
    let image = this.state.image === catURL ? dogURL: catURL
    this.setState({image})
  }
  render(){
    return(
      <div className='app2'>
        <h1>30 days of react</h1>
        <div className='animal'>
          <img src={this.state.image} alt='animal'/>
        </div>
        <button onClick={this.changeAnimal} className='btn btn-add'>Change</button>
      </div>
    )
  }
}

const showDate = (time)=>{
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
  return ` ${month} ${date} ${year}`
}

const UserCard = ({user:{firstName,lastName,image}})=>{
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

class Header extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const{
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
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
  
}

const Count = ({count,addOne,minusOne})=>{
  return(
    <div>
      <h1>{count}</h1>
      <div>
        <Button style={buttonStyles} onClick={addOne} text='+1'/>
        <Button style={buttonStyles} onClick={minusOne} text='-1'/>

      </div>
    </div>
  )
}

class TechList extends React.Component{
  constructor(props){
    super(props)
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
  }
  render(){
    const {
      techs,
      user,
      greetPeople,
      handleTime,
      changeBackground,
      count,
      addOne,
      minusOne,
    } = this.props
    return(
      <main>
        <div className='main-wrapper'>
          <p>prerequisites for starting react.js</p>
          <ul>
            <TechList techs={techs}/>
          </ul>
          <UserCard user={user}/>
          <Button
            text='Greet People'
            onClick={greetPeople}
            style={buttonStyles}
          />
          <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
          <Button
            text='Change Background'
            onClick={changeBackground}
            style={buttonStyles}
          />
          <Count count={count} addOne={addOne} minusOne={minusOne} />
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
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

class App3 extends React.Component{
  state={
    count:0,
    styles:{
      backgroundColor:'',
      color:'',
    },
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
  addOne = () => {
    this.setState({ count: this.state.count + 1 })
  }

  // method which subtract one to the state
  minusOne = () => {
    this.setState({ count: this.state.count - 1 })
  }
  handleTime = () => {
    alert(this.showDate(new Date()))
  }
  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }
  changeBackground = () => {}
  render(){
    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 7, 2020',
    }
    const techs = ['HTML', 'CSS', 'JavaScript']
    const date = new Date()
    // copying the author from data object to user variable using spread operator
    const user = { ...data.author, image: 'asabenehImage' }
    return(
      <div className='app'>
        {this.state.backgroundColor}
        <Header data={data} />
        <Main
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
          addOne={this.addOne}
          minusOne={this.minusOne}
          count={this.state.count}
        />
        <Footer date={new Date()} />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App3/>,rootElement)
