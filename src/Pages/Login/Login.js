import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase.init';
import SocialLogin from '../../SocialLogin/SocialLogin';

const Login = () => {
    const emailFel = useRef('');
    const passwordFel = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <span className='text-danger text-center mt-5'>Loading....</span>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);
    }



    const resetPassword = async () => {
        const email = emailFel.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email address');
        }
    }

    return (
        <div className='w-50 mx-auto mt-3'>
            <h3 className='text-center'>Please Login</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="email" ref={emailFel} name='email' placeholder='Email address' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <input type="password" ref={passwordFel} name='password' placeholder='Password' className="form-control" id="exampleInputPassword1" required />
                </div>

                <button type="submit" className="btn btn-primary">Login</button>

                <div>
                    <p className='mt-2'>New to Warehouse? <Link to='/register'>Register</Link></p>
                    <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
                </div>
            </form>
            {errorElement}
            <SocialLogin></SocialLogin>

        </div>

    );
};

export default Login;