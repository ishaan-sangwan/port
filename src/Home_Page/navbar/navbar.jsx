import "./navbar.css"

function Navbar(){
    return (
        <nav className="row">
            <div className="col-md-1"></div>
            <div className="col-md-3 name">
                <h4><a href="/home">Ishaan Sangwan</a></h4>
            </div>
            <div className="col-md-4 "></div>
            <div className="col-md-1 options">
                Home
            </div>
            <div className="col-md-1 options">
                Resume
            </div>
            <div className="col-md-2"></div>


        </nav>
    )
}
export default Navbar
