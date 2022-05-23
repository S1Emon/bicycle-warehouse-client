import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Register = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);

    const handleRegister = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            <h3 className='text-center mt-2'>Register Here!</h3>
            <div className='w-50 mx-auto'>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputUsername" class="form-label">Username</label>
                        <input type="text" class="form-control" id="exampleInputUsername" required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPhoneNumber1" class="form-label">Phone Number</label>
                        <input type="number" class="form-control" id="exampleInputPhoneNumber1" required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputDateOfBirth" class="form-label">Date of Birth</label>
                        <input type="text" class="form-control" id="exampleInputDateOfBirth" required />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Accept terms & conditions</label>
                    </div>
                    <button onClick={handleRegister} type="submit" class="btn btn-primary">Register</button>
                </form>
                <p>Already have an account? <Link to="/login">Please Login</Link></p>
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

export default Register;