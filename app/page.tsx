'use client'

import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user } = useUser();
  return (
    <div>
      <ul>
        {!user && <li><a href="/auth/login">Login</a></li>}
        {user && <li><a href="/auth/logout">Logout</a></li>}
        {/* <li><a href="/login">Login</a></li> */}
        {user && <li><a href="/profile">Profile</a></li>}
      </ul>      
      </div>
  );
}
