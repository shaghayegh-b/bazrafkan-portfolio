import { useRoutes } from 'react-router-dom';
import {router} from './routes'
import "leaflet/dist/leaflet.css";
function App() {
  let routes=useRoutes(router)
  return routes
}

export default App;
