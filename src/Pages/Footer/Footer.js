import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#566573 ' }}>
            <Container sx={{ paddingY: '40px', color: '#F2F3F4 ' }}>
                <Grid container spacing={3}>
                    <Grid item xs={6} md={3}>
                        <Typography variant='h5' sx={{ textAlign: 'left', marginBottom: '10px' }}>Ghurbo</Typography>
                        <p style={{ textAlign: 'left' }}>We provide our best service and try to 100% client satisfation. That's why we work world wide with a professional team. Thanks you to choise Ghurbo</p>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant='h6' sx={{ marginBottom: '10px', }}>Address</Typography>
                        <p>House No:77, Block-c <br /> Road:1/1 Gulshan-1 <br />Dhaka-1212</p>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant='h6' sx={{ marginBottom: '10px' }}>Quick Links</Typography>
                        <p>About Us <br />
                            Tour Package<br />
                            Destination<br />
                            Tour Guide<br />
                            Blog</p>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant='h6' sx={{ marginBottom: '10px' }}>Social</Typography>
                        <FacebookIcon sx={{ fontSize: '40px' }}></FacebookIcon><YouTubeIcon sx={{ fontSize: '40px' }}></YouTubeIcon><LinkedInIcon sx={{ fontSize: '40px' }}></LinkedInIcon><TwitterIcon sx={{ fontSize: '40px' }}></TwitterIcon>
                    </Grid>

                </Grid>
                <Typography sx={{ fontSize: '16px', marginTop: '20px', textAlign: 'center' }}>Copyright &copy; 2022 Ghurbo.</Typography>
            </Container>
        </Box>

    );
};

export default Footer;