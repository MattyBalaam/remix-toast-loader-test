import { Link, useLoaderData } from "@remix-run/react";
import { jsonWithInfo } from "remix-toast";

export const loader = () => {
  console.log('Foo loader')
  return jsonWithInfo({ data: "Foo" }, "welcome to Foo");
};

export default function Foo() {
  const { data } = useLoaderData<typeof loader>();

  return (
    <>
      <h1>{data}</h1>
      <ul>
        <li>
          <Link to="/bar">bar via Link</Link>
        </li>
        <li>
          <a href="/bar">[ANCHOR TAG] bar </a>
        </li>
        <li>
          <Link to="/">Back to index</Link>
        </li>
      </ul>
    </>
  );
}
