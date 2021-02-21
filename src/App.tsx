//import React from 'react'
import Person from './Person'
import "./styles.css";

export default function App() {
  return (
    <div className="App">
     
      <Person 
        Nome="João Barros"
        DataNascimento={new Date('1972-10-10')} 
        LocalNasc_coord={{Longitude:"12W", Latitude:"24N"}}
        Altura={165}
      />

    </div>
  );
}
