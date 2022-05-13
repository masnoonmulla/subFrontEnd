import logo from './logo.svg';
import './App.css';
import HomePage from './screens/HomePage';
import CategoryScreen from './screens/CategoryScreen';
import ArtistDashboard from './screens/ArtistDashboard';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './screens/Auth/Login';
import Dashboard from './components/Dashboard';
import { useEffect } from 'react';


function App() {  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/artist-details" element={<Dashboard />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/discover" element={<CategoryScreen />} />
          <Route path="/artist-dashboard" element={<ArtistDashboard />} />
          <Route component={Error} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
