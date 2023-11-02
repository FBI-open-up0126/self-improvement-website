import "./index.scss";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__left-nav">
                <img className="navbar__icon-img" src="./icon.svg" alt="icon" />
                <h2 className="navbar__icon-title">Meliorem</h2>
            </div>
            <div className="navbar__right-nav">
                <ul className="navbar__nav-list">
                    <li className="navbar__nav-item">
                        <a href="/features" className="navbar__nav-link">
                            Features
                        </a>
                    </li>
                    <li className="navbar__nav-item">
                        <a href="/resources" className="navbar__nav-link">
                            Resources
                        </a>
                    </li>
                    <li className="navbar__nav-item">
                        <a href="/about" className="navbar__nav-link">
                            About
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
