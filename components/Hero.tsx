export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
  
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 text-sm font-medium text-blue-300">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
          </svg>
          Trusted Local Real Estate Experts
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Your Neighborhood Specialists in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Finding Home
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
          Navigate the local real estate market with confidence. Our veteran agents leverage decades of neighborhood-specific insights to match you with properties that fit your lifestyle and investment goals.
        </p>
        
        <div className="grid sm:grid-cols-3 gap-6 pt-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
              </svg>
              <span className="font-semibold text-white">Local Mastery</span>
            </div>
            <p className="text-sm text-slate-400">Block-by-block market analysis and pricing trends across every neighborhood</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              <span className="font-semibold text-white">Dedicated Agents</span>
            </div>
            <p className="text-sm text-slate-400">One-on-one guidance from licensed professionals averaging 12+ years experience</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
              <span className="font-semibold text-white">Fresh Listings</span>
            </div>
            <p className="text-sm text-slate-400">Database refreshed every 24 hours with new properties and price changes</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105">
            Browse Available Properties
          </button>
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg border border-white/20 transition-all duration-200">
            Schedule Agent Consultation
          </button>
        </div>
        
        <div className="flex items-center gap-8 pt-6 border-t border-slate-700">
          <div>
            <div className="text-3xl font-bold text-white">2,847</div>
            <div className="text-sm text-slate-400">Active Listings</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">1,200+</div>
            <div className="text-sm text-slate-400">Homes Sold This Year</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">4.9/5</div>
            <div className="text-sm text-slate-400">Client Satisfaction</div>
          </div>
        </div>
      </div>
      
      <div className="relative lg:h-[600px] h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-600/20 rounded-2xl transform rotate-3"></div>
        <div className="absolute inset-0 bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80" 
            alt="Modern home exterior showcasing Premier Realty Group property listing"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent p-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 max-w-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">NEW TODAY</span>
                <span className="text-xs text-slate-500">Updated 2 hours ago</span>
              </div>
              <div className="text-2xl font-bold text-slate-900">$724,900</div>
              <div className="text-sm text-slate-600 mt-1">4 bed • 3 bath • 2,340 sq ft</div>
              <div className="text-xs text-slate-500 mt-2">Maple Grove District</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}