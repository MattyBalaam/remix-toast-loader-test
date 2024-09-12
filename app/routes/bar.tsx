import { Form, Link, useActionData, useLoaderData } from "@remix-run/react";
import { jsonWithInfo } from "remix-toast";

export const loader = async () => {
  console.log('Bar loader')
  return jsonWithInfo({ data: "Bar" }, "welcome to Bar");
};

export const action = async () => {
  return jsonWithInfo({ data: "action data" }, "submitted to Bar");
};

export default function Bar() {
  const { data } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  return (
    <>
      <h1>
        {data} | {actionData?.data}{" "}
      </h1>
      <ul>
        <li>
          <Link to="/foo">foo via Link</Link>
        </li>
        <li>
          <a href="/foo">[ANCHOR TAG] foo</a>
        </li>
        <li>
          <Link to="/">Back to index</Link>
        </li>
      </ul>

      <Form>
        <button>submit form</button>
      </Form>
    </>
  );
}
