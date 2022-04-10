import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import FriendDetails from './components/FriendDetails/FriendDetails';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/friends" element={<Friends/>}/>
        <Route path="/friend/:friendId" element={<FriendDetails/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
