'use client';

import { useState, useMemo } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function LumpsumCalculatorPage() {
  const [investmentAmount, setInvestmentAmount] = useState<number>(100000);
  const [annualReturn, setAnnualReturn] = useState<number>(12);
  const [duration, setDuration] = useState<number>(10);

  // Compound Interest Formula: A = P * (1 + r)^n
  // Where: P = principal, r = annual rate, n = number of years
  const results = useMemo(() => {
    const annualRate = annualReturn / 100;
    const futureValue = investmentAmount * Math.pow(1 + annualRate, duration);
    const totalEarnings = futureValue - investmentAmount;

    // Generate year-wise data for chart
    const chartData = [];
    for (let year = 0; year <= duration; year++) {
      const corpus = investmentAmount * Math.pow(1 + annualRate, year);
      chartData.push({
        year,
        corpus: Math.round(corpus),
      });
    }

    return {
      investedAmount: Math.round(investmentAmount),
      totalEarnings: Math.round(totalEarnings),
      finalCorpus: Math.round(futureValue),
      chartData,
    };
  }, [investmentAmount, annualReturn, duration]);

  const formatCurrency = (amount: number) => {
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  return (
    <>
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-12 pt-6 lg:px-6 lg:pt-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            Lumpsum Calculator
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Calculate the future value of your one-time lumpsum investment
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50/50 p-4 text-sm text-amber-900">
          <p className="font-medium">Disclaimer:</p>
          <p className="mt-1">
            This calculator is for educational purposes only. I am not a SEBI
            registered investment advisor.
          </p>
        </div>

        {/* Input Form */}
        <div className="mb-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-lg font-semibold text-slate-900">
            Investment Details
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <label
                htmlFor="investment-amount"
                className="block text-sm font-medium text-slate-700"
              >
                One-time Investment Amount (₹)
              </label>
              <input
                id="investment-amount"
                type="number"
                min="1000"
                step="1000"
                value={investmentAmount}
                onChange={(e) =>
                  setInvestmentAmount(Number(e.target.value) || 0)
                }
                className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-900 focus:border-brand focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand/40"
              />
            </div>
            <div>
              <label
                htmlFor="annual-return"
                className="block text-sm font-medium text-slate-700"
              >
                Expected Annual Return (%)
              </label>
              <input
                id="annual-return"
                type="number"
                min="1"
                max="30"
                step="0.1"
                value={annualReturn}
                onChange={(e) => setAnnualReturn(Number(e.target.value) || 0)}
                className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-900 focus:border-brand focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand/40"
              />
            </div>
            <div>
              <label
                htmlFor="duration"
                className="block text-sm font-medium text-slate-700"
              >
                Investment Duration (Years)
              </label>
              <input
                id="duration"
                type="number"
                min="1"
                max="50"
                step="1"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value) || 0)}
                className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-900 focus:border-brand focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand/40"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-8 rounded-2xl border border-brand/20 bg-gradient-to-br from-brand/5 to-brand/10 p-6 shadow-sm">
          <h2 className="mb-6 text-lg font-semibold text-slate-900">
            Investment Results
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-white p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Invested Amount
              </p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">
                {formatCurrency(results.investedAmount)}
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Total Earnings
              </p>
              <p className="mt-2 text-2xl font-semibold text-green-600">
                {formatCurrency(results.totalEarnings)}
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Final Corpus Value
              </p>
              <p className="mt-2 text-2xl font-semibold text-brand">
                {formatCurrency(results.finalCorpus)}
              </p>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-lg font-semibold text-slate-900">
            Year-wise Growth
          </h2>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={results.chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis
                  dataKey="year"
                  stroke="#64748b"
                  style={{ fontSize: '12px' }}
                />
                <YAxis
                  stroke="#64748b"
                  style={{ fontSize: '12px' }}
                  tickFormatter={(value) => {
                    if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
                    if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
                    if (value >= 1000) return `₹${(value / 1000).toFixed(0)}K`;
                    return `₹${value}`;
                  }}
                />
                <Tooltip
                  formatter={(value: any) => formatCurrency(Number(value))}
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '12px',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="corpus"
                  stroke="#0052cc"
                  strokeWidth={2}
                  dot={{ fill: '#0052cc', r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
