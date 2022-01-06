import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container, Typography } from '@mui/material';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const Gallery = () => {
    return (
        <Container>
            <Typography variant='h4' sx={{ textAlign: 'left', fontWeight: 'bold', marginY: '40px' }}>
                Travel Gallery
            </Typography>
            <ImageList
                sx={{ width: '100%', MinHeight: 121 }}
                variant="quilted"
                cols={4}
                xs={6}
            // rowHeight={121}
            >
                {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                        <img
                            {...srcset(item.img, 221, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    );
};

export default Gallery;

const itemData = [
    {
        img: 'https://image.freepik.com/free-photo/stylish-beautiful-woman-walking-desert-sand-white-outfit-wearing-straw-hat-sunset_285396-9203.jpg',
        title: 'Breakfast',
        rows: 2,
        cols: 2,

    },
    {
        img: 'https://image.freepik.com/free-photo/bag-beach-accessories-kept-sand_1252-475.jpg',
        title: 'Burger',
    },
    {
        img: 'https://image.freepik.com/free-photo/tall-trees-forest-mountains-covered-with-fog_181624-11289.jpg',
        title: 'Camera',
    },
    {
        img: 'https://image.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg',
        title: 'Coffee',
        cols: 2,
    },
    {
        img: 'https://image.freepik.com/free-photo/boatman-punting-boat-river-arashiyama-autumn-season-along-river-kyoto-japan_335224-22.jpg',
        cols: 2,
    },
    {
        img: 'https://image.freepik.com/free-photo/illuminated-city-night_1127-2144.jpg',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://image.freepik.com/free-photo/wind-blows-woman-s-hair-while-she-stands-bridge-before-beautiful-skyscrapers-dubai_1304-3057.jpg',
        title: 'Basketball',
    },
    {
        img: 'https://image.freepik.com/free-photo/aerial-shot-maldives-showing-amazing-beach-clear-blue-sea-jungles_181624-1993.jpg',
        title: 'Fern',
    },
    // {
    //     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    //     title: 'Mushrooms',
    //     rows: 2,
    //     cols: 2,
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    //     title: 'Tomato basil',
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    //     title: 'Sea star',
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    //     title: 'Bike',
    //     cols: 2,
    // },
];