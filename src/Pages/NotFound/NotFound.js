import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import notFound from '../../img/404.jpg'
const NotFound = () => {
    return (
        <div>
            <img src={notFound} style={{ width: '40%' }} alt="" /> <br />
            <NavLink to='/home' style={{ textDecoration: 'none' }}>
                <Button variant="contained">Go Home</Button>
            </NavLink>
        </div>
    );
};

export default NotFound;