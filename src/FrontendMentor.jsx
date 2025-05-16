import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
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
    icon: ClockIcon,
    iconForeground: "text-amber-700",
    iconBackground: "bg-amber-50",
    description: "Countries facts coding challenge.",
  },
];

function FrontendMentor() {
  return <LayoutGrid actions={actions} />;
}

export default FrontendMentor;
