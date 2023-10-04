/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../providers/AutProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRout = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    console.log(location.pathname)

    if (loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRout;