export default function Testimonials() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Premier Realty Group.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-slate-700 mb-6 italic leading-relaxed">
          "Working with Premier Realty Group was an absolute game-changer. They found us our dream home in just three weeks and negotiated a price $15,000 below asking. Their market knowledge and attention to detail made the entire process stress-free."
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
            SM
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Sarah Mitchell</h4>
            <p className="text-slate-500 text-sm">First-Time Homebuyer</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-slate-700 mb-6 italic leading-relaxed">
          "I've bought and sold multiple properties over the years, but Premier Realty Group stands out. They sold my home in 5 days with multiple offers above asking price. Their marketing strategy and professional photography were exceptional."
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
            JC
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">James Chen</h4>
            <p className="text-slate-500 text-sm">Property Investor</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-slate-700 mb-6 italic leading-relaxed">
          "Relocating across the country was daunting, but Premier Realty Group made it seamless. They provided virtual tours, handled all the paperwork remotely, and even recommended trusted local services. True professionals who go above and beyond."
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
            ER
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Emily Rodriguez</h4>
            <p className="text-slate-500 text-sm">Corporate Relocation Client</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-3 lg:max-w-2xl lg:mx-auto">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-slate-700 mb-6 italic leading-relaxed">
          "After our previous agent couldn't sell our property for 6 months, we switched to Premier Realty Group. They repositioned the listing with stunning photos and strategic pricing, resulting in a sale within 3 weeks at our desired price. Their expertise and communication throughout the process were outstanding."
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
            MP
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Michael & Patricia Thompson</h4>
            <p className="text-slate-500 text-sm">Downsizing Homeowners</p>
          </div>
        </div>
      </div>
    </div>

    <div className="text-center mt-12">
      <p className="text-slate-600 mb-6">Ready to experience exceptional real estate service?</p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
        Start Your Journey Today
      </button>
    </div>
  </div>
</section>
  );
}