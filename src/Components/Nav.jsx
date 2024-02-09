import React from 'react';

// Hero icons
import { TrashIcon } from '@heroicons/react/24/solid'

//  React router dom import
import { Form, NavLink } from 'react-router-dom';


import Logo from "../assets/logo.svg";

const Nav = ({userName}) => {
  console.log(userName)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink to="/" aria-label='Go to home'>
      <img src={Logo} alt="Logo" height={30}/>
      <span>HomeBudget</span>
      </NavLink>

      {
        userName&&(
          <Form
          method='post'
          action="/logout"
          onSubmit={(event)=>{
            if(!confirm("Delete User and all data?")){
              event.preventDefault();
            }
          }}
          >


            <button type='submit' className='btn btn--warning'>
              <span>Delete User</span>
              <TrashIcon width={20}/>
            </button>
          </Form>
        )
      }

    </nav>
  )
}

export default Nav;