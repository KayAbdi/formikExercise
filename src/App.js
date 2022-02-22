import React from 'react';
import './index.css';
import {useFormik} from 'formik';

function App() {
  const formik =useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: values => {
      alert("Login Successful");
      console.log('form:', values)
    },
    validate: (values) => {
      let errors = {};
      if(!values.name) errors.name = 'Field required';
      if(!values.password) errors.password = 'Field required';
      if(!values.email) errors.email = 'Field required';
      return errors;
    },
  });
  return (
    <div>
      <h3 style={{marginTop: '20px', marginLeft: '20px', color: 'green'}}>Login form</h3>
      <form onSubmit={formik.handleSubmit} style={{padding: '18px'}}>
        <div>Name</div>
        <input name="name" type="text" onChange={formik.handleChange} value={formik.values.name}></input>
        {formik.errors.name ? <div style={{color: 'red'}}>{formik.errors.name}</div>: null}
        <div>Email</div>
        <input id="emailField" name="email" type="text" onChange={formik.handleChange} value={formik.values.email}></input>
        {formik.errors.email ? <div id="emailError" style={{color: 'blue'}}>{formik.errors.email}</div>: null}
        <div>Password</div>
        <input id="pswField" name="password" type="text" onChange={formik.handleChange} value={formik.values.password}></input>
        {formik.errors.password ? <div id="pswError" style={{color: 'green'}}>{formik.errors.password}</div>: null}<br/>
        <button id="submitBtn" type="submit" style={{marginTop: '10px'}}>Submit</button>
      </form>
    </div>
  );
}

export default App;