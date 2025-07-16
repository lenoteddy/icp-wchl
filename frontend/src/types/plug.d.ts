interface PlugConnectionOptions {
  whitelist?: string[];
  host?: string;
  onConnectionUpdate?: () => void;
  timeout?: number;
}

interface PlugAgent {
  getPrincipal(): Promise<Principal>;
  createActor<T>(canisterId: string, interfaceFactory: any): T;
}

interface PlugSessionData {
  principalId: string;
  accountId: string;
  agent?: PlugAgent;
}

interface PlugSessionManager {
  sessionData: PlugSessionData;
}

interface PlugWallet {
  requestConnect(options?: PlugConnectionOptions): Promise<string>;
  isConnected(): Promise<boolean>;
  disconnect(): Promise<void>;
  createAgent(options?: PlugConnectionOptions): Promise<PlugAgent>;
  getPrincipal(): Promise<Principal>;
  getManagementCanister(): any;
  agent?: PlugAgent;
  sessionManager: PlugSessionManager;
}

interface IC {
  plug: PlugWallet;
}

declare global {
  interface Window {
    ic?: IC;
  }
}