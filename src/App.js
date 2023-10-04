import './App.css';
import { Route, Routes } from 'react-router-dom';
import Propertdeatils from './pages/Propertdeatils';
import Mumbai from './pages/Mumbai';
import { London } from './pages/London';
import Paris from './pages/Paris';
import NewYork from './pages/NewYork';

function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Propertdeatils />} />
        <Route path='/property/Mumbai' element={<Mumbai />} />
        <Route path='/property/London' element={<London />} />
        <Route path='/property/Paris' element={<Paris />} />
        <Route path='/property/NewYork' element={<NewYork />} />
      </Routes>
      </>
  );
}

export default App;
