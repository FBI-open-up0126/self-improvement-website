import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "./AppLayout";
import MainPage from "./Pages/MainPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppLayout />}>
            <Route index element={<MainPage />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
