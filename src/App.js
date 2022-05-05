import logo from './logo.svg';
import './App.css';
import HomePage from './screens/HomePage';
import CategoryScreen from './screens/CategoryScreen';
import ArtistDashboard from './screens/ArtistDashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './screens/Auth/Login';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            {/* <Route path="/" element={<HomePage />} exact /> */}
            <Route path="/" element={<Dashboard />} exact />
            <Route path="/login" element={<Login />} exact />
            <Route path="/discover" element={<CategoryScreen />} />
            <Route path="/artist-dashboard" element={<ArtistDashboard />} />
            <Route component={Error} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
