import { Avatar, Container, Grid, Rating, Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import img1 from '../../../img/reviewer-1.png'
import img2 from '../../../img/reviewer-3.png'
import img3 from '../../../img/reviewer-2.png'
import { Box } from '@mui/system';

const Review = () => {
    const [value, setValue] = React.useState(5);
    return (
        <Container >
            <Typography variant='h4' sx={{ textAlign: 'left', fontWeight: 'bold', marginY: '40px' }}>
                What Our Client Say About Us
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card >
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Avatar sx={{ width: 90, height: 90, marginTop: '20px' }} src={img1}></Avatar>
                        </Box>
                        {/* <CardMedia
                            component="img"
                            sx={{ borderRadius: '30%' }}
                            // height="140"
                            image={img}
                            alt="green iguana"
                        /> */}
                        <CardContent>
                            {/* <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography> */}
                            <Typography variant="body2" color="text.secondary">
                                Travel is also a great opportunity to make new friends – either fellow travelers or locals. Meeting and befriending new people is a valuable travel benefit. I have got a great experience and joy with GHURBO.
                            </Typography>
                            <Box sx={{ textAlign: 'left', display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                                <Box>
                                    <Typography sx={{ fontWeight: 700 }} variant='h6'>Shawan Pull</Typography>
                                    <Typography sx={{ fontSize: '18px' }}>Traveller</Typography>
                                </Box>
                                <Rating sx={{ paddingTop: '20px' }} name="read-only" value={value} readOnly />
                            </Box>
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card >
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Avatar sx={{ width: 90, height: 90, marginTop: '20px' }} src={img2}></Avatar>
                        </Box>
                        {/* <CardMedia
                            component="img"
                            sx={{ borderRadius: '30%' }}
                            // height="140"
                            image={img}
                            alt="green iguana"
                        /> */}
                        <CardContent>
                            {/* <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography> */}
                            <Typography variant="body2" color="text.secondary">
                                Travel is also a great opportunity to make new friends – either fellow travelers or locals. Meeting and befriending new people is a valuable travel benefit. I have got a great experience and joy with GHURBO.
                            </Typography>
                            <Box sx={{ textAlign: 'left', display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                                <Box>
                                    <Typography sx={{ fontWeight: 700 }} variant='h6'>Mark Teeo</Typography>
                                    <Typography sx={{ fontSize: '18px' }}>Traveller</Typography>
                                </Box>
                                <Rating sx={{ paddingTop: '20px' }} name="read-only" value={value} readOnly />
                            </Box>
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card >
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Avatar sx={{ width: 90, height: 90, marginTop: '20px' }} src={img3}></Avatar>
                        </Box>
                        {/* <CardMedia
                            component="img"
                            sx={{ borderRadius: '30%' }}
                            // height="140"
                            image={img}
                            alt="green iguana"
                        /> */}
                        <CardContent>
                            {/* <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography> */}
                            <Typography variant="body2" color="text.secondary">
                                Travel is also a great opportunity to make new friends – either fellow travelers or locals. Meeting and befriending new people is a valuable travel benefit. I have got a great experience and joy with GHURBO.
                            </Typography>
                            <Box sx={{ textAlign: 'left', display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                                <Box>
                                    <Typography sx={{ fontWeight: 700 }} variant='h6'>Bilton Lie</Typography>
                                    <Typography sx={{ fontSize: '18px' }}>Traveller</Typography>
                                </Box>
                                <Rating sx={{ paddingTop: '20px' }} name="read-only" value={value} readOnly />
                            </Box>
                        </CardContent>

                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Review;