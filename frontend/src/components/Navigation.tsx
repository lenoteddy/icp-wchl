import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Landmark, History, LogOut, User, Menu, X } from "lucide-react";
import Logo from "@/images/logo.webp";

interface NavigationProps {
	activeSection: string;
	onSectionChange: (section: string) => void;
}

/**
 * Main navigation sidebar component for the dashboard.
 *
 * Features:
 * - Responsive design with mobile hamburger menu
 * - User information display with connected wallet type
 * - Navigation between dashboard sections
 * - Logout functionality
 * - Visual indicators for active section
 */
export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
	const { logout, principal, walletType, isLoading } = useAuth();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const handleLogout = async () => {
		await logout();
		window.location.href = "/onboarding";
	};

	// const navigationItems = [
	// 	{ id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
	// 	{ id: "borrow", label: "Borrow", icon: TrendingDown },
	// 	{ id: "lend", label: "Lend", icon: TrendingUp },
	// 	{ id: "liquidate", label: "Liquidate", icon: Zap },
	// 	{ id: "transactions", label: "Transactions", icon: History },
	// ];

	const navigationItems = [
		{ id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
		{ id: "transaction", label: "Transaction", icon: Landmark },
		{ id: "history", label: "History", icon: History },
	];

	return (
		<>
			{/* Mobile menu button */}
			<div className="lg:hidden fixed top-4 left-4 z-50">
				<Button variant="outline" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="bg-white/90 backdrop-blur-sm">
					{isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
				</Button>
			</div>

			{/* Sidebar */}
			<div
				className={`
        fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white transform transition-transform duration-300 ease-in-out z-40
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
			>
				<div className="flex flex-col h-full">
					{/* Header */}
					<div className="p-6 border-b border-gray-700">
						<div className="flex items-center space-x-3 mb-4">
							{/* <div className="relative">
								<div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur opacity-20" />
								<div className="relative bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-full">
									<Bitcoin className="w-5 h-5 text-white" />
								</div>
							</div> */}
							<img src={Logo} alt="BitLend ICP Logo" className="w-12 rounded-2xl" />
							<div>
								<h1 className="text-lg font-bold text-white">BitLend ICP</h1>
								<p className="text-xs text-gray-400">enable bitcoin access to all blockchain ecosystem</p>
							</div>
						</div>

						{/* User info */}
						<div className="flex items-center space-x-2 p-3 bg-gray-800/50 rounded-lg">
							<User className="w-4 h-4 text-gray-400" />
							<div className="flex-1 min-w-0">
								<p className="text-xs text-gray-400">Connected via {walletType === "plug" ? "Plug" : "II"}</p>
								<p className="text-xs font-mono text-white truncate">
									{principal?.slice(0, 8)}...{principal?.slice(-4)}
								</p>
							</div>
						</div>
					</div>

					{/* Navigation */}
					<nav className="flex-1 p-4">
						<ul className="space-y-2">
							{navigationItems.map((item) => {
								const Icon = item.icon;
								const isActive = activeSection === item.id;

								return (
									<li key={item.id}>
										<button
											onClick={() => {
												onSectionChange(item.id);
												setIsMobileMenuOpen(false);
											}}
											className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
												isActive ? "bg-orange-600 text-white shadow-lg" : "text-gray-300 hover:bg-gray-700 hover:text-white"
											}`}
										>
											<Icon className="w-5 h-5" />
											<span className="font-medium">{item.label}</span>
										</button>
									</li>
								);
							})}
						</ul>
					</nav>

					{/* Footer */}
					<div className="p-4 border-t border-gray-700">
						<Button onClick={handleLogout} disabled={isLoading} variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-700">
							<LogOut className="w-4 h-4 mr-3" />
							Logout
						</Button>
					</div>
				</div>
			</div>

			{/* Mobile overlay */}
			{isMobileMenuOpen && <div className="lg:hidden fixed inset-0 bg-black/50 z-30" onClick={() => setIsMobileMenuOpen(false)} />}
		</>
	);
}
