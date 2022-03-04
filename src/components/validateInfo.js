export default function validateInfor(values) {
    let errors = {}

    //First name Validation
    const re = /^[A-Za-z]+$/;
    if(!values.firstname.trim()){
        errors.firstname = "First Name is Required"
    } else if (!re.test(values.firstname.trim())) {
        errors.firstname = 'Only Letters are allowed';
    }

    //Last name Validation
     if(!values.lastname.trim()){
        errors.lastname = "Last Name is Required"
    } else if (!re.test(values.lastname.trim())) {
        errors.lastname = 'Only Letters are allowed';
    }

    //Email Validation
       if(!values.email){
        errors.email = "Email is Required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    //Password Validation
    if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 8) {
        errors.password = 'Password needs to be 8 characters or more';
      }
    
    //Confirm Password Validation
    if (!values.password2) {
        errors.password2 = 'Password is required';
      } else if (values.password2 !== values.password) {
        errors.password2 = 'Passwords do not match';
      }
      return errors;
}