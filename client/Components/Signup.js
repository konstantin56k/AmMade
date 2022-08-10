import React from "react";
import { Link } from "react-router-dom";

function Signup() {
    return (
        <div className='login'>
            <form className='login-form'>
                <input name='email' className='login-form-element' placeholder='user@mail.com'></input>
                <input name="password" className='login-form-element' placeholder='password'></input>
                <button className='login-form-element' type="submit">Sign up</button>
            </form>
            <div className='signup'>
                <h3>or</h3>
                <Link className='login-link' to='/login'>Login</Link>
            </div>
        </div>
    )
}

export default Signup;