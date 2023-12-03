import React from "react";
import ReactDOM from "react-dom/client";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "./AppLayout";
import DashboardLayout from "./DashboardLayout";
import Dashboard from "./Pages/Dashboard";
import MainPage from "./Pages/MainPage";
import "./index.scss";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<AppLayout />}>
				<Route index element={<MainPage />} />
			</Route>
			<Route path="/dashboard" element={<DashboardLayout />}>
				<Route index element={<Dashboard />} />
			</Route>
		</>
	)
);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
