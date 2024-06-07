import React,{useState} from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate()
  const [data, setdata] = useState({
    name: '',
    email: '',
    password: '',
  });
  const registeruser = async (e) => {
    e.preventDefault();
    const {name, email, password} = data;
    try{
      const {data} = await axios.post('/register', {
        name, email , password
      });
      if(data.error)
      {
        toast.error(data.error)
      }
      else{
        setdata({})
        toast.success('registration successfull. welcome');
        navigate('/login');
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ flex: 1, marginTop: '150px', backgroundColor: 'skyblue', paddingTop: 70, paddingBottom: 70, paddingLeft: 40, paddingRight: 40, borderRadius: 20 }}>
      <form onSubmit={registeruser}>
        <label>Name</label>
        <input type='text' placeholder='enter name...' value={data.name} onChange={(e) => setdata({...data, name: e.target.value})} /><br></br>
        <label>Email</label>
        <input type='email' placeholder='enter email...' value={data.email} onChange={(e) => setdata({...data, email: e.target.value})}/><br></br>
        <label>Password</label>
        <input type='password' placeholder='enter password...' value={data.password} onChange={(e) => setdata({...data, password: e.target.value})} /><br></br>
        <button type='submit'>submit</button>
      </form>
    </div>
    </div>
    </div>
  );
}
