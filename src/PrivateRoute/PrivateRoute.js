import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../Firebase/Firebase.init';

const PrivateRoute = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification();
    let location = useLocation();

    if (loading) {
        return <span className='text-center'>Loading...</span>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>

    }
    if (user.providerData[0]?.providerId === 'password' && !user?.emailVerified) {
        return <div>
            <h2 className='text-danger'>Email address is not verified</h2>
            <h5 className='text-success'>Please verify your email address</h5>
            <button className='btn btn-primary' onClick={async () => {
                await sendEmailVerification()
                toast('Email Sent')
            }}>Send Verification Again</button>
        </div>
    }
    return children;
};

export default PrivateRoute;