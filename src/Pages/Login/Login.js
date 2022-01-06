import { Button, Card, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Login.css'
import useAuth from '../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {

    const { signInWithGoogle } = useAuth();
    console.log(signInWithGoogle)
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }

    return (
        <Box className='login'>
            <Navigation></Navigation>
            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card sx={{ width: '300px', height: '400px', marginTop: '130px', paddingTop: '30px', backgroundColor: 'rgba(0, 0, 0, 0.638)' }}>
                    <Box>
                        <Typography variant='h4' sx={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.891)' }}>
                            LOG IN
                        </Typography>
                        <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.891)' }}>
                            Welcome Back
                        </Typography>
                        <Button onClick={handleGoogleSignIn} sx={{ marginTop: '90px' }} variant="contained">Log in with Google</Button>
                    </Box>
                </Card>
            </Container>
        </Box>
    );
};

export default Login;