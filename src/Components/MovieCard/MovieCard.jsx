import React from 'react';
import './MovieCard.css'
const MovieCard = (props) => {
    // console.log(props)
    const {poster,movieName,imdbRating,description,category,watchTime} = props.value;
    const bookNow = props.bookNow
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl mt-5 bg-red-200">
          <figure className="px-10 pt-10">
            <img src={poster} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body  text-center">
            <h2 className="font-bold text-center">{movieName}</h2>
            <p>{description}</p>
            <div className="flex justify-around mb-5">
              <div>
                <h2 className='font-bold '>{watchTime} viewers</h2>
              </div>
              <div>
                <h2 className='font-bold'>Rating : {imdbRating}</h2>
              </div>
            </div>
            <button onClick={()=>bookNow(watchTime)} className="btn btn-primary">Book Now</button>
          </div>
        </div>
        </>
    );
};

export default MovieCard;