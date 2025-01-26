// App.jsx
import { useState } from 'react';
import NavBar from './commonUI/NavBar';
import Footer from './commonUI/Footer';
import Intro from './adminService/introPage/Intro';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar isLoggedIn={false} />
      <main className="flex-grow">
        <Intro />
      </main>
      <Footer />
    </div>
  );
};

export default App;