import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Bitcoin, Wallet, HelpCircle, Zap, Shield, Users, ArrowRight } from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';

/**
 * User onboarding and wallet connection page.
 * 
 * Provides wallet authentication options for Internet Computer:
 * - Plug Wallet: Browser extension wallet with user-friendly interface
 * - Internet Identity: DFINITY's native authentication system
 * 
 * Automatically redirects authenticated users to the dashboard.
 * Handles wallet connection errors and provides helpful tooltips.
 */
export default function OnboardingPage() {
  const [isConnecting, setIsConnecting] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { loginWithInternetIdentity, loginWithPlug, isAuthenticated, principal, isLoading, isPlugInstalled, walletType } = useAuth();

  useEffect(() => {
    if (isAuthenticated && principal) {
      console.log(`User authenticated with ${walletType} - principal:`, principal);
      navigate('/dashboard');
    }
  }, [isAuthenticated, principal, walletType, navigate]);

  /**
   * Handles wallet connection for both Internet Identity and Plug wallet.
   * 
   * @param walletType - Either 'internet-identity' or 'plug'
   */
  const handleWalletConnection = async (walletType: string) => {
    setIsConnecting(walletType);
    setError(null);
    
    try {
      let success = false;
      
      if (walletType === 'internet-identity') {
        success = await loginWithInternetIdentity();
        if (success) {
          console.log('Successfully connected with Internet Identity');
        } else {
          throw new Error('Internet Identity authentication failed');
        }
      } else if (walletType === 'plug') {
        if (!isPlugInstalled) {
          throw new Error('Plug wallet is not installed. Please install the Plug browser extension.');
        }
        
        success = await loginWithPlug();
        if (success) {
          console.log('Successfully connected with Plug wallet');
        } else {
          throw new Error('Plug wallet authentication failed');
        }
      }
      
      setIsConnecting(null);
    } catch (err: any) {
      console.error(`Failed to connect to ${walletType}:`, err);
      setError(err.message || `Failed to connect to ${walletType}. Please try again.`);
      setIsConnecting(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50/20 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      <div className="relative flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur opacity-20" />
                <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 p-4 rounded-full">
                  <Bitcoin className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-deep-charcoal mb-3">
              Welcome to BTC Lending on ICP
            </h1>
            
            <p className="text-neutral-gray text-lg leading-relaxed">
              Connect your wallet to start lending and borrowing Bitcoin on the Internet Computer
            </p>
          </div>

          {/* Wallet Connection Card */}
          <Card className="border-border/50 shadow-lg">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl text-deep-charcoal">Choose Your Wallet</CardTitle>
              <CardDescription className="text-neutral-gray">
                Select a wallet to connect and start using the platform
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
                  {error}
                </div>
              )}
              
              <TooltipProvider>
                {/* Wallet Buttons Container */}
                <div className="flex flex-col space-y-4">
                  {/* Plug Wallet Button */}
                  <div className="relative" key="plug-wallet-section">
                    <Button
                      onClick={() => handleWalletConnection('plug')}
                      disabled={isConnecting !== null || isLoading || !isPlugInstalled}
                      className={`w-full h-14 ${
                        isPlugInstalled 
                          ? 'bg-bitcoin-orange hover:bg-bitcoin-orange/90' 
                          : 'bg-gray-400 cursor-not-allowed'
                      } text-white font-semibold text-lg transition-all duration-200 group relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      
                      <div className="flex items-center justify-center space-x-3">
                        {isConnecting === 'plug' ? (
                          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <Zap className="w-6 h-6" />
                        )}
                        <span>
                          {isConnecting === 'plug' 
                            ? 'Connecting...' 
                            : !isPlugInstalled 
                            ? 'Install Plug Extension' 
                            : 'Connect with Plug'}
                        </span>
                        {isConnecting !== 'plug' && (
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        )}
                      </div>
                    </Button>
                    
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-2 h-8 w-8 p-0 hover:bg-white/20"
                          style={{
                            top: 12,
                          }}
                        >
                          <HelpCircle className="h-4 w-4 text-white" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="left" className="max-w-xs">
                        <p>
                          <strong>Plug Wallet</strong> - A browser extension wallet for the Internet Computer. 
                          Easy to use and perfect for beginners. Supports ICP and other IC tokens.
                          {!isPlugInstalled && (
                            <span className="block mt-2 text-red-600 font-medium">
                              ⚠️ Extension not detected. Please install Plug wallet first.
                            </span>
                          )}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </div>

                  {/* Internet Identity Button */}
                  <div className="relative" key="internet-identity-section">
                    <Button
                      onClick={() => handleWalletConnection('internet-identity')}
                      disabled={isConnecting !== null || isLoading}
                      variant="outline"
                      className="w-full h-14 border-2 border-bitcoin-orange text-bitcoin-orange hover:bg-bitcoin-orange hover:text-white font-semibold text-lg transition-all duration-200 group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-100/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      
                      <div className="flex items-center justify-center space-x-3">
                        {isConnecting === 'internet-identity' ? (
                          <div className="w-6 h-6 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <Shield className="w-6 h-6" />
                        )}
                        <span>
                          {isConnecting === 'internet-identity' ? 'Connecting...' : 'Connect with II'}
                        </span>
                        {isConnecting !== 'internet-identity' && (
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        )}
                      </div>
                    </Button>
                    
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-2 h-8 w-8 p-0 hover:bg-orange-50"
                          style={{
                            top: 12,
                          }}
                        >
                          <HelpCircle className="h-4 w-4 text-bitcoin-orange" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="left" className="max-w-xs">
                        <p>
                          <strong>Internet Identity</strong> - A secure, passwordless authentication system 
                          built by DFINITY. Uses cryptographic keys and WebAuthn for maximum security.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </TooltipProvider>
            </CardContent>
          </Card>

          {/* Features Section */}
          <div className="mt-8 text-center">
            <div className="grid grid-cols-3 gap-4 text-sm text-neutral-gray">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-bitcoin-orange" />
                </div>
                <span>Secure</span>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-bitcoin-orange" />
                </div>
                <span>Fast</span>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-bitcoin-orange" />
                </div>
                <span>Decentralized</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-neutral-gray">
            <p>
              New to Internet Computer?{' '}
              <a href="#" className="text-bitcoin-orange hover:underline font-medium">
                Learn more about IC wallets
              </a>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(247, 147, 26, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(247, 147, 26, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}