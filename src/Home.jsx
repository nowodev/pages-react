import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import LayoutGrid from "./components/LayoutGrid";

const actions = [
  {
    title: "Frontend Mentor",
    href: "frontend-mentor",
    icon: QuestionMarkCircleIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
    description:
      "Tons of frontend pages built from scratch using Tailwind CSS and React.js. All inspirations gotten from Frontend Mentor.",
  },
  {
    title: "React Projects",
    href: "react-projects",
    icon: QuestionMarkCircleIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
    description:
      "A bunch of practice React projects gotten on the internet.",
  },
];

function Home() {
  return (
    <div>
      <LayoutGrid actions={actions} />
    </div>
  );
}

export default Home;
