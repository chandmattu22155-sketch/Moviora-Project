import { useState} from 'react';
import { BrowserRouter, } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './app/hooks/ScroolToTop';


function App() {


  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar/>
      <main className="bg-[#02021C] min-h-screen">
        <AppRoutes/>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


