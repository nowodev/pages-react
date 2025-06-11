import {
  BanknotesIcon,
  CalculatorIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import LayoutGrid from "./components/LayoutGrid";

const actions = [
  {
    title: "Birthdays",
    href: "birthdays",
    icon: UsersIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
    description: "A list of birthday data with a button to empty the list",
  },
  {
    title: "Calculator",
    href: "calculator",
    icon: CalculatorIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
    description:
      "A basic calculator that stores calculated history that is accessible at any time",
  },
  {
    title: "Bank App",
    href: "bank-app",
    icon: BanknotesIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
    description:
      "A bank app that allows users to deposit, withdraw, and request a loan (utilizing useReducer).",
  },
  {
    title: "Website Calculator",
    href: "websitecalculator",
    icon: CalculatorIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
    description:
      "A basic calculator for generating an estimate for building a website",
  }
  // {
  //   title: "Payroll",
  //   href: "#",
  //   icon: BanknotesIcon,
  //   iconForeground: "text-yellow-700",
  //   iconBackground: "bg-yellow-50",
  //   description:
  //     "Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
  // },
  // {
  //   title: "Submit an expense",
  //   href: "#",
  //   icon: ReceiptRefundIcon,
  //   iconForeground: "text-rose-700",
  //   iconBackground: "bg-rose-50",
  //   description:
  //     "Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
  // },
  // {
  //   title: "Training",
  //   href: "#",
  //   icon: AcademicCapIcon,
  //   iconForeground: "text-indigo-700",
  //   iconBackground: "bg-indigo-50",
  //   description:
  //     "Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
  // },
];

function ReactProjects() {
  return <LayoutGrid actions={actions} />;
}

export default ReactProjects;
