import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const options=[
  {
    value: '',
    label: '-- Select Country--',
  },
  {
    value: 'Finland',
    label: 'Finland',
  },
  {
    value: 'Sweden',
    label: 'Sweden',
  },
  {
    value: 'Norway',
    label: 'Norway',
  },
  {
    value: 'Denmark',
    label: 'Denmark',
  },
]

const selectOptions = options.map(({value,label})=>(
  <option value={value}>{label}</option>
))

class App extends React.Component{
  state={
    firstName:'',
    lastName:'',
    email:'',
    country:'',
    tel:'',
    dateOfBirth:'',
    favColour:'',
    weight:'',
    gender:'',
    file:'',
    bio:'',
    skills:{
      html:false,
      css:false,
      js:false
    },
    touched:{
      firstName: false,
      lastName: false,
      email:false,
      country:false,
      gender:false,
      tel:false,
      dateOfBirth:false,
      favColour:false,
      weight:false,
      bio:false,
      file:false,
    }
  }
  handleChange=(e)=>{
    const {name,value,type,checked} = e.target

    if(type === 'checkbox'){
      this.setState({
        skills:{...this.state.skills,[name]:checked}  
      })
    }else if(type === 'file'){
      console.log(type, 'check here')
      this.setState({[name]: e.target.files[0]})
    }else{
      this.setState({[name]:value})
    }

    this.setState({[name]:value})
  }
  handleBlur = (e)=>{
    const {name,value} = e.target
    this.setState({touched:{...this.state.touched,[name]:true}})
    console.log(name,value)
  }
  validate=()=>{
    const errors={
      firstName:'',
      lastName:'',
      email:'',
      tel:'',
      dateOfBirth:'',
      favColour:'',
      weight:'',
      country:'',
      gender:'',
      bio:'',
      file:'',
    }
    if((this.state.touched.firstName && this.state.firstName.length < 3) || (this.state.touched.firstName && this.state.firstName.length > 12)){
      errors.firstName = 'First name must be between 2 and 12 characters'
    }
    else if((this.state.touched.lastName && this.state.lastName.length < 3) ||
        (this.state.touched.lastName && this.state.lastName.length > 30)){
          errors.lastName = 'Last name must be between 3 and 30 characters'
        }
    else if(this.state.touched.tel){
      console.log('tel')
      if(isNaN(this.state.tel)){
        errors.tel = 'Telephone must contain only numbers'
      }
    }
    else if(this.state.touched.dateOfBirth){
      console.log(this.state.dateOfBirth.substring(0,4))
      if(this.state.dateOfBirth === ''){
        errors.dateOfBirth = 'Please select a date'
      }else if(this.state.dateOfBirth.substring(0,4) < 1940){
        errors.dateOfBirth = 'You cannot be born before 1940'
      }
    }
    else if(this.state.touched.country){
      console.log('country:',this.state.country)
      if(this.state.country === ''){
        errors.country = 'select a country'
      }
    }
    else if(!this.state.touched.gender){
      errors.gender = 'please select a gender'
    }
    return errors
  }
  handleSubmit=(e)=>{
    e.preventDefault()
    const{
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favColour,
      weight,
      country,
      gender,
      bio,
      file,
      skills,
    } = this.state

    const formattedSkills = []
    for( const key in skills){
      console.log(key)
      if(skills[key]){
        formattedSkills.push(key.toUpperCase())
      }
    }

    const data={
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favColour,
      weight,
      country,
      gender,
      bio,
      file,
      skills:formattedSkills,
    }
    console.log(data)
  }
  render(){
    const {
      firstName,
      lastName,
      tel,
      dateOfBirth,
      country,
      gender
    } = this.validate()
    return(
      <div className='app'>
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit} noValidate>
          <div>
            <label htmlFor='firstName'>First Name:</label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              placeholder='First Name'
              value={this.state.firstName}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              />
              <small>{firstName}</small>
          </div>
          <div>
          <label htmlFor='lastName'>Last Name:</label>
            <input
              type='text'
              name='lastName'
              id='lastName'
              placeholder='Last Name'  
              value={this.state.lastName}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            />
            <small>{lastName}</small>
          </div>
          <div>
          <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Email'  
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
          <label htmlFor='tel'>Telephone:</label>
            <input
              type='tel'
              name='tel'
              id='lastName'
              placeholder='Tel'  
              value={this.state.tel}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            />
            <small>{tel}</small>
          </div>
          <div className='form-group'>
          <label htmlFor='dateOfBirth'>Date of Birth:</label>
            <input
              type='date'
              name='dateOfBirth'
              id='dateOfBirth'
              placeholder='Date of Birth'  
              value={this.state.dateOfBirth}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            />
            <small>{dateOfBirth}</small>
          </div>
          <div className='form-group'>
          <label htmlFor='favColour'>Favourite Colour:</label>
            <input
              type='color'
              name='colour'
              id='colour'
              placeholder='Favourite Colour'  
              value={this.state.favColour}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group'>
          <label htmlFor='weight'>Weight:</label>
            <input
              type='number'
              name='weight'
              id='weight'
              placeholder='Weight in KG'  
              value={this.state.weight}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group'>
          <label htmlFor='country'>Country:</label>
            <select name='country' id='country' onChange={this.handleChange} onBlur={this.handleBlur}>
              {selectOptions}
            </select>
            <small>{country}</small>
          </div>
          <div className='form-group'>
            <p>Gender</p>
            <div>
              <input
                type='radio'
                id='female'
                name='gender'
                value='Female'
                onChange={this.handleChange}
                checked={this.state.gender === 'Female'}
              />
              <label htmlFor='female'>Female</label>
            </div>
            <div>
              <input
                type='radio'
                name='gender'
                id='male'
                value='Male'
                onChange={this.handleChange}
                checked={this.state.gender === 'Male'}
              />
              <label htmlFor='male'>Male</label>
            </div>
            <div>
              <input
                id='other'
                type='radio'
                name='gender'
                value='Other'
                onChange={this.handleChange}
                checked={this.state.gender === 'Other'}
              />
              <label htmlFor='other'>Other</label>
            </div>
          </div>
          <div className='form-group'>
            <p>Select your skills</p>
            <div>
              <input 
                type='checkbox'
                id='html'
                name='html'
                onChange={this.handleChange}
              />
              <label htmlFor='html'>HTML</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='css'
                name='css'
                onChange={this.handleChange}
              />
              <label htmlFor='css'>CSS</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='javascript'
                name='javascript'
                onChange={this.handleChange}
              />
              <label htmlFor='javascript'>JavaScript</label>
            </div>
          </div>
          <div>
            <label htmlFor='bio'>Bio</label>
            <textarea
              id='bio'
              name='bio'
              value={this.state.bio}
              onChange={this.handleChange}
              cols='120'
              rows='10'
              placeholder='Write about yourself ...'
            />
          </div>
          <div>
            <input
              type='file'
              name='file'
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button className='btn btn-success' onSubmit={this.handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>,rootElement)
