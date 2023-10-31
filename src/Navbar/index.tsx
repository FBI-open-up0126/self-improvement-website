import "./index.scss";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__left-nav">
                <img className="navbar__icon-img" src="./icon.svg" alt="icon" />
                <h2 className="navbar__icon-title">Meliorem</h2>
            </div>
            <div className="navbar__right-nav">Right</div>
        </nav>
    );
}

export default Navbar;
