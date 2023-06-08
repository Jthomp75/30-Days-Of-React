import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component{
  state={
    firstName:'',
    message:'',
    key:'',
  }
  handleClick = (e) =>{
    this.setState({message:'Welcome to the world of events',})

  }
  handleMouseMove=(e)=>{
    this.setState({message:'mouse is moving',})
  }
  handleChange=(e)=>{
    this.setState({firstName:e.target.value, message:e.target.value,})
  }
  handleKeyPress=(e)=>{
    this.setState({message:`${e.target.value} has been pressed and the keycode is` + e.charCode,})
  }
  handleBlur=(e)=>{
    this.setState({message:'Input field has been blurred',})

  }
  handleCopy=(e)=>{
    this.setState({message:'Using 30 days for commercial use is not allowed'})
  }

  render(){
    return(
      <div>
        <h1>Welcome to the World of Events</h1>
        <button onClick={this.handleClick}>Click Me</button>
        <button onMouseMove={this.handleMouseMove}>Move mouse on me</button>
        <p onCopy={this.handleCopy}>Check copy permisson by copying this text</p>
        <p>{this.state.message}</p>

        <label htmlFor=''>Test onBlur Event:</label>
        <input type='text' onBlur={this.handleBlur}/>

        <form>
          <div>
            <label htmlFor='firstName'>First Name:</label>
            <input 
              onChange={this.handleChange}
              name='firstName'
              value={this.state.value}
            />
          </div>
          <div>
            <input type='submit' value='Submit'/>
          </div>
        </form>
      
      
      </div>
    )
  }
}

class App2 extends Component{
  state={
  
      top:'0px',
      left:'0px',
   
  }
  handleMouseEnter = (e)=>{
    let x = Math.random()*900
    let y= Math.random()*500
    this.setState({top:y+'px',left:x+'px'})
    console.log(this.state)
    document.getElementsByClassName('title').style={marginTop:this.state.top,marginLeft:this.state.left}
  }

  render(){
    return(
      <div>
        <h2 onMouseEnter={this.handleMouseEnter} className='title' style={{marginTop:this.state.top,marginLeft:this.state.left}}>
          30 Days of React
        </h2>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App2/>,rootElement)

