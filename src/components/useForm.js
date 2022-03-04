import { useState, useEffect } from "react";

const useForm = (callback, validateInfo) => {
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password2: ''
    })
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target        
        setValues({
            ...values,
        [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        const fname = e.target.firstname;
        console.log(fname.value);
        localStorage.setItem('FirstName', fname.value);
        const lname = e.target.lastname;
        console.log(lname.value);
        localStorage.setItem('LastName', lname.value);
        const email = e.target.email;
        console.log(email.value);
        localStorage.setItem('Email', email.value);

        setErrors(validateInfo(values));
        setIsSubmitting(true);
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 &&
        isSubmitting) {
            callback()
        }
    }, [errors]
    );

    return { handleChange, handleSubmit, values, errors };
}

export default useForm;