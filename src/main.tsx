import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import App from "./App.tsx";

//react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import { store } from "./Redux/store.ts";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home/",
        element: <Home />,
      },
      {
        path: "login/",
        element: <Login />,
      },
      {
        path: "party/",
        element: <Home />,
      },
      {
        path: "premium/",
        element: <Home />,
      },
      {
        path: "stream/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
