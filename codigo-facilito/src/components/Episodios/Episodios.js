import { useEffect, useState } from 'react';
import { ReactComponent as Loading } from './../../assets/loading.svg';
import '../Components.css';

export default function Episodios() {
  
  const [episode, setEpisode] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [loading, setLoading] = useState(true);

  const randomEpisode = Math.floor(1 + Math.random()*50);

  useEffect( function getEpisodes() {

    if (!refresh) {
      return
    };

    setLoading(true);

    fetch(`https://rickandmortyapi.com/api/episode/${ randomEpisode }`)
      .then((response) => response.json())  
        .then((data) => {
          setEpisode(data);
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
      <h2 className='title'>{ episode.name }</h2>
      <p className='emision text'>Fecha de emisión: { episode.air_date }</p>
      <p className='episodio text'>Episodio: { episode.episode }</p>
    </div>
  );
}
