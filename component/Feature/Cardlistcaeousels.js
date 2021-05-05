import { CardMedia, Container, makeStyles } from "@material-ui/core";
import React from "react";
import Carousel from "react-elastic-carousel";
import Cardbace from "../card/card";
const useStyles = makeStyles((theme) => ({
	
	media: {
	  
	  paddingTop: '10%', // 16:9
      
	},
	card:{
        background:"red",
        borderRadius:10,
        margin:100,
        marginRight:20,
        marginLeft:20
    }
  }));
const Cardlistcaeousels = () => {
    const classis =useStyles()
  return (
    <Container>

      <Carousel itemPadding={[0, 0]} itemsToShow={4} outerSpacing={100} className={classis.card} isRTL >
        <div className={classis.media}>
          <Cardbace />
        </div>
        <div className={classis.media}>
          <Cardbace />
        </div>
        <div className={classis.media}>
          <Cardbace />
        </div>
        <div className={classis.media}>
          <Cardbace />
        </div>
        <div className={classis.media}>
          <Cardbace />
        </div>
        <div className={classis.media}>
            <Cardbace />
        </div>
    
      </Carousel>
    </Container>
    
  );
};

export default Cardlistcaeousels;
