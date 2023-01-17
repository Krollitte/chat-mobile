import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthState {}

interface LoginData {}

interface RegisterData {}

interface AuthContextData {}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [userData, setUserData] = useState();
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  return context;
}

export { useAuth, AuthProvider };
