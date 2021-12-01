import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0';
// TODO: Add CRUD API backend. Here is the link https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-dynamo-db.html
// TODO: Put orders, customers in DB
// TODO: Add Storybook Components
// TODO: Add authentication aith Auth0
// TODO: Add Redux (or other state management)
// TODO: add storybook.
// TODO: Add FORMIK
// TODO: Add testing libraries.

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp
