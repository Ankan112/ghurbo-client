import { Box, Card, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import img1 from '../../../img/guide-md1.png'
import img2 from '../../../img/reviewer-3.png'
import img3 from '../../../img/reviewer-2.png'

const Guide = () => {
    return (
        <Container>
            <Typography variant='h4' sx={{ textAlign: 'left', fontWeight: 'bold', marginY: '40px' }}>
                Our Tour Guide
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardMedia
                            component="img"

                            height="280"
                            image={img1}
                            alt="green iguana"
                        />
                        <Box sx={{ textAlign: 'center', marginY: '15px' }}>
                            <Typography sx={{ fontWeight: 700 }} variant='h6'>Brooklyn Simmons</Typography>
                            <Typography sx={{ fontSize: '18px' }}>Traveller</Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardMedia
                            component="img"

                            height="280"
                            image={img2}
                            alt="green iguana"
                        />
                        <Box sx={{ textAlign: 'center', marginY: '15px' }}>
                            <Typography sx={{ fontWeight: 700 }} variant='h6'>Charlotte Sophia</Typography>
                            <Typography sx={{ fontSize: '18px' }}>Traveller</Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardMedia
                            component="img"

                            height="280"
                            image={img3}
                            alt="green iguana"
                        />
                        <Box sx={{ textAlign: 'center', marginY: '15px' }}>
                            <Typography sx={{ fontWeight: 700 }} variant='h6'>Marvin McKinney</Typography>
                            <Typography sx={{ fontSize: '18px' }}>Traveller</Typography>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Guide;