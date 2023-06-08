import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component{
  render(){
    return(
      <header>
        <div className='header-wrapper'>
          <h1>Season</h1>
        </div>
      </header>
    )
  }
}

class Main extends React.Component{
  render(){
    const{
      text,
      style,
    } = this.props
    return(
      <main>
        <div className='main-wrapper' style={style}>
          <div className='text-wrapper'>{text}</div>
        </div>
      </main>
    )
  }
}

class App extends React.Component{
  state={
    month: new Date().getMonth(),
  }
  render(){

    const spring = {
      backgroundColor: 'yellow'
    }

    const summer = {
      backgroundColor: 'red'
    }

    const winter={
      backgroundColor: 'blue'
    }

    const autumn ={
      backgroundColor:'brown'
    }
    let style,text
    let season = this.state.month
    if(season === 1 | season===2|season===3){
      style=spring
      text='spring'
    }
    else if(season === 4 | season===5|season===6){
      style=summer
      text='summer'
    }
    else if(season === 7 | season===8|season===9){
     style=autumn
     text='sutumn'
    }
    else if(season === 10 | season===11|season===12){
      style=winter
      text='winter'
    }

    return(
      <div className='app-container'>
        <Header/>
        <Main style={style} text={text}/>
      </div>
    )
  }
}

//////////////////////////////////////////////////////////////////////////////

class Header2 extends React.Component{
  render(){
    return(
      <header>
        <div className='header2-wrapper'>
          <h1>Time</h1>
        </div>
      </header>
    )
  }
}

class Main2 extends React.Component{
  render(){
    const{
      text, 
      style,
    } = this.props
    return(
      <main>
        <div className='main2-wrapper' style={style}>
          <div className='time-wrapper'>{text}</div>
        </div>
      </main>
    )
  }
}

class App2 extends React.Component{
  state={
    time : new Date().getHours()
   
  }
  render(){

    const morn ={
      backgroundColor:'cream'
    }

    const aft={
      backgroundColor:'orange'
    }

    const eve={
      backgroundColor:'navy'
    }

    const night = {
      backgroundColor:'black'
    }

    let style,text
    let num = this.state.time

    if(num>=6 && num <=12){
      console.log('morn')
      style=morn
      text='Morning'
    }else if(num>12&&num<=16){
      console.log('aft')
      style=aft
      text='Afternoon'
    }else if(num>16&&num<=20){
      console.log('evening')
      style=eve
      text='Evening'
    }
    else if(num>20 | num<6){
      console.log('night')
      style=night
      text='Night'
    }



    console.log(this.state.time)
    return(
      <div className='app2-container'>
        <Header2/>
        <Main2 style={style} text={text}/>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App2/>, rootElement)

