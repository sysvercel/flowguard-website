'use client'
import Link from 'next/link'

const zones = [
  { type: 'Kitchen', multiplier: '1.00', mid: '$15,400' },
  { type: 'Bathroom / Toilet', multiplier: '0.90', mid: '$13,860' },
  { type: 'Laundry', multiplier: '1.10', mid: '$16,940' },
  { type: 'Water Heater', multiplier: '1.20', mid: '$18,480' },
  { type: 'HVAC / Utility', multiplier: '0.85', mid: '$13,090' },
  { type: 'Main Riser', multiplier: '1.80', mid: '$27,720' },
  { type: 'Mechanical Room', multiplier: '2.10', mid: '$32,340' },
  { type: 'Boiler Room', multiplier: '2.75', mid: '$42,350' },
]

const mitigationCurve = [
  { range: '0 – 2 minutes', pct: '98%', label: 'Near-total mitigation' },
  { range: '2 – 10 minutes', pct: '90%', label: 'Strong mitigation' },
  { range: '10 – 30 minutes', pct: '70%', label: 'Moderate mitigation' },
  { range: '30 – 60 minutes', pct: '50%', label: 'Partial mitigation' },
  { range: '60+ minutes', pct: '25%', label: 'Limited mitigation' },
]

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="text-sm text-[#29ABE2] hover:underline mb-8 inline-block">← Back to FlowGuard</Link>

        <h1 className="text-4xl font-bold text-[#1B2F4E] mb-4">Financial Impact Methodology</h1>
        <p className="text-lg text-slate-600 mb-2">Version 1.0</p>
        <p className="text-slate-500 mb-12">
          This document explains how FlowGuard calculates the estimated financial impact of each water leak incident. These are modeled estimates, not claim determinations.
        </p>

        {/* Public Anchor */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1B2F4E] mb-4">Public Data Anchor</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            The baseline severity for a generic water damage event is anchored to public insurance data:
          </p>
          <div className="bg-[#F8FAFC] border-l-4 border-[#29ABE2] rounded-r-lg p-6 mb-4">
            <p className="text-[#1B2F4E] font-bold text-lg mb-1">$15,400</p>
            <p className="text-slate-500 text-sm">Generic water damage and freezing severity midpoint</p>
            <p className="text-slate-400 text-xs mt-2">Source: Insurance Information Institute / ISO, weighted average severity, 2019–2023</p>
          </div>
          <p className="text-slate-600 leading-relaxed">
            This anchor is adjusted by zone type, property characteristics, and response timing to produce a property-specific estimate.
            The range around the midpoint uses conservative factors: low = 0.60 × mid, high = 1.60 × mid.
          </p>
        </section>

        {/* Zone Multipliers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1B2F4E] mb-4">Zone Risk Multipliers</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Different zones carry different risk profiles. A boiler room leak has significantly higher damage potential than a bathroom leak due to water volume, system pressure, and secondary spread risk.
          </p>
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-[#F8FAFC]">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase">Zone</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase">Multiplier</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase">Midpoint</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {zones.map(z => (
                  <tr key={z.type}>
                    <td className="px-4 py-3 text-sm text-[#1B2F4E] font-medium">{z.type}</td>
                    <td className="px-4 py-3 text-sm text-slate-600">{z.multiplier}×</td>
                    <td className="px-4 py-3 text-sm text-slate-600 font-medium">{z.mid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Additional Multipliers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1B2F4E] mb-4">Property & Structural Multipliers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-[#1B2F4E] text-sm mb-3">Floor Level</h3>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between"><span>Ground / 1st</span><span className="font-medium">1.00×</span></div>
                <div className="flex justify-between"><span>2nd floor</span><span className="font-medium">1.08×</span></div>
                <div className="flex justify-between"><span>3rd floor</span><span className="font-medium">1.15×</span></div>
                <div className="flex justify-between"><span>4th+</span><span className="font-medium">1.22×</span></div>
              </div>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-[#1B2F4E] text-sm mb-3">Units Below</h3>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between"><span>0 units</span><span className="font-medium">1.00×</span></div>
                <div className="flex justify-between"><span>1 unit</span><span className="font-medium">1.18×</span></div>
                <div className="flex justify-between"><span>2 units</span><span className="font-medium">1.35×</span></div>
                <div className="flex justify-between"><span>3+ units</span><span className="font-medium">1.50×</span></div>
              </div>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-[#1B2F4E] text-sm mb-3">Property Era</h3>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between"><span>2010+</span><span className="font-medium">0.95×</span></div>
                <div className="flex justify-between"><span>2000–2009</span><span className="font-medium">1.00×</span></div>
                <div className="flex justify-between"><span>1990–1999</span><span className="font-medium">1.08×</span></div>
                <div className="flex justify-between"><span>Pre-1990</span><span className="font-medium">1.18×</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mitigation Curve */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1B2F4E] mb-4">Response Time Mitigation Curve</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Faster containment reduces damage. The mitigation percentage represents the estimated portion of baseline damage that was prevented by the response.
          </p>
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-[#F8FAFC]">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase">Containment Time</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase">Mitigation</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase">Assessment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mitigationCurve.map(c => (
                  <tr key={c.range}>
                    <td className="px-4 py-3 text-sm text-[#1B2F4E] font-medium">{c.range}</td>
                    <td className="px-4 py-3 text-sm text-slate-600 font-medium">{c.pct}</td>
                    <td className="px-4 py-3 text-sm text-slate-500">{c.label}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Confidence Model */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1B2F4E] mb-4">Confidence Scoring</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Each estimate receives a confidence score based on the completeness of incident documentation.
          </p>
          <div className="border border-slate-200 rounded-lg p-5 mb-4">
            <div className="space-y-2 text-sm">
              {[
                ['Photo evidence present', '20 pts'],
                ['Closeout completed', '20 pts'],
                ['Spread status recorded', '15 pts'],
                ['Affected units recorded', '15 pts'],
                ['Remediation category recorded', '10 pts'],
                ['Vendor involvement recorded', '10 pts'],
                ['Damage extent recorded', '10 pts'],
              ].map(([label, pts]) => (
                <div key={label as string} className="flex justify-between text-slate-600">
                  <span>{label}</span>
                  <span className="font-medium text-[#1B2F4E]">{pts}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { level: 'High', range: '85–100', color: 'border-green-400 bg-green-50' },
              { level: 'Medium', range: '60–84', color: 'border-amber-400 bg-amber-50' },
              { level: 'Low', range: 'Below 60', color: 'border-slate-300 bg-slate-50' },
            ].map(c => (
              <div key={c.level} className={`border-l-4 rounded-r-lg p-4 ${c.color}`}>
                <p className="font-bold text-[#1B2F4E] text-sm">{c.level}</p>
                <p className="text-slate-500 text-xs">{c.range} points</p>
              </div>
            ))}
          </div>
        </section>

        {/* Versioning */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1B2F4E] mb-4">Versioning</h2>
          <p className="text-slate-600 leading-relaxed">
            All multipliers, baselines, and curves are versioned and stored in the database. Each incident report records the methodology version used at the time of calculation.
            As FlowGuard accumulates local incident data and broker claim feedback, the model will be calibrated to reflect DFW-specific patterns.
          </p>
        </section>

        {/* Disclaimer */}
        <section className="border-t border-slate-200 pt-8">
          <p className="text-slate-400 text-xs leading-relaxed italic">
            This is a modeled estimate based on public insurance severity data, zone risk assumptions, response timing, and documented incident evidence. It is not a claim determination, damage appraisal, or guarantee of avoided loss. Actual damages vary based on factors outside the scope of this model including water volume, duration of exposure, building materials, tenant contents, and insurance coverage terms.
          </p>
        </section>
      </div>
    </div>
  )
}
