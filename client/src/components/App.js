import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import LandingPage from "./LandingPage/LandingPage";
import Items from "./Items/Items";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./Detail/Detail";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ minHeight: '100vh' }}>
        <Router basename={process.env.PUBLIC_URL}>
          {/*
            요청된 경로로 페이지 이동
            특정 컴포넌트 실행
          */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/items" element={<Items />} />
            <Route path="/movie/:movieId" element={<Detail />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;