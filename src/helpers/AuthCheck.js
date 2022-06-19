/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";

// contexts
import { AuthContext } from "context";

const AuthCheck = ({ SpecificComponent, requiresAuthentication = null, ...props }) => {
    const navigate = useNavigate();
    const { state: { user, authenticated } } = useContext(AuthContext);

    useEffect(() => {
        //Not Loggined in Status
        if (!authenticated) {
            navigate('/sign-in')
        //Loggined in Status x
        } else {
            navigate('/')
        }
    }, [authenticated]);
    return (
        <SpecificComponent {...props} user={user} />
    )
}

export default AuthCheck;