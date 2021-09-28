import { useEffect } from 'react';
import Router from 'next/router';
import { useUser } from '../../lib/hooks';
import ProfileEdit from './ProfileEdit';

export default function ProfilePage() {
  const [user, { loading }] = useUser();

  useEffect(() => {
    // redirect user to login if not authenticated
    if (!loading && !user) Router.replace('/login');
  }, [user, loading]);

  return (
    <>
      <h1>Profile</h1>

      {user && (
        <>
          <p>Your session:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <ProfileEdit />
        </>
      )}

      <style jsx>{`
        pre {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
      `}</style>
    </>
  );
}
