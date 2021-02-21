//import React from 'react'

export interface coordenadas{
  /**
   * Digitar as coordenadas do local de nascimento:                    
   *  Exemplo: {{Longitude:"30W", Latitude:"30N"}}
   */
  Longitude: string;
  Latitude: string;
}

export interface PersonProps{
  Nome: string;
  /**
   * Use o formato: {new date('yyyy-mm-dd')}
   */
  DataNascimento: Date;
  LocalNasc_coord: coordenadas;
  Altura:number;
}

export default function Person({Nome, DataNascimento, LocalNasc_coord,  Altura}:PersonProps){
  return (
    <div>
      <h1>Nome:</h1> <p> {Nome}</p>
      <h2>Data de Nascimento:</h2>
      <p>{DataNascimento.toLocaleDateString()}</p>
      <h2>Local de nacimento:</h2>
      <p>Longitude:{LocalNasc_coord.Longitude}</p>
      <p>Latitude:{LocalNasc_coord.Latitude}</p>
      <h2>Altura (cm):</h2>
      <p>{Altura} cm</p>
       
    </div>
  )
}