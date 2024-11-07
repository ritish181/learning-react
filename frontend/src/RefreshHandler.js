import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const RefreshHandler = ({ setIsAuthenticated }) => {
    const location = useLocation();
    const navigate =  useNavigate();

    const token = localStorage.getItem('token');
    useEffect(()=>{
        if(token){
            setIsAuthenticated(true);
            if(location.pathname === '/' ||
                location.pathname === '/login' ||
                location.pathname === '/signup'
            ){
                navigate('/home', {replace: false});
            }
        }
    }, [location, navigate, setIsAuthenticated])
    
    return (null);
}

export default RefreshHandler