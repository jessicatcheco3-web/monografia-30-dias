export interface AuthUser {
  id?: number;
  username: string;
  fullName?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: AuthUser | null;
}

export interface AuthCredentials {
  username: string;
  password: string;
}
