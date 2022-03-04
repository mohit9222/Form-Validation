import React from 'react';
import useForm from './useForm';
import validateInfo from './validateInfo';
import '../components/Form.css'

export const FormSignup = ({submitForm}) => {
    const { handleChange, handleSubmit, values, errors } 
    = useForm(
        submitForm,
        validateInfo
    );


    return (
        <div className='form-content-right'>
            <h1 className='header-text'>FORM VALIDATION</h1>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-inputs'>
                    <label htmlFor='firstname' className='form-label'>
                        First Name 
                    </label>
                    <label className='lab'> {errors.firstname && <p>{errors.firstname}</p>}</label>
                    <input 
                        id='firstname'
                        type='text'
                        name='firstname'
                        className='form-control'
                        placeholder='Enter your First Name'
                        value={values.firstname}
                        onChange={handleChange}
                        />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='lastname' className='form-label'>
                        Last Name
                    </label>
                    <label className='lab'>{errors.lastname && <p>{errors.lastname}</p>}</label>
                    <input 
                        id='lastname'
                        type='text'
                        name='lastname'
                        className='form-control'
                        placeholder='Enter your Last Name'
                        value={values.lastname}
                        onChange={handleChange}
                        />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>
                       Email
                    </label>
                    <label className='lab'>{errors.email && <p>{errors.email}</p>}</label>
                    <input 
                        id='email'
                        type='email'
                        name='email'
                        className='form-control'
                        placeholder='Enter your Email'
                        value={values.email}
                        onChange={handleChange}
                        />                    
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password' className='form-label'>
                       Password
                    </label>
                    <label className='lab'>{errors.password && <p>{errors.password}</p>}</label>
                    <input 
                        id='password'
                        type='password'
                        name='password'
                        className='form-control'
                        placeholder='Enter your Password'
                        value={values.password}
                        onChange={handleChange}
                        />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password2' className='form-label'>
                       Confirm Password
                    </label>
                    <label className='lab'>{errors.password2 && <p>{errors.password2}</p>}</label>
                    <input 
                        type='password'
                        name='password2'
                        className='form-control'
                        placeholder='Enter your Password'
                        value={values.password2}
                        onChange={handleChange}
                        />
                </div>
                <button className='form-input-btn' type='submit'>Submit</button>
            </form>
        </div>  
    );
}