import React from 'react';
import Profile1 from '../Profile1';
import  './Profile.css';
import data from './data.json';

const usersList = data.map(user => (
    

    
        <Profile1 id = {user.id}   name = {user.username} />
    
  ));
const Profile = () => {
  return (
   <>
    <h2>User List</h2>
 <div className='container'>
     
      {usersList}

    </div>
   </>
  )
}

export default Profile