import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='bg-slate-200'>
      <div className='flex justify-between items-center p-3'>
        <Link to="/">
          <h1 className='font-bold'>Auth App</h1>
        </Link>

        <ul className='flex gap-4 list-none ml-auto'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}