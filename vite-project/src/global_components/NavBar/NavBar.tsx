import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={{ backgroundColor: 'rgb(253, 245, 230)', padding: '10px 0', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'left' }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="" 
              width="60" 
              height="60" 
              style={{ marginRight: '10px'}} 
              alt=""
            />
            <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: 'rgb(210,105,30)' }}>Receptkungen.se</div>
          </a>
        </div>
        <div style={{ textAlign: 'center' }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'inline-block' }}>
            <li style={{ display: 'inline-block', margin: '0 10px' }}>
            <Link to="/Home" style={{ textDecoration: 'none', color: 'rgb(210,105,30)' }}>Home</Link>
            </li>

              <li style={{ display: 'inline-block', margin: '0 10px' }}>
              <Link to="/Recept" style={{ textDecoration: 'none', color: 'rgb(210,105,30)' }}>Recept</Link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar