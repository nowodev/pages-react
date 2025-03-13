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
];

function FrontendMentor() {
  return <LayoutGrid actions={actions} />;
}

export default FrontendMentor;
