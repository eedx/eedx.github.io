import { useEffect, useState } from "react";
import { ReactComponent as Loading } from './../../assets/loading.svg';
import '../Components.css';

export default function Personajes() {
  const [character, setCharacter] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [loading, setLoading] = useState(true);

  const randomCharacter = Math.floor(1 + Math.random()*825);

  useEffect( function getCharacter() {
    if (!refresh) {
      return
    };

    setLoading(true);

    fetch(`https://rickandmortyapi.com/api/character/${ randomCharacter }`)
      .then((response) => response.json())
        .then((data) => {
          setCharacter(data);
          setRefresh(false);
          setLoading(false);
        });
  }, [refresh]);

  function OnRefresh() {
    setRefresh(true);
  }

  if (loading) {
    return (
      <div className="loading-wrapper">
        <Loading />
        <span>Loading</span>
      </div>
    );
  };

  return (
    <div>
      <button className="refresh-button" onClick={ OnRefresh }>Refrescar</button>
      <h2 className='title'>{ character.name }</h2>
      <div className="img-wrapper">
        <img className="character-img" src={ character.image }/>
      </div>
      <p className='estatus text'>Estatus: { character.status }</p>
      <p className='especie text'>Especie: { character.species }</p>
      <p className='genero text'>Género: { character.gender }</p>
      
    </div>
  );
}