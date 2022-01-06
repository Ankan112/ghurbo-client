import React from 'react';


import TableCell from '@mui/material/TableCell';

import TableRow from '@mui/material/TableRow';

import { Button, } from '@mui/material';

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const MyOrderInfo = ({ orderInfo, handleDeleteOrder }) => {
    const { customername, name, email, price } = orderInfo;
    // const [orders, setOrders] = useState([])

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

export default MyOrderInfo;