'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface CustomerData {
  // Customer Information
  customerName: string
  companyName: string
  country: string
  typeOfBusiness: string
  riskInvolvedSpecificToNDT: string
  otherKeyInsights: string
  // Contact Details
  keyContactPerson: string
  designationRole: string
  emailAddress: string
  phoneWhatsAppNumber: string
  linkedInProfile: string
  websiteUrl: string
  // Threat Exposure & Risk Drivers
  typesOfThreats: string
  pastIncidents: string
  othersRisk: string
  // Purchasing Behaviour
  decisionMakers: string
  procurementMethod: string
  approxBudget: string
  // Service Requirements
  typeOfNDTRequired: string
  serviceIntensity: string
  preferredContractDuration: string
  technologyExpectations: string
  otherKeyDetails: string
  // CMI Insights
  customerBenchmarkingSummary: string
  additionalComments: string
}

const sampleCustomerData: CustomerData[] = [
  {
    customerName: 'James Mwangi',
    companyName: 'KenGen Power Ltd',
    country: 'Kenya',
    typeOfBusiness: 'Power Generation',
    riskInvolvedSpecificToNDT: 'Turbine blade fatigue, boiler tube corrosion',
    otherKeyInsights: '6 geothermal plants, 45+ turbines, avg asset age 12 yrs, ~$2.5M annual inspection budget',
    keyContactPerson: 'James Mwangi',
    designationRole: 'Chief Maintenance Engineer',
    emailAddress: 'j.mwangi@kengen.co.ke',
    phoneWhatsAppNumber: '+254 722 345 678',
    linkedInProfile: 'linkedin.com/in/jamesmwangi-kengen',
    websiteUrl: 'www.kengen.co.ke',
    typesOfThreats: 'Stress corrosion cracking, thermal fatigue',
    pastIncidents: 'Turbine blade failure at Olkaria III (2023)',
    othersRisk: 'High asset failure risk, environmental compliance pressure from NEMA',
    decisionMakers: 'VP Operations, Chief Maintenance Engineer',
    procurementMethod: 'Competitive tender (public procurement)',
    approxBudget: '$800K - $1.2M',
    typeOfNDTRequired: 'UT, RT, ECT',
    serviceIntensity: 'Periodic (quarterly shutdowns)',
    preferredContractDuration: 'Yearly',
    technologyExpectations: 'Digital reports, corrosion trending dashboards',
    otherKeyDetails: 'ASNT Level III certification required, high-security geothermal sites',
    customerBenchmarkingSummary: 'High attractiveness - long-term contract potential',
    additionalComments: 'Priority lead, strong budget, pain point: aging turbine fleet',
  },
  {
    customerName: 'Abebe Tadesse',
    companyName: 'Ethiopian Airlines MRO',
    country: 'Ethiopia',
    typeOfBusiness: 'Aviation MRO',
    riskInvolvedSpecificToNDT: 'Airframe fatigue cracks, engine component wear',
    otherKeyInsights: '120+ aircraft fleet, Africa\'s largest MRO hub, FAA/EASA certified, ~$4M annual NDT spend',
    keyContactPerson: 'Abebe Tadesse',
    designationRole: 'NDT Department Manager',
    emailAddress: 'a.tadesse@ethiopianairlines.com',
    phoneWhatsAppNumber: '+251 911 234 567',
    linkedInProfile: 'linkedin.com/in/abebetadesse-et',
    websiteUrl: 'www.ethiopianairlines.com',
    typesOfThreats: 'Fatigue cracking, corrosion under insulation',
    pastIncidents: 'Wing spar crack detection during C-check (2024)',
    othersRisk: 'Safety risk (aviation safety mandate), regulatory compliance (ECAA/FAA)',
    decisionMakers: 'VP Engineering, NDT Manager, Procurement Director',
    procurementMethod: 'Approved vendor list + RFQ',
    approxBudget: '$1.5M - $2.5M',
    typeOfNDTRequired: 'UT, ECT, MFL, Industrial CT',
    serviceIntensity: 'Continuous (in-house + outsourced)',
    preferredContractDuration: 'Yearly (renewable)',
    technologyExpectations: 'Automated UT systems, digital twin integration',
    otherKeyDetails: 'EN 4179/NAS 410 certification, airside access permits required',
    customerBenchmarkingSummary: 'Very high attractiveness - premium contract value',
    additionalComments: 'Top-tier lead, expanding MRO capacity, needs advanced UT/ECT equipment',
  },
  {
    customerName: 'Grace Kimaro',
    companyName: 'Tanzania Petroleum Dev Corp',
    country: 'Tanzania',
    typeOfBusiness: 'Oil & Gas',
    riskInvolvedSpecificToNDT: 'Pipeline corrosion, weld integrity in subsea pipelines',
    otherKeyInsights: '850km pipeline network, 3 gas processing plants, avg age 8 yrs, ~$1.8M inspection budget',
    keyContactPerson: 'Grace Kimaro',
    designationRole: 'Head of Asset Integrity',
    emailAddress: 'g.kimaro@tpdc.go.tz',
    phoneWhatsAppNumber: '+255 754 876 543',
    linkedInProfile: 'linkedin.com/in/gracekimaro-tpdc',
    websiteUrl: 'www.tpdc.go.tz',
    typesOfThreats: 'Internal/external corrosion, SCC in sour gas lines',
    pastIncidents: 'Pipeline leak at Mtwara segment (2023)',
    othersRisk: 'Environmental risk (coastal ecosystems), asset failure risk in aging pipelines',
    decisionMakers: 'Head of Asset Integrity, CSO, Procurement Committee',
    procurementMethod: 'Public tender (government entity)',
    approxBudget: '$600K - $1M',
    typeOfNDTRequired: 'UT, MFL, RT',
    serviceIntensity: 'Periodic (bi-annual pigging + shutdown)',
    preferredContractDuration: 'Yearly',
    technologyExpectations: 'Inline inspection (ILI) reports, corrosion mapping software',
    otherKeyDetails: 'ASNT SNT-TC-1A compliance, offshore safety permits, rope access certified',
    customerBenchmarkingSummary: 'High attractiveness - government-backed, steady budget',
    additionalComments: 'Reliable lead, pain point: aging subsea infrastructure, needs MFL specialists',
  },
  {
    customerName: 'Patrick Ochieng',
    companyName: 'Bamburi Cement (Holcim)',
    country: 'Kenya',
    typeOfBusiness: 'Cement Manufacturing',
    riskInvolvedSpecificToNDT: 'Kiln shell cracking, structural weld failures',
    otherKeyInsights: '3 cement plants, 8 kilns, avg age 15 yrs, ~$500K annual maintenance budget',
    keyContactPerson: 'Patrick Ochieng',
    designationRole: 'Plant Maintenance Manager',
    emailAddress: 'p.ochieng@bamburi.lafargeholcim.com',
    phoneWhatsAppNumber: '+254 733 456 789',
    linkedInProfile: 'linkedin.com/in/patrickochieng-bamburi',
    websiteUrl: 'www.bamburi.com',
    typesOfThreats: 'Thermal fatigue in kilns, structural cracking',
    pastIncidents: 'Kiln shell hot spot detected at Athi River plant (2024)',
    othersRisk: 'Asset failure risk (kiln downtime = $200K/day), safety risk for workers',
    decisionMakers: 'Plant Manager, Maintenance Manager, Regional Procurement',
    procurementMethod: 'Preferred vendor list + PO',
    approxBudget: '$200K - $400K',
    typeOfNDTRequired: 'UT, RT, IRT',
    serviceIntensity: 'Shutdown-based (annual major shutdown)',
    preferredContractDuration: 'Monthly (during shutdowns)',
    technologyExpectations: 'Infrared thermography reports, thickness trending',
    otherKeyDetails: 'Confined space entry certification, hot work permits',
    customerBenchmarkingSummary: 'Medium attractiveness - seasonal but repeat business',
    additionalComments: 'Recurring lead, pain point: kiln downtime costs, prefers local service providers',
  },
  {
    customerName: 'Sarah Nakamya',
    companyName: 'Uganda Electricity Generation Co',
    country: 'Uganda',
    typeOfBusiness: 'Hydroelectric Power',
    riskInvolvedSpecificToNDT: 'Penstock weld integrity, turbine runner erosion',
    otherKeyInsights: '4 hydro stations, 12 turbines, avg age 10 yrs, ~$700K annual inspection spend',
    keyContactPerson: 'Sarah Nakamya',
    designationRole: 'Technical Services Director',
    emailAddress: 's.nakamya@uegcl.com',
    phoneWhatsAppNumber: '+256 772 345 890',
    linkedInProfile: 'linkedin.com/in/sarahnakamya-uegcl',
    websiteUrl: 'www.uegcl.com',
    typesOfThreats: 'Cavitation erosion, fatigue in penstocks',
    pastIncidents: 'Penstock weld repair at Nalubaale Dam (2023)',
    othersRisk: 'Environmental risk (dam safety), asset failure risk (national grid impact)',
    decisionMakers: 'Technical Director, Head of Generation, Procurement Unit',
    procurementMethod: 'Public procurement (World Bank-funded projects)',
    approxBudget: '$300K - $600K',
    typeOfNDTRequired: 'UT, RT, OCT',
    serviceIntensity: 'Periodic (dry season shutdowns)',
    preferredContractDuration: 'Yearly',
    technologyExpectations: 'Digital weld maps, asset condition dashboards',
    otherKeyDetails: 'Dam safety certifications, working at height permits',
    customerBenchmarkingSummary: 'High attractiveness - donor-funded, growth potential',
    additionalComments: 'Strong lead, expanding hydro capacity, needs UT weld inspection services',
  },
  {
    customerName: 'Mohamed Hassan',
    companyName: 'Port Sudan Refinery',
    country: 'Sudan',
    typeOfBusiness: 'Oil Refining',
    riskInvolvedSpecificToNDT: 'Pressure vessel corrosion, heat exchanger tube failures',
    otherKeyInsights: '1 refinery (100K bpd), 200+ pressure vessels, avg age 20 yrs, ~$900K inspection budget',
    keyContactPerson: 'Mohamed Hassan',
    designationRole: 'Inspection Manager',
    emailAddress: 'm.hassan@portsudan-refinery.sd',
    phoneWhatsAppNumber: '+249 912 567 890',
    linkedInProfile: 'linkedin.com/in/mohamedhassan-psr',
    websiteUrl: 'www.portsudan-refinery.sd',
    typesOfThreats: 'Under-deposit corrosion, hydrogen-induced cracking',
    pastIncidents: 'Heat exchanger tube leak requiring emergency shutdown (2024)',
    othersRisk: 'High asset failure risk (aging infrastructure), environmental spill risk',
    decisionMakers: 'Inspection Manager, Plant Director, Ministry Procurement',
    procurementMethod: 'Government tender',
    approxBudget: '$400K - $800K',
    typeOfNDTRequired: 'UT, RT, ECT, MFL',
    serviceIntensity: 'Shutdown-based (turnaround every 2 years)',
    preferredContractDuration: 'Monthly (turnaround periods)',
    technologyExpectations: 'Corrosion mapping, RBI-compatible reporting',
    otherKeyDetails: 'API 510/570 certification required, high-security zone access',
    customerBenchmarkingSummary: 'Medium attractiveness - high value but access challenges',
    additionalComments: 'Valuable lead, pain point: aging refinery assets, logistical challenges',
  },
  {
    customerName: 'Jean Rakoto',
    companyName: 'Ambatovy Mining (Sumitomo)',
    country: 'Madagascar',
    typeOfBusiness: 'Nickel & Cobalt Mining',
    riskInvolvedSpecificToNDT: 'Autoclave vessel integrity, slurry pipeline erosion',
    otherKeyInsights: '1 major mine + processing plant, 220km slurry pipeline, ~$1.2M annual NDT budget',
    keyContactPerson: 'Jean Rakoto',
    designationRole: 'Reliability Engineering Lead',
    emailAddress: 'j.rakoto@ambatovy.mg',
    phoneWhatsAppNumber: '+261 34 567 8901',
    linkedInProfile: 'linkedin.com/in/jeanrakoto-ambatovy',
    websiteUrl: 'www.ambatovy.com',
    typesOfThreats: 'Erosion-corrosion in slurry lines, pressure vessel fatigue',
    pastIncidents: 'Slurry pipeline wall thinning detected (2023)',
    othersRisk: 'Environmental risk (rainforest proximity), asset failure risk (remote location)',
    decisionMakers: 'Reliability Lead, Mine General Manager, Corporate Procurement (Japan)',
    procurementMethod: 'Corporate approved vendor list + RFQ',
    approxBudget: '$500K - $900K',
    typeOfNDTRequired: 'UT, RT, Industrial CT',
    serviceIntensity: 'Periodic (quarterly inspections)',
    preferredContractDuration: 'Yearly',
    technologyExpectations: 'Automated UT scanning, erosion trending, asset dashboards',
    otherKeyDetails: 'ISO 17025 accredited lab required, remote site logistics',
    customerBenchmarkingSummary: 'High attractiveness - multinational backing, strong budget',
    additionalComments: 'Premium lead, pain point: remote location needs self-sufficient NDT crews',
  },
  {
    customerName: 'Emmanuel Mugisha',
    companyName: 'Kigali Steel Industries',
    country: 'Rwanda',
    typeOfBusiness: 'Steel Manufacturing',
    riskInvolvedSpecificToNDT: 'Weld quality in structural steel, crane beam fatigue',
    otherKeyInsights: '2 rolling mills, 50+ overhead cranes, growing capacity, ~$200K annual NDT spend',
    keyContactPerson: 'Emmanuel Mugisha',
    designationRole: 'Quality Assurance Manager',
    emailAddress: 'e.mugisha@kigalisteel.rw',
    phoneWhatsAppNumber: '+250 788 234 567',
    linkedInProfile: 'linkedin.com/in/emmanuelmugisha-ksi',
    websiteUrl: 'www.kigalisteel.rw',
    typesOfThreats: 'Weld defects in structural products, crane fatigue cracking',
    pastIncidents: 'Overhead crane beam crack found during routine check (2024)',
    othersRisk: 'Safety risk (crane failure), quality compliance risk (export standards)',
    decisionMakers: 'QA Manager, Plant Director',
    procurementMethod: 'Direct purchase order',
    approxBudget: '$80K - $150K',
    typeOfNDTRequired: 'UT, MT, PT',
    serviceIntensity: 'Periodic (monthly weld inspections)',
    preferredContractDuration: 'Yearly',
    technologyExpectations: 'Digital weld inspection reports, quality dashboards',
    otherKeyDetails: 'ISO 3834 weld quality certification, basic site access',
    customerBenchmarkingSummary: 'Medium attractiveness - growing market, smaller budget',
    additionalComments: 'Growth lead, pain point: needs training + certification support alongside NDT services',
  },
]

interface PrepositionProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

function Preposition({ title, isOpen, onToggle, children }: PrepositionProps) {
  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 rounded-lg transition-colors"
      >
        <span className="text-lg font-semibold text-black">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-2 pb-4 bg-white rounded-b-lg">
          {children}
        </div>
      )}
    </div>
  )
}

interface CustomerIntelligenceDatabaseProps {
  title?: string
  height?: number
}

export default function CustomerIntelligenceDatabase({ title }: CustomerIntelligenceDatabaseProps) {
  const [openPreposition, setOpenPreposition] = useState<number | null>(1)

  const togglePreposition = (num: number) => {
    setOpenPreposition(openPreposition === num ? null : num)
  }

  // Shared: Customer Information columns
  const customerInfoHeaders = (
    <>
      <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[120px]">Customer Name</th>
      <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[140px]">Company Name</th>
      <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[100px]">Country</th>
      <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[130px]">Type of Business</th>
      <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[140px]">Risk Involved Specific to NDT</th>
      <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
        <div>Other Key Insights</div>
        <div className="font-normal text-[10px] text-gray-600">(operating footprint, asset age/criticality, estimated annual)</div>
      </th>
    </>
  )

  // Shared: Contact Details columns
  const contactDetailsHeaders = (
    <>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[130px]">Key Contact Person</th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[130px]">Designation/Role</th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[140px]">Email Address</th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[140px]">Phone/WhatsApp Number</th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[140px]">LinkedIn Profile</th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[120px]">Website URL</th>
    </>
  )

  // Shared: Customer Info + Contact Details data cells
  const renderBaseColumns = (customer: CustomerData) => (
    <>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerName}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.companyName}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.country}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.typeOfBusiness}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.riskInvolvedSpecificToNDT}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.otherKeyInsights}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designationRole}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.emailAddress}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneWhatsAppNumber}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.linkedInProfile}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.websiteUrl}</td>
    </>
  )

  // Proposition 1: Customer Information + Contact Details
  const renderProposition1Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#E8C4A0] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
          </tr>
          <tr>
            {customerInfoHeaders}
            {contactDetailsHeaders}
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {renderBaseColumns(customer)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Proposition 2: Proposition 1 + Threat Exposure & Risk Drivers + Purchasing Behaviour
  const renderProposition2Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#E8C4A0] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={3} className="bg-[#C8E6C9] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Threat Exposure & Risk Drivers
            </th>
            <th colSpan={3} className="bg-[#E1BEE7] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Purchasing Behaviour
            </th>
          </tr>
          <tr>
            {customerInfoHeaders}
            {contactDetailsHeaders}
            {/* Threat Exposure & Risk Drivers */}
            <th className="bg-[#E8F5E9] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">Types of Threats / Failure Drivers</th>
            <th className="bg-[#E8F5E9] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">Past Incidents or Recent Triggers</th>
            <th className="bg-[#E8F5E9] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Others</div>
              <div className="font-normal text-[10px] text-gray-600">(Asset Failure Risk, Safety Risk, Environmental Risk, etc.)</div>
            </th>
            {/* Purchasing Behaviour */}
            <th className="bg-[#F3E5F5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[170px]">
              <div>Decision-makers</div>
              <div className="font-normal text-[10px] text-gray-600">(CSO, CISO, and Others)</div>
            </th>
            <th className="bg-[#F3E5F5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[140px]">Procurement Method</th>
            <th className="bg-[#F3E5F5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[120px]">Approx. Budget</th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {renderBaseColumns(customer)}
              {/* Threat Exposure */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.typesOfThreats}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.pastIncidents}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.othersRisk}</td>
              {/* Purchasing Behaviour */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.decisionMakers}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.procurementMethod}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.approxBudget}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Proposition 3: Proposition 2 + Service Requirements + CMI Insights
  const renderProposition3Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#E8C4A0] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={3} className="bg-[#C8E6C9] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Threat Exposure & Risk Drivers
            </th>
            <th colSpan={3} className="bg-[#E1BEE7] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Purchasing Behaviour
            </th>
            <th colSpan={5} className="bg-[#E8C4A0] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Service Requirements
            </th>
            <th colSpan={2} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              CMI Insights
            </th>
          </tr>
          <tr>
            {customerInfoHeaders}
            {contactDetailsHeaders}
            {/* Threat Exposure & Risk Drivers */}
            <th className="bg-[#E8F5E9] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">Types of Threats / Failure Drivers</th>
            <th className="bg-[#E8F5E9] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">Past Incidents or Recent Triggers</th>
            <th className="bg-[#E8F5E9] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Others</div>
              <div className="font-normal text-[10px] text-gray-600">(Asset Failure Risk, Safety Risk, Environmental Risk, etc.)</div>
            </th>
            {/* Purchasing Behaviour */}
            <th className="bg-[#F3E5F5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[170px]">
              <div>Decision-makers</div>
              <div className="font-normal text-[10px] text-gray-600">(CSO, CISO, and Others)</div>
            </th>
            <th className="bg-[#F3E5F5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[140px]">Procurement Method</th>
            <th className="bg-[#F3E5F5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[120px]">Approx. Budget</th>
            {/* Service Requirements */}
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[140px]">Type of NDT Required</th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Service Intensity</div>
              <div className="font-normal text-[10px] text-gray-600">(Periodic, shutdown-based, etc.)</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[160px]">
              <div>Preferred Contract Duration</div>
              <div className="font-normal text-[10px] text-gray-600">(Daily/Monthly/Yearly)</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Technology Expectations</div>
              <div className="font-normal text-[10px] text-gray-600">(Digital reports, corrosion trending, asset dashboards)</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Other Key Details</div>
              <div className="font-normal text-[10px] text-gray-600">(certifications required, site access rules, safety permit conditions, rope)</div>
            </th>
            {/* CMI Insights */}
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Customer Benchmarking Summary</div>
              <div className="font-normal text-[10px] text-gray-600">(covers: attractiveness, contract)</div>
            </th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Additional Comments / Notes by CMI Team</div>
              <div className="font-normal text-[10px] text-gray-600">(covers: lead priority, pain points,)</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {renderBaseColumns(customer)}
              {/* Threat Exposure */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.typesOfThreats}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.pastIncidents}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.othersRisk}</td>
              {/* Purchasing Behaviour */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.decisionMakers}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.procurementMethod}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.approxBudget}</td>
              {/* Service Requirements */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.typeOfNDTRequired}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.serviceIntensity}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.preferredContractDuration}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.technologyExpectations}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.otherKeyDetails}</td>
              {/* CMI Insights */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerBenchmarkingSummary}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.additionalComments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-black mb-6">{title || 'Customer Intelligence Database'}</h2>

      <Preposition
        title="Proposition 1 - Basic"
        isOpen={openPreposition === 1}
        onToggle={() => togglePreposition(1)}
      >
        {renderProposition1Table()}
      </Preposition>

      <Preposition
        title="Proposition 2 - Advanced"
        isOpen={openPreposition === 2}
        onToggle={() => togglePreposition(2)}
      >
        {renderProposition2Table()}
      </Preposition>

      <Preposition
        title="Proposition 3 - Premium"
        isOpen={openPreposition === 3}
        onToggle={() => togglePreposition(3)}
      >
        {renderProposition3Table()}
      </Preposition>
    </div>
  )
}
