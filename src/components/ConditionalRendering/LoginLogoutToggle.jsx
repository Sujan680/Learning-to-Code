import React, { useState } from 'react';

const UserProfile = () => <div>Welcome, User!</div>;
const Login = () => <div>Please log in.</div>;

const LoginLogoutToggle = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={handleLoginLogout}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      {isLoggedIn ? <UserProfile /> : <Login />}
    </div>
  );
};

export default LoginLogoutToggle;
