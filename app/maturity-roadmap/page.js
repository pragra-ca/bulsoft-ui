'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Play, 
  RefreshCw, 
  Sparkles, 
  Terminal,
  Activity,
  Cpu,
  Database,
  GitBranch,
  Shield,
  Zap,
  Users,
  Layers,
  FileCheck
} from 'lucide-react';

export default function MaturityRoadmapPage() {
  // Assessment questions states
  const [choices, setChoices] = useState({
    automationLevel: 'manual', // manual | partial | automated
    pipelineGates: 'none', // none | staging | full
    govFramework: 'none', // none | local | standard
    aiAudit: 'no' // no | planning | yes
  });
  
  const [assessmentResult, setAssessmentResult] = useState(null);
  
  // Pipeline animation states
  const [activeNode, setActiveNode] = useState(null); // null | commit | security | regression | telemetry | deploy
  const [nodeStatuses, setNodeStatuses] = useState({
    commit: 'idle', // idle | running | done
    security: 'idle',
    regression: 'idle',
    telemetry: 'idle',
    deploy: 'idle'
  });

  const maturityLevels = [
    {
      level: 1,
      name: "Initial / Ad-Hoc",
      color: "from-rose-500/10 to-rose-600/10 border-rose-500/30 text-rose-700 dark:text-rose-400",
      iconColor: "text-rose-500",
      description: "Testing is primarily manual, executed reactive to release cycles. Locators frequently break, regression times span days/weeks, and quality telemetry is virtually non-existent.",
      metrics: "Manual Ratio: > 80% | Regression: 5-10 Days | CD Gates: None"
    },
    {
      level: 2,
      name: "Managed / Structured",
      color: "from-amber-500/10 to-amber-600/10 border-amber-500/30 text-amber-700 dark:text-amber-400",
      iconColor: "text-amber-500",
      description: "Basic automated regression test cases exist for core actions. Structured test plans are documented, and release schedules are managed with manual approvals.",
      metrics: "Manual Ratio: 50% - 80% | Regression: 2-3 Days | CD Gates: Basic Staging"
    },
    {
      level: 3,
      name: "Automated & Integrated",
      color: "from-sky-500/10 to-sky-600/10 border-sky-500/30 text-sky-700 dark:text-sky-400",
      iconColor: "text-sky-500",
      description: "CI/CD execution gates run parallel UI and API test suites automatically. Testing is integrated directly into pull request cycles, dramatically decreasing release delays.",
      metrics: "Manual Ratio: < 30% | Regression: 2-6 Hours | CD Gates: Automated Pull Requests"
    },
    {
      level: 4,
      name: "Quantitative & Monitored",
      color: "from-indigo-500/10 to-indigo-600/10 border-indigo-500/30 text-indigo-700 dark:text-indigo-400",
      iconColor: "text-indigo-500",
      description: "Continuous accuracy and dataset monitoring pipelines are integrated. Performance stress metrics are systematically recorded to proactively flag concept drift and resource bottlenecks.",
      metrics: "Model Drift Check: Live telemetry | Latency Audits: Continuous | Security scans: Integrated"
    },
    {
      level: 5,
      name: "Autonomous & Self-Healing",
      color: "from-emerald-500/10 to-emerald-600/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-400",
      iconColor: "text-emerald-500",
      description: "AI-assisted self-healing test automation locators automatically adjust to DOM changes. ML drift detection pipelines automatically orchestrate container rollbacks.",
      metrics: "Healing Engine: Active | Release Promo: Auto-promoted | Maintenance Effort: < 5%"
    }
  ];

  // Calculate customized roadmap recommendation
  const handleAssess = () => {
    let score = 0;
    
    if (choices.automationLevel === 'automated') score += 30;
    if (choices.automationLevel === 'partial') score += 15;
    
    if (choices.pipelineGates === 'full') score += 30;
    if (choices.pipelineGates === 'staging') score += 15;
    
    if (choices.govFramework === 'standard') score += 20;
    if (choices.govFramework === 'local') score += 10;
    
    if (choices.aiAudit === 'yes') score += 20;
    if (choices.aiAudit === 'planning') score += 10;

    let targetLevel = 1;
    let name = "Level 1: Initial / Ad-Hoc";
    if (score >= 25) { targetLevel = 2; name = "Level 2: Managed / Structured"; }
    if (score >= 50) { targetLevel = 3; name = "Level 3: Automated & Integrated"; }
    if (score >= 75) { targetLevel = 4; name = "Level 4: Quantitative & Monitored"; }
    if (score >= 90) { targetLevel = 5; name = "Level 5: Autonomous & Self-Healing"; }

    const recommendationList = [];
    if (choices.automationLevel !== 'automated') {
      recommendationList.push("Scaffold a parallelized test automation suite integrated with cross-browser grids to cut manual regression effort.");
    }
    if (choices.pipelineGates !== 'full') {
      recommendationList.push("Inject automated quality gate blocks inside your GitLab/GitHub PR pipelines to block code promotion on test failure.");
    }
    if (choices.govFramework !== 'standard') {
      recommendationList.push("Formulate a centralized QA Playbook aligned with international ISO 27001, SOC 2, and central banking clearing standards.");
    }
    if (choices.aiAudit === 'no') {
      recommendationList.push("Deploy semantic validation models to stress test your LLM endpoints against hallucination biases and prompt injections.");
    }

    setAssessmentResult({
      score,
      level: name,
      levelIndex: targetLevel,
      recommendations: recommendationList
    });
  };

  // Run pipeline scan animation
  const startPipelineScan = () => {
    setNodeStatuses({
      commit: 'running',
      security: 'idle',
      regression: 'idle',
      telemetry: 'idle',
      deploy: 'idle'
    });
    setActiveNode('commit');

    // Node 1: Commit checks
    setTimeout(() => {
      setNodeStatuses(prev => ({ ...prev, commit: 'done', security: 'running' }));
      setActiveNode('security');
    }, 1500);

    // Node 2: Security checks
    setTimeout(() => {
      setNodeStatuses(prev => ({ ...prev, security: 'done', regression: 'running' }));
      setActiveNode('regression');
    }, 3000);

    // Node 3: Regression checks
    setTimeout(() => {
      setNodeStatuses(prev => ({ ...prev, regression: 'done', telemetry: 'running' }));
      setActiveNode('telemetry');
    }, 4500);

    // Node 4: Telemetry/Drift checks
    setTimeout(() => {
      setNodeStatuses(prev => ({ ...prev, telemetry: 'done', deploy: 'running' }));
      setActiveNode('deploy');
    }, 6000);

    // Node 5: Deploy promo
    setTimeout(() => {
      setNodeStatuses(prev => ({ ...prev, deploy: 'done' }));
      setActiveNode(null);
    }, 7500);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* Hero Header */}
      <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
        <div className="absolute top-10 right-20 w-64 h-64 bg-sky-500/10 rounded-full filter blur-[100px] animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-sky-500/10 border border-sky-400/30 text-sky-400 px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-full">
            Governance & QA Framework
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            QA Maturity & 
            <span className="block mt-2 bg-gradient-to-r from-sky-400 via-indigo-300 to-sky-300 bg-clip-text text-transparent">
              Governance Roadmap
            </span>
          </h1>
          <p className="text-base text-slate-350 max-w-3xl mx-auto leading-relaxed">
            Transition your quality operations from manual validation checking to continuous, autonomous self-healing execution gates. Assess your maturity, run automated diagnostics, and configure a compliant roadmap.
          </p>
        </div>
      </section>

      {/* CMMI Maturity Stages Grid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 relative border-b border-slate-200/50 dark:border-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-indigo-600 dark:text-indigo-400 font-extrabold text-xs uppercase tracking-widest bg-indigo-50 dark:bg-indigo-950/50 px-4 py-1.5 rounded-full">Maturity Timeline</span>
            <h2 className="text-3xl font-extrabold mt-4 mb-4 tracking-tight">Quality Maturity Framework</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Our structured quality timeline lists five key stages to elevate automation coverage, security compliance, and ML model guardrails.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {maturityLevels.map((lvl) => (
              <Card 
                key={lvl.level}
                className={`border bg-gradient-to-b shadow-md hover:shadow-xl transition-all duration-300 ${lvl.color}`}
              >
                <CardHeader className="pb-3 flex flex-row justify-between items-center">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Stage 0{lvl.level}</div>
                  <div className={`w-8 h-8 rounded-lg bg-white/20 dark:bg-black/20 flex items-center justify-center font-bold ${lvl.iconColor}`}>
                    L{lvl.level}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardTitle className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
                    {lvl.name}
                  </CardTitle>
                  <p className="text-xs text-slate-600 dark:text-slate-405 leading-relaxed min-h-[110px]">
                    {lvl.description}
                  </p>
                  <div className="pt-3 border-t border-slate-300/40 dark:border-slate-800/40 text-[10px] font-bold text-slate-500 tracking-wider">
                    {lvl.metrics}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Quality Gating Flowchart Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/30 relative border-b border-slate-200/50 dark:border-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sky-600 dark:text-sky-400 font-extrabold text-xs uppercase tracking-widest bg-sky-50 dark:bg-sky-950/50 px-4 py-1.5 rounded-full">Interactive Pipeline Flowchart</span>
            <h2 className="text-3xl font-extrabold mt-4 mb-4 tracking-tight">CI/CD Quality Gate Pipeline</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Simulate a high-compliance code release lifecycle. Observe how verification loops test security vulnerability targets, parallel regression suites, and live telemetry.
            </p>
          </div>

          {/* Flowchart graphics */}
          <div className="bg-white dark:bg-slate-950 rounded-3xl p-10 shadow-xl border border-slate-200 dark:border-slate-800">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative">
              
              {/* Connector lines for desktop */}
              <div className="hidden lg:block absolute top-[52px] left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-sky-450 via-indigo-500 to-emerald-500 -z-10"></div>
              
              {/* Node 1: Code Commit */}
              <div className={`w-[170px] bg-slate-50 dark:bg-slate-900 rounded-2xl p-5 border text-center transition-all duration-300 ${
                activeNode === 'commit' ? 'ring-2 ring-sky-500 scale-105 shadow-md border-sky-400/40' : 'border-slate-200 dark:border-slate-800'
              }`}>
                <div className={`w-10 h-10 mx-auto rounded-xl flex items-center justify-center mb-3 ${
                  nodeStatuses.commit === 'done' ? 'bg-emerald-500 text-white' : 
                  nodeStatuses.commit === 'running' ? 'bg-sky-500 text-white animate-spin' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                }`}>
                  {nodeStatuses.commit === 'done' ? <CheckCircle2 size={20} /> : 
                   nodeStatuses.commit === 'running' ? <RefreshCw size={20} /> : <GitBranch size={20} />}
                </div>
                <div className="text-xs font-bold mb-1.5 text-slate-900 dark:text-white">01. Code Commit</div>
                <div className="text-[9px] text-slate-450 leading-normal">
                  {nodeStatuses.commit === 'done' ? 'Merged & Compiled' : 
                   nodeStatuses.commit === 'running' ? 'Compiling sources...' : 'Idle'}
                </div>
              </div>

              {/* Node 2: Security */}
              <div className={`w-[170px] bg-slate-50 dark:bg-slate-900 rounded-2xl p-5 border text-center transition-all duration-300 ${
                activeNode === 'security' ? 'ring-2 ring-indigo-500 scale-105 shadow-md border-indigo-400/40' : 'border-slate-200 dark:border-slate-800'
              }`}>
                <div className={`w-10 h-10 mx-auto rounded-xl flex items-center justify-center mb-3 ${
                  nodeStatuses.security === 'done' ? 'bg-emerald-500 text-white' : 
                  nodeStatuses.security === 'running' ? 'bg-sky-500 text-white animate-pulse' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                }`}>
                  {nodeStatuses.security === 'done' ? <CheckCircle2 size={20} /> : 
                   nodeStatuses.security === 'running' ? <Shield size={20} className="animate-bounce" /> : <Shield size={20} />}
                </div>
                <div className="text-xs font-bold mb-1.5 text-slate-900 dark:text-white">02. Security Gating</div>
                <div className="text-[9px] text-slate-450 leading-normal">
                  {nodeStatuses.security === 'done' ? 'OWASP Scanned: Safe' : 
                   nodeStatuses.security === 'running' ? 'Scanning flaws...' : 'Idle'}
                </div>
              </div>

              {/* Node 3: Regression */}
              <div className={`w-[170px] bg-slate-50 dark:bg-slate-900 rounded-2xl p-5 border text-center transition-all duration-300 ${
                activeNode === 'regression' ? 'ring-2 ring-indigo-500 scale-105 shadow-md border-indigo-400/40' : 'border-slate-200 dark:border-slate-800'
              }`}>
                <div className={`w-10 h-10 mx-auto rounded-xl flex items-center justify-center mb-3 ${
                  nodeStatuses.regression === 'done' ? 'bg-emerald-500 text-white' : 
                  nodeStatuses.regression === 'running' ? 'bg-sky-500 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                }`}>
                  {nodeStatuses.regression === 'done' ? <CheckCircle2 size={20} /> : 
                   nodeStatuses.regression === 'running' ? <Zap size={20} className="animate-bounce text-amber-300" /> : <Zap size={20} />}
                </div>
                <div className="text-xs font-bold mb-1.5 text-slate-900 dark:text-white">03. Automated Test</div>
                <div className="text-[9px] text-slate-450 leading-normal">
                  {nodeStatuses.regression === 'done' ? 'UI/API Test: Passed' : 
                   nodeStatuses.regression === 'running' ? 'Running parallel suites...' : 'Idle'}
                </div>
              </div>

              {/* Node 4: Telemetry */}
              <div className={`w-[170px] bg-slate-50 dark:bg-slate-900 rounded-2xl p-5 border text-center transition-all duration-300 ${
                activeNode === 'telemetry' ? 'ring-2 ring-indigo-500 scale-105 shadow-md border-indigo-400/40' : 'border-slate-200 dark:border-slate-800'
              }`}>
                <div className={`w-10 h-10 mx-auto rounded-xl flex items-center justify-center mb-3 ${
                  nodeStatuses.telemetry === 'done' ? 'bg-emerald-500 text-white' : 
                  nodeStatuses.telemetry === 'running' ? 'bg-sky-500 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                }`}>
                  {nodeStatuses.telemetry === 'done' ? <CheckCircle2 size={20} /> : 
                   nodeStatuses.telemetry === 'running' ? <Activity size={20} className="animate-pulse" /> : <Activity size={20} />}
                </div>
                <div className="text-xs font-bold mb-1.5 text-slate-900 dark:text-white">04. Telemetry Gate</div>
                <div className="text-[9px] text-slate-450 leading-normal">
                  {nodeStatuses.telemetry === 'done' ? 'ML Drift Safe' : 
                   nodeStatuses.telemetry === 'running' ? 'Auditing model drift...' : 'Idle'}
                </div>
              </div>

              {/* Node 5: Promotion */}
              <div className={`w-[170px] bg-slate-50 dark:bg-slate-900 rounded-2xl p-5 border text-center transition-all duration-300 ${
                activeNode === 'deploy' ? 'ring-2 ring-emerald-500 scale-105 shadow-md border-emerald-400/40' : 'border-slate-200 dark:border-slate-800'
              }`}>
                <div className={`w-10 h-10 mx-auto rounded-xl flex items-center justify-center mb-3 ${
                  nodeStatuses.deploy === 'done' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 
                  nodeStatuses.deploy === 'running' ? 'bg-sky-500 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                }`}>
                  {nodeStatuses.deploy === 'done' ? <CheckCircle2 size={20} /> : 
                   nodeStatuses.deploy === 'running' ? <Play size={20} className="animate-ping" /> : <Play size={20} />}
                </div>
                <div className="text-xs font-bold mb-1.5 text-slate-900 dark:text-white">05. Auto Promotion</div>
                <div className="text-[9px] text-slate-450 leading-normal">
                  {nodeStatuses.deploy === 'done' ? 'Deploys Successful' : 
                   nodeStatuses.deploy === 'running' ? 'Promoting containers...' : 'Idle'}
                </div>
              </div>

            </div>

            <div className="flex justify-center mt-12">
              <Button 
                onClick={startPipelineScan}
                disabled={Object.values(nodeStatuses).some(s => s === 'running')}
                className="bg-gradient-to-r from-sky-600 to-indigo-650 text-white font-extrabold px-10 py-5 rounded-xl shadow-lg shadow-indigo-500/10 hover:scale-105 active:scale-95 transition-all text-xs"
              >
                <Play className="mr-2" size={14} /> Simulate Release Run
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Maturity Assessor Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Assessor Form */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-indigo-600 dark:text-indigo-400 font-extrabold text-xs uppercase tracking-widest bg-indigo-50 dark:bg-indigo-950/50 px-4 py-1.5 rounded-full">Roadmap Generator</span>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4 tracking-tight">QA Posture Assessor</h2>
              <p className="text-sm text-slate-600 dark:text-slate-450 leading-relaxed">
                Submit details on your current automated test coverage, deployment gates, and safety compliance policies to calculate your QA posture and output a tailored governance roadmap.
              </p>
            </div>

            <div className="space-y-4 bg-slate-50 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              
              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Zap size={14} />
                  <span>Regression Test Automation Level</span>
                </label>
                <select 
                  value={choices.automationLevel}
                  onChange={(e) => setChoices(prev => ({ ...prev, automationLevel: e.target.value }))}
                  className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs rounded-xl p-3 font-semibold shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500"
                >
                  <option value="manual">Almost exclusively manual execution</option>
                  <option value="partial">Partial scripts (some APIs automation, UI is manual)</option>
                  <option value="automated">Fully automated parallel UI/API execution cycles</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Layers size={14} />
                  <span>Deployment Gate Gating Checkpoints</span>
                </label>
                <select 
                  value={choices.pipelineGates}
                  onChange={(e) => setChoices(prev => ({ ...prev, pipelineGates: e.target.value }))}
                  className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs rounded-xl p-3 font-semibold shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500"
                >
                  <option value="none">No code compile block gates (ad-hoc deploys)</option>
                  <option value="staging">Verification checkpoints in staging before production</option>
                  <option value="full">Continuous pull request gates running dynamic suites</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <FileCheck size={14} />
                  <span>Centralized QA Governance Frameworks</span>
                </label>
                <select 
                  value={choices.govFramework}
                  onChange={(e) => setChoices(prev => ({ ...prev, govFramework: e.target.value }))}
                  className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs rounded-xl p-3 font-semibold shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500"
                >
                  <option value="none">No shared standard playbooks or compliance checks</option>
                  <option value="local">Local tracking templates with ad-hoc reporting</option>
                  <option value="standard">Unified compliance mapping (PCI-DSS / Central Bank / NESA)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Cpu size={14} />
                  <span>Active AI Agent or LLM Validation</span>
                </label>
                <select 
                  value={choices.aiAudit}
                  onChange={(e) => setChoices(prev => ({ ...prev, aiAudit: e.target.value }))}
                  className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs rounded-xl p-3 font-semibold shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500"
                >
                  <option value="no">We do not deploy LLM models or AI agents in production</option>
                  <option value="planning">LLMs deployed/planned, validation is not automated</option>
                  <option value="yes">LLMs fully stress tested (hallucination & injection monitors)</option>
                </select>
              </div>

            </div>

            <Button onClick={handleAssess} className="w-full bg-gradient-to-r from-sky-600 to-indigo-650 text-white font-extrabold py-4 rounded-xl shadow-md text-xs hover:from-sky-700 hover:to-indigo-700 transition-all">
              Generate Customized Roadmap
            </Button>
          </div>

          {/* Right Side: Output Diagnostic Results */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {assessmentResult ? (
              <Card className="border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden rounded-2xl bg-gradient-to-b from-white to-slate-50/40 dark:from-slate-900 dark:to-slate-950/40">
                <CardHeader className="bg-slate-100/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 p-6">
                  <CardTitle className="text-md font-bold text-slate-900 dark:text-white flex items-center justify-between">
                    <span>Audit Diagnostic Results</span>
                    <span className="text-xs bg-indigo-500/10 border border-indigo-400/20 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full uppercase tracking-wider font-bold">
                      Score: {assessmentResult.score}/100
                    </span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-6 space-y-6">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Calculated CMMI Level:</div>
                    <div className="text-xl font-extrabold text-sky-600 dark:text-sky-400 tracking-tight">
                      {assessmentResult.level}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Custom Improvement Actions:</div>
                    
                    {assessmentResult.recommendations.length === 0 ? (
                      <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-250 dark:border-emerald-800/30 rounded-xl flex items-start">
                        <CheckCircle2 size={16} className="text-emerald-500 mr-2.5 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-slate-700 dark:text-slate-350">
                          Excellent! Your QA Governance operations are already fully optimized at industry excellence standards. Maintain continuous check sweeps.
                        </span>
                      </div>
                    ) : (
                      assessmentResult.recommendations.map((rec, idx) => (
                        <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/60 rounded-xl flex items-start">
                          <CheckCircle2 size={16} className="text-indigo-600 dark:text-indigo-400 mr-2.5 mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-slate-700 dark:text-slate-350 font-medium">
                            {rec}
                          </span>
                        </div>
                      ))
                    )}
                  </div>

                  <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="text-xs font-bold text-white">Full-Scale Governance Audits</div>
                      <div className="text-[10px] text-slate-400">Download maturity templates & schedule full TCoE setups.</div>
                    </div>
                    <Link href="/contact">
                      <Button size="sm" className="bg-sky-600 text-white hover:bg-sky-700 text-[10px] font-bold rounded-lg px-4 py-2">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-10 text-center text-slate-500 dark:text-slate-400 space-y-4">
                <HelpCircle className="w-12 h-12 mx-auto text-slate-300 dark:text-slate-750" />
                <div className="text-sm font-bold">Maturity Assessor Ready</div>
                <p className="text-xs max-w-sm mx-auto leading-relaxed">
                  Complete the questionnaire on the left to calculate your score and construct a tailored improvement roadmap.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-600 via-indigo-650 to-indigo-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-6 tracking-tight">
            Elevate Your QA Operations to Level 5
          </h2>
          <p className="text-base text-sky-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Partner with Bulsoft to establish a Test Center of Excellence. Deploy self-healing automated suites, model drift logs checks, and regulatory compliance validation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-indigo-700 hover:bg-slate-100 shadow-xl text-sm font-bold px-10 py-5 rounded-xl">
                Book TCoE Governance Audit
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
            <Link href="/testing">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-sm font-semibold px-10 py-5 rounded-xl">
                Explore QA Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
