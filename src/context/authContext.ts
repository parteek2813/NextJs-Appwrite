import { createContext } from "react";

export const AuthContext = createContext<{
  authStatus: boolean;
  setAuthStatus: (status: boolean) => void;
}>({
  authStatus: false,
  setAuthStatus: () => {},
});

export const AuthProvider = AuthContext.provider;

export default AuthContext;
