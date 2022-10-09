import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='mt-40'>
      <h2 className='text-3xl font-semibold'>Page not found!! <span className='text-red-500 font-bold'>404</span></h2>
      <Link className='text-blue-500 text-xl font-semibold' to='/'>Back</Link>
    </div>
  );
};

export default ErrorPage;