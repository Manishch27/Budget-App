import React from 'react';

// React Router Dom imports
import { Outlet, useLoaderData } from 'react-router-dom';

// Helpers Function
import { fetchData } from '../Helpers';

// Assets 

import wave from '../assets/wave.svg';

// Components

import Nav from '../Components/Nav';

// Loader

export const mainLoader = ()=>{

  const userName = fetchData("userName");
  return {userName}
}

const Main = () => {

  const {userName} = useLoaderData()

  return (
    <div className='layout'>
        <Nav userName={userName}/>
      <main>
      <Outlet/ >
      </main>

      <img src={wave} alt="Footer Wave" />
    </div>
  )
}

export default Main;