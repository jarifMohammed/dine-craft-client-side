import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function NewAdded() {
  return (
    <ImageList sx={{ width: 1000, height: 800 }}>
        <h2 className='text-4xl m-5 text-orange-600'>Our new added menu items</h2>
      <ImageListItem key="Subheader" cols={2}>
        
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img:" https://i.ibb.co.com/hVY3TqP/carousel2.jpg",
    title: 'Breakfast',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://i.ibb.co.com/c3DwZ6L/carousel3.jpg',
    title: 'Burger',
    
  },
  {
    img: 'https://i.ibb.co.com/6FkxDp4/2061.jpg',
    title: 'Buffet',
    
  },
  {
    img: 'https://i.ibb.co.com/HDFzhK2/rb-26851.png',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://i.ibb.co.com/3Wgj6Wb/1719.jpg',
    title: 'Shripms',
    
    cols: 2,
  },
  {
    img: 'https://i.ibb.co.com/HDFzhK2/rb-26851.png',
    title: 'Latte',
   
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://i.ibb.co.com/kBx3xZC/rb-2147746471.png',
    title: 'Moca Almond',
   
  },
  {
    img: 'https://i.ibb.co.com/c3DwZ6L/carousel3.jpg',
    title: 'Hot Dog',
   
  },
  
  
  
  
];