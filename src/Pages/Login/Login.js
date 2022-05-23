import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);

    const handleLogin = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <div className='w-50 mx-auto mt-3'>
                <h3 className='text-center'>Please Login</h3>
                <form>
                    <div className="mb-3">
                        <input type="email" placeholder='Email address' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <input type="password" placeholder='Password' className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={handleLogin}>Login</button>

                    <div>
                        <p className='mt-2'>New to Warehouse? <Link to='/register'>Register</Link></p>
                    </div>
                </form>
                <div
                    className='mt-2 d-flex justify-content-lg-center justify-content-md-evenly justify-content-sm-between'>
                    <button onClick={() => signInWithGoogle()}
                        className='btn btn-outline-secondary'><FcGoogle className='fs-2'></FcGoogle> Sign in</button>

                    <button onClick={() => signInWithGithub()}
                        className='btn btn-outline-secondary ms-2'><BsGithub className='fs-2'></BsGithub> Sign in</button>
                </div>
            </div>
        </div>
    );
};

export default Login;