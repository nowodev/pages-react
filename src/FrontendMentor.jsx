import {
  BanknotesIcon,
  ClockIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import LayoutGrid from "./components/LayoutGrid";

const actions = [
  {
    title: "Product List With Cart",
    href: "product-list-with-cart",
    icon: ClockIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
    description: "Product list with cart coding challenge.",
  },
  {
    title: "Adivce Generator",
    href: "advice-generator",
    icon: ClockIcon,
    iconForeground: "text-cyan-700",
    iconBackground: "bg-cyan-50",
    description: "An advice generator app using the Advice Slip API.",
  },
  {
    title: "Mortgage Repayment Calculator",
    href: "mortgage-repayment-calculator",
    icon: BanknotesIcon,
    iconForeground: "text-amber-700",
    iconBackground: "bg-amber-50",
    description: "An advice generator app using the Advice Slip API.",
  },
  {
    title: "Countries Facts",
    href: "countries",
    icon: GlobeAltIcon,
    iconForeground: "text-blue-700",
    iconBackground: "bg-blue-50",
    description:
      "A countries facts app using the REST Countries API. Displays a list of countries with their flags, names, populations, regions, and capitals.",
  },
];

function FrontendMentor() {
  return <LayoutGrid actions={actions} />;
}

export default FrontendMentor;
