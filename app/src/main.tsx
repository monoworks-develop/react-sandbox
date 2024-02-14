import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <div>
        <Link to={"/"}>Home</Link>
      </div>
      <div>
        <Link to={"/ko"}>Knockout</Link>
      </div>
    </React.StrictMode>
    <Routes>
      <Route path="/" Component={App} />
    </Routes>
  </BrowserRouter>
);
