// http://www.omdbapi.com/?i=tt3896198&apikey=e7694217
import Navbar from "./components/navbar.js";
import Card from "./components/card.js";
import { useEffect, useState } from "react";
function App() {
  const [movies, setMovies] = useState([]);
  const [search,setSearch] = useState("marvel")
         
       const getMovieRequest = async (search) =>{
        const url =`http://www.omdbapi.com/?s=${search}&apikey=e7694217`;
        const response = await fetch(url);
        const responseJson = await response.json();
        if (responseJson.Search) {
          setMovies(responseJson.Search)
        } else {
          
        }
     
       }
       useEffect(() =>{
        getMovieRequest(search);
       },[search]);

  return (
   
    <div className="App bg-[#12232E]">
         <Navbar search={search} setSearch={setSearch}/>
         <Card movies={movies}/>
    </div>
  );
}

export default App;
