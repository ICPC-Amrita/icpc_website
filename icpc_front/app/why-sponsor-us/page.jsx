import React from 'react';
import { CheckCircle } from 'lucide-react';


const plans = [
  {
    label: 'Supporter',
    price: '$500',
    note: 'per month',
    tax: 'plus tax',
    description: 'For companies who want to support Tailwind while getting some extra exposure.',
    button: 'Become a supporter',
    features: [
      'Logo on the sponsors page — your logo proudly displayed on the sponsors page.',
      'Insiders team access — all the perks of the Insiders tier for everyone in your team.',
      'Support Tailwind CSS — sleep easy knowing that you’re supporting the development of Tailwind CSS.',
    ],
  },
  {
    label: 'Ambassador',
    price: '$2,500',
    note: 'per month',
    tax: 'plus tax',
    badge: '22 spots left',
    description: 'For companies looking to boost visibility and credibility with the Tailwind community.',
    button: 'Become an ambassador',
    features: [
      'Logo on the Tailwind homepage — your logo displayed in a rotating spot on the homepage.',
      'Logo on the sponsors page — your logo proudly displayed on the sponsors page.',
      'Website in the showcase — a spot on the showcase page for your company’s website.',
      'Insiders team access — all the perks of the Insiders tier for everyone in your team.',
      'Tailwind Plus team access — access to the UI Kit, templates, and 500+ components for your team.',
      'Support Tailwind CSS — sleep easy knowing that you’re supporting the development of Tailwind CSS.',
    ],
  },
  {
    label: 'Partner',
    price: '$5,000',
    note: 'per month',
    tax: 'plus tax',
    badge: '4 spots left',
    description: 'For companies who want increased exposure and easy access to the Tailwind team.',
    button: 'Become a partner',
    features: [
      'Permanent logo on the Tailwind homepage — your logo permanently displayed on the homepage.',
      'Priority logo placement on sponsors page — your logo will appear at the top of the sponsors page.',
      'Featured spot in the showcase — a featured spot on the showcase page for your website.',
      'Expedited bug fixes and issue resolution — we’ll address issues you run into on an expedited schedule.',
      'Insiders team access — all the perks of the Insiders tier for everyone in your team.',
      'Tailwind Plus team access — access to the UI Kit, templates, and 500+ components for your team.',
      'Support Tailwind CSS — sleep easy knowing that you’re supporting the development of Tailwind CSS.',
    ],
  },
];
export default function PartnerSupport() {
    
  return (
    <>
    <section className="bg-white px-6 md:px-12 lg:px-24 py-16 text-gray-900">
      <h2 className="text-pink-500 uppercase tracking-wide text-sm font-medium mb-2">Why Sponsor Us</h2>
      <h1 className="text-4xl font-bold leading-tight mb-4">Why Sponsor ICPC Amritapuri 2025?</h1>
      <p className="text-lg text-gray-700 max-w-3xl mb-16">
       Sponsoring ICPC Amritapuri connects your brand with India’s top student programmers and builds deep visibility among future leaders in tech
      </p>

      <h3 className="text-2xl font-semibold mb-6">Key Benefits:</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800 text-[16px] leading-relaxed">
        {/* Box 1 */}
        <div className='border border-gray-700  transition-shadow hover:shadow-lg p-6'>
          <p><strong>Access to Top Talent</strong> —  Engage early with exceptional programmers.</p>
        </div>

        {/* Box 2 */}
        <div className='border border-gray-700  transition-shadow hover:shadow-lg p-6'>
          <p><strong>Unmatched Visibility</strong> — Your brand is showcased to 50,000+ tech enthusiasts.</p>
        </div>

        {/* Box 3 */}
        <div className='border border-gray-700  transition-shadow hover:shadow-lg p-6'>
          <p><strong>Recruitment Edge</strong> — Direct pipeline to India’s most elite coding talent.</p>
        </div>

        {/* Box 4 */}
        <div className='border border-gray-700  transition-shadow hover:shadow-lg p-6'>
          <p><strong>Prestige & Association</strong> —  Align with innovation, skill, and excellence.</p>
        </div>

        {/* Box 5 */}
        <div className='border border-gray-700  transition-shadow hover:shadow-lg p-6'>
          <p><strong>Onsite Branding</strong> — Presence in banners, booths, T-shirts, goodies, and media.</p>
        </div>

        {/* Box 6 */}
        {/* <div className='border border-gray-700  transition-shadow hover:shadow-lg p-6'>
          <p><strong>Support Tailwind CSS</strong> — you’ll be helping contribute to the sustainability of the framework, giving you peace of mind that a core technology in your stack will continue to function smoothly.</p>
        </div> */}
      </div>
    </section>
    {/* <section className="bg-white py-20 px-4 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col justify-between"
          >
            <div>
              <div className="uppercase text-sm font-semibold text-gray-500 tracking-wide mb-4">
                {plan.label}
              </div>

              <div className="flex items-end gap-2 mb-1">
                <h2 className="text-4xl font-bold">{plan.price}</h2>
                <div className="text-gray-500 text-sm">{plan.note}</div>
              </div>

              <div className="text-sm text-gray-400 mb-4">{plan.tax}</div>

              {plan.badge && (
                <div className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full mb-4">
                  {plan.badge}
                </div>
              )}

              <p className="text-gray-700 text-sm mb-6">{plan.description}</p>

              <ul className="space-y-4 text-sm text-gray-800">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-sky-400 mt-1" />
                    <span dangerouslySetInnerHTML={{ __html: feature }} />
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-8 bg-black text-white rounded-full py-2 text-sm font-medium hover:bg-gray-900 transition">
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section> */}
    </>
  );
}
