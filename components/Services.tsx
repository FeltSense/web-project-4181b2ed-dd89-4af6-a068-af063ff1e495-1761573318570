export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Why Choose Premier Realty Group
      </h2>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto">
        Experience the difference with our comprehensive real estate services designed to make your property journey seamless and successful
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-slate-100">
        <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Extensive Local Market Knowledge
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Our agents possess deep insights into neighborhood trends, school districts, zoning regulations, and property values across every community we serve. We leverage decades of combined local expertise to guide you toward informed decisions and optimal investment opportunities.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-slate-100">
        <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Personalized Service from Experienced Agents
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Each client is paired with a dedicated agent who takes time to understand your unique goals, budget, and lifestyle preferences. Our team averages 12+ years of real estate experience and provides white-glove service throughout every stage of your buying or selling journey.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-slate-100">
        <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Comprehensive Property Listings Updated Daily
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Access our extensive database featuring thousands of residential and commercial properties with fresh listings added every morning at 6 AM. Our direct MLS integration ensures you see new opportunities within hours of hitting the market, giving you a competitive edge.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-slate-100">
        <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Advanced Search Tools for Your Perfect Property
        </h3>
        <p className="text-slate-600 leading-relaxed">
          Filter by 50+ criteria including price range, square footage, lot size, architectural style, school ratings, walkability scores, and commute times. Save custom searches, receive instant email alerts for matching properties, and use our interactive map to explore neighborhoods block by block.
        </p>
      </div>
    </div>

    <div className="mt-16 text-center">
      <a href="#contact" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
        Get Started Today
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>
    </div>
  </div>
</section>
  );
}