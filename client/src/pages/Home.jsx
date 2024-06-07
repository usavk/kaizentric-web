import React from 'react'
import {Link} from 'react-router-dom';

export default function home() {
  return (
    <div>
      <h1>welcome to My App</h1>
      <h4 style={{  marginTop: '50px',marginBottom: '500px'}}>WELCOME TO HOME</h4>
        <Link to='/Login' style={{ textAlign: 'center', color: 'black', textDecoration: 'none' , marginTop: '300px', padding: '20px', backgroundColor: 'cyan', borderRadius: '50px'}}>GET STARTED</Link>
    </div>
  );
}
