import React, { useState } from "react";
import './App.css';

export default function MovieSearch(){
    const [inputs,setInput] = useState("");
    const [movies,setMovies] = useState([]);

    const searchMovies = async (e) =>{
        e.preventDefault();
        if(inputs != ""){
            await fetch(`https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=tr-TR&query=${inputs}&page=1&include_adult=false`)
            .then(response => response.json())
            .then(data =>{ 
                console.log(data)
                setMovies(data.results)
            
            });
        }else{alert("please add text...")}
    }

    return(
        <div>
            <form onSubmit={ (e)=>{searchMovies(e)}}>
                <label htmlFor="srcMovie">Movie Search</label>
                <input type="text" name="srcMovie" placeholder="kara murat etc" 
                    value={inputs} onChange={e=>{setInput(e.target.value)}}></input>
                <input type="submit"></input>
            </form>
            <div>
                {

                    movies.map(movie => (
                     <div key={movie.id} className="card">
                        <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}></img>
                        <div className="text">
                            <h5>{movie.title}</h5>
                            <p>{movie.overview}</p>
                            <p>{movie.release_date}</p>
                        </div>
                     </div>  
                    )
                    
                    )
 
                }
            </div>
        </div>
    )
}