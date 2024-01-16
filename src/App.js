import logo from './medias/pokemon-logo.png';
import './App.css';

import SigninForm from './pages/SigninForm';
import Teams from './pages/Teams';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import MyNavBar from './components/MyNavBar';

function App() {
  return (
    <div className="App main-font pokefighter">
      <MyNavBar color="warning" />
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<SigninForm />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
