import { useEffect, useState } from 'react';
import { ReactComponent as Loading } from './../../assets/loading.svg';
import '../Components.css';


export default function Lugares() {
  const [location, setLocation] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [loading, setLoading] = useState(true);

  const randomLocation = Math.floor(1 + Math.random()*125);

  useEffect( function getLocations() {

    if (!refresh) {
      return
    };

    setLoading(true);

    fetch(`https://rickandmortyapi.com/api/location/${ randomLocation }`)
      .then((response) => response.json())  
        .then((data) => {
          setLocation(data);
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
      <h2 className='title'>{ location.name }</h2>
      <p className='tipo text'>Tipo: { location.type }</p>
      <p className='dimension text'>Dimensión: { location.dimension }</p>
    </div>
  );
}