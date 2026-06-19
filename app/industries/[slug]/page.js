'use client';

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { industriesDataConfig } from '@/industries-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import * as LucideIcons from 'lucide-react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Play, 
  RefreshCw, 
  ShieldAlert, 
  Sparkles, 
  Terminal,
  Activity,
  Cpu,
  Brain,
  Database,
  GitBranch,
  Zap,
  Users,
  Landmark,
  Shield,
  HeartPulse,
  ShoppingCart,
  Navigation,
  Lock
} from 'lucide-react';

export default function IndustryDetailPage({ params }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const [industry, setIndustry] = useState(null);
  const [mounted, setMounted] = useState(false);

  // Simulator states
  const [simStatus, setSimStatus] = useState('idle'); // idle | running | done
  const [simLogs, setSimLogs] = useState([]);

  // 1. FinTech: transaction status
  const [transLogs, setTransLogs] = useState([
    { id: 'TX-874', amount: '$12,450', status: 'unverified' },
    { id: 'TX-875', amount: '$150,000', status: 'unverified' }
  ]);

  // 2. Autonomous: sensor states
  const [sensorNoise, setSensorNoise] = useState(false);
  const [calibrationScore, setCalibrationScore] = useState(99.8); // %

  // 3. Healthcare: record logs
  const [patientRecords, setPatientRecords] = useState([
    { id: 1, name: "Alice Smith", condition: "Hypertension", pii: "unencrypted" },
    { id: 2, name: "Bob Jones", condition: "Diabetes", pii: "unencrypted" }
  ]);

  // 4. Retail/SaaS: load levels
  const [saasUsers, setSaasUsers] = useState(1000);
  const [saasLatency, setSaasLatency] = useState(48); // ms
  const [saasOptimized, setSaasOptimized] = useState(false);

  // 5. Telecom: packet diagnostics
  const [packetLoss, setPacketLoss] = useState(0.01); // %
  const [jitter, setJitter] = useState(1.2); // ms

  // 6. Defense: security zone status
  const [securityBreached, setSecurityBreached] = useState(false);

  useEffect(() => {
    setMounted(true);
    const item = industriesDataConfig.find(ind => ind.slug === slug);
    setIndustry(item || null);
  }, [slug]);

  if (!mounted) return null;

  if (!industry) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center pt-24">
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Sector Not Found</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
          The industry sector you are looking for does not exist in our catalog.
        </p>
        <Link href="/industries">
          <Button className="bg-gradient-to-r from-sky-600 to-indigo-650 text-white font-bold rounded-xl px-6 py-3">
            <ArrowLeft className="mr-2" size={16} /> Back to Industries
          </Button>
        </Link>
      </div>
    );
  }

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'landmark': return Landmark;
      case 'navigation': return Navigation;
      case 'heart-pulse': return HeartPulse;
      case 'shopping-cart': return ShoppingCart;
      case 'cpu': return Cpu;
      case 'shield-alert': return ShieldAlert;
      default: return LucideIcons.Box;
    }
  };

  const IconComponent = getIcon(industry.icon);

  // Run general simulator trigger
  const runSimulator = () => {
    setSimStatus('running');
    setSimLogs(['Initializing industry verification...', 'Attaching telemetry hooks...']);

    if (industry.simulator.type === 'fintech-trans') {
      setTimeout(() => {
        setSimLogs(prev => [...prev, 'Parsing ISO 20022 message tokens...', 'Updating Temenos T24 ledger balances...']);
      }, 800);
      setTimeout(() => {
        setTransLogs(prev => prev.map(log => ({ ...log, status: 'verified' })));
        setSimLogs(prev => [...prev, 'SWIFT signatures validated successfully.', 'Clearing Status: COMPLETE']);
        setSimStatus('done');
      }, 2000);
    } else if (industry.simulator.type === 'autonomous-sensor') {
      setTimeout(() => {
        setSimLogs(prev => [...prev, 'Reading camera and LIDAR frames...', 'Testing neural boundary accuracy...']);
      }, 800);
      setTimeout(() => {
        setSensorNoise(true);
        setCalibrationScore(64.2);
        setSimLogs(prev => [...prev, 'WARNING: LIDAR noise values exceeded safety limits.', 'Calibrate sensors to restore bounds.']);
        setSimStatus('done');
      }, 2000);
    } else if (industry.simulator.type === 'healthcare-hipaa') {
      setTimeout(() => {
        setSimLogs(prev => [...prev, 'Scanning record variables for PII data leaks...', 'Executing encryption compliance check...']);
      }, 800);
      setTimeout(() => {
        setPatientRecords(prev => prev.map(rec => ({
          ...rec,
          name: rec.name.split(' ').map((n, i) => i === 0 ? n : '[REDACTED]').join(' '),
          pii: 'encrypted'
        })));
        setSimLogs(prev => [...prev, 'PII fields scrubbed and encrypted successfully.', 'Status: HIPAA COMPLIANT']);
        setSimStatus('done');
      }, 2000);
    } else if (industry.simulator.type === 'saas-load') {
      setTimeout(() => {
        setSimLogs(prev => [...prev, 'Spawning concurrent transaction loads...', 'Monitoring catalog database queries...']);
      }, 800);
      setTimeout(() => {
        let base = saasOptimized ? 32 : 120;
        let factor = saasUsers / 4500;
        let finalLat = Math.round(base + (saasOptimized ? factor * 5 : factor * 220));
        setSaasLatency(finalLat);
        if (!saasOptimized && finalLat > 350) {
          setSimLogs(prev => [...prev, 'CRITICAL: Thread blockages on DB transaction lock.', 'Autoscaling bottleneck flagged.']);
        } else {
          setSimLogs(prev => [...prev, 'Catalog performance stable.', 'Performance status: EXCELLENT']);
        }
        setSimStatus('done');
      }, 2000);
    } else if (industry.simulator.type === 'telecom-packet') {
      setTimeout(() => {
        setSimLogs(prev => [...prev, 'Measuring signaling handshake intervals...', 'Checking IoT device routing...']);
      }, 800);
      setTimeout(() => {
        setPacketLoss(8.4);
        setJitter(42.5);
        setSimLogs(prev => [...prev, 'WARNING: Jitter spike detected on node SG-3.', 'Packet loss rate exceeds SLA limit.']);
        setSimStatus('done');
      }, 2000);
    } else if (industry.simulator.type === 'defense-isolation') {
      setTimeout(() => {
        setSimLogs(prev => [...prev, 'Simulating zero-trust credentials breach...', 'Testing air-gapped secure zone leaks...']);
      }, 800);
      setTimeout(() => {
        setSimLogs(prev => [...prev, 'INTRUSION BLOCKED: Unauthorized boundary crossover denied.', 'Security isolation metrics: 100% compliant.']);
        setSimStatus('done');
      }, 2000);
    }
  };

  const resetSimulator = () => {
    setSimStatus('idle');
    setSimLogs([]);
    if (industry.simulator.type === 'fintech-trans') {
      setTransLogs([
        { id: 'TX-874', amount: '$12,450', status: 'unverified' },
        { id: 'TX-875', amount: '$150,000', status: 'unverified' }
      ]);
    } else if (industry.simulator.type === 'autonomous-sensor') {
      setSensorNoise(false);
      setCalibrationScore(99.8);
    } else if (industry.simulator.type === 'healthcare-hipaa') {
      setPatientRecords([
        { id: 1, name: "Alice Smith", condition: "Hypertension", pii: "unencrypted" },
        { id: 2, name: "Bob Jones", condition: "Diabetes", pii: "unencrypted" }
      ]);
    } else if (industry.simulator.type === 'saas-load') {
      setSaasUsers(1000);
      setSaasLatency(48);
      setSaasOptimized(false);
    } else if (industry.simulator.type === 'telecom-packet') {
      setPacketLoss(0.01);
      setJitter(1.2);
    }
  };

  // Autonomous calibration trigger
  const runAutonomousCalibration = () => {
    setSimLogs(prev => [...prev, 'Recalibrating sensor frame inputs...', 'Filtering radar noise variables...']);
    setTimeout(() => {
      setSensorNoise(false);
      setCalibrationScore(99.5);
      setSimLogs(prev => [...prev, 'Sensor calibration successfully restored.', 'LIDAR and camera bounds within safe limits.']);
    }, 1500);
  };

  // Telecom node optimizer
  const runTelecomOptimization = () => {
    setSimLogs(prev => [...prev, 'Rerouting signal packets through optimized gateways...', 'Clearing jitter buffer queue...']);
    setTimeout(() => {
      setPacketLoss(0.01);
      setJitter(1.4);
      setSimLogs(prev => [...prev, 'Optimal routing established.', 'Packet loss and latency metrics returned to normal.']);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* Hero Header */}
      <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/40 border-b border-slate-200/50 dark:border-slate-800/30 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/industries" className="inline-flex items-center text-xs font-bold text-sky-600 dark:text-sky-400 hover:underline mb-6 group">
            <ArrowLeft className="mr-1.5 group-hover:-translate-x-1 transition-transform" size={14} /> Back to All Industries
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-indigo-500/10 border border-indigo-400/20 text-indigo-700 dark:text-indigo-400 px-4 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full">
                Enterprise Sector Validation
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight leading-tight">
                {industry.title}
              </h1>
              <p className="text-slate-605 dark:text-slate-350 text-base leading-relaxed">
                Specialized quality assurance frameworks built to handle the compliance, load scaling, and security controls of {industry.title}.
              </p>
            </div>
            
            <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-sky-500 to-indigo-650 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/10 text-white">
              <IconComponent size={36} />
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 max-w-4xl">
            {industry.stats.map((stat, idx) => (
              <div key={idx} className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl p-5 border border-slate-200/60 dark:border-slate-800/80 shadow-md">
                <div className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">{stat.value}</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-455 font-bold uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Descriptive Documentation */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">Validation Profile</h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed whitespace-pre-wrap">
                {industry.longDesc}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">Key Quality & Compliance Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {industry.vulnerabilityFocus.map((cap, idx) => (
                  <div key={idx} className="flex items-start bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800/60">
                    <CheckCircle2 size={16} className="text-indigo-650 dark:text-indigo-400 mr-2.5 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-slate-700 dark:text-slate-350 font-semibold">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Custom Interactive Simulator */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <Card className="border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden rounded-2xl bg-gradient-to-b from-white to-slate-50/40 dark:from-slate-900 dark:to-slate-950/40">
                <CardHeader className="bg-slate-100/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 p-6 flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-md font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <Sparkles size={16} className="text-indigo-500 animate-pulse" />
                      <span>{industry.simulator.title}</span>
                    </CardTitle>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                      Interactive Industry Sandbox Simulator
                    </p>
                  </div>
                  <Button variant="outline" size="sm" onClick={resetSimulator} className="text-xs border-slate-300 dark:border-slate-750">
                    Reset
                  </Button>
                </CardHeader>
                
                <CardContent className="p-6 space-y-6">
                  <p className="text-xs text-slate-655 dark:text-slate-400 leading-relaxed">
                    {industry.simulator.description}
                  </p>

                  {/* Dynamic simulator rendering */}
                  {industry.simulator.type === 'fintech-trans' && (
                    <div className="space-y-4">
                      <div className="border border-slate-200 dark:border-slate-850 rounded-xl p-4 bg-slate-900 text-slate-100 font-mono text-xs space-y-3">
                        <div className="text-slate-450">// Core banking transaction logs</div>
                        {transLogs.map((log, i) => (
                          <div key={i} className="flex justify-between border-b border-slate-800 pb-1.5">
                            <span>ID: {log.id} | Amount: {log.amount}</span>
                            <span className={`font-bold ${log.status === 'verified' ? 'text-emerald-400' : 'text-yellow-400'}`}>
                              {log.status.toUpperCase()}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      <Button onClick={runSimulator} disabled={simStatus === 'running'} className="w-full bg-sky-600 text-white font-bold rounded-xl text-xs py-2 hover:bg-sky-700">
                        {simStatus === 'running' ? 'Clearing SWIFT transaction...' : 'Verify SWIFT Settlement'}
                      </Button>
                    </div>
                  )}

                  {industry.simulator.type === 'autonomous-sensor' && (
                    <div className="space-y-4">
                      <div className="border border-slate-200 dark:border-slate-850 rounded-xl p-4 bg-slate-900 text-slate-100 font-mono text-xs space-y-3">
                        <div className="flex justify-between items-center">
                          <span>Object Detection Status:</span>
                          <span className={`font-bold ${sensorNoise ? 'text-red-400 animate-pulse' : 'text-emerald-400'}`}>
                            {sensorNoise ? 'WARNING: TARGET JITTER' : 'CALIBRATED'}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Calibration Score:</span>
                          <span className={`font-bold ${calibrationScore < 80 ? 'text-red-400' : 'text-emerald-400'}`}>
                            {calibrationScore.toFixed(1)}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-500 ${calibrationScore < 80 ? 'bg-red-500' : 'bg-emerald-500'}`} 
                            style={{ width: `${calibrationScore}%` }}
                          />
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button onClick={runSimulator} disabled={sensorNoise || simStatus === 'running'} className="w-1/2 bg-sky-600 text-white font-bold rounded-xl text-xs py-2 hover:bg-sky-700">
                          Inject Sensor Noise
                        </Button>
                        <Button onClick={runAutonomousCalibration} disabled={!sensorNoise} className="w-1/2 bg-emerald-600 text-white font-bold rounded-xl text-xs py-2 hover:bg-emerald-700">
                          Calibrate Sensors
                        </Button>
                      </div>
                    </div>
                  )}

                  {industry.simulator.type === 'healthcare-hipaa' && (
                    <div className="space-y-4">
                      <div className="border border-slate-200 dark:border-slate-850 rounded-xl p-4 bg-slate-900 text-slate-100 font-mono text-xs space-y-3">
                        <div className="text-slate-450">// Patient Diagnostics entries</div>
                        {patientRecords.map(rec => (
                          <div key={rec.id} className="flex justify-between border-b border-slate-800 pb-1.5">
                            <span>{rec.name} ({rec.condition})</span>
                            <span className={`font-bold text-[10px] ${rec.pii === 'encrypted' ? 'text-emerald-400' : 'text-red-400'}`}>
                              {rec.pii.toUpperCase()}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      <Button onClick={runSimulator} disabled={simStatus === 'running'} className="w-full bg-sky-600 text-white font-bold rounded-xl text-xs py-2 hover:bg-sky-700">
                        {simStatus === 'running' ? 'Scrubbing records...' : 'Scan for HIPAA & PII Violations'}
                      </Button>
                    </div>
                  )}

                  {industry.simulator.type === 'saas-load' && (
                    <div className="space-y-4">
                      <div className="space-y-3 bg-slate-50 dark:bg-slate-900/40 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                        <div className="flex justify-between items-center text-xs">
                          <span>Simulated User Load:</span>
                          <span className="font-bold text-sky-600 dark:text-sky-400">{saasUsers.toLocaleString()} concurrents</span>
                        </div>
                        <input 
                          type="range" 
                          min="1000" 
                          max="100000" 
                          step="5000"
                          value={saasUsers}
                          onChange={(e) => {
                            setSaasUsers(Number(e.target.value));
                            setSimStatus('idle');
                          }}
                          className="w-full accent-sky-500"
                        />
                        
                        <div className="flex justify-between items-center text-xs pt-2">
                          <span>Cart Checkout Latency:</span>
                          <span className={`font-bold ${saasLatency > 300 ? 'text-red-400 animate-pulse' : 'text-emerald-400'}`}>
                            {saasLatency} ms
                          </span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button 
                          onClick={() => {
                            setSaasOptimized(!saasOptimized);
                            setSimStatus('idle');
                          }} 
                          className={`w-full font-bold rounded-xl text-xs py-2 ${saasOptimized ? 'bg-emerald-600 text-white' : 'bg-slate-600 text-white hover:bg-slate-700'}`}
                        >
                          {saasOptimized ? 'Optimizations: ENABLED' : 'Enable Query Cache Optimization'}
                        </Button>
                      </div>
                      
                      <Button onClick={runSimulator} disabled={simStatus === 'running'} className="w-full bg-sky-600 text-white font-bold rounded-xl text-xs py-2 hover:bg-sky-700">
                        Inject Performance Load
                      </Button>
                    </div>
                  )}

                  {industry.simulator.type === 'telecom-packet' && (
                    <div className="space-y-4">
                      <div className="border border-slate-200 dark:border-slate-850 rounded-xl p-4 bg-slate-900 text-slate-100 font-mono text-xs space-y-3">
                        <div className="flex justify-between items-center">
                          <span>Packet Loss Rate:</span>
                          <span className={`font-bold ${packetLoss > 2 ? 'text-red-400 animate-pulse' : 'text-emerald-400'}`}>
                            {packetLoss}%
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Connection Jitter:</span>
                          <span className={`font-bold ${jitter > 10 ? 'text-red-400' : 'text-emerald-400'}`}>
                            {jitter.toFixed(1)} ms
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button onClick={runSimulator} disabled={packetLoss > 2 || simStatus === 'running'} className="w-1/2 bg-sky-600 text-white font-bold rounded-xl text-xs py-2 hover:bg-sky-700">
                          Simulate Network Congestion
                        </Button>
                        <Button onClick={runTelecomOptimization} disabled={packetLoss <= 2} className="w-1/2 bg-emerald-600 text-white font-bold rounded-xl text-xs py-2 hover:bg-emerald-700">
                          Optimize Routing Nodes
                        </Button>
                      </div>
                    </div>
                  )}

                  {industry.simulator.type === 'defense-isolation' && (
                    <div className="space-y-4">
                      <div className="border border-slate-200 dark:border-slate-850 rounded-xl p-4 bg-slate-900 text-slate-100 font-mono text-xs h-[100px] overflow-y-auto space-y-2">
                        <div className="flex items-center gap-2">
                          <Lock size={12} className="text-sky-400" />
                          <span>Secure Isolation Boundaries: ACTIVE</span>
                        </div>
                        <div className="text-slate-450">// Probing zero-trust network zones...</div>
                      </div>
                      
                      <Button onClick={runSimulator} disabled={simStatus === 'running'} className="w-full bg-sky-600 text-white font-bold rounded-xl text-xs py-2 hover:bg-sky-700">
                        {simStatus === 'running' ? 'Executing exploit sweeps...' : 'Run Intrusion Pen Test'}
                      </Button>
                    </div>
                  )}

                  {/* Simulator Logs Terminal */}
                  {simLogs.length > 0 && (
                    <div className="border-t border-slate-200 dark:border-slate-850 pt-4 space-y-2">
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                        <Terminal size={12} />
                        <span>Execution Logs</span>
                      </div>
                      <div className="bg-slate-950 text-slate-400 font-mono text-[9px] p-3 rounded-lg space-y-1 max-h-[100px] overflow-y-auto border border-slate-800">
                        {simLogs.map((log, idx) => (
                          <div key={idx} className="flex gap-1.5">
                            <span className="text-sky-500 font-bold">&gt;</span>
                            <span>{log}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-600 via-indigo-650 to-indigo-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-6 tracking-tight">
            Design a Dedicated Validation Strategy for {industry.title}
          </h2>
          <p className="text-sky-100 max-w-2xl mx-auto mb-8 text-sm leading-relaxed">
            Ensure your high-risk regulated environments, database operations, or autonomous neural layers conform to strict security benchmarks and latency parameters.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-indigo-700 hover:bg-slate-100 shadow-xl text-sm font-bold px-8 py-5 rounded-xl">
              Contact Industry Specialist
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
      </section>
      
    </div>
  );
}
