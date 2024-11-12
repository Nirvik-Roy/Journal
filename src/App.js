import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './View/Register/SignIn.jsx'
import SignUp from './View/Register/SingnUp.jsx'
import Mainlayout from './Layout/Mainlayout.jsx'
import Homepage from './View/Home/Homepage.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/' element={<Mainlayout/>}>
          <Route path='/home' element={<Homepage/>}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
