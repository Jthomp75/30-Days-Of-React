import React from 'react'
import Header from '../src/Header/Header.js'

class App extends React.Component{
  render(){
    const data = {
      welcome:'Welcome',
      title:'title',
      subtitle:'subtitle',
      author:{
        firstName:'Jamie',
        lastName:'Thompson'
      },
      date:'05/06/2023'
    }
    return(
      <div className='app'>
        <Header data={data}/>
      </div>
    )
  }
}
  


export default App