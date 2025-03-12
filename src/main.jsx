import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import ReactProjects from "./ReactProjects.jsx";
import Home from "./Home.jsx";
import Birthdays from "./ReactProjects/Birthdays.jsx";
import ProjectListWithCart from "./Frontend Mentor/ProductListWithCart/ProductListWithCart.jsx";
import FrontendMentor from "./FrontendMentor.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="frontend-mentor">
            <Route index element={<FrontendMentor />} />
            <Route path="product-list-with-cart" element={<ProjectListWithCart />} />
          </Route>
          <Route path="react-projects">
            <Route index element={<ReactProjects />} />
            <Route path="birthdays" element={<Birthdays />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
