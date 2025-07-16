import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Wallet, 
  Bitcoin, 
  DollarSign, 
  Activity, 
  FileText, 
  TrendingUp, 
  TrendingDown,
  AlertTriangle
} from 'lucide-react';

interface OverviewCardsProps {
  userAddress: string;
}

/**
 * Dashboard overview cards displaying key user metrics and portfolio information.
 * 
 * Shows:
 * - Wallet address and connection status
 * - Total BTC collateral with USD equivalent
 * - Stablecoins borrowed and available credit
 * - Health factor with risk assessment
 * - Active loans count
 * - Interest earned from lending
 * - Liquidation price warnings
 * - Available withdrawal amounts
 * 
 * Uses mock data - should be replaced with real backend integration.
 */
export default function OverviewCards({ userAddress }: OverviewCardsProps) {
  // Mock data - in real app, fetch from backend
  const mockData = {
    totalBTCCollateral: 2.45,
    totalStablecoinsBorrowed: 85000,
    healthFactor: 1.85,
    activeLoansCount: 3,
    availableToWithdraw: 0.85,
    interestEarned: 1250.50,
    nextLiquidationPrice: 28500,
  };

  const formatBTC = (amount: number) => `₿ ${amount.toFixed(6)}`;
  const formatUSD = (amount: number) => `$${amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
  
  const getHealthFactorColor = (factor: number) => {
    if (factor >= 2) return 'text-green-600 bg-green-50';
    if (factor >= 1.5) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getHealthFactorStatus = (factor: number) => {
    if (factor >= 2) return 'Healthy';
    if (factor >= 1.5) return 'Moderate Risk';
    return 'High Risk';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Wallet Address */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">
            Wallet Address
          </CardTitle>
          <Wallet className="h-4 w-4 text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="text-lg font-bold font-mono text-gray-900 break-all">
            {userAddress.slice(0, 12)}...{userAddress.slice(-8)}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Principal ID on IC Network
          </p>
        </CardContent>
      </Card>

      {/* Total BTC Collateral */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">
            Total BTC Collateral
          </CardTitle>
          <Bitcoin className="h-4 w-4 text-orange-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">
            {formatBTC(mockData.totalBTCCollateral)}
          </div>
          <div className="flex items-center justify-between mt-1">
            <p className="text-xs text-gray-500">
              ≈ {formatUSD(mockData.totalBTCCollateral * 43000)}
            </p>
            <Badge variant="outline" className="text-green-600 border-green-200">
              <TrendingUp className="w-3 h-3 mr-1" />
              +2.3%
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Total Stablecoins Borrowed */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">
            Stablecoins Borrowed
          </CardTitle>
          <DollarSign className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">
            {formatUSD(mockData.totalStablecoinsBorrowed)}
          </div>
          <div className="flex items-center justify-between mt-1">
            <p className="text-xs text-gray-500">
              Available: {formatUSD(mockData.availableToWithdraw)}
            </p>
            <Badge variant="outline" className="text-blue-600 border-blue-200">
              USDC • ckBTC
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Health Factor */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">
            Health Factor
          </CardTitle>
          <Activity className="h-4 w-4 text-purple-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">
            {mockData.healthFactor.toFixed(2)}
          </div>
          <div className="flex items-center justify-between mt-1">
            <Badge className={getHealthFactorColor(mockData.healthFactor)}>
              {getHealthFactorStatus(mockData.healthFactor)}
            </Badge>
            {mockData.healthFactor < 1.5 && (
              <AlertTriangle className="w-4 h-4 text-red-500" />
            )}
          </div>
        </CardContent>
      </Card>

      {/* Active Loans Count */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">
            Active Loans
          </CardTitle>
          <FileText className="h-4 w-4 text-indigo-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">
            {mockData.activeLoansCount}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            2 borrowing • 1 lending
          </p>
        </CardContent>
      </Card>

      {/* Interest Earned */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">
            Interest Earned
          </CardTitle>
          <TrendingUp className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">
            {formatUSD(mockData.interestEarned)}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            APY: 8.5% • This month: +$185.30
          </p>
        </CardContent>
      </Card>

      {/* Liquidation Risk */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">
            Liquidation Price
          </CardTitle>
          <TrendingDown className="h-4 w-4 text-red-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">
            {formatUSD(mockData.nextLiquidationPrice)}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Current BTC: $43,250 • Safe margin: 32%
          </p>
        </CardContent>
      </Card>

      {/* Available to Withdraw */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">
            Available to Withdraw
          </CardTitle>
          <Bitcoin className="h-4 w-4 text-orange-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">
            {formatBTC(mockData.availableToWithdraw)}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            ≈ {formatUSD(mockData.availableToWithdraw * 43000)}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}