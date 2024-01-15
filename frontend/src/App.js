import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/addUser/AddUser';
import Navbar from './components/navbar/Navbar';
import DisplayUsers from './components/displayUsers/DisplayUsers';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<DisplayUsers />} />
          <Route path="/" element={<DisplayUsers />} />
          <Route path="/displayUsers" element={<DisplayUsers />} />
          <Route path="/addUser" element={<AddUser />} />
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
