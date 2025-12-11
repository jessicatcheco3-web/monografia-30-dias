import React, { createContext, useContext, useEffect, useState } from "react";
import type { AuthState, AuthCredentials, AuthUser } from "./authTypes";

const AUTH_STORAGE_KEY = "ufuturo_auth_state";

// 🔐 Palavra-passe única do curso
const MASTER_PASSWORD = "UFUTUROlicenciadosoueu1";

const defaultAuthState: AuthState = {
  isAuthenticated: false,
  user: null,
};

type AuthContextValue = {
  auth: AuthState;
  login: (credentials: AuthCredentials) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue>({
  auth: defaultAuthState,
  login: async () => false,
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<AuthState>(defaultAuthState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem(AUTH_STORAGE_KEY);
    if (saved) {
      try {
        setAuth(JSON.parse(saved));
      } catch {
        setAuth(defaultAuthState);
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(auth));
    }
  }, [auth, isLoading]);

  const login = async (credentials: AuthCredentials): Promise<boolean> => {
    const { username, password } = credentials;

    // Precisa preencher os dois campos
    if (!username.trim() || !password.trim()) return false;

    // Verifica se a palavra-passe está correcta
    if (password !== MASTER_PASSWORD) return false;

    const user: AuthUser = { username: username.trim() };
    setAuth({ isAuthenticated: true, user });

    return true;
  };

  const logout = () => {
    setAuth(defaultAuthState);
    localStorage.removeItem(AUTH_STORAGE_KEY);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
