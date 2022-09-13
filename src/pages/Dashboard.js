import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebase.init';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className='drawer drawer-mobile'>
      <input id='dashboard-sidebar' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        <h2 className='text-3xl text-neutral font-bold italic text-center mt-5'>Dashboard</h2>
        <Outlet />
      </div>
      <div className='drawer-side'>
        <label htmlFor='dashboard-sidebar' className='drawer-overlay'></label>
        <ul className='menu p-4 overflow-y-auto w-56 bg-secondary text-base-100 font-bold'>
          {!admin && (
            <>
              <li>
                <Link to='/dashboard/addPlayers'>Add Players</Link>
              </li>
            </>
          )}
          {admin && (
            <>
              <li>
                <Link to='/dashboard/managePlayers'>Manage Players</Link>
              </li>
              <li>
                <Link to='/dashboard/manageCoach'>Manage Coach</Link>
              </li>
              <li>
                <Link to='/dashboard/makeAdmin'>Make Admin</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;