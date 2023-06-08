import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({text,onClick,style})=>(
    <button style={style} onClick={onClick}>{text}</button>
)

const buttonStyles = {
    backgroundColor: '#61dbfb',
    padding: 10,
    border: 'none',
    borderRadius: 5,
    margin: '3px auto',
    cursor: 'pointer',
    fontSize: 22,
    color: 'white',
  }

class Header extends React.Component{
    render(){
        console.log(this.props.data)
        const{
            welcome,
            title,
            subtitle,
            author:{firstName,lastName},
            date,
        } = this.props.data

        return(
            <header style={this.props.styles}>
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

const Login = ()=>(
    <div><h3>Please Login</h3></div>
)
const Welcome = ()=>(
    <div><h3>Welcome to 30 Days of React</h3></div>
)

const Message = ({message})=>(
    <div><h1>{message}</h1></div>
)

class TechList extends React.Component {
    render() {
      const { techs } = this.props
      const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
      return techsFormatted
    }
  }

class Main extends React.Component{
    render(){
        const{
            techs,greetPeople,
            handleTime,
            loggedIn,
            handleLogin,
            message,
        } = this.props
        console.log(message)
        const status = loggedIn? <Welcome/> : <Login/>
        return(
            <main>
                <div className='main-wrapper'>
                    <p>Prerequisite to get started react.js</p>
                    <ul>
                        <TechList techs={techs}/>
                    </ul>
                    {techs.length === 3 && (
                        <p>You have all the prerequisites to get started React</p>

                    )}
                    <div>
                        <Button
                        text='Show Time'
                        onClick={handleTime}
                        style={buttonStyles}
                        />{' '}
                        <Button
                        text='Greet People'
                        onClick={greetPeople}
                        style={buttonStyles}
                        />
                        {!loggedIn && <p>Please login to access more information about 30 Days Of React challenge</p>}
                </div>
                <div style={{ margin: 30 }}>
                    <Button
                    text={loggedIn ? 'Logout' : 'Login'}
                    style={buttonStyles}
                    onClick={handleLogin}
                    />
                    <br />
                    {status}
                </div>
                <Message message={message} />
                </div>
            </main>
        )
    }
}

class Footer extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <footer>
          <div className='footer-wrapper'>
            <p>Copyright {this.props.date.getFullYear()}</p>
          </div>
        </footer>
      )
    }
  }

class App extends React.Component{
    state={
        loggedIn:false,
        techs:['HTML','CSS','JS'],
        message:'Click show time or greet people to change me'

    }
    handleLogin = ()=>{
        this.setState({loggedIn: !this.state.loggedIn})
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
        return `${month} ${date}, ${year}`
      }
      handleTime = () => {
        let message = this.showDate(new Date())
        this.setState({ message })
      }
      greetPeople = () => {
        let message = 'Welcome to 30 Days Of React Challenge, 2020'
        this.setState({ message })
      }
    render(){
        const data={
            welcome: '30 Days Of React',
          title: 'Getting Started React',
          subtitle: 'JavaScript Library',
          author: {
            firstName: 'Jamie',
            lastName: 'Thompson',
          },
          date: 'Oct 9, 2020',
        }
        
        const {loggedIn , techs} = this.state
        let status = loggedIn ? (
            <Welcome/>
        ) : (<Login/>)
    
    
        return(
            <div className='app'>
                <Header data={data}/>
                <Main
                    techs={techs}
                    handleTime={this.handleTime}
                    handleLogin={this.handleLogin}
                    greetPeople={this.greetPeople}
                    loggedIn={this.state.loggedIn}
                    message={this.state.message}
                    />
                <Footer date={new Date()} />
            </div>
        )
}
}


const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)