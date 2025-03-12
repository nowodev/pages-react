import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import ReactProjects from "./ReactProjects.jsx";
import Home from "./Home.jsx";
import Birthdays from "./ReactPages/Birthdays.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="react-projects">
            <Route index element={<ReactProjects />} />
            <Route path="birthdays" element={<Birthdays />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
