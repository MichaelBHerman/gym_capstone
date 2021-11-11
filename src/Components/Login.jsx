import React from 'react';
import validate from './validateInfo';
import Useform from './Useform';
import './form.css';

const Login = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = Useform(
    submitForm,
    validate
  );

  return (
    <div className='login-form-right'>
      <form onSubmit={handleSubmit} className='login-form' noValidate>
        
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
       
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
       
        <button className='form-input-btn' type='submit'>
          Log in
        </button>
        
      </form>
    </div>
  );
};

export default Login;