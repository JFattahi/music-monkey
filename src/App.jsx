import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import SongPage from "./pages/SongPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tracks/:id" element={<SongPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
