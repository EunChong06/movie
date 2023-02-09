import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Lenta from './screen/lenta';
import Popular from './screen/popular';
import Movie from './screen/movie';
import 'moment/locale/ko';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lenta/>} />
          <Route path="/popular" element={<Popular/>} />
          <Route path="/movie/:id" element={<Movie/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
