"use client"
import { useEffect, useState } from 'react';
import cookie from 'js-cookie';

const Profile = () => {
  const [cookieValue, setCookieValue] = useState('');

  useEffect(() => {
    // Retrieve the cookie on the client side
    const value = cookie.get('username');
    setCookieValue(value || 'Username not available');
  }, []);

  return (
    <div>
      <h1>Username:</h1>
      <p>{cookieValue}</p>
    </div>
  );
};

export default Profile;
