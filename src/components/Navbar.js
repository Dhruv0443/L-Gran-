import place_your_logo_here_doub_2 from "../images/place_your_logo_here_doub_2.png";


export const Navbar=()=>{
    return(<>
    <div className="group">
    <header>
            <nav className="navbar navbar-expand-lg navigation-wrap">
            <div className="container">
                {/* <a className="navbar-brand" href="/"> */}
                <img decoding="async" src={place_your_logo_here_doub_2} className="img-fluid"/>
                {/* </a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-stream navbar-toggler-icon"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/about">About Us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/Booking">Booking</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/menu">menu</a>
                    </li> 
                  
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                     
                    <li className="nav-item">
                    <a className="nav-link" href="/login">Login</a>
                    </li> 
                </ul>
                </div>
            </div>
            </nav>
        </header> 
    </div>
    
    </>)
}

