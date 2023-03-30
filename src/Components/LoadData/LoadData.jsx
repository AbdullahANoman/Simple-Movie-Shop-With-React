import React, { useEffect, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import SideCart from '../SideCart/SideCart';

const LoadData = () => {
    const [movies,setMovie] = useState([])
    const[watchTime,setWatchTime] = useState('')
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setMovie(data))
    },[])
    const bookNow = (time) =>{
        const previousWatchTime = JSON.parse(localStorage.getItem('watch-time'))
        if(previousWatchTime){
            let sum = previousWatchTime + time ;
            localStorage.setItem('watch-time',sum)
            setWatchTime(sum)
        }
        else{
            localStorage.setItem('watch-time',time)
            setWatchTime(time)
        }
    }
    return (
        <div className='flex'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-around p-10 gap-'>
            {
                movies.map((movie,index)=>(
                    <MovieCard value={movie} bookNow={bookNow} key={index}></MovieCard>
                ))
            }
          </div>
          <div className=' mt-14 rounded-xl bg-red-300 w-96 p-10 ' >
                <SideCart watchTime={watchTime}></SideCart>
          </div>
        </div>
    );
};

export default LoadData;