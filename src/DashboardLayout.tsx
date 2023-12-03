import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar, { Link } from "./Navbar";

interface Props {
	children?: React.ReactNode;
}

const LINKS: Link[] = [
	{ to: "/dashboard/stats", name: "Stats" },
	{ to: "/dashboard/help", name: "Help" },
];

export default function DashboardLayout({ children }: Props) {
	return (
		<>
			<Navbar links={LINKS} />
			{children ?? <Outlet />}
			<ScrollRestoration />
		</>
	);
}
