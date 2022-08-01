import React, {useState} from 'react'

function LoginPage(props) {
    const [isSubmit, setSubmit] = useState(false);

    const users = [
        {
            email: 'cprg352+admin@gmail.com',
            password: 'password'
        },
        {
            email: 'cprg352+admin2@gmail.com',
            password: 'password'
        },
        {
            email: 'cprg352+anne@gmail.com',
            password: 'password'
        },
        {
            email: 'cprg352+barb@gmail.com',
            password: 'password'
        }
    ];


    const submitHandle = (event) => {
        event.preventDefault();

        var { email, password } = document.forms[0];

        const userInfo = users.find((user) => user.email === email.value)

        if (userInfo) {
            if (userInfo.password !== password.value) {
                alert("Invalid password")
            } else {
                setSubmit(true);
                // alert(`Email: ${userInfo.email} \nPassword: ${userInfo.password}`)
                alert('Log in successful')
            }
        } else {
            alert("Invalid email")
        }
    }

    const SignInForm = (
        <div className="signInForm">
            <form onSubmit={submitHandle}>
                <div>
                    <h2>Sign In</h2>
                    <label>Email: </label><br/>
                    <input type='text' name="email" required />
                </div>
                <div>
                    <label>Password: </label><br/>
                    <input type='password' name="password" required />
                </div>
                <div className="button">
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );

    return (
        <div className='loginForm'>
            {isSubmit ? SignInForm : SignInForm}
        </div>
    );
}

export default LoginPage
