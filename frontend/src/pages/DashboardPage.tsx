import { useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import Navigation from '@/components/Navigation';
import OverviewCards from '@/components/OverviewCards';
import DashboardCharts from '@/components/DashboardCharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  TrendingDown, 
  Zap, 
  History, 
  Bitcoin,
  DollarSign,
  Users,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react';

/**
 * Borrow section component - allows users to create loans using BTC as collateral.
 * Users can specify collateral amount and desired stablecoin to borrow.
 */
function BorrowSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Borrow Against BTC</h2>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <TrendingDown className="w-4 h-4 mr-2" />
          New Loan
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Create New Loan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                BTC Collateral Amount
              </label>
              <div className="flex items-center space-x-2">
                <Bitcoin className="w-5 h-5 text-orange-500" />
                <input 
                  type="number" 
                  placeholder="0.00" 
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-500">BTC</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Stablecoin to Borrow
              </label>
              <div className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-green-500" />
                <input 
                  type="number" 
                  placeholder="0.00" 
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>USDC</option>
                  <option>USDT</option>
                  <option>DAI</option>
                </select>
              </div>
            </div>
            
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Calculate Loan Terms
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Loan Parameters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Max LTV:</span>
              <span className="text-sm font-medium">80%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Interest Rate:</span>
              <span className="text-sm font-medium text-green-600">6.5% APR</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Liquidation:</span>
              <span className="text-sm font-medium text-red-600">85% LTV</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Min. Collateral:</span>
              <span className="text-sm font-medium">₿ 0.001</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

/**
 * Lend section component - displays lending opportunities for both BTC and stablecoins.
 * Shows current APY rates, minimum amounts, and pool sizes.
 */
function LendSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Lend & Earn Interest</h2>
        <Button className="bg-green-600 hover:bg-green-700">
          <TrendingUp className="w-4 h-4 mr-2" />
          Start Lending
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Lend BTC</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">8.5%</div>
              <div className="text-sm text-gray-600">Current APY</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Min. Amount:</span>
                <span className="text-sm font-medium">₿ 0.01</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Lock Period:</span>
                <span className="text-sm font-medium">30 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Pool Size:</span>
                <span className="text-sm font-medium">₿ 150.5</span>
              </div>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Lend BTC
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Lend Stablecoins</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">12.2%</div>
              <div className="text-sm text-gray-600">Current APY</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Min. Amount:</span>
                <span className="text-sm font-medium">$100 USDC</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Lock Period:</span>
                <span className="text-sm font-medium">Flexible</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Pool Size:</span>
                <span className="text-sm font-medium">$2.1M</span>
              </div>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Lend USDC
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

/**
 * Liquidation section component - displays at-risk positions that can be liquidated.
 * Shows user addresses, collateral amounts, debt, health factors, and potential rewards.
 */
function LiquidateSection() {
  const liquidationOpportunities = [
    { user: 'user1...abc', collateral: 1.25, debt: 52000, healthFactor: 1.02, reward: 850 },
    { user: 'user2...def', collateral: 0.88, debt: 36000, healthFactor: 1.08, reward: 590 },
    { user: 'user3...ghi', collateral: 2.15, debt: 88000, healthFactor: 1.15, reward: 1200 },
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Liquidation Opportunities</h2>
        <Badge variant="outline" className="text-red-600 border-red-200">
          <Zap className="w-3 h-3 mr-1" />
          {liquidationOpportunities.length} Available
        </Badge>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>At-Risk Positions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {liquidationOpportunities.map((opportunity, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div className="space-y-1">
                  <div className="font-mono text-sm">{opportunity.user}</div>
                  <div className="text-xs text-gray-600">
                    ₿ {opportunity.collateral} collateral • ${opportunity.debt.toLocaleString()} debt
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-red-600">
                    Health: {opportunity.healthFactor}
                  </div>
                  <div className="text-xs text-green-600">
                    Reward: ${opportunity.reward}
                  </div>
                </div>
                <Button size="sm" variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                  Liquidate
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/**
 * Transaction history section - displays recent user transactions with status and details.
 * Supports filtering by transaction type and shows transaction IDs for verification.
 */
function TransactionsSection() {
  const transactions = [
    { type: 'borrow', amount: '$25,000 USDC', date: '2024-01-15', status: 'completed', txId: 'tx1...abc' },
    { type: 'repay', amount: '$5,000 USDC', date: '2024-01-10', status: 'completed', txId: 'tx2...def' },
    { type: 'lend', amount: '₿ 0.5', date: '2024-01-08', status: 'pending', txId: 'tx3...ghi' },
    { type: 'withdraw', amount: '₿ 0.2', date: '2024-01-05', status: 'completed', txId: 'tx4...jkl' },
    { type: 'liquidation', amount: '₿ 1.1', date: '2024-01-02', status: 'completed', txId: 'tx5...mno' },
  ];
  
  const getStatusIcon = (status: string) => {
    if (status === 'completed') return <CheckCircle className="w-4 h-4 text-green-500" />;
    if (status === 'pending') return <Clock className="w-4 h-4 text-yellow-500" />;
    return <AlertCircle className="w-4 h-4 text-red-500" />;
  };
  
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'borrow': return 'text-blue-600 bg-blue-50';
      case 'lend': return 'text-green-600 bg-green-50';
      case 'repay': return 'text-purple-600 bg-purple-50';
      case 'withdraw': return 'text-orange-600 bg-orange-50';
      case 'liquidation': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Transaction History</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((tx, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-4">
                  {getStatusIcon(tx.status)}
                  <div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getTypeColor(tx.type)}>
                        {tx.type.toUpperCase()}
                      </Badge>
                      <span className="font-medium">{tx.amount}</span>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      {tx.date} • {tx.txId}
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/**
 * Main dashboard page for authenticated users.
 * 
 * Provides a comprehensive interface for BTC lending/borrowing activities:
 * - Dashboard: Overview cards and charts showing portfolio status
 * - Borrow: Create new loans using BTC as collateral
 * - Lend: Earn interest by lending BTC or stablecoins
 * - Liquidate: Liquidate undercollateralized positions for rewards
 * - Transactions: View transaction history and status
 * 
 * Requires user authentication - redirects to onboarding if not logged in.
 */
export default function DashboardPage() {
  const { isAuthenticated, principal, walletType } = useAuth();
  const [activeSection, setActiveSection] = useState('dashboard');

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Access Denied
          </h1>
          <p className="text-gray-600">Please connect your wallet to access the dashboard.</p>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'borrow':
        return <BorrowSection />;
      case 'lend':
        return <LendSection />;
      case 'liquidate':
        return <LiquidateSection />;
      case 'transactions':
        return <TransactionsSection />;
      default:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Overview</h2>
              <p className="text-gray-600">
                Welcome back! Here's a summary of your BTC lending activity.
              </p>
            </div>
            
            <OverviewCards userAddress={principal || ''} />
            <DashboardCharts />
            
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Button 
                    onClick={() => setActiveSection('borrow')}
                    className="h-16 bg-blue-600 hover:bg-blue-700"
                  >
                    <TrendingDown className="w-5 h-5 mr-2" />
                    Borrow Stablecoins
                  </Button>
                  <Button 
                    onClick={() => setActiveSection('lend')}
                    className="h-16 bg-green-600 hover:bg-green-700"
                  >
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Lend & Earn
                  </Button>
                  <Button 
                    onClick={() => setActiveSection('liquidate')}
                    className="h-16 bg-red-600 hover:bg-red-700"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Liquidate
                  </Button>
                  <Button 
                    onClick={() => setActiveSection('transactions')}
                    variant="outline"
                    className="h-16"
                  >
                    <History className="w-5 h-5 mr-2" />
                    View History
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      {/* Main content */}
      <div className="lg:ml-64 min-h-screen">
        <div className="p-6 lg:p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}