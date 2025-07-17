# 🚀 ICP Web3 Community Hub & Lending Platform

> **WCHL Hackathon Project** - A decentralized community hub and lending platform built on the Internet Computer Protocol (ICP) featuring cryptocurrency wallet integration, modern React frontend, and Rust-based backend canister.

## 🎯 Project Overview

This project demonstrates a complete Web3ing platform built on ICP, showcasing:
- **DeFi Lending**: Collateralized borrowing with ckBTC and ckUSDT
- **Wallet Integration**: Seamless Plug wallet and Internet Identity integration
- **Modern UI/UX**: React 19 with Tailwind CSS and Radix UI components
- **Real-time Data**: Live cryptocurrency balances and market data

## 🏆 WCHL Hackathon Features

### Core Functionality
- **Collateralized Lending**: Users can deposit ckBTC as collateral and borrow ckUSDT
- **Dynamic Interest Rates**: Risk-based lending with automatic liquidation protection
- **Real-time Analytics**: Live charts and portfolio tracking

### Technical Innovation
- **ICP Native**: Built entirely on Internet Computer Protocol
- **Zero Gas Fees**: Users dont pay transaction fees
- **Instant Finality**: Sub-second transaction confirmation
- **Decentralized Identity**: Internet Identity for secure authentication
- **Cross-Chain Integration**: Bitcoin and USDT support via ckBTC/ckUSDT

## 🛠️ Tech Stack

### Frontend
- **React 19 Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Radix UI** - Accessible component primitives
- **Three.js** -3visualizations and animations
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **React Hook Form** - Form management with validation

### Backend
- **Rust** - High-performance canister development
- **Candid** - Interface definition language
- **ic-cdk** - Internet Computer development kit
- **ic-stable-structures** - Persistent data storage
- **Serde** - Serialization/deserialization

### Blockchain Integration
- **Internet Computer Protocol** - Decentralized cloud platform
- **Plug Wallet** - ICP-native wallet integration
- **Internet Identity** - Decentralized authentication
- **ckBTC/ckUSDT** - Cross-chain token support

## 📋 Prerequisites

### Required Software
- [IC SDK (dfx)](https://internetcomputer.org/docs/building-apps/getting-started/install) - Internet Computer development framework
- [Node.js18https://nodejs.org/) - JavaScript runtime
- [Rust and Cargo](https://rustup.rs/) - Systems programming language
-Git](https://git-scm.com/) - Version control

### Optional Tools
- [VS Code](https://code.visualstudio.com/) - Recommended IDE
- [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) - Containerized development
- [Docker](https://docs.docker.com/engine/install/) - For Dev Containers

## 🚀 Quick Start

### 1. Clone and Setup
```bash
# Clone the repository
git clone https://github.com/lenoteddy/icp-wchl.git
cd icp-wchl
```

### 2. Start Local Development Environment
```bash
# Start the local IC replica
dfx start --background --clean

# In a new terminal, pull dependencies and deploy locally
dfx deps pull && dfx deps init && dfx deps deploy
```

### 3. Deploy Canisters
```bash
# Deploy all canisters locally
dfx deploy

# The frontend will be available at the URL shown in the output
# Typically: http://localhost:4943nisterId=...
```

## 🏗️ Project Structure

```
├── backend/                    # Rust backend canister
│   ├── lib.rs                 # Main canister logic
│   ├── ckbtc.rs              # ckBTC integration
│   ├── ckusdt.rs             # ckUSDT integration
│   ├── ledger.rs             # Ledger interface
│   └── Cargo.toml            # Rust dependencies
├── frontend/                  # React frontend
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── blocks/        # Page sections
│   │   │   ├── ui/           # Base UI components
│   │   │   └── ...           # Feature components
│   │   ├── pages/            # Application pages
│   │   ├── hooks/            # Custom React hooks
│   │   ├── lib/              # Utilities and helpers
│   │   └── types/            # TypeScript type definitions
│   ├── dist/                 # Built frontend assets
│   └── package.json          # Node.js dependencies
├── src/declarations/         # Generated canister interfaces
├── dfx.json                  # DFX configuration
└── README.md                 # This file
```

## 🔧 Configuration

### DFX Configuration
The `dfx.json` file configures:
- **Backend Canister**: Rust-based lending logic
- **Frontend Canister**: Asset hosting for React app
- **Internet Identity**: Authentication service
- **Build Commands**: Custom build process for Rust canister

## 🧪 Testing

### Backend Testing
```bash
# Run Rust tests
cd backend && cargo test

# Test canister methods
dfx canister call backend get_balances
```

## 🚀 Deployment

### Local Development
```bash
# Deploy to local network
dfx deploy

# Access your application
# Frontend: http://localhost:4943isterId=...
# Backend: http://localhost:4943nisterId=...
```
### Playground Deployment
```bash

# Deploy to playground
dfx deploy --playground

# Your app will be live at the provided URLs
```

### Mainnet Deployment
```bash
# Ensure you have cycles
dfx identity get-principal
dfx cycles convert --amount1--e8s

# Deploy to mainnet
dfx deploy --network ic

# Your app will be live at the provided URLs
```

## 🔐 Security Considerations

### Best Practices Implemented
- **Input Validation**: All user inputs are validated
- **Access Control**: Principal-based authentication
- **Secure Storage**: Stable structures for persistent data
- **Error Handling**: Comprehensive error management
- **Rate Limiting**: Protection against spam attacks

### Security Notes
⚠️ **Important**: This is a hackathon project and may not implement all production security measures. For production use, review the [ICP Security Best Practices](https://internetcomputer.org/docs/building-apps/security/overview).

## 🤝 Contributing

### Development Guidelines
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3mit** your changes (`git commit -m 'Add amazing feature`)4sh** to the branch (`git push origin feature/amazing-feature`)
5n** a Pull Request

### Code Style
- **Rust**: Follow Rust formatting with `cargo fmt`
- **TypeScript**: Use Prettier and ESLint
- **React**: Follow React best practices and hooks patterns

## 📚 Documentation

### Additional Resources
- [ICP Documentation](https://internetcomputer.org/docs)
- [DFX User Guide](https://internetcomputer.org/docs/building-apps/developer-tools/dfx)
-Candid Reference](https://internetcomputer.org/docs/building-apps/backend/candid)
- [React 19cumentation](https://react.dev)

### API Reference
- **Backend Canister**: See `backend/backend.did` for Candid interface
- **Frontend Components**: See `frontend/src/components/` for component documentation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **WCHL Hackathon** organizers and mentors
- **DFINITY Foundation** for the Internet Computer Protocol
- **ICP Community** for support and resources
- **Open Source Contributors** whose libraries made this possible

---

**Built with ❤️ for the WCHL Hackathon**

*Ready to revolutionize DeFi on ICP! 🚀*
