import AllUsers from './Component/AllUsers';
import AddUser from './Component/AddUser';
import EditUser from './Component/EditUser';
import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReadMore from './Component/ReadMore';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/read" element={<ReadMore />} />
        <Route path="all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
