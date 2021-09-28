import Head from 'next/head';
import LoginPage from '../page-components/Login/Login';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginPage />
    </>
  );
}
