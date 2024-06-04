import React, { useEffect, useState } from 'react'
import axios from '../utils/Axios'

function About() {

  const [users, setUsers] = useState([]);

  const getUsers = () => {

    axios
      .get('/users')
      .then((users) => {
        console.log(users);
        setUsers(users.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(()=>{
    console.log('Created...')
    getUsers()
    
    return ()=>{
      console.log('Deleted...')
    }


  },[]);



  return (
    <>

      <div className="w-full h-fit bg-zinc-100">
        <h1 className="py-4 text-4xl font-bold flex justify-center">About</h1>


        <div className="mt-5 flex justify-center">
          <ul className>
            <h1 className="text-4xl font-bold pb-5">Users</h1>

            {users.map((item) => (
              <li key={item.id} className="pl-6 px-2 py-2 bg-orange-200 mb-2">{item.id}. {item.name.firstname} {item.name.lastname}</li>
            ))}

          </ul>
        </div>
      </div>
    </>

  )
}

export default About