'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ROICalculator() {
  const [units, setUnits] = useState(150)
  const [claimCost, setClaimCost] = useState(25000)
  const [claimsPerYear, setClaimsPerYear] = useState(2)
  const [tier, setTier] = useState('protect')

  const capex = tier === 'monitor' ? 100 : tier === 'protect' ? 250 : 389
  const monthly = tier === 'monitor' ? 4 : tier === 'protect' ? 6 : 10
  const totalCapex = units * capex
  const annualMonthly = units * monthly * 12
  const year1Cost = totalCapex + annualMonthly
  const annualMonthlyOngoing = units * monthly * 12
  const section179Savings = Math.round(totalCapex * 0.25)
  const annualExposure = claimCost * claimsPerYear
  const damageReduction = tier === 'monitor' ? 0.40 : tier === 'protect' ? 0.65 : 0.80
  const annualSavings = Math.round(annualExposure * damageReduction)
  const threeYearROI = Math.round((annualSavings * 3) - year1Cost - (annualMonthlyOngoing * 2) + section179Savings)
  const breakEvenMonths = Math.max(1, Math.ceil(year1Cost / (annualSavings / 12)))
  const insuranceSavings = Math.round(units * 400 * 0.08)

  const fmt = (n: number) => {
    const abs = Math.abs(n)
    const str = abs >= 1000 ? `$${abs.toLocaleString()}` : `$${abs}`
    return n < 0 ? `-${str}` : str
  }

  const isPositive = threeYearROI > 0

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT — Inputs */}
        <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-8">
          <h2 className="text-xl font-bold text-[#1B2F4E] mb-8">Tell us about your property</h2>

          {/* Units slider */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-slate-700">Number of units</label>
              <span className="text-sm font-bold text-[#29ABE2]">{units} units</span>
            </div>
            <input
              type="range" min={50} max={500} step={10}
              value={units}
              onChange={e => setUnits(Number(e.target.value))}
              className="w-full accent-[#29ABE2]"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>50</span><span>500</span>
            </div>
          </div>

          {/* Claims per year */}
          <div className="mb-8">
            <label className="text-sm font-medium text-slate-700 block mb-3">Water events per year</label>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map(n => (
                <button
                  key={n}
                  onClick={() => setClaimsPerYear(n)}
                  className={`py-2 rounded-lg text-sm font-medium border transition ${
                    claimsPerYear === n
                      ? 'bg-[#29ABE2] text-white border-[#29ABE2]'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-[#29ABE2]'
                  }`}
                >
                  {n === 6 ? '6+' : n}
                </button>
              ))}
            </div>
          </div>

          {/* Average claim cost */}
          <div className="mb-8">
            <label className="text-sm font-medium text-slate-700 block mb-3">Average damage cost per event</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: '$10,000', value: 10000 },
                { label: '$25,000', value: 25000 },
                { label: '$50,000', value: 50000 },
                { label: '$100,000+', value: 100000 },
              ].map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setClaimCost(opt.value)}
                  className={`py-2 rounded-lg text-sm font-medium border transition ${
                    claimCost === opt.value
                      ? 'bg-[#29ABE2] text-white border-[#29ABE2]'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-[#29ABE2]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Package tier */}
          <div className="mb-2">
            <label className="text-sm font-medium text-slate-700 block mb-3">FlowGuard package</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: 'Monitor', value: 'monitor' },
                { label: 'Protect', value: 'protect' },
                { label: 'Respond', value: 'respond' },
              ].map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setTier(opt.value)}
                  className={`py-2 rounded-lg text-sm font-medium border transition relative ${
                    tier === opt.value
                      ? 'bg-[#29ABE2] text-white border-[#29ABE2]'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-[#29ABE2]'
                  }`}
                >
                  {opt.label}
                  {opt.value === 'protect' && (
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#1B2F4E] text-white text-[9px] px-1.5 py-0.5 rounded-full whitespace-nowrap">
                      Popular
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Results */}
        <div className="flex flex-col gap-4">

          {/* Main ROI card */}
          <motion.div
            key={`${units}-${claimCost}-${claimsPerYear}-${tier}`}
            initial={{ opacity: 0.8, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className={`rounded-2xl p-8 ${isPositive ? 'bg-[#1B2F4E]' : 'bg-slate-700'}`}
          >
            <p className="text-[#29ABE2] text-sm font-semibold uppercase tracking-wider mb-2">3-Year Net ROI</p>
            <p className={`text-5xl font-bold mb-2 ${isPositive ? 'text-white' : 'text-slate-300'}`}>
              {fmt(threeYearROI)}
            </p>
            <p className="text-slate-400 text-sm">
              {isPositive
                ? `Break-even in ${breakEvenMonths} months`
                : 'Increase claim cost or frequency to see positive ROI'}
            </p>
          </motion.div>

          {/* Breakdown cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              <p className="text-xs text-slate-500 mb-1">Annual damage exposure</p>
              <p className="text-2xl font-bold text-red-500">{fmt(annualExposure)}</p>
              <p className="text-xs text-slate-400 mt-1">{claimsPerYear} event{claimsPerYear > 1 ? 's' : ''} × {fmt(claimCost)}</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              <p className="text-xs text-slate-500 mb-1">Est. annual savings</p>
              <p className="text-2xl font-bold text-green-500">{fmt(annualSavings)}</p>
              <p className="text-xs text-slate-400 mt-1">{Math.round(damageReduction * 100)}% damage reduction</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              <p className="text-xs text-slate-500 mb-1">Section 179 savings</p>
              <p className="text-2xl font-bold text-[#29ABE2]">{fmt(section179Savings)}</p>
              <p className="text-xs text-slate-400 mt-1">Est. year 1 tax benefit</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              <p className="text-xs text-slate-500 mb-1">Insurance savings est.</p>
              <p className="text-2xl font-bold text-[#29ABE2]">{fmt(insuranceSavings)}</p>
              <p className="text-xs text-slate-400 mt-1">~8% premium reduction</p>
            </div>
          </div>

          {/* Cost breakdown */}
          <div className="bg-white rounded-xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
            <p className="text-sm font-semibold text-[#1B2F4E] mb-4">Your FlowGuard investment</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Hardware ({units} units × ${capex})</span>
                <span className="font-medium">{fmt(totalCapex)}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Section 179 deduction (est.)</span>
                <span className="font-medium">− {fmt(section179Savings)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Monthly service (year 1)</span>
                <span className="font-medium">{fmt(annualMonthly)}</span>
              </div>
              <div className="border-t border-slate-100 pt-2 flex justify-between font-bold text-[#1B2F4E]">
                <span>Real year 1 cost</span>
                <span>{fmt(year1Cost - section179Savings)}</span>
              </div>
              <div className="flex justify-between text-slate-500 text-xs">
                <span>Year 2+ ongoing</span>
                <span>{fmt(annualMonthly)}/year</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            href="/contact"
            className="bg-[#29ABE2] text-white text-center py-4 rounded-xl font-semibold hover:bg-[#1A6FA8] transition text-sm"
          >
            Request a Custom Quote for {units} Units →
          </a>

          <p className="text-xs text-slate-400 text-center">
            Estimates based on industry averages. Consult your accountant for tax advice. Actual results vary by property.
          </p>
        </div>
      </div>
    </div>
  )
}
