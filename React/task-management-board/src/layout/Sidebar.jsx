import { NavLink } from 'react-router-dom';

export default function Sidebar({ lanes }) {
  return (
    <aside style={{
      width: 220,
      backgroundColor: '#20232a',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 10px',
      boxSizing: 'border-box',
    }}>
      <h2 style={{ marginTop: 0, marginBottom: 15, fontSize: '1.2rem', borderBottom: '1px solid #444' }}>
        Task Headings
      </h2>

      {lanes.length === 0 && <p>No lanes added yet.</p>}

      <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
        {lanes.map(lane => (
          <li key={lane.id} style={{ marginBottom: 10 }}>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? '#61dafb' : 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
                cursor: 'default'
              })}
              end
            >
              {lane.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
