import Head from 'next/head';
import ProfilePage from '../page-components/Profile/Profile';

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <ProfilePage />
    </>
  );
}
