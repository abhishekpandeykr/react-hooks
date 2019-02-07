import React, { useState } from 'react';
import './App.css';
import InputField from './components/inputField'
import Button from './components/submitButton'

const App = () => {
  const [form, setValues] = useState({
    userName:'',
    lastName:'',
    email:''
  })
  const [isVisible, changeVisibility] = useState(false)

  const updateForm = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const saveForm = () => {
    changeVisibility(true)
  }

  return (
    <div className="App">
      <InputField change={updateForm} name="userName" place="User Name" />
      <InputField change={updateForm} name="lastName" place="Last Name"/>
      <InputField change={updateForm} name="email" place="Email"/>
      <Button type="submit" save={saveForm} name="Submit Form" />
      <hr />
      {isVisible === true &&
        Object.keys(form).map((ele,idx) => <p key={idx}>{ele}:{form[ele]}</p>)
       }
    </div>
  );
}

export default App;
