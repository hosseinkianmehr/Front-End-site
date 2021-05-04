import Carousel from 'react-elastic-carousel'
import React from 'react';
import Image from "next/image"
import { CardMedia, Container, makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
	
	media: {
	  height: "100%",
	  width:'100%',
	  paddingTop: '56.25%', // 16:9
	},
	
  }));
const Carousels = () => {
	const clsses =useStyles()
	return (
		<Carousel
  
>
<CardMedia 
className={clsses.media}
image="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
/>
<CardMedia 
className={clsses.media}
image="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
/>
<CardMedia 
className={clsses.media}
image="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
/>
  
</Carousel>
	);
};

export default Carousels;