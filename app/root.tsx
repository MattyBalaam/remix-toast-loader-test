import { LoaderFunctionArgs } from "@remix-run/node";
import {
    json,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from "@remix-run/react";
import { useEffect } from "react";
import { getToast } from "remix-toast";


export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { toast, headers } = await getToast(request);

  console.log({toast})

  return json({ toast }, { headers });
};

export function Layout({ children }: { children: React.ReactNode }) {

  const { toast } = useLoaderData<typeof loader>();

    useEffect(()=> {
      toast && alert(toast.message)
    }, [toast])

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <p> Toast: {JSON.stringify(toast)}</p>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
