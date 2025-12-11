export type AuthUser = {
  username: string;
};

export type AuthState = {
  isAuthenticated: boolean;
  user: AuthUser | null;
};

export type AuthCredentials = {
  username: string;
  password: string;
};
