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
    title: "Birthdays",
    href: "react-projects/birthdays",
    icon: ClockIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
    description:
      "Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
  },
  {
    title: "Benefits",
    href: "#",
    icon: CheckBadgeIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
    description:
      "Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
  },
  {
    title: "Schedule a one-on-one",
    href: "#",
    icon: UsersIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
    description:
      "Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
  },
  {
    title: "Payroll",
    href: "#",
    icon: BanknotesIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
    description:
      "Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
  },
  {
    title: "Submit an expense",
    href: "#",
    icon: ReceiptRefundIcon,
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
    description:
      "Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
  },
  {
    title: "Training",
    href: "#",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
    description:
      "Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
  },
];

function ReactProjects() {
  return <LayoutGrid actions={actions} />;
}

export default ReactProjects;
