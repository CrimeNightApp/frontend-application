import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from '../buttons/Login';
import { NotificationBell } from '../buttons/NotificationBell'
import { Profile } from '../buttons/Profile';

const Account = () => {
  const { isAuthenticated } = useAuth0();
  
  return (
    <div className="flex flex-1 items-center justify-end space-x-2 pr-6">
      {!isAuthenticated && (
        <LoginButton />
      )}
      {isAuthenticated && (
        <div className="flex space-x-3">
          <NotificationBell/>
          <Profile/>
        </div>
      )}
    </div>
  );
}

export default Account;