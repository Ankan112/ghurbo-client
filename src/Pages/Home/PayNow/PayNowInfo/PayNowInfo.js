import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

const PayNowInfo = ({ info }) => {
    const { name, url, price } = info;
    const email = sessionStorage.getItem("email")
    const [order, setOrder] = useState({ name, price, email })
    console.log(order)
    const handleOrder = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrder = { ...order };
        newOrder[field] = value;

        setOrder(newOrder);
    }
    const handleNewOrder = e => {
        fetch('https://assignment-11-node-mongodb-iyejhgqnc-ankan112.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Your Booking Successful')
                    e.target.reset();
                }
            })

        e.preventDefault();
    }
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <img src={url} alt={name} />
            </Grid>
            <Grid item xs={12} md={6}>
                <form onSubmit={handleNewOrder}>
                    <TextField
                        sx={{ marginBottom: '20px', width: '300px' }}
                        label="Package Name"
                        onBlur={handleOrder}
                        defaultValue={name}
                        name='packagename'
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="standard"
                    />
                    <TextField
                        sx={{ marginBottom: '20px', width: '300px' }}
                        label="Price"
                        onBlur={handleOrder}
                        name='price'
                        defaultValue={price}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="standard"
                    />
                    <TextField
                        sx={{ marginBottom: '20px', width: '300px' }}
                        label="Your Name"
                        onBlur={handleOrder}
                        required
                        name='customername'
                        variant="standard"
                    />
                    <TextField
                        sx={{ marginBottom: '50px', width: '300px' }}
                        label="Your Email"
                        onBlur={handleOrder}
                        name='email'
                        defaultValue={email}
                        InputProps={{
                            readOnly: true,
                        }}

                        variant="standard"
                    />
                    <Button

                        sx={{ width: '300px' }}
                        variant='contained'
                        type='submit'>Confirm</Button>
                </form>
            </Grid>
        </Grid>

    );
};

export default PayNowInfo;