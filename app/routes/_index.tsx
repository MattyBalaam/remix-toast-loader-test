import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans">
      <h1 className="text-3xl">Test toasts in loaders</h1>
      <ul>
        <li>
          <Link to="/route-one">route-one via Link  (no toast will show)</Link>
        </li>
        <li>
          <Link to="/route-two">route-two via Link  (no toast will show)</Link>
        </li>
        <li>
          <a href="/route-one">route-one via anchor</a>
        </li>
        <li>
          <a href="/route-two">route-two via anchor</a>
        </li>
      </ul>
    </div>
  );
}
