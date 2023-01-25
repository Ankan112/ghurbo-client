import { Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

const NewsletterForm = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Send email to server for subscription
        console.log(`Subscribing ${email} to newsletter...`);
        setEmail('');
    };

    return (
        <div style={{ marginTop: '50px', padding: '80px', backgroundColor: '#EEEEEE' }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant='h4'>
                            Join our newsletter for <br /> more offers and undates.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <form style={formStyle} onSubmit={handleSubmit}>
                            <input
                                style={inputStyle}
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                            <button style={buttonStyle} type="submit">Subscribe</button>
                        </form>
                    </Grid>
                </Grid>

            </Container>
        </div>

    );
};

const formStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '20px'
};

const inputStyle = {
    // margin: '10px',
    padding: '10px',
    width: '300px'
};

const buttonStyle = {
    // margin: '10px',
    padding: '12px',
    width: '100px',
    backgroundColor: 'blue',
    color: 'white',
    cursor: 'pointer',
    border: 'none'
};


export default NewsletterForm;
