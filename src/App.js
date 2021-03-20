import React from 'react'
import './App.css';
import Header from './Components/Header';
import Profile from './Components/Profile';
import Sidebar from './Components/Sidebar';


function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Sidebar />
      <Profile />
    </div>
  );
}

export default App;
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu_fpPmbK-bebEeX036y7frmW06amtCkG1ew&usqp=CAU