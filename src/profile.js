import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {useState} from "react";

export default function StandardImageList(props) {
  return (
    <ImageList sx={{ width: 800, height: 650, marginLeft:20, marginTop:3}} cols={3} rowHeight={184} gap={20}>
      {props.placeImages ?
          (props.placeImages.map((item, index) => (
                <ImageListItem key={index}>
                  <img
                      src={item}
                      srcSet={item}
                      alt={item}
                      loading="lazy"
                  />
                </ImageListItem>
            )))
          :
          (<div>rendering</div>)
      }

    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
];