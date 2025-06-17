// Home.jsx
import Board from '../components/Board/Board';

export default function Home(props) {
  // If you receive lanes and setLanes as props from MainLayout, pass them down
  return <Board lanes={props.lanes} setLanes={props.setLanes} />;
}
