import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {originals,action,comedy,horror,romance,documentaries} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title='Netflix Originals' url={originals}/>
      <RowPost title='Action' isSmall url={action}/>
      <RowPost title='Comedy' isSmall url={comedy}/>
      <RowPost title='Horror' isSmall url={horror}/>
      <RowPost title='Romance' isSmall url={romance}/>
      <RowPost title='Documentaries' isSmall url={documentaries}/>
    </div>
    
  );
}

export default App;
