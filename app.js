import React from 'react';
import User from './User';

export const UserContext = React.createContext();

export default function App() {
  return (
    <UserContext.Provider value="Hammad Hussain">
      <User></User>
    </UserContext.Provider>
  )
}
