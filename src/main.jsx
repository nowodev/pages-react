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
import SingleLayout from "./SingleLayout.jsx";
import Calculator from "./React Projects/Calculator.jsx";
import AdviceGenerator from "./Frontend Mentor/Advice Generator/index.jsx";
import MortgageRepaymentCalculator from "./Frontend Mentor/Mortgage Repayment Calculator/index.jsx";
import CardinalTalent from "./React Projects/CardinalHire/CardinalTalent.jsx";
import CardinalRewards from "./React Projects/CardinalHire/CardinalRewards.jsx";
import CardinalLeaderboard from "./React Projects/CardinalHire/CardinalLeaderboard.jsx";
import CardinalHowItWorks from "./React Projects/CardinalHire/CardinalHowItWorks.jsx";
import CardinalAIPowerNetworker from "./React Projects/CardinalHire/CardinalAIPowerNetworker.jsx";
import CardinalRewardsPage from "./React Projects/CardinalHire/CardinalRewardsPage.jsx";
import BankApp from "./React Projects/BankApp.jsx";
import Countries from "./Frontend Mentor/Countries/Index.jsx";
import Country from "./Frontend Mentor/Countries/Country.jsx";

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
            <Route path="advice-generator" element={<AdviceGenerator />} />
            <Route
              path="mortgage-repayment-calculator"
              element={<MortgageRepaymentCalculator />}
            />
            <Route path="countries" element={<Countries />} />
            <Route path="countries/:country" element={<Country />} />
          </Route>

          <Route path="react-projects">
            <Route path="birthdays" element={<Birthdays />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="bank-app" element={<BankApp />} />
            <Route path="cardinaltalent" element={<CardinalTalent />} />
            <Route path="cardinalrewardspage" element={<CardinalRewardsPage />} />
            <Route path="cardinalrewards" element={<CardinalRewards />} />
            <Route path="cardinalleaderboard" element={<CardinalLeaderboard />} />
            <Route path="cardinalhowitworks" element={<CardinalHowItWorks />} />
            <Route path="cardinalaipowernetworker" element={<CardinalAIPowerNetworker />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
