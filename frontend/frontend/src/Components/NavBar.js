import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar(){
    return(
        <>
          <nav class="navdiv">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a className="nav-link active" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/profile">Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/entries">Entries</a>
              </li>
            </ul>
        </nav>    
        </>
    )
}

export default NavBar