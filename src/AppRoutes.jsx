import { Box, CircularProgress } from '@mui/material';
import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function Privaye(){
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

export default function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route exact path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<DashboardPage />} />
        </Routes>
    </Router>
  )
}
