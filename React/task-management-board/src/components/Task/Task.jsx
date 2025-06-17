export default function Task({ task }) {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 4,
      marginBottom: 8,
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    }}>
      <h4 style={{ margin: '0 0 5px 0' }}>{task.title}</h4>
      <p style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>{task.body}</p>
    </div>
  );
}
