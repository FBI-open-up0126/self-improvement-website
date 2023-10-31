import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./Navbar";

interface Props {
    children?: React.ReactNode;
}

function AppLayout({ children }: Props) {
    return (
        <>
            <Navbar />
            {children ?? <Outlet />}
            <ScrollRestoration />
        </>
    );
}

export default AppLayout;
