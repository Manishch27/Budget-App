import React from 'react';

// React Router Dom imports
import { useLoaderData } from 'react-router-dom';

// Helpers Function
import { fetchData } from '../Helpers';

// library imports

import {toast} from "react-toastify";

// Loader

export const dashboardLoader = ()=>{
  const userName = fetchData("userName");
  return {userName}
}

// action
export const dashboardAction = async({request})=>{
  const data = await request.formData();
  // Get the username and password from formdata
  const formData = Object.fromEntries(data);

  try {
    localStorage.setItem("userName", JSON.stringify(formData.userName));
    return toast.success(`Welcome ${formData.userName}`);
  } catch (error) {
    throw new Error("There was a problem creating your account.")
  }
}

// import components
import Intro from './Intro';



const Dashboard = () => {

  const {userName} = useLoaderData()

  return (
    <div>
      <h1>{userName}</h1>
      <Intro/>
    </div>
  )
}

export default Dashboard;