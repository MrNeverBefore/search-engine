import React, { useState}  from 'react'


import Navbar from './Componenets/Navbar';
import Footer from './Componenets/Footer';
import Routes from './Componenets/Routes';




function App() {

  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme}/>
        <Routes />
        <Footer />
      </div>
    </div>
  )
}

export default App