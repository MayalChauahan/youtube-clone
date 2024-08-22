import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import PlayingVideo from './pages/PlayingVideo';
import { useAuth } from './context/AuthProvider';
import Loading from './loader/Loading';

const App = () => {

  const { loading } = useAuth();

  return (
    <>
      <BrowserRouter>
        <Navbar />
        {loading && <Loading />}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search/:searchQuery" element={<SearchPage />} />
          <Route exact path="/video/:id" element={<PlayingVideo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App