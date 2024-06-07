import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FaBars } from 'react-icons/fa';
import { Card } from 'antd';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const { Meta } = Card;

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 2400, amt: 2400 },
  { name: 'Page C', uv: 200, pv: 2400, amt: 2400 },
  { name: 'Page D', uv: 278, pv: 2400, amt: 2400 },
  { name: 'Page E', uv: 189, pv: 2400, amt: 2400 },
  { name: 'Page F', uv: 239, pv: 2400, amt: 2400 },
  { name: 'Page G', uv: 349, pv: 2400, amt: 2400 },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [videoData, setvideoData] = useState([]);
  const [videoloading, setvideoLoading] = useState(true);
  const [videoerror, setvideoError] = useState(null);

  
  useEffect(() => {
    // Fetch user data from the backend API
    axios.get('http://localhost:8000/users')
      .then(response => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        setError('Failed to fetch user data');
        setLoading(false);
      });
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    // Fetch user data from the backend API
    axios.get('http://localhost:8000/videos')
      .then(response => {
        setvideoData(response.data);
        setvideoLoading(false);
      })
      .catch(error => {
        console.error('Error fetching video data:', error);
        setvideoError('Failed to fetch video data');
        setvideoLoading(false);
      });
  }, []);
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {/* Icon to toggle sidebar */}
      <div style={{ padding: '20px' }}>
        <FaBars onClick={toggleSidebar} style={{ cursor: 'pointer' }} />
      </div>

      {/* Left Sidebar */}
      {sidebarOpen && (
        <div style={{ width: '200px', backgroundColor: 'cyan', padding: '20px' }}>
          <h3>Navigation</h3>
          <ul style={{ textDecoration: 'none',color: 'black',display: 'block',padding: '10px 0',transition: 'all 0.3s ease'}}>
            <li><Link to='/Register'>Register</Link></li>
            <li><Link to='/Login'>LogOut</Link></li>
          </ul>
        </div>
      )}

      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px' }}>
        <Navbar />
        <p>Welcome to Dashboard</p>
        <h1 style={{ marginTop: '50px', marginBottom: '50px' }}>WELCOME TO HOME</h1>

        <a href="https://www.youtube.com/watch?v=kpwiuBfXCbo" style={{ display: 'inline-block', width: '240px', textDecoration: 'none', color: 'inherit' }}>
  <div style={{ width: '100%', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', textAlign: 'center' }}>
    <img alt="example" src="https://i.ytimg.com/vi/kpwiuBfXCbo/default.jpg" style={{ width: '100%', maxWidth: '200px', height: 'auto', marginBottom: '10px' }} />
    <h3 style={{ fontSize: '1.2em', marginBottom: '5px' }}>Buffers</h3>
    <p style={{ fontSize: '1em', margin: '0' }}>the purpose of a buffer in a biological system is to maintain intracellular and extracellular pH within a very narrow range and resist changes in pH in the presence of internal and external influences.</p>
  </div>
</a>
<a href="https://www.youtube.com/watch?v=4VltXjR64SU" style={{ display: 'inline-block', width: '240px', textDecoration: 'none', color: 'inherit' }}>
  <div style={{ width: '100%', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', textAlign: 'center' }}>
    <img alt="example" src="https://i.ytimg.com/vi/4VltXjR64SU/default.jpg" style={{ width: '100%', maxWidth: '200px', height: 'auto', marginBottom: '10px' }} />
    <h3 style={{ fontSize: '1.2em', marginBottom: '5px' }}>Molar and Normal Solutions</h3>
    <p style={{ fontSize: '1em', margin: '0' }}>molarity is defined as the number of moles of solute per liter of solution. Molality is defined as the number of moles of solute per kilogram of solvent. Normality  is defined as the number of equivalents per liter of solution.</p>
  </div>
</a>
<a href="https://www.youtube.com/watch?v=PBTn4gTEbkU" style={{ display: 'inline-block', width: '240px', textDecoration: 'none', color: 'inherit' }}>
  <div style={{ width: '100%', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', textAlign: 'center' }}>
    <img alt="example" src="https://i.ytimg.com/vi/PBTn4gTEbkU/default.jpg" style={{ width: '100%', maxWidth: '200px', height: 'auto', marginBottom: '10px' }} />
    <h3 style={{ fontSize: '1.2em', marginBottom: '5px' }}>pH Electrodes</h3>
    <p style={{ fontSize: '1em', margin: '0' }}>the pH-responsive electrode is usually glass, and the reference is usually a silver–silver chloride electrode, although a mercury–mercurous chloride (calomel) electrode is sometimes used.</p>
  </div>
</a>


<BarChart width={1000} height={300} data={data}>
    <XAxis dataKey="name" stroke="#8884d8" />
    <YAxis />
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="uv" fill="#8884d8" barSize={30} />
  </BarChart>


<Link to='/Addvideos' style={{ padding: '10px', backgroundColor: 'skyblue' ,textDecoration: 'none', borderRadius: '20px'}}>ADD VIDEOS</Link>

        {/* Display user data */}
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            
            userData.map(user => (
              <div key={user._id} style={{ backgroundColor: 'skyblue'}}>
                <p>Name: {user.name}   Email: {user.email}  Password: {user.password}</p> {/* Note: This is for demonstration only, not recommended in real-world scenarios */}
              </div>
            ))
          )}
        </div>
        <div style={{ overflowX: 'auto', whiteSpace: 'nowrap', border: '1px solid black', width: '500px' , height: '50px'}}>
  <h1 style={{ display: 'inline-block', margin: '0 5px', height: '40px' }}>hello</h1>
  <h1 style={{ display: 'inline-block', margin: '0 5px', height: '40px' }}>hello</h1>
  <h1 style={{ display: 'inline-block', margin: '0 5px', height: '40px' }}>hello</h1>
  <h1 style={{ display: 'inline-block', margin: '0 5px', height: '40px' }}>hello</h1>
  <h1 style={{ display: 'inline-block', margin: '0 5px', height: '40px' }}>hello</h1>
  <h1 style={{ display: 'inline-block', margin: '0 5px', height: '40px' }}>hello</h1>
  <h1 style={{ display: 'inline-block', margin: '0 5px', height: '40px' }}>hello</h1>
  <h1 style={{ display: 'inline-block', margin: '0 5px', height: '40px' }}>hello</h1>
</div>


        {/*videos*/}

        <div>
          {videoloading ? (
            <p>Loading...</p>
          ) : videoerror ? (
            <p>{videoerror}</p>
          ) : (
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
  {videoData.map(video => (
    <div key={video._id} style={{ backgroundColor: 'white', width: 'calc(30% - 10px)', marginBottom: '20px' }}>
      <a href={video.VideoUrl} style={{ display: 'inline-block', width: '100%', textDecoration: 'none', color: 'inherit' }}>
        <div style={{ width: '100%', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', textAlign: 'center' }}>
          <img alt="example" src={video.ThumbUrl} style={{ width: '100%', maxWidth: '200px', height: 'auto', marginBottom: '10px' }} />
          <h3 style={{ fontSize: '1.2em', marginBottom: '5px' }}>{video.topic}</h3>
          <p style={{ fontSize: '1em', margin: '0' }}>{video.description}</p>
        </div>
      </a>
    </div>
  ))}
</div>

          )}
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}
