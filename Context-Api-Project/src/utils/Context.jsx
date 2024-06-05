import React, { createContext, useState } from "react";

export const userContext = createContext();

const Context = (props) => {
  const [users, setUsers] = useState([
    {id: 0, username: 'Muhammad Ali', city : 'Islamabad'},
    {id: 1, username: 'Babar Azam', city : 'Lahore'},
    {id: 2, username: 'Shadab', city : 'Mianwali'}, 
  ]); 


  return (
        <userContext.Provider value={{users, setUsers}}>
            {props.children}
         </userContext.Provider>
    );
};

export default Context;
