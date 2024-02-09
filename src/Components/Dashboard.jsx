import React from 'react';

// React Router Dom imports
import { useLoaderData } from 'react-router-dom';

// Helpers Function
import { fetchData } from '../Helpers';


// Loader

export const dashboardLoader = ()=>{
  const userName = fetchData("userName");
  return {userName}
}



const Dashboard = () => {

  const {userName} = useLoaderData()

  return (
    <div>
      <h1>{userName}</h1>
    </div>
  )
}

export default Dashboard;