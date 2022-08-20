import React from 'react'
import {MdChevronLeft,MdChevronRight,MdFavorite} from "react-icons/md"


const Card = (props) => {

    const sliderLeft =() =>{
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const sliderRight =() =>{
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    const sliderLeft2 =() =>{
        var slider = document.getElementById('slider2')
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const sliderRight2 =() =>{
        var slider = document.getElementById('slider2')
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    const sliderLeft3 =() =>{
        var slider = document.getElementById('slider3')
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const sliderRight3 =() =>{
        var slider = document.getElementById('slider3')
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    

  return (
    <>
    <div>
      <h1 className="text-2xl pl-11 pt-5 underline text-[#A3BCB6]"> <strong>All</strong> </h1>
    
    <div className=" relative flex items-center ">
    <MdChevronLeft className=" text-white opacity-50 cursor-pointer hover:opacity-100" onClick={sliderLeft} size={40} />
    <div id="slider" className="w-full h-full overflow-x-scroll whitespace-nowrap scroll scroll-smooth scrollbar-hide ">
    {props.movies.map((movie,index)=> <div className="w[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300  ">
          <img src={movie.Poster}  alt="movie "/>
          {/* <div className="flex gap-3 hidden hover:visible">
          <MdFavorite className="text-white  mt-1"/> <h2> Add to Favourites </h2>
          </div> */}
          
          <h2 className="text-white">{movie.Type}</h2>
          <h2 className="text-center text-xl pt-1 text-white">{movie.Year}</h2>
          
        </div>)}
       
        </div> 
        <MdChevronRight className=" text-white opacity-50 cursor-pointer hover:opacity-100" onClick={sliderRight} size={40} />
     
    </div>
    </div>


{/* this is the series section of search filtering */}



    <div>
      <h1 className="text-2xl pl-11 pt-5 underline text-[#A3BCB6]"> <strong>Series</strong> </h1>
    
    <div className=" relative flex items-center ">
    <MdChevronLeft className="text-white opacity-50 cursor-pointer hover:opacity-100" onClick={sliderLeft2} size={40} />
    <div id="slider2" className="w-full h-full overflow-x-scroll whitespace-nowrap scroll scroll-smooth scrollbar-hide ">
    {props.movies.filter((val) =>{
      if(val.Type == "series"){
        return val
      }
    } ).map((movie,index)=> <div className="w[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300  ">
          <img src={movie.Poster}  alt="movie "/>
          <h2 className="text-white">{movie.Type}</h2>
          <h2 className="text-center text-xl pt-1 text-white">{movie.Year}</h2>
          
        </div>)}
       
        </div> 
        <MdChevronRight className=" text-white opacity-50 cursor-pointer hover:opacity-100" onClick={sliderRight2} size={40} />
     
    </div>
    </div>
   



   {/* this is the Movie section of search filtering */}
   

   <div>
      <h1 className="text-2xl pl-11 pt-5 underline text-[#A3BCB6]"> <strong>Movies</strong> </h1>
    
    <div className=" relative flex items-center ">
    <MdChevronLeft className=" text-white opacity-50 cursor-pointer hover:opacity-100" onClick={sliderLeft3} size={40} />
    <div id="slider3" className="w-full h-full overflow-x-scroll whitespace-nowrap scroll scroll-smooth scrollbar-hide ">
    {props.movies.filter((val) =>{
      if(val.Type == "movie"){
        return val
      }
    } ).map((movie,index)=> <div className="w[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300  ">
          <img src={movie.Poster}  alt="movie "/>
          <h2 className="text-white">{movie.Type}</h2>
          <h2 className="text-center text-xl pt-1 text-white">{movie.Year}</h2>
          
        </div>)}
       
        </div> 
        <MdChevronRight className=" text-white opacity-50 cursor-pointer hover:opacity-100" onClick={sliderRight3} size={40} />
     
    </div>
    </div>
   

      
    </>
  )
}

export default Card
