"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef, useId } from "react";
import { motion } from "motion/react";
import { Shield, Eye, GitBranch, Bitcoin, Users, Banknote } from "lucide-react";

export function ThreeColumnBentoGrid() {
  return (
    <div className="mx-auto my-20 w-full max-w-7xl px-4 md:px-8">
      <h2 className="text-bold text-[var(--color-deep-charcoal)] font-[var(--font-heading)] text-xl font-bold tracking-tight md:text-4xl">
        Security & Transparency
      </h2>
      <p className="mt-4 max-w-lg text-sm text-[var(--color-text-secondary)] font-[var(--font-body)]">
        Built on Internet Computer's secure infrastructure with complete on-chain transparency.
      </p>
      <div className="mt-20 grid grid-flow-col grid-cols-1 grid-rows-6 gap-2 md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2">
        <Card className="row-span-2">
          <CardContent>
            <CardTitle>Decentralized Protocol</CardTitle>
            <CardDescription>
              No single point of failure or central authority
            </CardDescription>
          </CardContent>
          <CardSkeletonBody>
            <DecentralizedProtocolSkeleton />
          </CardSkeletonBody>
        </Card>
        <Card className="overflow-hidden">
          <CardContent>
            <CardTitle>Audited Smart Contracts</CardTitle>
            <CardDescription>
              Comprehensive security audits by leading blockchain security firms
            </CardDescription>
          </CardContent>
          <CardSkeletonBody>
            <AuditedContractsSkeleton />
          </CardSkeletonBody>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Real-Time Monitoring</CardTitle>
            <CardDescription>
              Open-source liquidation monitoring and health factor tracking
            </CardDescription>
          </CardContent>
          <CardSkeletonBody className="">
            <RealTimeMonitoringSkeleton />
          </CardSkeletonBody>
        </Card>
        <Card className="row-span-2">
          <CardContent>
            <CardTitle>Bitcoin Bridge Security</CardTitle>
            <CardDescription>
              Secure cross-chain Bitcoin integration with multiple validation layers
            </CardDescription>
          </CardContent>
          <CardSkeletonBody className="h-full max-h-full overflow-hidden">
            <BitcoinBridgeSkeleton />
          </CardSkeletonBody>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Governance</CardTitle>
            <CardDescription>
              Community-driven protocol upgrades and parameter adjustments
            </CardDescription>
          </CardContent>
          <CardSkeletonBody>
            <GovernanceSkeleton />
          </CardSkeletonBody>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Insurance Fund</CardTitle>
            <CardDescription>
              Community-funded insurance pool for additional security layers
            </CardDescription>
          </CardContent>
          <CardSkeletonBody>
            <InsuranceFundSkeleton />
          </CardSkeletonBody>
        </Card>
      </div>
    </div>
  );
}

// Skeletons

const DecentralizedProtocolSkeleton = () => {
  const nodes = [
    { id: 1, x: 50, y: 30, status: "active" },
    { id: 2, x: 20, y: 70, status: "active" },
    { id: 3, x: 80, y: 70, status: "active" },
    { id: 4, x: 35, y: 50, status: "active" },
    { id: 5, x: 65, y: 50, status: "active" },
  ];

  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodes.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 h-full">
      <div className="relative h-full w-full">
        <svg className="h-full w-full">
          {/* Network connections */}
          {nodes.map((node, i) => 
            nodes.slice(i + 1).map((otherNode, j) => (
              <motion.line
                key={`${node.id}-${otherNode.id}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${otherNode.x}%`}
                y2={`${otherNode.y}%`}
                stroke="var(--color-bitcoin-orange)"
                strokeWidth="1"
                opacity={0.3}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: Math.random() }}
              />
            ))
          )}
          
          {/* Nodes */}
          {nodes.map((node, index) => (
            <motion.circle
              key={node.id}
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="6"
              fill={activeNode === index ? "var(--color-bitcoin-orange)" : "var(--color-neutral-gray)"}
              animate={{
                scale: activeNode === index ? [1, 1.2, 1] : 1,
                fill: activeNode === index ? "var(--color-bitcoin-orange)" : "var(--color-neutral-gray)"
              }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </svg>
        
        <div className="absolute bottom-4 left-4 text-xs text-[var(--color-text-secondary)]">
          <GitBranch className="inline h-3 w-3 mr-1" />
          Distributed Network
        </div>
      </div>
    </div>
  );
};

const AuditedContractsSkeleton = () => {
  const audits = [
    { firm: "ChainSecurity", status: "Passed", date: "2024" },
    { firm: "Trail of Bits", status: "Passed", date: "2024" },
    { firm: "OpenZeppelin", status: "Passed", date: "2024" },
  ];

  return (
    <div className="p-6 space-y-3">
      {audits.map((audit, index) => (
        <motion.div
          key={audit.firm}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="flex items-center justify-between p-3 rounded-lg bg-[var(--color-muted)] border border-[var(--color-border)]"
        >
          <div className="flex items-center space-x-3">
            <Shield className="h-4 w-4 text-[var(--color-bitcoin-orange)]" />
            <div>
              <div className="text-sm font-medium text-[var(--color-deep-charcoal)]">{audit.firm}</div>
              <div className="text-xs text-[var(--color-text-secondary)]">{audit.date}</div>
            </div>
          </div>
          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
            {audit.status}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

const RealTimeMonitoringSkeleton = () => {
  const [healthFactor, setHealthFactor] = useState(1.45);

  useEffect(() => {
    const interval = setInterval(() => {
      setHealthFactor(prev => {
        const change = (Math.random() - 0.5) * 0.1;
        return Math.max(1.1, Math.min(2.0, prev + change));
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center space-x-2">
        <Eye className="h-4 w-4 text-[var(--color-bitcoin-orange)]" />
        <span className="text-sm font-medium text-[var(--color-deep-charcoal)]">Live Monitoring</span>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-xs text-[var(--color-text-secondary)]">Health Factor</span>
          <motion.span 
            className="text-sm font-bold text-[var(--color-bitcoin-orange)]"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {healthFactor.toFixed(2)}
          </motion.span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div 
            className="bg-[var(--color-bitcoin-orange)] h-2 rounded-full"
            animate={{ width: `${Math.min(100, (healthFactor - 1) * 100)}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
      
      <div className="text-xs text-[var(--color-text-secondary)] opacity-75">
        Real-time liquidation tracking
      </div>
    </div>
  );
};

const BitcoinBridgeSkeleton = () => {
  const [bridgeStatus, setBridgeStatus] = useState("secure");

  return (
    <div className="h-full w-full p-6">
      <div className="relative h-full flex flex-col items-center justify-center">
        <div className="flex items-center space-x-8 mb-8">
          <div className="flex flex-col items-center">
            <Bitcoin className="h-8 w-8 text-[var(--color-bitcoin-orange)]" />
            <span className="text-xs text-[var(--color-text-secondary)] mt-1">Bitcoin</span>
          </div>
          
          <div className="flex flex-col items-center">
            <motion.div
              className="w-16 h-1 bg-[var(--color-bitcoin-orange)] rounded"
              animate={{ 
                scaleX: [1, 0.8, 1],
                opacity: [1, 0.6, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs text-[var(--color-text-secondary)] mt-1">Bridge</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">IC</span>
            </div>
            <span className="text-xs text-[var(--color-text-secondary)] mt-1">Internet Computer</span>
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-xs text-[var(--color-text-secondary)] mb-2">Multi-layer validation</div>
          <div className="flex space-x-1">
            {[1, 2, 3].map((layer) => (
              <motion.div
                key={layer}
                className="w-2 h-2 bg-[var(--color-bitcoin-orange)] rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: layer * 0.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const GovernanceSkeleton = () => {
  const [votes, setVotes] = useState({ for: 67, against: 33 });

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center space-x-2">
        <Users className="h-4 w-4 text-[var(--color-bitcoin-orange)]" />
        <span className="text-sm font-medium text-[var(--color-deep-charcoal)]">Active Proposal</span>
      </div>
      
      <div className="space-y-2">
        <div className="text-xs text-[var(--color-text-secondary)]">Protocol Fee Adjustment</div>
        
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span>For: {votes.for}%</span>
            <span>Against: {votes.against}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-[var(--color-bitcoin-orange)] h-2 rounded-full"
              style={{ width: `${votes.for}%` }}
            />
          </div>
        </div>
      </div>
      
      <div className="text-xs text-[var(--color-text-secondary)] opacity-75">
        Community governance in action
      </div>
    </div>
  );
};

const InsuranceFundSkeleton = () => {
  const [fundValue, setFundValue] = useState(2.4);

  useEffect(() => {
    const interval = setInterval(() => {
      setFundValue(prev => prev + (Math.random() * 0.01));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center space-x-2">
        <Banknote className="h-4 w-4 text-[var(--color-bitcoin-orange)]" />
        <span className="text-sm font-medium text-[var(--color-deep-charcoal)]">Insurance Pool</span>
      </div>
      
      <div className="space-y-2">
        <div className="text-center">
          <motion.div 
            className="text-2xl font-bold text-[var(--color-bitcoin-orange)]"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ₿{fundValue.toFixed(2)}
          </motion.div>
          <div className="text-xs text-[var(--color-text-secondary)]">Total Fund Value</div>
        </div>
        
        <div className="flex justify-between text-xs text-[var(--color-text-secondary)]">
          <span>Contributors: 1,247</span>
          <span>Coverage: 98.5%</span>
        </div>
      </div>
    </div>
  );
};

// Card structure
const CardSkeletonBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("", className)}>{children}</div>;
};

const CardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("p-6", className)}>{children}</div>;
};

const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "font-[var(--font-heading)] text-sm font-medium tracking-tight text-[var(--color-deep-charcoal)]",
        className
      )}
    >
      {children}
    </h3>
  );
};

const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "mt-2 max-w-xs font-[var(--font-body)] text-sm font-normal tracking-tight text-[var(--color-text-secondary)]",
        className
      )}
    >
      {children}
    </h3>
  );
};

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      whileHover="animate"
      className={cn(
        "group isolate flex flex-col overflow-hidden rounded-2xl bg-[var(--color-pure-white)] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] border border-[var(--color-border)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export function GridPattern() {
  const columns = 20;
  const rows = 5;
  return (
    <div className="flex flex-shrink-0 scale-110 flex-wrap items-center justify-center gap-x-px gap-y-px bg-gray-100 dark:bg-neutral-900">
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: columns }).map((_, col) => {
          const index = row * columns + col;
          return (
            <div
              key={`${col}-${row}-grid-pattern`}
              className={`flex h-10 w-10 flex-shrink-0 rounded-[2px] ${
                index % 2 === 0
                  ? "bg-gray-50 dark:bg-neutral-950"
                  : "bg-gray-50 shadow-[0px_0px_1px_3px_rgba(255,255,255,1)_inset] dark:bg-neutral-950 dark:shadow-[0px_0px_1px_3px_rgba(0,0,0,1)_inset]"
              }`}
            />
          );
        })
      )}
    </div>
  );
}