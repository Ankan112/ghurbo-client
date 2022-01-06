import React from 'react';
import TableCell from '@mui/material/TableCell';

import TableRow from '@mui/material/TableRow';

import { Button, } from '@mui/material';
const ManageAllOrdersInfo = ({ orderInfo, handleDeleteOrder }) => {
    const { customername, name, email, price } = orderInfo;
    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {customername}
            </TableCell>
            <TableCell align="right">{email}</TableCell>
            <TableCell align="right">{name}</TableCell>
            <TableCell align="right">{price}</TableCell>
            <TableCell align="right"><Button
                onClick={() => handleDeleteOrder(orderInfo._id)}
                variant="contained">Cancel</Button></TableCell>
        </TableRow>
    );

};

export default ManageAllOrdersInfo;