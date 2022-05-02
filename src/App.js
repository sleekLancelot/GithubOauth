import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import app from './config/firebase_config'
import Login from './Pages/Login';
import Home from './Pages/Home';
import { PrivateRoute, PublicRoute } from './Routing/RouteTypes';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            index
            exact
            path='login'
            element={<Login />}
          />

          <Route 
            exact
            path='/'
            element={<Home />}
          />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
