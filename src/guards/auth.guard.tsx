import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import axios from "axios";

const AuthGuard: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const location = useLocation();

    useEffect(() => {
        const checkAuth = async () => {
            try {   
                const response = await axios.get('http://localhost:5000/auth/verify', { withCredentials: true });
                if (response.status === 200) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                try {
                    const refreshResponse = await axios.get('http://localhost:5000/auth/refresh', { withCredentials: true });
                    if (refreshResponse.status === 200) {
                        setIsAuthenticated(true);
                    } else {
                        setIsAuthenticated(false);
                    }
                } catch (refreshError) {
                    setIsAuthenticated(false);
                }
            }
        };

        checkAuth();
    }, []);

    if (isAuthenticated === null) {
        return <div>Loading...</div>;
    }

    if (isAuthenticated && location.pathname.startsWith("/auth")) {
        return <Navigate to="/home" replace />;
    }

    if (!isAuthenticated && location.pathname.startsWith("/home") && location.pathname.startsWith("/")) {
        return <Navigate to="/auth" replace />;
    }

    return <Outlet />;
};

export default AuthGuard;