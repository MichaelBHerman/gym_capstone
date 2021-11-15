import React from 'react';
import './form.css';
import success from './images/ricflairwoo.gif'

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Congratulations! You are now a member of IronGround Gym!</h1>
     
      <a href='/login' className='login-btn'>LOG IN HERE</a>
     
      <img className='form-img-2' src={success} alt='success-image' />
      
    </div>
  );
};

export default FormSuccess;