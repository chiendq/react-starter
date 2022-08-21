import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Language } from '@mui/icons-material';
import { LandingPage } from './pages/landingPage/LandingPage';
import Test from './pages/test/Test';
import Mui from './pages/mui/Mui';
import Login from './pages/login/Login';

function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/test" element={<Test />} />
            <Route path="/test/provider" element={<Language />} />
            <Route path="/test/mui" element={<Mui />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
