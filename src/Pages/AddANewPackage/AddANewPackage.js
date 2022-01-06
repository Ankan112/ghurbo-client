import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';



const AddANewPackage = () => {

    const [packageInfo, setPackageInfo] = useState({})
    console.log(packageInfo)
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newPackageInfo = { ...packageInfo }
        newPackageInfo[field] = value;
        setPackageInfo(newPackageInfo)
    }

    const handleNewPackage = e => {
        fetch('http://localhost:5000/package', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(packageInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Package Added Successfully')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <Box sx={{ marginTop: '130px' }}>
            <Navigation></Navigation>
            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box>
                    <Typography variant='h4' sx={{ textAlign: 'left', fontWeight: 'bold', marginBottom: '20px' }}>
                        Add a New Package
                    </Typography>
                    <form onSubmit={handleNewPackage}>
                        <TextField
                            sx={{ marginBottom: '20px', width: '300px' }}
                            required
                            onBlur={handleOnBlur}
                            name='name'
                            label="Package Name"
                            variant="standard" /><br />

                        <TextField
                            sx={{ marginBottom: '20px', width: '300px' }}
                            required
                            onBlur={handleOnBlur}
                            name='time'
                            label="Time"
                            variant="standard" /> <br />

                        <TextField
                            sx={{ marginBottom: '20px', width: '300px' }}
                            required
                            onBlur={handleOnBlur}
                            name='price'
                            label="Price"
                            variant="standard" /><br />

                        <TextField
                            sx={{ marginBottom: '20px', width: '300px' }}
                            required
                            onBlur={handleOnBlur}
                            name='url'
                            label="Image URL"
                            variant="standard" /><br />

                        <TextField
                            sx={{ marginBottom: '40px', width: '300px' }}
                            required
                            onBlur={handleOnBlur}
                            name='description'
                            label="Description"
                            multiline
                            maxRows={4}
                            variant="standard"
                        /> <br />
                        <Button

                            sx={{ width: '300px' }}
                            variant='contained'
                            type='submit'>Submit</Button>
                    </form>
                </Box>
            </Container>
        </Box>
    );
};

export default AddANewPackage;