import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import type { AuthState, AuthCredentials } from "./authTypes";
import { apiLogin, apiLogout, apiGetMe, type AuthUser } from "@/api/client";

const AUTH_STORAGE_KEY = "ufuturo_auth_state";

const defaultAuthState: AuthState = {
  isAuthenticated: false,
  user: null,
};

type AuthContextValue = {
  auth: AuthState;
  login: (credentials: AuthCredentials) => Promise<{ success: boolean; message?: string }>;
  logout: () => Promise<void>;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextValue>({
  auth: defaultAuthState,
  login: async () => ({ success: false }),
  logout: async () => {},
  isLoading: true,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<AuthState>(defaultAuthState);
  const [isLoading, setIsLoading] = useState(true);

  // Verificar sessão ao carregar a aplicação
  const checkSession = useCallback(async () => {
    try {
      // Primeiro verificar localStorage para resposta rápida
      const saved = localStorage.getItem(AUTH_STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed.isAuthenticated && parsed.user) {
            setAuth(parsed);
          }
        } catch {
          // Ignorar erro de parse
        }
      }

      // Depois validar com o servidor
      const response = await apiGetMe();
      
      if (response.success && response.authenticated && response.user) {
        const newAuth: AuthState = {
          isAuthenticated: true,
          user: {
            id: response.user.id,
            username: response.user.username,
            fullName: response.user.full_name,
          },
        };
        setAuth(newAuth);
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(newAuth));
      } else {
        // Sessão inválida ou expirada
        setAuth(defaultAuthState);
        localStorage.removeItem(AUTH_STORAGE_KEY);
      }
    } catch {
      // Em caso de erro de rede, manter estado local se existir
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  const login = async (credentials: AuthCredentials): Promise<{ success: boolean; message?: string }> => {
    const { username, password } = credentials;

    // Validação local
    if (!username.trim() || !password.trim()) {
      return { 
        success: false, 
        message: "Nome de utilizador e palavra-passe são obrigatórios." 
      };
    }

    // Chamar API
    const response = await apiLogin(username.trim(), password);

    if (response.success && response.user) {
      const newAuth: AuthState = {
        isAuthenticated: true,
        user: {
          id: response.user.id,
          username: response.user.username,
          fullName: response.user.full_name,
        },
      };
      setAuth(newAuth);
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(newAuth));
      return { success: true };
    }

    return { 
      success: false, 
      message: response.message || "Credenciais inválidas." 
    };
  };

  const logout = async () => {
    await apiLogout();
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
    <AuthContext.Provider value={{ auth, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
