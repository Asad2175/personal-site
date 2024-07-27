import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Routes from './Routes';
import { ScrollProvider } from './Context/ScrollState';

function App() {
  return (
    <ScrollProvider>
      <div className="App">
        <Routes />
      </div>
    </ScrollProvider>
  );
}

export default App;
