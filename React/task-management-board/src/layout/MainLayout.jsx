import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
import logo from '../images/logo.jpg'; // Add your logo image here
import { useState } from 'react';

export default function MainLayout({ children }) {
  // State to hold lanes for sidebar (lifted here to share with Sidebar and Board)
  const [lanes, setLanes] = useState([
    { id: 1, title: 'To Do' },
    { id: 2, title: 'In Progress' },
    { id: 3, title: 'Done' },
  ]);

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <Sidebar lanes={lanes} />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <header style={{
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px',
          height: '60px',
          backgroundColor: '#282c34',
          color: 'white',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Logo" style={{ height: 40, marginRight: 10 }} />
            <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Task Manager</h1>
          </div>

          <nav>
            {[
              { to: '/', label: 'Task Manager' },
              { to: '/about', label: 'About' },
              { to: '/sales', label: 'Sales' },
              { to: '/profile', label: 'Profile' },
              { to: '/login', label: 'Log in' },
              { to: '/signup', label: 'Sign up' },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                style={({ isActive }) => ({
                  marginLeft: 15,
                  color: isActive ? '#61dafb' : 'white',
                  textDecoration: 'none',
                  fontWeight: isActive ? 'bold' : 'normal'
                })}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </header>

        <main style={{ flex: 1, overflowY: 'auto', padding: 20 }}>
          {/* Pass lanes and setLanes as props to children if needed */}
          {typeof children === 'function' ? children({ lanes, setLanes }) : children}
        </main>

        <footer style={{
          height: '40px',
          backgroundColor: '#282c34',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.9rem'
        }}>
          © 2025 Your Company
        </footer>
      </div>
    </div>
  );
}
