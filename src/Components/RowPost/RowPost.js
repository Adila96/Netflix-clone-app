import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import Youtube from "react-youtube";
import { API_KEY, imageUrl } from "../../Constants/Constants";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data.results[0]);
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("Network Error");
      });
  }, []);
  const opts = {
    height: "390",
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
    
  };
  
  const [movieKey,setMovieKey] =useState()
  const handleMovie = (id) => {
    console.log(id);
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}/videos`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2N2JmOGZkOGM3YTVhMTJlYmRmZTdlNDYxYWUxYmFmZSIsInN1YiI6IjY1MDJlZWM0ZGI0ZWQ2MTAzNjQwMGRkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CLSRt4EfI_y7DrPF4q6gnXmQeQh-ZJyr4PgUtWgYGL4",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.results);
        if(response.data.results.length!=0){
          setMovieKey(response.data.results[0]);
        } else{
          console.log('no videos')
        }
        
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="row">
      <h2>{props.title} </h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => {
              handleMovie(obj.id);
            }}
            className={props.isSmall ? "smallPoster" : "poster"}
            src={imageUrl + obj.poster_path}
            alt="poster"
          />
        ))}
      </div>
      {movieKey && <Youtube opts={opts} videoId={movieKey.key}/>}
    </div>
  );
}

export default RowPost;
