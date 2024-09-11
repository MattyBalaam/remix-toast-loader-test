import { Link, useLoaderData } from "@remix-run/react"
import { jsonWithInfo } from "remix-toast"

export const loader = ()=> {
  return jsonWithInfo({data: 'this is route one'}, 'welcome to route one')
}

export default function RouteOne () {
  const { data } = useLoaderData<typeof loader>()

  return <>
    <p>{data}</p>
    <Link to="/route-two">route-two</Link>
  </>
}
