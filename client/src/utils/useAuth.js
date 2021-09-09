import { useEffect, useState } from "react";

/**
 * Takes auth state from Redux store and JSX to display when
 * auth status is waiting, logged in or logged out.
 * Returns correct JSX based on auth status.
 */
export default function useAuthStatusOnPage(
  auth,
  waiting,
  loggedIn,
  loggedOut
) {
  const [loginData, setLoginData] = useState(null);

  useEffect(() => {
    switch (auth) {
      // Waiting on network req
      case null:
        setLoginData(waiting);
        break;
      // User logged out
      case false:
        setLoginData(loggedOut);
        break;
      // User logged in
      default:
        setLoginData(loggedIn);
        break;
    }
  }, [auth]);

  return loginData;
}
