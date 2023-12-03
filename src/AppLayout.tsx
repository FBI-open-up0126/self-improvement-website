import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar, { Link } from "./Navbar";

interface Props {
	children?: React.ReactNode;
}

const LINKS: Link[] = [
	{ to: "/features", name: "Features" },
	{ to: "/resources", name: "Resources" },
	{ to: "/about", name: "About" },
];

function AppLayout({ children }: Props) {
	return (
		<>
			<Navbar links={LINKS} />
			{children ?? <Outlet />}
			<ScrollRestoration />
		</>
	);
}

export default AppLayout;
