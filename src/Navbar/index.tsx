import { Link, useNavigate } from "react-router-dom";
import "./index.scss";

export type Link = { to: string; name: string };

interface Props {
	links: Link[];
}

function Navbar({ links }: Props) {
	const navigate = useNavigate();

	function renderLinks() {
		return links.map(link => {
			return (
				<li className="navbar__nav-item" key={link.to}>
					<Link to={link.to} className="navbar__nav-link">
						{link.name}
					</Link>
				</li>
			);
		});
	}

	return (
		<nav className="navbar">
			<div className="navbar__left-nav" onClick={() => navigate("/")}>
				<img className="navbar__icon-img" src="./icon.svg" alt="icon" />
				<h2 className="navbar__icon-title">Meliorem</h2>
			</div>
			<div className="navbar__right-nav">
				<ul className="navbar__nav-list">{renderLinks()}</ul>
			</div>
		</nav>
	);
}

export default Navbar;
