import Home from "./Home/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Home/Login'
import Profile from './Profile/profile'
import Product from './Shopping/shop'
import Error from "./error";
import Nav from "./Components/Navb";
import {useState } from "react";
import { UserContext } from "./Components/Auth/authUser";

function App() {


  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value= {{user,setUser}}>
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path = '/' element={<Home />} />
          <Route path = '/login' element={<Login />}  />
          <Route path = '/profile' element={<Profile />} />
          <Route path= '/product' element={<Product />} />
          <Route path= '*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
    </UserContext.Provider>
  );
}
export default App;