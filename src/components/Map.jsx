import { useNavigate, useSearchParams } from 'react-router';
import AppNav from './AppNav';
import styles from './Map.module.css';
import Sidebar from './Sidebar';

function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  console.log(lat, lng);
  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate('form');
      }}
    >
      <h1>Map</h1>
      <h2>
        Position : {lat}, {lng}
      </h2>

      {/* <button onClick={() => setSearchParams({ lat: 250, lng: 60 })}>Change params</button> */}
    </div>
  );
}

export default Map;
