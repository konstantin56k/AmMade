import React from "react";
import { Link } from "react-router-dom";

function Signup() {
    return (
        <div className='login'>
            <form className='login-form'>
                <input className='login-form-element' placeholder='user@mail.com'></input>
                <input className='login-form-element' placeholder='password'></input>
                <button className='login-form-element' type="submit">Sign up</button>
            </form>
            <div className='signup'>
                <h3>or</h3>
                <Link className='login-link' to='/Login'>Login</Link>
            </div>
        </div>
    )
}

export default Signup;