import Head from 'next/head';
import SignupPage from '../page-components/Signup/SignupPage';

export default function Signup() {
  return (
    <>
      <Head>
        <title>Sign-Up</title>
      </Head>
      <SignupPage />
    </>
  );
}
