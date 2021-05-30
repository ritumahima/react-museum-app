import { useEffect, useState } from 'react';
import './App.css';
import  useStyles from './Style.js';
import { Typography,Card, CardContent, CardMedia} from '@material-ui/core';
import style from "./collection.module.css";

import Carousel from 'react-elastic-carousel';                    /* npm install --save react-elastic-carousel  
                                                                          npm install --save styled-components  */
import { LazyLoadImage } from 'react-lazy-load-image-component';   /* npm i --save react-lazy-load-image-component */
import 'react-lazy-load-image-component/src/effects/blur.css';



function App() {

  const classes = useStyles();
  const API_KEY = 'yW6uq3BV';
  const MAKER = 'Rembrandt+van+Rijn'
  const url = `https://www.rijksmuseum.nl/api/nl/collection?key=${API_KEY}&involvedMaker=${MAKER}`;
  const HEADING = 'Welcome to Het Rijksmuseum';

  const [collections,setCollection]= useState([]);  /* All the collection data now in this state */
  
  const breakPoints = [
    {width:1,itemsToShow:1},
    {width:500,itemsToShow:2},
   ]

 
  /* React Hooks that tell React that your component needs to do something after render  */ 

  useEffect(()=>{
    getCollection();
  },[])

 
  /* API call to get images */
  const getCollection = async () =>{                           /* any external request you are making should work with async and await */
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data.artObjects);
      setCollection(data.artObjects);
    } else {
      throw new Error('Something went wrong couldnot fetch data!');             /* If error while fecting the data */
    }
    
  }

  return (
    <div >
     <h1 className="mainHeader">{HEADING}</h1>
        <div className={classes.root}>
              <Carousel 
              breakPoints={breakPoints}                               /* Added react elastic carousel for better look and feel */
              className={classes.grid} 
              container  >         
                     {collections.map(collection =>(
                        <Card raised className={classes.card} key={collection.id}>
                            <CardMedia >
                            <LazyLoadImage effect="blur" 
                            className={style.image}                  /* Lazy loading for performance using using react lazy load component */ 
                            alt={collection.title} 
                            src={collection.webImage.url}/>
                            </CardMedia>
                            <CardContent className={classes.cardContent}>
                                <Typography textAlign="center" fontFamily="fantasy" gutterBottom varient="h5">
                                        {collection.longTitle}
                                </Typography>
                            </CardContent>
                        </Card>
                      ))}
            </Carousel>
        </div>
    </div>
  );
}

export default App;
