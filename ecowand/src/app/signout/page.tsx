'use client';
import React, { useEffect } from 'react';
import cookie from 'js-cookie';
import { useRouter } from 'next/navigation';

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    // Clear the 'username' cookie
    cookie.remove('username');

    // Redirect to the login page after clearing the cookie
    router.push('/login');
  }, []);

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
};

export default Logout;
