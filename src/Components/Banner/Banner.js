import React, { useEffect, useState } from "react";
import styles from "./Banner.module.css";
import axios from "../../axios";
import { API_KEY ,imageUrl} from "../../Constants/Constants";

function Banner() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios
      .get(`/trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results[2]);
        setMovie(response.data.results[2]);
      });
  }, []);

  return (
    <div className={styles.banner} style={{backgroundImage:`url(${imageUrl+movie.backdrop_path})`}}>
      <div className={styles.content}>
        <h1 className={styles.title}>{movie.title}</h1>
        <div className={styles.banner_buttons}>
          <button className={styles.button}>Play</button>
          <button className={styles.button}>My List</button>
        </div>
        <h1 className={styles.description}>{movie.overview}</h1>
      </div>
      <div className={styles.fade_bottom}></div>
    </div>
  );
}

export default Banner;
