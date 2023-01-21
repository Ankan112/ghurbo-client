import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../Navigation/Navigation';
import PayNowInfo from './PayNowInfo/PayNowInfo';

const PayNow = () => {
    const { id } = useParams();
    const [spackage, setPackage] = useState([]);
    useEffect(() => {
        fetch(`https://assignment-11-node-mongodb.vercel.app/package/${id}`)
            .then(res => res.json())
            .then(data => setPackage(data))
    }, [id])
    return (
        <Container>
            <Navigation></Navigation>
            <Typography variant='h4' sx={{ textAlign: 'left', fontWeight: 'bold', marginBottom: '20px', marginTop: '80px' }}>
                Your Tour Package
            </Typography>
            {
                spackage.map(info => <PayNowInfo
                    key={info._id}
                    info={info}
                ></PayNowInfo>)
            }

        </Container>
    );
};

export default PayNow;