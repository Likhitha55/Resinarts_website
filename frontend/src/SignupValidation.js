function validation(values){
    let error={}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.name === ""){
        error.name="Name should not be empty"
    }
    else{
        error.name=""
    }

    if(values.phone === ""){
        error.phone="Phone should not be empty"
    }
    else{
        error.phone=""
    }

    if(values.email === ""){
        error.email="Email should not be empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email="Email doesn't matched"
    }
    else{
        error.email=""
    }

    if(values.password === ""){
        error.password="Password should not be empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password="Password Should have atleast one Uppercase,atleast one lower case,atleast one number and of min length 8"
    }
    else{
        error.password=""
    }
    return error;
}

export default validation;