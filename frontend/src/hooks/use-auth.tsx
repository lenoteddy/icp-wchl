import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { authService, AuthState, WalletType } from '@/lib/auth';

interface AuthContextType extends AuthState {
  loginWithInternetIdentity: () => Promise<boolean>;
  loginWithPlug: () => Promise<boolean>;
  logout: () => Promise<void>;
  isLoading: boolean;
  isPlugInstalled: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    identity: null,
    principal: null,
    authClient: null,
    walletType: null,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isPlugInstalled, setIsPlugInstalled] = useState(false);

  useEffect(() => {
    const initAuth = async () => {
      try {
        await authService.init();
        setAuthState({
          isAuthenticated: authService.isAuthenticated,
          identity: authService.identity,
          principal: authService.principal,
          authClient: authService.getAuthClient(),
          walletType: authService.walletType,
        });
        setIsPlugInstalled(authService.isPlugInstalled());
      } catch (error) {
        console.error('Failed to initialize auth:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  const loginWithInternetIdentity = async (): Promise<boolean> => {
    setIsLoading(true);
    try {
      const success = await authService.loginWithInternetIdentity();
      if (success) {
        setAuthState({
          isAuthenticated: authService.isAuthenticated,
          identity: authService.identity,
          principal: authService.principal,
          authClient: authService.getAuthClient(),
          walletType: authService.walletType,
        });
        setIsPlugInstalled(authService.isPlugInstalled());
      }
      return success;
    } catch (error) {
      console.error('Internet Identity login failed:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithPlug = async (): Promise<boolean> => {
    setIsLoading(true);
    try {
      const success = await authService.loginWithPlug();
      if (success) {
        setAuthState({
          isAuthenticated: authService.isAuthenticated,
          identity: authService.identity,
          principal: authService.principal,
          authClient: authService.getAuthClient(),
          walletType: authService.walletType,
        });
        setIsPlugInstalled(authService.isPlugInstalled());
      }
      return success;
    } catch (error) {
      console.error('Plug wallet login failed:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    setIsLoading(true);
    try {
      await authService.logout();
      setAuthState({
        isAuthenticated: false,
        identity: null,
        principal: null,
        authClient: null,
        walletType: null,
      });
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const value: AuthContextType = {
    ...authState,
    loginWithInternetIdentity,
    loginWithPlug,
    logout,
    isLoading,
    isPlugInstalled,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}