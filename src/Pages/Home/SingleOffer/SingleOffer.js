import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SingleOffer = ({ singlePackage }) => {
    const { price, name, description, url, time, _id } = singlePackage
    const { user } = useAuth();
    const navigate = useNavigate();
    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ minHeight: 550, boxShadow: '0 0 10px gray' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={url}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ fontSize: '22px' }} component="div">
                        {time}
                    </Typography>
                    <Typography sx={{ fontSize: '18px', marginBottom: '15px' }} component="div">
                        {price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                {
                    user.email ? <NavLink to={`/paynow/${_id}`}><Button variant='contained'>Book Now</Button></NavLink>
                        :
                        <Button onClick={() => { navigate('/login') }} variant='contained'>Book Now</Button>
                }



            </Card>
        </Grid>
    );
};

export default SingleOffer;