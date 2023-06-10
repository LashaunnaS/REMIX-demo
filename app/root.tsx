import type { LinksFunction, V2_MetaFunction } from '@remix-run/node';
import { Link, Links, LiveReload, Meta, Outlet } from '@remix-run/react';
import type { ReactNode } from 'react';
import globalStyles from '~/styles/global.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: globalStyles },
];

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Postal ✍︎ Service' },
    {
      name: 'description',
      content: 'Why not another blog post demo🤷🏾‍♀️!',
    },
  ];
};

export default function App() {
  return (
    <Document>
      <Layout>
        {/* Child routes go here */}
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        {/* All meta exports on all routes will go here */}
        <Meta />
        
        {/* All link exports on all routes will go here */}
        <Links />
      </head>
      <body>
        {children}

        {/* Sets up automatic reload when you change code */}
        {/* and only does anything during development */}
        {/* If you use a nonce-based content security policy for scripts, you must provide the `nonce` prop. Otherwise, omit the nonce prop as shown here. */}
        <LiveReload />
      </body>
    </html>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          Postal ✍︎ Service
        </Link>
        <ul className="nav">
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
      <main className="container">{children}</main>
    </>
  );
}
