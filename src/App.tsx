import { BrowserRouter } from 'react-router-dom';
import RouteFactory from './components/Routes';

function App() {
  return (
    <BrowserRouter>
      <RouteFactory />
    </BrowserRouter>
  );
}

export default App;
