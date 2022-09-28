import './Styles/Style.scss'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Index from './views/Index'
import About from './views/About';
import CardFeed from './views/CardFeed';
import LatestPhotos from './views/LatestPhotos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/feed" element={<CardFeed />} />
        <Route path="/photos" element={<LatestPhotos />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
