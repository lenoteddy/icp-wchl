import { AuthClient } from '@dfinity/auth-client';
import { Actor, HttpAgent } from '@dfinity/agent';
import { Identity } from '@dfinity/agent';

export type WalletType = 'internet-identity' | 'plug';

export interface AuthState {
  isAuthenticated: boolean;
  identity: Identity | null;
  principal: string | null;
  authClient: AuthClient | null;
  walletType: WalletType | null;
}

class AuthService {
  private authClient: AuthClient | null = null;
  private _identity: Identity | null = null;
  private _isAuthenticated: boolean = false;
  private _walletType: WalletType | null = null;

  async init(): Promise<void> {
    this.authClient = await AuthClient.create();
    this._isAuthenticated = await this.authClient.isAuthenticated();
    
    if (this._isAuthenticated) {
      this._identity = this.authClient.getIdentity();
      this._walletType = 'internet-identity';
    }

    // Check if user is connected via Plug
    if (window.ic?.plug) {
      const plugConnected = await window.ic.plug.isConnected();
      if (plugConnected && !this._isAuthenticated) {
        this._isAuthenticated = true;
        this._walletType = 'plug';
        try {
          const principal = await window.ic.plug.getPrincipal();
          this._identity = {
            getPrincipal: () => principal,
            transformRequest: (request: any) => Promise.resolve(request)
          } as Identity;
        } catch (error) {
          console.error('Failed to get Plug principal:', error);
        }
      }
    }
  }

  async loginWithInternetIdentity(): Promise<boolean> {
    if (!this.authClient) {
      await this.init();
    }

    return new Promise((resolve) => {
      // For local development, use the standard local II URL
      // For production, use the mainnet II URL
      const identityProvider = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? "http://rdmx6-jaaaa-aaaaa-aaadq-cai.localhost:4943"
        : "https://identity.ic0.app";

      this.authClient!.login({
        identityProvider,
        onSuccess: () => {
          this._isAuthenticated = true;
          this._identity = this.authClient!.getIdentity();
          this._walletType = 'internet-identity';
          resolve(true);
        },
        onError: (error) => {
          console.error('Internet Identity login failed:', error);
          resolve(false);
        },
      });
    });
  }

  async loginWithPlug(): Promise<boolean> {
    if (!window.ic?.plug) {
      throw new Error('Plug wallet not installed');
    }

    try {
      const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      const host = isLocal ? "http://localhost:4943" : "https://mainnet.dfinity.network";
      
      // Define whitelist of canisters your app needs to interact with
      const whitelist = [
        // Add your backend canister ID here
        // "your-backend-canister-id"
      ];

      const publicKey = await window.ic.plug.requestConnect({
        whitelist,
        host,
        timeout: 50000
      });

      if (publicKey) {
        // Create agent for the session
        await window.ic.plug.createAgent({ whitelist, host });
        
        const principal = await window.ic.plug.getPrincipal();
        this._isAuthenticated = true;
        this._walletType = 'plug';
        this._identity = {
          getPrincipal: () => principal,
          transformRequest: (request: any) => Promise.resolve(request)
        } as Identity;
        
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Plug wallet connection failed:', error);
      return false;
    }
  }

  isPlugInstalled(): boolean {
    return typeof window.ic?.plug !== 'undefined';
  }

  async logout(): Promise<void> {
    if (this._walletType === 'internet-identity' && this.authClient) {
      await this.authClient.logout();
    } else if (this._walletType === 'plug' && window.ic?.plug) {
      await window.ic.plug.disconnect();
    }
    
    this._isAuthenticated = false;
    this._identity = null;
    this._walletType = null;
  }

  get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  get identity(): Identity | null {
    return this._identity;
  }

  get principal(): string | null {
    return this._identity ? this._identity.getPrincipal().toString() : null;
  }

  get walletType(): WalletType | null {
    return this._walletType;
  }

  getAuthClient(): AuthClient | null {
    return this.authClient;
  }

  createActor<T>(canisterId: string, interfaceFactory: any): T {
    if (!this._identity) {
      throw new Error('Not authenticated');
    }

    // Use Plug's agent if connected via Plug
    if (this._walletType === 'plug' && window.ic?.plug?.agent) {
      return window.ic.plug.agent.createActor(canisterId, interfaceFactory);
    }

    // Default to regular agent for Internet Identity
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const agent = new HttpAgent({
      identity: this._identity,
      host: isLocal ? "http://localhost:4943" : "https://ic0.app",
    });

    if (isLocal) {
      agent.fetchRootKey().catch(err => {
        console.warn("Unable to fetch root key. Check to ensure that your local replica is running");
        console.error(err);
      });
    }

    return Actor.createActor(interfaceFactory, {
      agent,
      canisterId,
    });
  }
}

export const authService = new AuthService();