import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './components/Home/HomeScreen';
import Header from './components/Header/Header';
import Recpies from './components/Recipes/Recipes';
import AddRecipes from './components/Forms/AddRecipes/AddRecipes'
import LoginRegisterForm from './components/Forms/Auth/FormAuth';
import RecpieDetails from './components/RecpieDetails/RecpieDetails';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter className="app">

      <Header />

      <Routes>
        <Route path={'/'} element={<HomeScreen />} />
        <Route path={'/recipes'} element={<Recpies />} />
        <Route path={'/recipes/:id'} element={<RecpieDetails />} />
        <Route path={'/createRecipes'} element={<AddRecipes />} />
        <Route path={'/register'} element={<LoginRegisterForm />} />
      </Routes>      
      
      <Footer />

    </BrowserRouter>
  );
}

export default App;
