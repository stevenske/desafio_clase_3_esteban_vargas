import './NavBar.css'

const NavBar = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-ice">
            <div className="container-fluid ">
                <div id="header__logo" className="w-10">
                    <a className="navbar-brand" href="index.html"><img src="./img/logo.png" width="60" height="60" alt="train icon"/></a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav container-fluid d-flex justify-content-evenly">
                        <li className="nav-item">
                            <a className="nav-link text-ice zoom" aria-current="page" href="#">SUCURSALES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-ice zoom" href="#">SOBRE NOSOTROS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-ice zoom" href="#">CONTACTO</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default NavBar