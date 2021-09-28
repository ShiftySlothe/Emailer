import HomePage from '../page-components/Homepage/Homepage';
import Head from 'next/head';

export default function Index() {
  return (
    <>
      <Head>
        <title>Emailer</title>
      </Head>
      <HomePage />
    </>
  );
}
