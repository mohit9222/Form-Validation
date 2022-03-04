import React from 'react';

const FormSuccess = () => {
   const fname = localStorage.getItem('FirstName');
   const lname = localStorage.getItem('LastName');
   const eml = localStorage.getItem('Email');

   function logout() {
       window.location.reload(false);
       localStorage.clear();
   };

  return (
        <>
            <div className=' data text-center'>
                <img src={require('../images/DAL.png')} alt="img-sp" className='form-log' />
                <div>
                    <h3 className='Page-dt'>Welcome, {fname} {lname}</h3>
                    <h3 className='Page-em'>Email: {eml}</h3>
                    <button onClick={logout} className='form-log-btn' type='submit'>Logout</button>
                </div>
            </div>
        </>
  )  
}

export default FormSuccess;
