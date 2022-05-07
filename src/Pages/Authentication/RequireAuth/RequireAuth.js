import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import auth from '../../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <Loading />
    }

    if (error) {
        <div>
            <p>Error: {error}</p>
        </div>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;