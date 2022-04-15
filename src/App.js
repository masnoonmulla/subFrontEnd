import logo from './logo.svg';
import './App.css';
import HomePage from './screens/HomePage';
import CategoryScreen from './screens/CategoryScreen';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      {/* <CategoryScreen/> */}

      <BrowserRouter>
        <div>
          
            <Routes>
             <Route path="/" element={<HomePage/>} exact/>
             <Route path="/discover" element={<CategoryScreen/>}/>
             
            <Route component={Error}/>
           </Routes>
        </div> 
      </BrowserRouter>
    
    </div>
  );
}

export default App;
