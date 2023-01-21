import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleOffer from '../SingleOffer/SingleOffer';

const Offer = () => {
    const [Package, setPackage] = useState([])
    useEffect(() => {
        fetch('https://assignment-11-node-mongodb.vercel.app/package')
            .then(res => res.json())
            .then(data => setPackage(data))
    }, [])
    return (
        <Container>
            <Typography variant='h4' sx={{ textAlign: 'left', fontWeight: 'bold', marginY: '40px' }}>
                Popular Tour Package
            </Typography>
            <Grid container spacing={3}>

                {
                    Package.map(singlePackage => <SingleOffer
                        key={singlePackage._id}
                        singlePackage={singlePackage}
                    ></SingleOffer>)
                }

            </Grid>
        </Container>
    );
};

export default Offer;