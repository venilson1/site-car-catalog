import { Box, CircularProgress } from '@mui/material';
import React, { useContext } from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import AuthProvider, { AuthContext } from './context/AuthContext';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function Private({children}){
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <Box
                    sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            </Box>
        )
    }

    if(!authenticated) return <Navigate to="/login"/>;
    return children;
}

export default function AppRoutes() {
  return (
    <Router>
        <AuthProvider>
            <Routes>
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/admin" element={<Private><DashboardPage /></Private>} />
                <Route path='*' element={<HomePage />} />
            </Routes>
        </AuthProvider>
    </Router>
  )
}
