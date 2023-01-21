import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Container, Grid, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import ManageAllOrdersInfo from './ManageAllOrdersInfo';

const ManageAllOrders = () => {
    // const email = sessionStorage.getItem("email")
    // console.log(email)
    const [ordersInfo, setOrdersInfo] = useState([])

    useEffect(() => {
        fetch(`https://assignment-11-node-mongodb.vercel.app/orders`)
            .then(res => res.json())
            .then(data => setOrdersInfo(data))
    }, [])
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are You Sure, You Want to Delete this Order?');
        if (proceed) {
            const url = `https://assignment-11-node-mongodb.vercel.app/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Delete Success')
                    }
                    const remainingOrders = ordersInfo.filter(order => order._id !== id);
                    setOrdersInfo(remainingOrders)
                })
        }
    }
    return (
        <Box>
            <Navigation></Navigation>

            <Container sx={{ marginTop: '130px' }}>
                <Typography variant='h4' sx={{ textAlign: 'left', fontWeight: 'bold', marginBottom: '40px' }}>
                    All Orders
                </Typography>
                <Grid container sx={{ marginBottom: '30px' }} spacing={3}>
                    <Grid item xs={12} md={12}>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell align="right">Email</TableCell>
                                        <TableCell align="right">Package Name</TableCell>
                                        <TableCell align="right">Price</TableCell>
                                        <TableCell align="right">Cancel Package</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {
                                        ordersInfo.map(orderInfo => <ManageAllOrdersInfo
                                            key={orderInfo._id}
                                            handleDeleteOrder={handleDeleteOrder}
                                            orderInfo={orderInfo}
                                        ></ManageAllOrdersInfo>)
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
};

export default ManageAllOrders;