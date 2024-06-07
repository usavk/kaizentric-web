import React,{useState} from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate()
  const [data,setdata] = useState({
    email: '',
    password: '',
  }) 

  
  const loginuser = async (e) => {
    e.preventDefault()
    const {email, password} = data
    try{
      const {data} = await axios.post('/login', {
        email,
        password
      });
      if(data.error){
        toast.error(data.error)
      }
      else{
        setdata({});
        toast.success('login successfull. welcome');
        navigate('/Dashboard')
      }
    }
    catch(error){

    }
  }


  return (
    <div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ flex: 1, marginTop: '150px', backgroundColor: 'skyblue', paddingTop: 70, paddingBottom: 70, paddingLeft: 40, paddingRight: 40, borderRadius: 20 }}>
        <form onSubmit={loginuser} style={{ flexDirection: 'column' }}>
        <div style={{ marginBottom: '20px'}}>
        <label>Email   :</label>
        <input type='email' placeholder='enter email...' value={data.email} onChange={(e) => setdata({...data, email: e.target.value})} />
        </div>
        <div style={{ marginBottom: '20px'}}>
        <label>Password:</label>
        <input type='password' placeholder='enter password...' value={data.password} onChange={(e) => setdata({...data, password: e.target.value})} />
        </div>
        <button type='submit' style={{ marginBottom: '20px'}}>Login</button>
      </form>
    </div>
    </div>
    <div style={{ flexDirection: 'row', marginTop: '50px'}}>
      <Link to='/Register' style={{ marginRight: '100px', color: 'blue', textDecoration: 'none' }}>Not have an account?</Link>
      <Link to='/Dashboard' style={{ marginRight: '100px', color: 'blue', textDecoration: 'none' }}>GO TO DASHBOARD</Link>
      </div>
    </div>
  );
}