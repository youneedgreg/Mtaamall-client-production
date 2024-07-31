// utils/getUserEmail.js
import { useAuth0 } from "@auth0/auth0-react";

export const getUserEmail = () => {
  const { user } = useAuth0();
  return user ? user.email : null;
};
