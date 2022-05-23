import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement;

    if (googleLoading || gitLoading) {
        return <span className='text-danger text-center mt-5'>Loading....</span>
    }

    if (googleError || gitError) {
        errorElement = <p className='text-danger'>Error: {googleError?.message} {gitError?.message}</p>
    }

    if (googleUser || gitUser) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            {errorElement}
            <div
                className='mt-2 d-flex justify-content-lg-center justify-content-md-evenly justify-content-sm-between'>
                <button onClick={() => signInWithGoogle()}
                    className='btn btn-outline-secondary'><FcGoogle className='fs-2'></FcGoogle> Sign in</button>

                <button onClick={() => signInWithGithub()}
                    className='btn btn-outline-secondary ms-2'><BsGithub className='fs-2'></BsGithub> Sign in</button>
            </div>
        </div>
    );
};

export default SocialLogin;