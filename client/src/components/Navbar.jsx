import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav style={{ display: 'flex',  alignItems: 'center', marginBottom: '200px', backgroundColor: 'skyblue', paddingTop: '20px', paddingLeft: '500px', paddingBottom: '20px' }}>
        <Link to='/Register' style={{ marginRight: '100px', color: 'black', textDecoration: 'none' }}>Register</Link>
        <Link to='/Login' style={{ color: 'black', textDecoration: 'none' }}>Login</Link>
      </nav>
    </div>
  );
}
