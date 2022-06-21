import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './styles/App.css';
import MainPage from "./pages/MainPage";
import CatalogOfPlants from "./pages/CatalogOfPlants";
import Cultivation from "./pages/Cultivation";
import Ground from "./pages/Ground";
import AboutUs from "./pages/AboutUs";


function App() {
  return (
   <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/gardenCatalog" element={<CatalogOfPlants />}/>
            <Route path="/cultivation" element={<Cultivation />}/>
            <Route path="/ground" element={<Ground/>}/>
            <Route path="/aboutUs" element={<AboutUs/>}/>
            <Route path="*" element={<Navigate to ="/" />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
