import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import ReactProjects from "./ReactProjects.jsx";
import Home from "./Home.jsx";
import Birthdays from "./ReactProjects/Birthdays.jsx";
import ProductListWithCart from "./Frontend Mentor/ProductListWithCart/ProductListWithCart.jsx";
import FrontendMentor from "./FrontendMentor.jsx";
import CardinalTalent from "./ReactProjects/CardinalTalent.jsx";
import Single from "./Single.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="frontend-mentor">
            <Route index element={<FrontendMentor />} />
            <Route
              path="product-list-with-cart"
              element={<ProductListWithCart />}
            />
          </Route>
          <Route path="react-projects">
            <Route index element={<ReactProjects />} />
            <Route path="birthdays" element={<Birthdays />} />
          </Route>
        </Route>

        <Route element={<Single />}>
          <Route path="react-projects/cardinaltalent" element={<CardinalTalent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
