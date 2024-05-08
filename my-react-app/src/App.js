import logo from './logo.svg';
import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Nav/>
    <Main/>
    <Menu/>
    <Footer/>

    {/*<Header/>
    <BookingForm/>*/}
    </>
  );
}

export default App;
