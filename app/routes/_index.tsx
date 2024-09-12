import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { jsonWithInfo } from "remix-toast";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = () => {
  return jsonWithInfo({ data: "index" }, "Index!");
};

export default function Index() {
  return (
    <div className="font-sans">
      <h1 className="text-3xl">Test toasts in loaders</h1>
      <p>Link tag links</p>
      <ul>
        <li>
          <Link to="/foo">foo</Link>
        </li>
        <li>
          <Link to="/bar">bar</Link>
        </li>
      </ul>

      <p>Anchor tag links</p>
      <ul>
        <li>
          <a href="/foo">foo</a>
        </li>
        <li>
          <a href="/bar">bar</a>
        </li>
      </ul>
    </div>
  );
}
