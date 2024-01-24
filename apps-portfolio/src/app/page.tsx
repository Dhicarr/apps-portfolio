"use client";
import bg from './images/bright_mountain_wallpaper.jpg'
import ClientWrapper from './clientWrapper';
import { useState } from 'react';
import Popup from './components/popup';
import TopBar from './components/topBar';

const Home = (): JSX.Element => {
  const [blur, setBlur]=useState(false)

  const handleBlur = () => {
    setBlur(!blur)
  };

  const empty =() =>{

  }

  return (
    <>
      {blur && <Popup blurHandler={handleBlur}/>}
      <main className={"background bg-cover w-screen h-screen p-4 overflow-y-auto "} onClick={(blur ? handleBlur: empty)}>
        <div className={blur ? " blur-md ":""}>
          <TopBar/>
          <ClientWrapper blurHandler={handleBlur}/>
        </div>
      </main>
    </>
  );
}

export default Home
