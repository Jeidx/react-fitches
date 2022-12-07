import React from 'react';
import { useInView } from 'react-intersection-observer';

//Lazy load content with react-intersection-observer library

const Image = ({src}) => {
    const { ref, inView } = useInView({
        threshold: 1, //100% item view 
        triggerOnce: true, // dont make trigger toggle
    });
  return (
    <div ref={ref} style={{width: '400px' , height: '200px' , margin: '5px'}}>
        {inView ?
                <img 
                src={src}
                style={{width: '100%' , height: '100%' , margin: '5px'}} /> 
            : 
            <div
                style={{width: '100%' , height: '100%' , margin: '5px', backgroundColor: 'grey'}}>

            </div>
        }

    </div>
  )
}

const LazyImg = () => {
    const data = [
        "https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__340.jpg",
        "https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301__340.jpg",
        "https://cdn.pixabay.com/photo/2017/12/10/15/16/white-horse-3010129__340.jpg",
        "https://cdn.pixabay.com/photo/2016/03/27/22/22/fox-1284512__340.jpg",
        "https://cdn.pixabay.com/photo/2017/01/18/17/14/girl-1990347__340.jpg",
        "https://cdn.pixabay.com/photo/2017/09/11/14/11/fisherman-2739115__340.jpg",
        "https://cdn.pixabay.com/photo/2017/06/04/23/17/lighthouse-2372461__340.jpg",
        "https://cdn.pixabay.com/photo/2016/11/30/12/29/bicycle-1872682__340.jpg",
        "https://cdn.pixabay.com/photo/2018/04/12/18/13/sunset-3314275__340.jpg",
        "https://cdn.pixabay.com/photo/2014/02/27/16/08/splashing-275950__340.jpg",
        "https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801__340.jpg",
        "https://cdn.pixabay.com/photo/2016/06/20/03/21/rainbow-1467988__340.jpg",
        "https://cdn.pixabay.com/photo/2016/11/29/13/37/christmas-1869902__340.jpg",
        "https://cdn.pixabay.com/photo/2016/03/18/15/02/ufo-1265186__340.jpg"
     ]
  return (
    <div>
       {data.map((el, id) =>  
        <Image src={el} key={id}/>)}
    </div>
  )
}

export default LazyImg