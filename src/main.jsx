import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppLayout from "./AppLayout.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import ReactProjects from "./ReactProjects.jsx";
import Home from "./Home.jsx";
import Birthdays from "./React Projects/Birthdays.jsx";
import ProductListWithCart from "./Frontend Mentor/Product List With Cart/index.jsx";
import FrontendMentor from "./FrontendMentor.jsx";
import CardinalTalent from "./React Projects/CardinalTalent.jsx";
import SingleLayout from "./SingleLayout.jsx";
import Calculator from "./React Projects/Calculator.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="frontend-mentor" element={<FrontendMentor />} />
          <Route path="react-projects" element={<ReactProjects />} />
        </Route>

        <Route element={<SingleLayout />}>
          <Route path="frontend-mentor">
            <Route
              path="product-list-with-cart"
              element={<ProductListWithCart />}
            />
          </Route>
          <Route path="react-projects">
            <Route path="birthdays" element={<Birthdays />} />
            <Route path="cardinaltalent" element={<CardinalTalent />} />
            <Route path="calculator" element={<Calculator />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
