import { Link, useLoaderData } from "@remix-run/react";
import { jsonWithInfo } from "remix-toast";

export const loader = () => {
  return jsonWithInfo({ data: "this is route one" }, "welcome to route one");
};

export default function RouteOne() {
  const { data } = useLoaderData<typeof loader>();

  return (
    <>
      <p>{data}</p>
      <ul>
        <li>
          <Link to="/route-two">route-two via Link</Link>
        </li>
        <li>
          <a href="/route-two">route-two via anchor</a>
        </li>
      </ul>
    </>
  );
}
