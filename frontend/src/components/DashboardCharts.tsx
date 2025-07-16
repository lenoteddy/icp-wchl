import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp, Activity, DollarSign, AlertTriangle } from 'lucide-react';

/**
 * Dashboard charts component displaying financial data visualizations.
 * 
 * Includes:
 * - Loan health over time with liquidation risk tracking
 * - Interest earned trend from lending activities
 * - Borrowing costs breakdown by week
 * - Portfolio distribution with risk assessment
 * 
 * Uses Recharts library for responsive, interactive charts.
 * All data is currently mocked for demonstration purposes.
 */
export default function DashboardCharts() {
  // Mock data for loan health over time
  const healthData = [
    { date: 'Jan 1', healthFactor: 2.1, liquidationRisk: 15 },
    { date: 'Jan 8', healthFactor: 2.3, liquidationRisk: 12 },
    { date: 'Jan 15', healthFactor: 1.9, liquidationRisk: 25 },
    { date: 'Jan 22', healthFactor: 1.7, liquidationRisk: 35 },
    { date: 'Jan 29', healthFactor: 2.0, liquidationRisk: 20 },
    { date: 'Feb 5', healthFactor: 2.2, liquidationRisk: 14 },
    { date: 'Feb 12', healthFactor: 1.8, liquidationRisk: 30 },
    { date: 'Feb 19', healthFactor: 1.9, liquidationRisk: 25 },
    { date: 'Feb 26', healthFactor: 2.1, liquidationRisk: 18 },
    { date: 'Mar 5', healthFactor: 1.85, liquidationRisk: 28 },
  ];

  // Mock data for interest accrual (lending)
  const interestData = [
    { date: 'Week 1', earned: 45.2, apy: 8.2 },
    { date: 'Week 2', earned: 52.8, apy: 8.5 },
    { date: 'Week 3', earned: 48.1, apy: 8.0 },
    { date: 'Week 4', earned: 61.3, apy: 9.1 },
    { date: 'Week 5', earned: 58.7, apy: 8.8 },
    { date: 'Week 6', earned: 67.2, apy: 9.3 },
    { date: 'Week 7', earned: 55.9, apy: 8.4 },
    { date: 'Week 8', earned: 63.5, apy: 9.0 },
  ];

  // Mock data for borrowing costs
  const borrowingData = [
    { date: 'Week 1', interest: 125.50, rate: 6.2 },
    { date: 'Week 2', interest: 132.10, rate: 6.5 },
    { date: 'Week 3', interest: 118.75, rate: 5.9 },
    { date: 'Week 4', interest: 145.20, rate: 7.1 },
    { date: 'Week 5', interest: 138.60, rate: 6.8 },
    { date: 'Week 6', interest: 155.30, rate: 7.6 },
    { date: 'Week 7', interest: 142.90, rate: 7.0 },
    { date: 'Week 8', interest: 149.80, rate: 7.3 },
  ];

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="text-sm font-medium text-gray-900">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {typeof entry.value === 'number' ? entry.value.toFixed(2) : entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Loan Health Over Time */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-purple-500" />
            <span>Loan Health Over Time</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={healthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="date" 
                stroke="#666"
                fontSize={12}
              />
              <YAxis 
                stroke="#666"
                fontSize={12}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="healthFactor" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
                name="Health Factor"
              />
              <Line 
                type="monotone" 
                dataKey="liquidationRisk" 
                stroke="#ef4444" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: '#ef4444', strokeWidth: 2, r: 3 }}
                name="Liquidation Risk %"
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>Health Factor</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-1 bg-red-500 rounded-full"></div>
                <span>Liquidation Risk %</span>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-red-600">
              <AlertTriangle className="w-4 h-4" />
              <span>Risk increases below 1.5</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interest Accrual Trend (Lending) */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <span>Interest Earned (Lending)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={interestData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="date" 
                stroke="#666"
                fontSize={12}
              />
              <YAxis 
                stroke="#666"
                fontSize={12}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area 
                type="monotone" 
                dataKey="earned" 
                stroke="#10b981" 
                fill="#10b981"
                fillOpacity={0.2}
                strokeWidth={3}
                name="Earned ($)"
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Weekly Earnings</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-700 rounded-full"></div>
                <span>APY %</span>
              </div>
            </div>
            <div className="text-green-600 font-medium">
              Total: $1,250.50
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Borrowing Costs */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <DollarSign className="w-5 h-5 text-blue-500" />
            <span>Borrowing Costs</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={borrowingData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="date" 
                stroke="#666"
                fontSize={12}
              />
              <YAxis 
                stroke="#666"
                fontSize={12}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="interest" 
                fill="#3b82f6"
                radius={[4, 4, 0, 0]}
                name="Interest Paid ($)"
              />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Weekly Interest</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-700 rounded-full"></div>
                <span>Interest Rate %</span>
              </div>
            </div>
            <div className="text-blue-600 font-medium">
              Total: $1,108.15
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Portfolio Distribution */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-orange-500" />
            <span>Portfolio Distribution</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* BTC Collateral */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">BTC Collateral</span>
                <span className="text-sm text-gray-600">65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">₿ 2.45 ($105,350)</div>
            </div>

            {/* Stablecoin Borrowed */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Stablecoins Borrowed</span>
                <span className="text-sm text-gray-600">35%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '35%' }}></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">$85,000 USDC</div>
            </div>

            {/* Available Credit */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Available Credit</span>
                <span className="text-sm text-gray-600">Available</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '25%' }}></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">$15,500 remaining</div>
            </div>

            {/* Risk Level */}
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex items-center space-x-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-yellow-600" />
                <span className="text-sm font-medium text-yellow-800">Moderate Risk</span>
              </div>
              <p className="text-xs text-yellow-700">
                Consider adding more collateral or reducing borrowed amount to improve health factor.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}