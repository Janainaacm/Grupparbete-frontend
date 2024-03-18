import { Link, useLocation } from 'react-router-dom';
import SearchBarComponent from '../SearchBarComponent'; 

function NavBar() {
    const location = useLocation();

    return (
        <nav style={{ backgroundColor: 'rgb(253, 245, 230)', padding: '10px 0', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ textAlign: 'left' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                  <img src="" width="60" height="60" style={{ marginRight: '10px' }} alt="" />
                  <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: 'rgb(210,105,30)' }}>Receptkungen.se
                  </div>
                </Link>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'inline-block' }}>
                        <li style={{ display: 'inline-block', margin: '0 10px' }}>
                            <Link to="/" style={{ textDecoration: 'none', color: 'rgb(210,105,30)' }}>Home</Link>
                        </li>
                        <li style={{ display: 'inline-block', margin: '0 10px' }}>
                            <Link to="/Recept" style={{ textDecoration: 'none', color: 'rgb(210,105,30)' }}>Recept</Link>
                        </li>
                        
                    </ul>
                </div>
                {location.pathname !== '/' ? (
                    <div>
                        <SearchBarComponent />
                    </div>
                ) :null}
            </div>
        </nav>
    );
}

export default NavBar;