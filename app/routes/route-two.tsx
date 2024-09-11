import { Form, Link, useActionData, useLoaderData } from "@remix-run/react"
import { jsonWithInfo } from "remix-toast"

export const loader = async ()=> {
  return jsonWithInfo({data: 'this is route two'}, 'welcome to route two')
}

export const action = async () => {
  return jsonWithInfo({ data: 'action data' }, 'submitted to route two');
}

export default function RouteTwo () {
  const { data } = useLoaderData<typeof loader>()
    const actionData = useActionData<typeof action>()

  return <>
    <p>{data} | {actionData?.data} </p>
    <Link to="/route-one">route-one</Link>
      <Form><button>submit form</button></Form>
  </>
}
