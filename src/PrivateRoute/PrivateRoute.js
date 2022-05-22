import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';

const PrivateRoute = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();

    if (loading) {
        return <span className='text-center'>Loading...</span>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>

    }
    return children;
};

export default PrivateRoute;