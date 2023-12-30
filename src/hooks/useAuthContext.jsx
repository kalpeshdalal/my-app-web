import {  useEffect, useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AuthRequired({ children }) {
    let location = useLocation();
    const { userData } = useSelector((state) => state?.authenticationReducer ?? null);
    // const [isAuth, setisAuth] = useState(false)
    // useEffect(() => {
    //     if (userData) {
    //         setisAuth(true)
    //     }
    // }, [userData])


    if (!userData) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    } else {
        return children;
    }
}

export default AuthRequired;
